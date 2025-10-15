"use client";
import { TwitterLogo, GithubLogo, LinkedinLogo } from "phosphor-react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gray-800 opacity-50"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Main content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-lg">Y</span>
                  </div>
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    YourCSS
                  </h2>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                  Crafting beautiful, responsive, and accessible CSS components for modern web development.
                </p>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-700">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">50+</div>
                  <div className="text-sm text-gray-400">Components</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">1K+</div>
                  <div className="text-sm text-gray-400">Users</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-400">Open</div>
                  <div className="text-sm text-gray-400">Source</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white mb-6 relative">
              Quick Links
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500"></div>
            </h3>
            <nav className="space-y-4">
              {[
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Services" },
                { href: "/contact", label: "Contact" },
                { href: "/favorites", label: "Favorites" },
                { href: "/docs", label: "Documentation" }
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="group flex items-center space-x-2 text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1"
                >
                  <span className="w-1.5 h-1.5 bg-gray-500 rounded-full group-hover:bg-blue-400 transition-colors duration-300"></span>
                  <span className="relative">
                    {link.label}
                    <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </span>
                </a>
              ))}
            </nav>
          </div>

          {/* Connect section */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white mb-6 relative">
              Connect
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500"></div>
            </h3>
            
            {/* Social links */}
            <div className="space-y-4">
              <div className="flex space-x-4">
                <a
                  href="https://x.com/gps_96169"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow on X (Twitter)"
                  className="group relative p-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:border-blue-400/50 hover:bg-blue-500/20 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                >
                  <TwitterLogo size={20} className="text-white group-hover:text-blue-400 transition-colors duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
                <a
                  href="https://github.com/Gyanthakur"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View our GitHub"
                  className="group relative p-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:border-gray-400/50 hover:bg-gray-500/20 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                >
                  <GithubLogo size={20} className="text-white group-hover:text-gray-300 transition-colors duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-400/20 to-gray-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
                <a
                  href="https://www.linkedin.com/in/gyan-pratap-singh-275785236/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Connect on LinkedIn"
                  className="group relative p-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:border-blue-400/50 hover:bg-blue-500/20 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                >
                  <LinkedinLogo size={20} className="text-white group-hover:text-blue-400 transition-colors duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-blue-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              </div>
              
              {/* Newsletter signup */}
              <div className="mt-8 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                <h4 className="text-sm font-medium text-white mb-3">Stay Updated</h4>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 transition-all duration-300 min-w-0"
                  />
                  <button className="px-3 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white text-sm font-medium rounded-lg transition-all duration-300 hover:scale-105 whitespace-nowrap sm:px-4">
                    Join
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-gray-300">
              <p className="text-sm">
                © {new Date().getFullYear()} Gyan Pratap Singh. All rights reserved.
              </p>
              <div className="flex items-center space-x-4 text-sm">
                <a href="/privacy" className="hover:text-white transition-colors duration-300">Privacy</a>
                <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
                <a href="/terms" className="hover:text-white transition-colors duration-300">Terms</a>
                <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
                <a href="/cookies" className="hover:text-white transition-colors duration-300">Cookies</a>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <span>Built with</span>
              <span className="text-red-400 animate-pulse">❤️</span>
              <span>using</span>
              <span className="px-2 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full text-blue-300 font-medium">
                Next.js
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
