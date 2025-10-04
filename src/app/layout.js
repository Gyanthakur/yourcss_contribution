import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./header";
import { Meteors } from "@/components/ui/meteors";
import Footer from "@/components/footer";
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
	const clerkEnabled = Boolean(process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY)
	return (
		<html lang="en">
			<body>
				{clerkEnabled ? (
					<ClerkProvider>
						<SignedOut>
							<SignInButton />
						</SignedOut>
						<SignedIn>
							<UserButton />
							<Header />
							<div className="mb-3 mt-3">{children}</div>
							<Footer />
						</SignedIn>
					</ClerkProvider>
				) : (
					// Fallback rendering when Clerk keys are missing (local/dev without auth)
					<>
						<Header />
						<div className="mb-3 mt-3">{children}</div>
						<Footer />
					</>
				)}
			</body>
		</html>
	);
}
