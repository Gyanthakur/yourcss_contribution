"use client";

import { useTheme } from "@/contexts/ThemeContext";

const ThemeToggle = ({ className = "" }) => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`text-2xl focus:outline-none hover:scale-110 transition-all duration-200 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 ${className}`}
      aria-label="Toggle light/dark mode"
      title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDarkMode ? "🌞" : "🌙"}
    </button>
  );
};

export default ThemeToggle;
