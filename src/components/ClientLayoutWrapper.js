
'use client';
import React from 'react';

import Header from './Header'; // Import the Header component
import AnnouncementBar from './AnnouncementBar';
import ScrollProgress from './ScrollProgress';
const ClientLayoutWrapper = ({ children }) => {
  return (
    <>
      <ScrollProgress />
      <AnnouncementBar />
      <Header /> {/* Render the Header component here */}
      {children}
    </>
  );
};

export default ClientLayoutWrapper;
