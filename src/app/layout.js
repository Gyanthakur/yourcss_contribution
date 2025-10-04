import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./header";
import { Meteors } from "@/components/ui/meteors";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/contexts/ThemeContext";
// import { ClerkProvider } from "@clerk/nextjs/dist/types/components.server";
import {
	ClerkProvider,
	SignInButton,
	SignedIn,
	SignedOut,
	UserButton,
} from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Your CSS",
	description: "Explore, interact with, and copy beautiful CSS designs for your own projects.",
};

export default function RootLayout({ children }) {
	return (
		<ClerkProvider>
			<html lang="en" suppressHydrationWarning={true}>
				<body className="transition-colors duration-300 ease-in-out bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
					<ThemeProvider>
						<SignedOut>
							<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
								<div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
									<SignInButton />
								</div>
							</div>
						</SignedOut>
						<SignedIn>
							<UserButton />
							<Header />
							<div className="mb-3 mt-3 transition-colors duration-300">{children}</div>
							<Footer />
						</SignedIn>
					</ThemeProvider>
				</body>
			</html>
		</ClerkProvider>
	);
}
