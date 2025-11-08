import React from "react";

export default function Footer({ darkMode }) {
  return (
    <footer className={`border-t text-center py-6 ${
      darkMode ? "border-gray-700 text-gray-400" : "border-gray-300 text-gray-600"
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        © {new Date().getFullYear()} Taelly. All Rights Reserved.
      </div>
    </footer>
  );
}