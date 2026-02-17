'use client';
import React from 'react';
import Script from 'next/script';

const VoiceflowChat = () => {
  return (
    <Script
      id="voiceflow-chat"
      src="https://cdn.voiceflow.com/widget-next/bundle.mjs"
      type="text/javascript"
      strategy="afterInteractive"
      onLoad={() => {
        window.voiceflow.chat.load({
          verify: { projectID: '699382016bc24417c151dcc6' },
          url: 'https://general-runtime.voiceflow.com',
          versionID: 'production',
          voice: {
            url: "https://runtime-api.voiceflow.com"
          }
        });
      }}
    />
  );
};

export default VoiceflowChat;
