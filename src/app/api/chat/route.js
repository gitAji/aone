import { NextResponse } from 'next/server';

// Proxies the chat widget to the n8n support-agent webhook (local Ollama +
// knowledge base, see n8n workflow "Aone Support Chat Agent"). Kept server-side
// so the webhook URL never ships to the client, and so we control the timeout
// ourselves: local LLM inference can legitimately take well over a minute, but
// if the webhook is unreachable at all (laptop/n8n/ngrok off), we want to fail
// fast-ish rather than hang the browser indefinitely -- the widget falls back
// to the name/email capture form on any non-OK response from this route.
const N8N_CHAT_WEBHOOK_URL = process.env.N8N_CHAT_WEBHOOK_URL;
const REQUEST_TIMEOUT_MS = 120_000;

export async function POST(request) {
  if (!N8N_CHAT_WEBHOOK_URL) {
    console.error('N8N_CHAT_WEBHOOK_URL is not configured.');
    return NextResponse.json({ error: 'Chat is not configured.' }, { status: 503 });
  }

  let message, sessionId;
  try {
    ({ message, sessionId } = await request.json());
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  if (!message || typeof message !== 'string' || !message.trim()) {
    return NextResponse.json({ error: 'Message is required.' }, { status: 400 });
  }
  if (!sessionId || typeof sessionId !== 'string') {
    return NextResponse.json({ error: 'Session ID is required.' }, { status: 400 });
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    const res = await fetch(N8N_CHAT_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: message.trim(), sessionId }),
      signal: controller.signal,
    });

    if (!res.ok) {
      console.error('n8n chat webhook returned non-OK status:', res.status);
      return NextResponse.json({ error: 'Chat agent unavailable.' }, { status: 503 });
    }

    const data = await res.json();
    if (!data?.reply) {
      console.error('n8n chat webhook returned no reply:', data);
      return NextResponse.json({ error: 'Chat agent unavailable.' }, { status: 503 });
    }

    return NextResponse.json({ reply: data.reply });
  } catch (err) {
    // Covers: laptop/n8n/ngrok offline, timeout, Ollama error propagated as a
    // non-OK webhook response -- any of these mean the widget should fall
    // back to the lead-capture form instead of waiting forever.
    console.error('Chat webhook request failed:', err.message);
    return NextResponse.json({ error: 'Chat agent unavailable.' }, { status: 503 });
  } finally {
    clearTimeout(timeout);
  }
}
