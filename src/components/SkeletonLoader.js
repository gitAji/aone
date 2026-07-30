
import React from 'react';

const SkeletonLoader = () => {
  return (
    <div className="animate-pulse">
      <div className="h-8 bg-gray-300 rounded-md w-2/3 mb-4"></div>
      <div className="space-y-4">
        <div className="h-4 bg-gray-300 rounded-md w-full"></div>
        <div className="h-4 bg-gray-300 rounded-md w-full"></div>
        <div className="h-4 bg-gray-300 rounded-md w-5/6"></div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
