
'use client';
import React from 'react';
import DialogflowMessenger from '@/components/DialogflowMessenger';

const ChatTestPage = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Chat Test Page</h1>
      <p>This page is for testing the Dialogflow chat widget.</p>
      <DialogflowMessenger isChatVisible={true} />
    </div>
  );
};

export default ChatTestPage;
