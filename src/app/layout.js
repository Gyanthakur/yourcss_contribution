import { Inter } from "next/font/google";
import "./globals.css";
import AppShell from "./AppShell";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Your CSS",
	description: "Explore, interact with, and copy beautiful CSS designs for your own projects.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className="h-full" suppressHydrationWarning>
			<body className="min-h-screen bg-gray-900 text-black dark:bg-gray-950 dark:text-gray-100 overflow-x-hidden">
				<ClerkProvider>
					<AppShell>{children}</AppShell>
				</ClerkProvider>
			</body>
		</html>
	);
}
