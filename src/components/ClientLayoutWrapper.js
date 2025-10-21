
'use client';
import React from 'react';

import Header from './Header'; // Import the Header component


const ClientLayoutWrapper = ({ children }) => {
  return (
    <>
      <Header /> {/* Render the Header component here */}
      {children}
      
    </>
  );
};

export default ClientLayoutWrapper;
