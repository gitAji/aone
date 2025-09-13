
'use client';
import React from 'react';
import Script from 'next/script';

const DialogflowMessenger = ({ isChatVisible }) => {
  return (
    <>
      {isChatVisible && (
        <>
          <Script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1" strategy="afterInteractive" />
          <df-messenger
            chat-title="Aone"
            agent-id="3d9017d8-b290-4ff8-bbf2-74f79d17ab59"
            language-code="en"
            chat-icon="/images/chat-icon.svg"
            css-variables="--df-messenger-chat-background:#EF4444;--df-messenger-button-titlebar-background-color:#EF4444;--df-messenger-font-color:#FFFFFF;"
          ></df-messenger>
        </>
      )}
    </>
  );
};

export default DialogflowMessenger;
