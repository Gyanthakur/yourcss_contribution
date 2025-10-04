"use client";

import { SignedOut, SignedIn, SignInButton, UserButton } from "@clerk/nextjs";
import React, { useState } from "react";
import Image from "next/image";
import Logger from "@/components/Logger";
import ThemeToggle from "@/components/ThemeToggle";

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<>
			<header className="fixed top-0 left-0 w-full bg-blue-900 dark:bg-gray-900 text-white shadow-lg z-50 border-b border-blue-300 dark:border-gray-700">
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
						<div className="hidden md:flex space-x-8 text-lg">
							<SignedOut>
								<SignInButton />
							</SignedOut>
							<SignedIn>
								<a href="/" className="hover:text-yellow-400 transition">
									Home
								</a>
								<a href="/about" className="hover:text-yellow-400 transition">
									About
								</a>
								<a
									href="/services"
									className="hover:text-yellow-400 transition"
								>
									Services
								</a>
								<a href="/contact" className="hover:text-yellow-400 transition">
									Contact
								</a>
								<Logger/>
								<UserButton />
							</SignedIn>
						</div>

						{/* Theme Toggle Button */}
						<ThemeToggle />

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
						<SignedOut>
							<SignInButton />
						</SignedOut>
						<SignedIn>
							<a href="/" className="hover:text-yellow-400 transition">
								Home
							</a>
							<a href="/about" className="hover:text-yellow-400 transition">
								About
							</a>
							<a href="/services" className="hover:text-yellow-400 transition">
								Services
							</a>
							<a href="/contact" className="hover:text-yellow-400 transition">
								Contact
							</a>
							<Logger/>
							<UserButton />
						</SignedIn>
					</div>
				)}
			</header>
		</>
	);
};

export default Header;
