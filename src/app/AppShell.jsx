"use client";

import React from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Header from "./header";
import Footer from "@/components/footer";

export default function AppShell({ children }) {
  const pathname = usePathname();
  const isAuth = pathname?.startsWith("/sign-in") || pathname?.startsWith("/sign-up");

  return (
    <>
      {!isAuth && <Header />}
      <main
        className={clsx(
          isAuth
            ? "pt-0 m-0 min-h-[100svh] bg-gray-950 dark:bg-gray-950 overflow-hidden"
            : "pt-20 min-h-[100svh] bg-gray-900 dark:bg-gray-950 overflow-hidden",
          "mb-0"
        )}
      >
        {children}
      </main>
  {!isAuth && <Footer />}
    </>
  );
}
