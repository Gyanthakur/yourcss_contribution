"use client";

import React, { useEffect, useState } from "react";
import { Heart } from "phosphor-react";

const STORAGE_KEY = "favorites";

// item shape: { id: string, title: string, htmlFile: string, cssFile: string }
export default function FavoriteButton({ item, className = "", onToggle }) {
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    try {
      const raw = typeof window !== "undefined" ? localStorage.getItem(STORAGE_KEY) : null;
      if (!raw) return;
      const list = JSON.parse(raw);
      setIsFav(Array.isArray(list) && list.some((f) => f.id === item.id));
    } catch (_) {
      // ignore parse errors
    }
  }, [item?.id]);

  const toggleFavorite = () => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const list = raw ? (JSON.parse(raw) || []) : [];
      let next = Array.isArray(list) ? list : [];
      let nextState = !isFav;
      if (isFav) {
        next = next.filter((f) => f.id !== item.id);
      } else {
        // avoid duplicates; store the entire item so additional fields like 'type' persist
        if (!next.some((f) => f.id === item.id)) {
          next = [...next, { ...item }];
        }
      }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      setIsFav(nextState);
      onToggle && onToggle(nextState);
    } catch (e) {
      console.error("Failed to toggle favorite", e);
    }
  };

  return (
    <button
      type="button"
      aria-label={isFav ? "Remove from favorites" : "Save to favorites"}
      onClick={(e) => {
        e.stopPropagation();
        toggleFavorite();
      }}
      className={
        "flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors duration-200 " +
        className
      }
    >
      {isFav ? (
        <Heart size={20} weight="fill" color="#ef4444" />
      ) : (
        <Heart size={20} className="text-gray-600 dark:text-gray-300" />
      )}
    </button>
  );
}
