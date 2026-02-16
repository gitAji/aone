'use client';
import React from 'react';
import Script from 'next/script';

const VoiceflowChat = () => {
    return (
        <Script
            id="voiceflow-chat"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
                __html: `
          (function(d, t) {
              var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
              v.onload = function() {
                window.voiceflow.chat.load({
                  verify: { projectID: '699382016bc24417c151dcc6' },
                  url: 'https://general-runtime.voiceflow.com',
                  versionID: 'production',
                  voice: {
                    url: "https://runtime-api.voiceflow.com"
                  }
                });
              }
              v.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs"; v.type = "text/javascript"; s.parentNode.insertBefore(v, s);
          })(document, 'script');
        `,
            }}
        />
    );
};

export default VoiceflowChat;
