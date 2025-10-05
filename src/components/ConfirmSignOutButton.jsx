"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { useClerk } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import clsx from "clsx";

/**
 * ConfirmSignOutButton
 * A trigger button that opens a confirmation modal. On confirm, it calls Clerk signOut
 * and redirects to /sign-in. The modal applies a full-screen blurred backdrop and
 * locks body scroll while open.
 */
export default function ConfirmSignOutButton({
  className,
  children = "Logout",
  confirmMessage = "Are you sure you want to sign out?",
  redirectUrl = "/sign-in",
}) {
  const { signOut } = useClerk();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Track mount to safely use document/body in SSR environments
  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent body scroll while modal is open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const absoluteRedirect = useMemo(() => {
    try {
      const url = new URL(redirectUrl, window.location.origin);
      return url.toString();
    } catch {
      return redirectUrl;
    }
  }, [redirectUrl]);

  const handleConfirm = useCallback(async () => {
    setLoading(true);
    try {
      // Clerk will navigate if redirectUrl provided; also push as fallback
      await signOut({ redirectUrl: absoluteRedirect });
      router.push(redirectUrl);
    } catch (e) {
      // Fallback navigation even if signOut throws due to env issues
      router.push(redirectUrl);
    } finally {
      setLoading(false);
      setOpen(false);
    }
  }, [absoluteRedirect, redirectUrl, router, signOut]);

  const modal = (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-xl"
      style={{ zIndex: 2147483647 }}
      aria-modal="true"
      role="dialog"
      onClick={() => setOpen(false)}
    >
      <div
        className="mx-4 w-full max-w-md rounded-xl bg-white p-6 shadow-2xl ring-1 ring-black/10 dark:bg-gray-900 dark:text-gray-100"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-lg font-semibold mb-2">Confirm sign out</h2>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">{confirmMessage}</p>
        <div className="flex justify-end gap-3">
          <button
            type="button"
            className="rounded-md px-4 py-2 bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
            onClick={() => setOpen(false)}
            disabled={loading}
          >
            Cancel
          </button>
          <button
            type="button"
            className={clsx(
              "rounded-md px-4 py-2 bg-red-600 text-white",
              loading ? "opacity-70 cursor-not-allowed" : "hover:bg-red-700"
            )}
            onClick={handleConfirm}
            disabled={loading}
          >
            {loading ? "Signing out..." : "Sign out"}
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={clsx(
          "rounded-lg px-3 py-2 bg-red-600 text-white hover:bg-red-700 active:scale-[.98] transition",
          className
        )}
      >
        {children}
      </button>

      {open && mounted && createPortal(modal, document.body)}
    </>
  );
}
