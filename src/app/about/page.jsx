import Image from "next/image";

const AboutPage = () => {
	return (
		<div className="min-h-screen bg-gray-50 text-gray-800">
			{/* Hero Section */}
			<section className="bg-blue-900 text-white py-12">
				<div className="container mx-auto flex flex-col md:flex-row items-center px-6">
					<div className="md:w-1/2 mb-8 md:mb-0">
						<h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
						<p className="text-lg md:text-xl">
							We are dedicated to providing exceptional services to help your
							business grow. Our mission is to deliver innovative solutions
							tailored to your needs.
						</p>
					</div>
					<div className="md:w-1/2">
						<Image
							src="/dfd.jpg"
							alt="About us illustration"
							width={800}
							height={600}
							className="w-full h-auto rounded-lg shadow-lg"
						/>
					</div>
				</div>
			</section>

			{/* Company Mission Section */}
			<section className="py-12">
				<div className="container mx-auto px-6">
					<h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
						Our Mission
					</h2>
					<p className="text-lg text-center max-w-3xl mx-auto">
						At our company, we aim to revolutionize the way businesses interact
						with technology. Our goal is to provide solutions that empower your
						organization, streamline operations, and drive growth.
					</p>
				</div>
			</section>

			{/* about me  */}

			<div className="container mx-auto mt-24 px-4 py-8">
				<h1 className="text-4xl font-bold text-center mb-8">About Me</h1>
				<div className="flex flex-col md:flex-row items-center justify-center">
					{/* Image Section */}
					<div className="w-full md:w-1/3 mb-6 md:mb-0">
						<Image
							src="/profile-picture.jpg"
							alt="Gyan Pratap Singh"
              width={800}
							height={600}
							className="rounded-full mx-auto w-48 h-48 object-cover shadow-lg"
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
			<section className="bg-gray-100 py-12">
				<div className="container mx-auto px-6">
					<h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
						Meet Our Team
					</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
						{/* Example Team Member */}
						<div className="text-center">
							<Image
								src="/path/to/team-member.jpg"
								alt="Team member"
                width={800}
							height={600}
								className="w-32 h-32 mx-auto rounded-full mb-4"
							/>
							<h3 className="text-xl font-semibold">John Doe</h3>
							<p className="text-gray-600">CEO & Founder</p>
						</div>

						{/* Add more team members as needed */}
						<div className="text-center">
							<Image
								src="/path/to/team-member2.jpg"
								alt="Team member"
                width={800}
							height={600}
								className="w-32 h-32 mx-auto rounded-full mb-4"
							/>
							<h3 className="text-xl font-semibold">Jane Smith</h3>
							<p className="text-gray-600">CTO</p>
						</div>

						<div className="text-center">
							<Image
								src="/path/to/team-member3.jpg"
								alt="Team member"
                width={800}
							height={600}
								className="w-32 h-32 mx-auto rounded-full mb-4"
							/>
							<h3 className="text-xl font-semibold">Emily Johnson</h3>
							<p className="text-gray-600">Head of Marketing</p>
						</div>
					</div>
				</div>
			</section>

			{/* Call to Action */}
			<section className="bg-blue-900 text-white py-12">
				<div className="container mx-auto text-center px-6">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">Join Us</h2>
					<p className="text-lg mb-8">
						We are always looking for talented individuals to join our team and
						help us create cutting-edge solutions.
					</p>
					<a
						href="/careers"
						className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-lg transition"
					>
						Explore Careers
					</a>
				</div>
			</section>
		</div>
	);
};

export default AboutPage;
