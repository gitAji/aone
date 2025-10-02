
'use client';
import React from 'react';

import Header from './Header'; // Import the Header component
import TawkToMessenger from './TawkToMessenger';

const ClientLayoutWrapper = ({ children }) => {
  return (
    <>
      <Header /> {/* Render the Header component here */}
      {children}
      <TawkToMessenger />
    </>
  );
};

export default ClientLayoutWrapper;
