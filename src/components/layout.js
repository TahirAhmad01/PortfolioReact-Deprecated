import React from "react";
import Navbar from "./nav";

export default function Layout({ children }) {
  return (
    <div className="relative dark:text-white bg-gray-50 dark:bg-[#111827] transition-all">
      <Navbar />
      {children}
    </div>
  );
}
