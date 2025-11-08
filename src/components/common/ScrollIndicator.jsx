import React from "react";

export default function ScrollIndicator() {
  return (
    <div className="fixed top-0 left-0 w-full h-1 z-50 bg-gray-200 dark:bg-gray-700">
      <div className="h-full bg-pink-500 w-0" style={{ width: '0%' }}></div>
    </div>
  );
}