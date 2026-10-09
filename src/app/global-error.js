'use client';

import { useEffect } from 'react';

// Root-level error boundary -- catches errors thrown in layout.js itself,
// which error.js cannot (error.js only covers errors below the root
// layout). Next.js requires this file to render its own <html>/<body>
// since it replaces the entire root layout when it fires.
export default function GlobalError({ error, reset }) {
  useEffect(() => {
    console.error('Captured Root Layout Error:', error);
  }, [error]);

  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'system-ui, -apple-system, sans-serif' }}>
        <main
          style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
            background: '#020617',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              maxWidth: '480px',
              width: '100%',
              padding: '48px 32px',
              background: '#0f172a',
              borderRadius: '2.5rem',
              border: '1px solid #1e293b',
            }}
          >
            <div
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '9999px',
                background: 'rgba(244, 63, 94, 0.1)',
                color: '#f43f5e',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 32px',
                fontSize: '36px',
              }}
            >
              !
            </div>
            <h1
              style={{
                fontSize: '28px',
                fontWeight: 900,
                color: '#ffffff',
                textTransform: 'uppercase',
                letterSpacing: '-0.02em',
                marginBottom: '16px',
              }}
            >
              Something went seriously wrong
            </h1>
            <p style={{ color: '#94a3b8', marginBottom: '32px', fontSize: '14px', lineHeight: 1.6 }}>
              The application failed to load. Our team has been notified -- please try reloading the page.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                onClick={() => reset()}
                style={{
                  flex: '1 1 auto',
                  padding: '16px 24px',
                  background: '#ffffff',
                  color: '#0f172a',
                  borderRadius: '12px',
                  border: 'none',
                  fontWeight: 900,
                  fontSize: '12px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  cursor: 'pointer',
                }}
              >
                Try Again
              </button>
              <a
                href="/"
                style={{
                  flex: '1 1 auto',
                  padding: '16px 24px',
                  background: '#1e293b',
                  color: '#ffffff',
                  borderRadius: '12px',
                  fontWeight: 900,
                  fontSize: '12px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  textDecoration: 'none',
                  display: 'inline-block',
                }}
              >
                Back to Home
              </a>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
