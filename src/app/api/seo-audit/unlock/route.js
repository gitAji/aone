import { NextResponse } from 'next/server';
import { sendAdminNotification, sendClientEmail } from '@/lib/mail';
import { buildReportEmailHtml } from '@/lib/seoAudit';

// The visitor already has the full report client-side (from /api/seo-audit's
// response) -- this route doesn't re-scan anything. Its only job is to (a)
// email the detailed, fix-by-fix version of the report, and (b) flag this
// as a hotter lead to the admin, since clicking "unlock" is a stronger
// intent signal than just completing the free scan.
export async function POST(request) {
  try {
    const { email, report } = await request.json();

    if (!email || !report?.url || !Array.isArray(report?.onPageChecks)) {
      return NextResponse.json({ error: 'A valid report and email are required.' }, { status: 400 });
    }

    // Awaited (not fire-and-forget) and individually try/caught -- on a
    // serverless platform an un-awaited call can get killed when the
    // function's execution context tears down right after the response is
    // sent, before the network request to the mail server completes. The
    // frontend already shows an "Unlocking..." state while this is in
    // flight, so awaiting here doesn't cost any perceived responsiveness.
    try {
      await sendClientEmail({
        to: email,
        subject: `Your Full SEO Action Plan for ${report.url}`,
        html: buildReportEmailHtml(report, { tier: 'detailed' }),
      });
    } catch (err) {
      console.error('Failed to email detailed SEO action plan:', err);
    }

    try {
      await sendAdminNotification({
        subject: `Hot lead: requested full action plan for ${report.url}`,
        text: `${email} unlocked the full fix-by-fix action plan for ${report.url} (overall score: ${report.overallScore ?? 'N/A'}). This is a stronger-intent lead than a plain scan -- worth a follow-up.`,
      });
    } catch (err) {
      console.error('Failed to notify admin of SEO audit unlock:', err);
    }

    return NextResponse.json({ message: 'Detailed report sent.' }, { status: 200 });
  } catch (error) {
    console.error('Error processing SEO audit unlock request:', error);
    return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 });
  }
}
