
'use client';
import dynamic from 'next/dynamic';
import React from 'react';



import TawkToMessenger from './TawkToMessenger';

const ClientLayoutWrapper = ({ children }) => {
  return (
    <>
      {children}
      <TawkToMessenger />
    </>
  );
};

export default ClientLayoutWrapper;
