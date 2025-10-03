import Image from "next/image";

const AboutPage = () => {
	return (
		<div className="min-h-screen bg-white text-gray-800 font-sans">
			{/* Hero */}
			<header className="bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 text-white">
				<div className="container mx-auto px-6 py-16 lg:py-28">
					<div className="flex flex-col-reverse lg:flex-row items-center gap-10">
						<div className="w-full lg:w-1/2 text-center lg:text-left">
							<h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">Designing delightful experiences — one pixel at a time</h1>
							<p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto lg:mx-0 mb-6">We craft modern, accessible interfaces and components using Next.js and Tailwind — focused on performance, usability and delightful micro-interactions.</p>
							<div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 justify-center lg:justify-start">
								<a href="#about-me" className="bg-white text-blue-900 font-semibold px-6 py-3 rounded-lg shadow hover:shadow-lg transition">About Me</a>
								<a href="#contact" className="border border-white/30 text-white px-6 py-3 rounded-lg hover:bg-white/10 transition">Contact</a>
							</div>
						</div>

						<div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
							<div className="relative rounded-2xl overflow-hidden shadow-2xl w-72 h-72 sm:w-96 sm:h-96 ring-4 ring-white/10">
								<Image src="/dfd.jpg" alt="illustration" fill className="object-cover" />
							</div>
						</div>
					</div>
				</div>
			</header>

			{/* Mission / Values */}
			<section className="container mx-auto px-6 py-12">
				<div className="grid gap-8 lg:grid-cols-3 items-start">
					<div className="lg:col-span-2 bg-white rounded-2xl shadow p-8">
						<h2 className="text-2xl sm:text-5xl font-bold mb-4">Our Mission</h2>
						<p className="text-lg leading-relaxed text-gray-700">We help teams ship faster by building reusable UI components, accessible layouts, and sensible defaults. Our priority is to make interfaces that are beautiful, performant and easy to maintain.</p>
						<div className="mt-6 flex flex-wrap gap-3">
							<span className="px-3 py-1 bg-blue-50 text-blue-800 rounded-full text-sm font-medium">Next.js</span>
							<span className="px-3 py-1 bg-blue-50 text-blue-800 rounded-full text-sm font-medium">TailwindCSS</span>
							<span className="px-3 py-1 bg-blue-50 text-blue-800 rounded-full text-sm font-medium">Accessibility</span>
							<span className="px-3 py-1 bg-blue-50 text-blue-800 rounded-full text-sm font-medium">Performance</span>
						</div>
					</div>

					
				</div>
			</section>

			{/* About Me */}
			<section id="about-me" className="bg-gray-50">
				<div className="container mx-auto px-6 py-12">
					<div className="grid gap-8 lg:grid-cols-3 items-center">
						<div className="col-span-1 flex justify-center">
							<div className="w-56 h-56 rounded-full overflow-hidden shadow-lg ring-4 ring-white">
								<Image src="/profile-picture.jpg" alt="Gyan Pratap Singh" width={560} height={560} className="object-cover" />
							</div>
						</div>

						<div className="lg:col-span-2 bg-white rounded-2xl p-8 shadow">
							<h2 className="text-3xl sm:text-4xl font-bold mb-3">Hi, I’m Gyan Pratap Singh</h2>
							<p className="text-gray-700 leading-7 mb-4">A front-end developer and UI enthusiast currently pursuing B.Tech in Computer Science at Kamla Nehru Institute of Technology. I focus on building responsive, accessible and fast user interfaces.</p>

							<div className="grid gap-4 sm:grid-cols-2">
								<div>
									<h4 className="text-sm font-semibold text-gray-900">Education</h4>
									<p className="text-gray-600">B.Tech · Kamla Nehru Institute of Technology · CGPA 8.75 (May 2025)</p>
								</div>
								<div>
									<h4 className="text-sm font-semibold text-gray-900">Interests</h4>
									<p className="text-gray-600">Open-source, performance tuning, algorithms, and delightful UI.</p>
								</div>
							</div>

							<div className="mt-6 flex flex-wrap gap-3">
								<a className="inline-block px-4 py-2 bg-blue-900 text-white rounded-lg shadow" href="#contact">Get in touch</a>
								<a className="inline-block px-4 py-2 border border-blue-200 text-blue-900 rounded-lg" href="/">See portfolio</a>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Team */}
			<section className="container mx-auto px-6 py-12">
  		<h3 className="text-3xl sm:text-4xl font-bold text-center mb-8">Meet Our Team</h3>

		<div className="flex justify-center">
			<div className="w-full sm:w-1/2 md:w-1/3 flex justify-center">
			<div className="bg-white rounded-3xl p-6 text-center shadow w-full max-w-sm">
				<div className="w-28 h-28 rounded-full overflow-hidden mb-4 mx-auto">
				<Image src="/profile-picture.jpg" alt="Gyan Singh" width={112} height={112} className="object-cover" />
				</div>
				<h4 className="font-semibold">Gyan Singh</h4>
				<p className="text-sm text-gray-500">Founder</p>
			</div>
			</div>
		</div>
		</section>	

		
			<footer id="contact" className="bg-blue-900 text-white py-12">
				<div className="container mx-auto px-6 text-center">
					<h3 className="text-3xl sm:text-3xl font-bold mb-3">Want to collaborate?</h3>
					<p className="text-blue-100 mb-6">If you have a project in mind or just want to say hi — drop a message.</p>
					<a href="mailto:hello@example.com" className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold shadow">Say Hello</a>
				</div>
			</footer>
		</div>
	);
};

export default AboutPage;
