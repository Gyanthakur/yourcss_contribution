"use client";

import React, { useEffect } from "react";

function AuthPageWrapper({ children }) {
  useEffect(() => {
    // Lock body scroll on auth pages
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Force dark mode while on auth pages, but restore the prior state after
    const root = document.documentElement;
    const hadDark = root.classList.contains("dark");
    if (!hadDark) {
      root.classList.add("dark");
    }

    return () => {
      document.body.style.overflow = prevOverflow;
      if (!hadDark) {
        root.classList.remove("dark");
      }
    };
  }, []);

  return (
    <div className="min-h-[100svh] w-full bg-gray-950 text-gray-100 dark:bg-gray-950 flex items-center justify-center overflow-hidden">
      <div className="w-full max-w-lg px-4">
        {children}
      </div>
    </div>
  );
}

export default AuthPageWrapper;
