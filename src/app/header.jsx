"use client";

import { SignedOut, SignedIn, SignInButton, UserButton } from "@clerk/nextjs";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Logger from "@/components/Logger";
import { usePathname } from "next/navigation";
import ConfirmSignOutButton from "@/components/ConfirmSignOutButton";
import { SignOut as SignOutIcon } from "phosphor-react";

const Header = () => {
	const pathname = usePathname();
	const hideHeader = pathname?.startsWith("/sign-in") || pathname?.startsWith("/sign-up");
	const hasClerk = !!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
	const [menuOpen, setMenuOpen] = useState(false);
	const [isDarkMode, setIsDarkMode] = useState(false);

	// Load theme from local storage or default to system preference
	useEffect(() => {
		const theme = localStorage.getItem("theme");
		if (
			theme === "dark" ||
			(!theme && window.matchMedia("(prefers-color-scheme: dark)").matches)
		) {
			setIsDarkMode(true);
			document.documentElement.classList.add("dark");
		} else {
			setIsDarkMode(false);
			document.documentElement.classList.remove("dark");
		}
	}, []);

	// Toggle theme and save preference to local storage
	const toggleTheme = () => {
		if (isDarkMode) {
			document.documentElement.classList.remove("dark");
			localStorage.setItem("theme", "light");
		} else {
			document.documentElement.classList.add("dark");
			localStorage.setItem("theme", "dark");
		}
		setIsDarkMode(!isDarkMode);
	};

	if (hideHeader) return null;

	return (
		<>
			<header className="fixed top-0 left-0 w-full bg-blue-900 dark:bg-gray-900 text-white shadow-lg z-30 ">
				<nav className="flex justify-between items-center px-4 py-3">
					{/* Logo on the left */}
					<a href="/" className="flex-grow flex items-center">
						<Image
							src="/logo.png"
							alt="Website logo"
							width={60}
							height={40}
							className="border-2 border-black dark:border-white hover:border-white rounded-lg shadow-xl hover:bg-black"
						/>
					</a>

					{/* Right-aligned items */}
					<div className="flex items-center space-x-6">
						{/* Desktop Menu */}
						<div className="hidden md:flex space-x-8 text-lg mt-3">
							{hasClerk ? (
								<>
									<SignedOut>
										<SignInButton />
									</SignedOut>
									<SignedIn>
										<a href="/" className="hover:text-yellow-400 transition">Home</a>
										<a href="/about" className="hover:text-yellow-400 transition">About</a>
										<a href="/services" className="hover:text-yellow-400 transition">Services</a>
										<a href="/contact" className="hover:text-yellow-400 transition">Contact</a>
										<Logger/>
										<UserButton afterSignOutUrl="/sign-in" />
										<ConfirmSignOutButton className="inline-flex items-center gap-2 px-3 py-1 rounded bg-red-600 hover:bg-red-700 text-white text-sm transition">
											<SignOutIcon size={18} weight="bold" />
											SignOut
										</ConfirmSignOutButton>
									</SignedIn>
								</>
							) : (
								<>
									<a href="/" className="hover:text-yellow-400 transition">Home</a>
									<a href="/about" className="hover:text-yellow-400 transition">About</a>
									<a href="/services" className="hover:text-yellow-400 transition">Services</a>
									<a href="/contact" className="hover:text-yellow-400 transition">Contact</a>
									<Logger/>
								</>
							)}
						</div>

						{/* Theme Toggle Button */}
						<button
							onClick={toggleTheme}
							className="text-2xl focus:outline-none"
							aria-label="Toggle light/dark mode"
						>
							{isDarkMode ? "🌞" : "🌙"}
						</button>

						{/* Mobile Menu Button */}
						<div className="md:hidden">
							<button
								onClick={() => setMenuOpen(!menuOpen)}
								className="text-2xl focus:outline-none"
								aria-label="Toggle menu"
							>
								{menuOpen ? "✕" : "☰"}
							</button>
						</div>
					</div>
				</nav>

				{/* Mobile Menu */}
				{menuOpen && (
					<div className="md:hidden flex flex-col items-center bg-blue-800 dark:bg-gray-800 py-4 space-y-4">
						{hasClerk ? (
							<>
								<SignedOut>
									<SignInButton />
								</SignedOut>
								<SignedIn>
									<a href="/" className="hover:text-yellow-400 transition">Home</a>
									<a href="/about" className="hover:text-yellow-400 transition">About</a>
									<a href="/services" className="hover:text-yellow-400 transition">Services</a>
									<a href="/contact" className="hover:text-yellow-400 transition">Contact</a>
									<Logger/>
									<UserButton afterSignOutUrl="/sign-in" />
									<ConfirmSignOutButton className="inline-flex items-center gap-2 px-3 py-2 rounded bg-red-600 hover:bg-red-700 text-white text-base">
										<SignOutIcon size={18} weight="bold" />
										Logout
									</ConfirmSignOutButton>
								</SignedIn>
							</>
						) : (
							<>
								<a href="/" className="hover:text-yellow-400 transition">Home</a>
								<a href="/about" className="hover:text-yellow-400 transition">About</a>
								<a href="/services" className="hover:text-yellow-400 transition">Services</a>
								<a href="/contact" className="hover:text-yellow-400 transition">Contact</a>
								<Logger/>
							</>
						)}
					</div>
				)}
			{/* Bottom extender to cover any remaining gap under the fixed header */}
			<div aria-hidden="true" className="absolute inset-x-0 -bottom-4 h-4 bg-blue-900 dark:bg-gray-900 pointer-events-none" />
			</header>
		</>
	);
};

export default Header;
