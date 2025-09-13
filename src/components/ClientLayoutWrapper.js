
'use client';
import dynamic from 'next/dynamic';
import React from 'react';

const DynamicDialogflowMessenger = dynamic(
  () => import('@/components/DialogflowMessenger'),
  { ssr: false }
);

const ClientLayoutWrapper = ({ children }) => {
  return (
    <>
      {children}
      <DynamicDialogflowMessenger isChatVisible={true} />
    </>
  );
};

export default ClientLayoutWrapper;
