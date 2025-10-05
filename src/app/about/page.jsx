import Image from "next/image";

const AboutPage = () => {
	return (
		<div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
			{/* Hero Section */}
			<section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 text-white dark:text-gray-100 py-20 transition-colors duration-300">
				<div className="container mx-auto flex flex-col md:flex-row items-center px-6">
					<div className="md:w-1/2 mb-8 md:mb-0">
						<h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">About Us</h1>
						<h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
							Designing delightful experiences — one pixel at a time
						</h2>
						<p className="text-lg md:text-xl mb-8 text-gray-200 dark:text-gray-300 leading-relaxed">
							We craft modern, accessible interfaces and components using Next.js and Tailwind — focused on performance, usability and delightful micro-interactions.
						</p>
						<div className="flex gap-4">
							<button className="bg-white text-blue-900 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-200">
								About Me
							</button>
							<button className="border border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white hover:text-blue-900 transition-colors duration-200">
								Contact
							</button>
						</div>
					</div>
					<div className="md:w-1/2">
						<div className="relative">
							<Image
								src="/programming.avif"
								alt="About us illustration"
								width={800}
								height={600}
								className="w-full h-auto rounded-2xl shadow-2xl"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Company Mission Section */}
			<section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
				<div className="container mx-auto px-6">
					<h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-gray-100">
						Our Mission
					</h2>
					<p className="text-lg max-w-4xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
						We help teams ship faster by building reusable UI components, accessible layouts, and sensible defaults. Our priority is to make interfaces that are beautiful, performant and easy to maintain.
					</p>
					<div className="flex flex-wrap gap-3">
						<span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-medium">
							Next.js
						</span>
						<span className="bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200 px-4 py-2 rounded-full text-sm font-medium">
							TailwindCSS
						</span>
						<span className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 px-4 py-2 rounded-full text-sm font-medium">
							Accessibility
						</span>
						<span className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 px-4 py-2 rounded-full text-sm font-medium">
							Performance
						</span>
					</div>
				</div>
			</section>

			{/* about me  */}

			<div className="container mx-auto mt-24 px-4 py-8 bg-gray-50 dark:bg-gray-800 rounded-lg transition-colors duration-300">
				<h1 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-gray-100">About Me</h1>
				<div className="flex flex-col md:flex-row items-center justify-center">
					{/* Image Section */}
					<div className="w-full md:w-1/3 mb-6 md:mb-0">
						<Image
							src="/profile-picture.jpg"
							alt="Gyan Pratap Singh"
							width={400}
							height={400}
							className="rounded-2xl mx-auto w-80 h-80 object-cover shadow-xl"
						/>
					</div>
					{/* About Me Text */}
					<div className="w-full md:w-2/3 px-4">
						<p className="text-lg leading-8 text-justify">
							Hi! I am <span className="font-bold">Gyan Pratap Singh</span>, a
							passionate tech enthusiast with a strong background in software
							development, particularly in front-end technologies. I am
							currently pursuing a Bachelor of Technology (B.Tech) in Computer
							Science at Kamla Nehru Institute of Technology, Sultanpur, and
							will graduate in May 2025 with a CGPA of 8.75.
						</p>
						<p className="mt-4 text-lg leading-8 text-justify">
							Over the past few years, I have gained significant experience in
							web development, from building e-learning platforms to working on
							interactive and responsive UI components. I am also an avid
							contributor to open-source projects, having participated in
							Hacktoberfest and working on several collaborative initiatives. My
							technical stack includes Next.js, TailwindCSS, MongoDB, Clerk, and
							Supabase, among others.
						</p>
						<p className="mt-4 text-lg leading-8 text-justify">
							Apart from coding, I have a strong interest in algorithmic problem
							solving, always looking to optimize performance and avoid common
							pitfalls such as time limit exceeded (TLE) issues. I’m also
							recognized as a Postman Student Expert, Git Certified Specialist,
							and have developed a variety of projects such as a job portal app,
							notes store, and food ordering web app.
						</p>
						<p className="mt-4 text-lg leading-8 text-justify">
							I am always open to learning new technologies and exploring
							creative solutions to technical challenges. Feel free to explore
							my portfolio or reach out to discuss potential collaborations!
						</p>
					</div>
				</div>
			</div>

			{/* Team Section */}
			<section className="bg-white dark:bg-gray-900 py-16 transition-colors duration-300">
				<div className="container mx-auto px-6">
					<h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">
						Meet Our Team
					</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
						{/* Team Member 1 - Gyanthakur */}
						<div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
							<div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
								<span className="text-white font-bold text-lg">G</span>
							</div>
							<h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1">Gyanthakur</h3>
							<p className="text-gray-600 dark:text-gray-400 text-sm mb-2">Contributions: 19</p>
						</div>

						{/* Team Member 2 - wrexrus */}
						<div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
							<div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-red-400 to-pink-600 flex items-center justify-center">
								<span className="text-white font-bold text-lg">W</span>
							</div>
							<h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1">wrexrus</h3>
							<p className="text-gray-600 dark:text-gray-400 text-sm mb-2">Contributions: 6</p>
						</div>

						{/* Team Member 3 - siddharthbaleja7 */}
						<div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
							<div className="w-20 h-20 mx-auto mb-4 rounded-full bg-black dark:bg-gray-700">
							</div>
							<h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1">siddharthbaleja7</h3>
							<p className="text-gray-600 dark:text-gray-400 text-sm mb-2">Contributions: 3</p>
						</div>

						{/* Team Member 4 - CodeVoyager3 */}
						<div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
							<div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-400 to-blue-600 flex items-center justify-center">
								<span className="text-white font-bold text-lg">C</span>
							</div>
							<h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1">CodeVoyager3</h3>
							<p className="text-gray-600 dark:text-gray-400 text-sm mb-2">Contributions: 2</p>
						</div>
					</div>

					{/* Additional Team Members Row */}
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-md mx-auto mt-8">
						{/* Team Member 5 - VJ */}
						<div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
							<div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">
								<span className="text-white font-bold text-lg">VJ</span>
							</div>
							<h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1">VJ</h3>
							<p className="text-gray-600 dark:text-gray-400 text-sm mb-2">Contributor</p>
						</div>

						{/* Team Member 6 - Another Member */}
						<div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
							<div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
								<span className="text-white font-bold text-lg">🎯</span>
							</div>
							<h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1">Contributor</h3>
							<p className="text-gray-600 dark:text-gray-400 text-sm mb-2">Community Member</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default AboutPage;
