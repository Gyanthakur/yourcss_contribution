"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const AboutPage = () => {
  const [contributors, setContributors] = useState([]);

  useEffect(() => {
    const fetchContributors = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/repos/Gyanthakur/yourcss_contribution/contributors"
        );
        const data = await response.json();
        setContributors(data);
      } catch (error) {
        console.error("Error fetching contributors:", error);
      }
    };

    fetchContributors();
  }, []);

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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {contributors.map((contributor) => (
              <a
                key={contributor.id}
                href={contributor.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-2xl shadow p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-28 h-28 rounded-full overflow-hidden mb-4 mx-auto ring-4 ring-blue-500/20">
                  <Image
                    src={contributor.avatar_url}
                    alt={contributor.login}
                    width={112}
                    height={112}
                    className="object-cover"
                  />
                </div>
                <h4 className="font-semibold text-lg">{contributor.login}</h4>
                <p className="text-sm text-gray-500">
                  Contributions: {contributor.contributions}
                </p>
              </a>
            ))}
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
