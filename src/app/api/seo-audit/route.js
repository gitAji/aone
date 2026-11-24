import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { sendAdminNotification, sendClientEmail } from '@/lib/mail';
import { runOnPageAudit, runPageSpeedAudit, computeOverallScore, buildReportEmailHtml } from '@/lib/seoAudit';

// Netlify/Vercel both honor this where supported -- the scan can take up to
// ~20s (on-page checks + a best-effort PageSpeed Insights call), longer than
// a typical default function timeout.
export const maxDuration = 60;

export async function POST(request) {
  try {
    const { url, email } = await request.json();

    if (!url || !email) {
      return NextResponse.json({ error: 'Website URL and email are required.' }, { status: 400 });
    }

    let onPageChecks;
    try {
      onPageChecks = await runOnPageAudit(url);
    } catch (err) {
      return NextResponse.json({ error: err.message || 'Could not scan that website.' }, { status: 422 });
    }

    // Best-effort -- never lets a slow/unavailable PageSpeed Insights call
    // fail the whole audit, since on-page checks alone are still a useful
    // report on their own.
    const performance = await runPageSpeedAudit(url);
    const overallScore = computeOverallScore(onPageChecks);

    const report = {
      url,
      email,
      overallScore,
      onPageChecks,
      performance,
      scannedAt: new Date().toISOString(),
    };

    // Each awaited individually, each wrapped in its own try/catch -- a
    // failure in any one (Firestore rules not deployed, bad SMTP creds,
    // etc.) must never crash the response the visitor sees, but it also
    // must not be a true fire-and-forget: on a serverless platform the
    // function's execution context can be torn down right after the
    // response is sent, killing an un-awaited network call before it
    // completes. Awaiting (with try/catch) is what every other form route
    // in this app does for the same reason.
    try {
      await addDoc(collection(db, 'seo_audit_requests'), {
        url,
        email,
        status: 'completed',
        overallScore,
        report,
        created_at: serverTimestamp(),
      });
    } catch (err) {
      console.error('Failed to save SEO audit report (check Firestore rules are deployed for seo_audit_requests):', err);
    }

    try {
      await sendClientEmail({
        to: email,
        subject: `Your Free SEO & GEO Audit Report for ${url}`,
        html: buildReportEmailHtml(report),
      });
    } catch (err) {
      console.error('Failed to email SEO audit report:', err);
    }

    try {
      await sendAdminNotification({
        subject: `SEO Audit completed: ${url}`,
        text: `A free SEO audit completed for ${url} (requested by ${email}). Overall score: ${overallScore ?? 'N/A'}.`,
      });
    } catch (err) {
      console.error('Failed to notify admin:', err);
    }

    return NextResponse.json({ message: 'Audit complete.', report }, { status: 200 });
  } catch (error) {
    console.error('Error processing SEO audit request:', error);
    return NextResponse.json({ error: 'An unexpected error occurred while scanning your website.' }, { status: 500 });
  }
}
