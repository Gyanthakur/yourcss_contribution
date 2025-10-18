import Image from "next/image";
import Link from "next/link";

const AboutPage = () => {
	return (
		<div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
			{/* Hero Section */}
			<section className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 text-white py-24">
				<div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
					<div className="md:w-1/2 mb-10 md:mb-0">
						<h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
							Crafting Digital Experiences
						</h1>
						<p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
							We build high-performance, accessible web experiences powered by
							Next.js and Tailwind CSS — blending aesthetics, usability, and
							speed to perfection.
						</p>
						<div className="flex gap-4">
							<a
								href="#about-me"
								className="bg-white text-blue-900 font-semibold py-3 px-6 rounded-full hover:bg-gray-100 transition"
							>
								About Me
							</a>
							<a
								href="/contact"
								className="border border-white text-white font-semibold py-3 px-6 rounded-full hover:bg-white hover:text-blue-800 transition"
							>
								Contact
							</a>
						</div>
					</div>

					<div className="md:w-1/2 relative">
						<div className="rounded-3xl overflow-hidden shadow-2xl">
							<Image
								src="/programming.webp"
								alt="Design Illustration"
								width={600}
								height={400}
								className="object-cover"
							/>
						</div>
						<div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 text-blue-900 dark:text-gray-100 font-bold text-sm px-4 py-2 rounded-full shadow-md">
							Innovate • Create • Inspire
						</div>
					</div>
				</div>
			</section>

			{/* Mission Section */}
			<section className="py-20 bg-white dark:bg-gray-900">
				<div className="container mx-auto px-6 text-center">
					<h2 className="text-4xl font-bold mb-6">Our Mission</h2>
					<p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300 mb-10">
						To empower developers and designers with reusable, performant UI
						components and to create seamless digital experiences that feel both
						human and intuitive.
					</p>
					<div className="flex flex-wrap justify-center gap-4">
						{["Next.js", "TailwindCSS", "Accessibility", "Performance"].map(
							(skill) => (
								<span
									key={skill}
									className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-md"
								>
									{skill}
								</span>
							)
						)}
					</div>
				</div>
			</section>

			{/* About Me Section */}
			<section
				id="about-me"
				className="py-20 bg-gradient-to-br from-indigo-50 to-blue-100 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300"
			>
				<div className="container mx-auto mt-10 px-4 py-8 bg-gray-50 dark:bg-gray-800 rounded-lg transition-colors duration-300 scroll-mt-28 md:scroll-mt-32">
					<h1 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-gray-100">
						About Me
					</h1>
					<div className="flex flex-col md:flex-row items-center justify-center">
						{/* Image Section */}
						<div className="w-full md:w-1/3 mb-6 md:mb-0">
							<Image
								src="/profile-picture.jpg"
								alt="Gyan Pratap Singh"
								width={350}
								height={350}
								className="rounded-3xl shadow-xl object-cover"
							/>
						</div>
						<div className="md:w-2/3 md:pl-10">
							<h2 className="text-4xl font-bold mb-6 text-blue-800 dark:text-blue-400">
								About Me
							</h2>
							<p className="text-lg leading-relaxed mb-4">
								Hi! I’m <span className="font-bold">Gyan Pratap Singh</span>, a
								software developer passionate about creating scalable, visually
								appealing, and performance-driven web applications. I’m pursuing
								B.Tech in Computer Science at Kamla Nehru Institute of
								Technology, with a strong focus on frontend technologies.
							</p>
							<p className="text-lg leading-relaxed mb-4">
								My work revolves around crafting dynamic user interfaces,
								contributing to open-source projects, and exploring innovative
								ways to merge design with technology.
							</p>
							<p className="text-lg leading-relaxed">
								I’ve worked on several projects including e-learning platforms,
								job portals, and AI-integrated apps — using tools like Next.js,
								MongoDB, Clerk, and Supabase. Always learning. Always improving.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Team Section */}
			<section className="bg-white dark:bg-gray-900 py-20 transition-colors duration-300">
				<div className="container mx-auto px-6 text-center">
					<h2 className="text-4xl font-bold mb-12 text-gray-900 dark:text-gray-100">
						Meet Our Team
					</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
						{[
							{
								name: "Gyanthakur",
								contrib: "19",
								color: "from-blue-400 to-purple-600",
							},
							{
								name: "wrexrus",
								contrib: "6",
								color: "from-red-400 to-pink-600",
							},
							{
								name: "siddharthbaleja7",
								contrib: "3",
								color: "from-gray-500 to-gray-700",
							},
							{
								name: "CodeVoyager3",
								contrib: "2",
								color: "from-green-400 to-blue-600",
							},
							{
								name: "VJ",
								contrib: "1",
								color: "from-purple-500 to-indigo-600",
							},
							{
								name: "Contributor",
								contrib: "Community Member",
								color: "from-orange-400 to-red-500",
							},
						].map((member) => (
							<div
								key={member.name}
								className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl p-6 transition transform hover:-translate-y-1"
							>
								<div
									className={`w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center`}
								>
									<span className="text-white font-bold text-2xl">
										{member.name.charAt(0).toUpperCase()}
									</span>
								</div>
								<h3 className="text-xl font-semibold mb-1">{member.name}</h3>
								<p className="text-gray-600 dark:text-gray-400">
									Contributions: {member.contrib}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>
		</div>
	);
};

export default AboutPage;
