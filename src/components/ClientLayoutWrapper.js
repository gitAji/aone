
'use client';
import React from 'react';

import Header from './Header'; // Import the Header component
import ScrollProgress from './ScrollProgress';
const ClientLayoutWrapper = ({ children }) => {
  return (
    <>
      <ScrollProgress />
      <Header /> {/* Render the Header component here */}
      {children}
    </>
  );
};

export default ClientLayoutWrapper;
