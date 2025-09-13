
'use client';
import React from 'react';
import Script from 'next/script';

const DialogflowMessenger = () => {
  return (
    <>
      <Script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1" strategy="afterInteractive" />
      <df-messenger
        intent="WELCOME"
        chat-title="Aone"
        agent-id="3d9017d8-b290-4ff8-bbf2-74f79d17ab59"
        language-code="en"
      ></df-messenger>
    </>
  );
};

export default DialogflowMessenger;
