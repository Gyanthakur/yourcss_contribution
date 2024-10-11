"use client"
import { TwitterLogo, GithubLogo, LinkedinLogo, GitBranch, GitMerge, GitPullRequest } from "phosphor-react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-gray-200 py-10 rounded-md">
      <div className="px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        
        
        <div>
          <h3 className="text-white text-xl font-bold mb-4">About Us</h3>
          <p className="text-gray-400 text-sm">
            We are dedicated to delivering the best web development services,
            combining creativity and technology to create beautiful experiences.
          </p>
        </div>
        
       
        <div>
          <h3 className="text-white text-xl font-bold mb-4">Quick Links</h3>
          <ul className="text-gray-400 text-sm">
            <li className="mb-2">
              <a href="/about" className="hover:text-white transition-colors">
                About Us
              </a>
            </li>
            <li className="mb-2">
              <a href="/services" className="hover:text-white transition-colors">
                Services
              </a>
            </li>
            <li className="mb-2">
              <a href="/contact" className="hover:text-white transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>
        
        <div className="flex flex-col items-center sm:items-start">
          <h3 className="text-white text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://x.com/gps_96169"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400  hover:text-blue-600 transition-colors"
            >
              <TwitterLogo size={32} className=" hover:text-red-500" />
            </a>
            <a
              href="https://github.com/Gyanthakur"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-300 transition-colors"
            >
              <GithubLogo size={32} className=" hover:text-red-500"/>
            </a>
            
            <a
              href="https://www.linkedin.com/in/gyan-pratap-singh-275785236/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-600 transition-colors"
            >
              <LinkedinLogo size={32} className=" hover:text-red-500"/>
            </a>
          </div>
        </div>
      </div>
      
      <div className="mt-8 border-t border-gray-700 pt-4 text-center">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Gyan Pratap Singh. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
