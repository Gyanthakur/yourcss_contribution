"use client";

import React, { useEffect, useMemo, useState } from "react";
import FavoriteButton from "@/components/FavoriteButton";
import { Copy } from "phosphor-react";
import style from "@/components/CssEntity/cssentity.module.css";

const STORAGE_KEY = "favorites";

const CodeModal = ({ htmlCode, cssCode, onClose, onCopyHtml, onCopyCss }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 dark:bg-black dark:bg-opacity-70 z-50 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg w-full max-w-4xl relative flex flex-col h-3/4 shadow-2xl border border-gray-200 dark:border-gray-700 transition-colors duration-300">
        <h2 className="text-xl mb-4 text-gray-900 dark:text-gray-100 font-semibold">Code Viewer:</h2>

        <div className="flex-1 overflow-y-auto custom-scrollbar scroll-smooth">
          <div className="relative">
            <h3 className="text-lg mb-2 font-bold text-gray-800 dark:text-gray-200">HTML Code:</h3>
            <button className="absolute top-0 right-0 m-2 text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200" onClick={onCopyHtml}>
              <Copy size={20} className="text-gray-600 dark:text-gray-300" />
            </button>
            <pre className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 p-4 rounded overflow-auto mb-4 border border-gray-200 dark:border-gray-600 text-sm">{htmlCode}</pre>
          </div>

          {cssCode ? (
            <div className="relative">
              <h3 className="text-lg mb-2 font-bold text-gray-800 dark:text-gray-200">CSS Code:</h3>
              <button className="absolute top-0 right-0 m-2 text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200" onClick={onCopyCss}>
                <Copy size={20} className="text-gray-600 dark:text-gray-300" />
              </button>
              <pre className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 p-4 rounded overflow-auto border border-gray-200 dark:border-gray-600 text-sm">{cssCode}</pre>
            </div>
          ) : null}
        </div>

        <div className="mt-4 flex flex-col sm:flex-row gap-2 justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors duration-200 w-full sm:w-auto" onClick={onCopyHtml}>Copy HTML Code</button>
          {cssCode ? (
            <button className="bg-blue-500 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors duration-200 w-full sm:w-auto" onClick={onCopyCss}>Copy CSS Code</button>
          ) : null}
          <button className="bg-red-500 hover:bg-red-700 dark:bg-red-600 dark:hover:bg-red-700 text-white px-4 py-2 rounded transition-colors duration-200 w-full sm:w-auto" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);
  const [showCodeModal, setShowCodeModal] = useState(false);
  const [htmlCodeToShow, setHtmlCodeToShow] = useState("");
  const [cssCodeToShow, setCssCodeToShow] = useState("");

  // Map of preview renderers reused from CssEntity
  const renderers = useMemo(
    () => ({
      "bubble-ltr": () => <button className={style.bubbleLeftToRight}>Bubble -&gt;</button>,
      "bubble-rtl": () => <button className={style.bubbleRightToLeft}>Bubble &lt;-</button>,
      "bubble-down": () => <button className={style.bubbleUpToDown}>Bubble &darr;</button>,
      wave: () => (
        <div className={style.wave}>
          <div>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      ),
      balls: () => (
        <div className={style.balls}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ),
      "fill-rect": () => (
        <div className={style.fillRact}>
          <div></div>
        </div>
      ),
      // Exact form previews copied from Forms page (lightly scaled to fit)
      "form-1": () => (
        <div className="scale-90 origin-top">
          <div className="bg-red-400 dark:bg-red-500 hover:bg-sky-400 dark:hover:bg-sky-500 flex duration-500 hover:scale-105 justify-center items-center relative group p-6 rounded-lg shadow-md dark:shadow-gray-700/30 border border-transparent dark:border-gray-600 transition-all">
            <div>
              <form>
                <h2 className="text-center mb-4 text-white">Login</h2>
                <label htmlFor="email" className="text-white mb-2 block">Email:</label>
                <input type="text" id="email" name="email" required className="w-full p-2 mb-4 rounded" />
                <label htmlFor="password" className="text-white mb-2 block">Password:</label>
                <input type="password" id="password" name="password" required className="w-full p-2 mb-4 rounded" />
                <button type="submit" className="w-full p-2 bg-blue-500 hover:bg-blue-700 text-white rounded">Login</button>
              </form>
            </div>
          </div>
        </div>
      ),
      "form-2": () => (
        <div className="scale-90 origin-top">
          <div className="bg-yellow-400 dark:bg-yellow-500 hover:bg-sky-400 dark:hover:bg-sky-500 flex duration-500 hover:scale-105 justify-center items-center relative group p-6 rounded-lg shadow-md">
            <div>
              <form>
                <h2 className="text-center mb-4">Register</h2>
                <label htmlFor="username" className="mb-2 block">Username:</label>
                <input type="text" id="username" name="username" required className="w-full p-2 mb-4 rounded" />
                <label htmlFor="password" className="mb-2 block">Password:</label>
                <input type="password" id="password" name="password" required className="w-full p-2 mb-4 rounded" />
                <button type="submit" className="w-full p-2 bg-green-500 hover:bg-green-700 text-white rounded">Register</button>
              </form>
            </div>
          </div>
        </div>
      ),
      "form-3": () => (
        <div className="scale-90 origin-top">
          <div className="bg-green-400 hover:bg-sky-400 flex duration-500 hover:scale-105 justify-center items-center relative group p-6 rounded-lg shadow-md">
            <div>
              <form>
                <h2 className="text-center mb-4">Contact Us</h2>
                <label htmlFor="name" className="mb-2 block">Name:</label>
                <input type="text" id="name" name="name" required className="w-full p-2 mb-4 rounded" />
                <label htmlFor="message" className="mb-2 block">Message:</label>
                <textarea id="message" name="message" required className="w-full p-2 mb-4 rounded" />
                <button type="submit" className="w-full p-2 bg-red-500 hover:bg-red-700 text-white rounded">Send</button>
              </form>
            </div>
          </div>
        </div>
      ),
      "form-4": () => (
        <div className="scale-90 origin-top">
          <div className="bg-pink-500 hover:bg-yellow-400 transform transition-transform duration-500 hover:scale-105 flex justify-center items-center relative group p-4 rounded-lg shadow-lg">
            <div>
              <form>
                <h2 className="text-center mb-4 text-white">Survey</h2>
                <label htmlFor="age" className="text-white mb-2 block">Age:</label>
                <input type="number" id="age" name="age" required className="w-full p-2 mb-4 rounded" />
                <label htmlFor="feedback" className="text-white mb-2 block">Feedback:</label>
                <textarea id="feedback" name="feedback" required className="w-full p-2 mb-4 rounded" />
                <button type="submit" className="w-full p-2 bg-blue-500 hover:bg-blue-700 text-white rounded">Submit</button>
              </form>
            </div>
          </div>
        </div>
      ),
      "form-5": () => (
        <div className="scale-90 origin-top">
          <div className="bg-blue-500 hover:bg-purple-500 transform transition-transform duration-700 hover:rotate-45 hover:scale-105 flex justify-center items-center relative group p-6 rounded-lg shadow-2xl perspective-1000">
            <div className="transform hover:rotate-y-45">
              <form>
                <h2 className="text-center mb-4 text-white">Booking</h2>
                <label htmlFor="name" className="text-white mb-2 block">Full Name:</label>
                <input type="text" id="name" name="name" required className="w-full p-2 mb-4 rounded" />
                <label htmlFor="date" className="text-white mb-2 block">Date:</label>
                <input type="date" id="date" name="date" required className="w-full p-2 mb-4 rounded" />
                <button type="submit" className="w-full p-2 bg-green-500 hover:bg-green-700 text-white rounded">Book</button>
              </form>
            </div>
          </div>
        </div>
      ),
      "form-6": () => (
        <div className="scale-90 origin-top">
          <div className="bg-purple-400 hover:bg-green-400 flex justify-center duration-500 hover:scale-x-90 items-center relative group p-5 rounded-lg shadow-lg">
            <div>
              <form>
                <h2 className="text-center mb-4 text-white">Job Application</h2>
                <label htmlFor="name" className="text-white mb-2 block">Full Name:</label>
                <input type="text" id="name" name="name" required className="w-full p-2 mb-4 rounded" />
                <label htmlFor="cv" className="text-white mb-2 block">Upload CV:</label>
                <input type="file" id="cv" name="cv" required className="w-full p-2 mb-4 rounded" />
                <label htmlFor="portfolio" className="text-white mb-2 block">Portfolio Link:</label>
                <input type="url" id="portfolio" name="portfolio" className="w-full p-2 mb-4 rounded" />
                <button type="submit" className="w-full p-2 bg-red-500 hover:bg-red-700 text-white rounded">Apply</button>
              </form>
            </div>
          </div>
        </div>
      ),
      "form-7": () => (
        <div className="scale-90 origin-top">
          <div className="bg-teal-400 hover:bg-teal-600 flex duration-500 hover:scale-105 justify-center items-center relative group p-4 rounded-lg shadow-md">
            <div>
              <form>
                <h2 className="text-center mb-4 text-white">Feedback</h2>
                <label htmlFor="userEmail" className="text-white mb-2 block">Email:</label>
                <input type="email" id="userEmail" name="userEmail" required className="w-full p-2 mb-4 rounded" />
                <label htmlFor="userFeedback" className="text-white mb-2 block">Your Feedback:</label>
                <textarea id="userFeedback" name="userFeedback" required className="w-full p-2 mb-4 rounded" />
                <button type="submit" className="w-full p-2 bg-blue-600 hover:bg-blue-800 text-white rounded">Submit</button>
              </form>
            </div>
          </div>
        </div>
      ),
      "form-8": () => (
        <div className="scale-90 origin-top">
          <div className="bg-orange-500 hover:bg-orange-700 duration-500 hover:scale-105 flex justify-center items-center relative group p-6 rounded-lg shadow-xl perspective-1000">
            <div className="transform hover:rotate-x-6 hover:rotate-y-6 transition-transform duration-700">
              <form>
                <h2 className="text-center mb-4 text-white">Event Registration</h2>
                <label htmlFor="eventName" className="text-white mb-2 block">Event Name:</label>
                <input type="text" id="eventName" name="eventName" required className="w-full p-2 mb-4 rounded" />
                <label htmlFor="attendeeName" className="text-white mb-2 block">Your Name:</label>
                <input type="text" id="attendeeName" name="attendeeName" required className="w-full p-2 mb-4 rounded" />
                <label htmlFor="date" className="text-white mb-2 block">Event Date:</label>
                <input type="date" id="date" name="date" required className="w-full p-2 mb-4 rounded" />
                <button type="submit" className="w-full p-2 bg-green-600 hover:bg-green-800 text-white rounded">Register</button>
              </form>
            </div>
          </div>
        </div>
      ),
      "form-9": () => (
        <div className="scale-90 origin-top">
          <div className="bg-indigo-400 hover:bg-indigo-600 flex duration-500 hover:scale-x-90 justify-center items-center relative group p-5 rounded-lg shadow-lg">
            <div>
              <form>
                <h2 className="text-center mb-4 text-white">Profile Update</h2>
                <label htmlFor="fullName" className="text-white mb-2 block">Full Name:</label>
                <input type="text" id="fullName" name="fullName" required className="w-full p-2 mb-4 rounded" />
                <label htmlFor="bio" className="text-white mb-2 block">Bio:</label>
                <textarea id="bio" name="bio" className="w-full p-2 mb-4 rounded" />
                <label htmlFor="profilePic" className="text-white mb-2 block">Profile Picture:</label>
                <input type="file" id="profilePic" name="profilePic" required className="w-full p-2 mb-4 rounded" />
                <button type="submit" className="w-full p-2 bg-red-600 hover:bg-red-800 text-white rounded">Update</button>
              </form>
            </div>
          </div>
        </div>
      ),
      "form-10": () => (
        <div className="scale-90 origin-top">
          <div className="bg-gray-600 hover:bg-gray-800 flex duration-500 hover:scale-105 justify-center items-center relative group p-5 rounded-lg shadow-2xl">
            <div>
              <form>
                <h2 className="text-center mb-4 text-white">Newsletter Subscription</h2>
                <label htmlFor="newsletterEmail" className="text-white mb-2 block">Email:</label>
                <input type="email" id="newsletterEmail" name="newsletterEmail" required className="w-full p-2 mb-4 rounded" />
                <button type="submit" className="w-full p-2 bg-teal-600 hover:bg-teal-800 text-white rounded">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      ),
      "form-11": () => (
        <div className="scale-90 origin-top">
          <div className="bg-teal-900 hover:bg-teal-600 flex duration-500 hover:scale-105 justify-center items-center relative group p-8 rounded-lg shadow-2xl transform transition-transform perspective-1000 mb-4">
            <div className="transform hover:rotate-x-6 hover:rotate-y-6 transition-transform duration-700">
              <form>
                <h2 className="text-center mb-4 text-white">Inquiry Submission Form</h2>
                <label htmlFor="firstName5" className="text-white mb-2 block">First Name:</label>
                <input type="text" id="firstName5" name="firstName5" required className="w-full p-2 mb-4 rounded" />
                <label htmlFor="lastName5" className="text-white mb-2 block">Last Name:</label>
                <input type="text" id="lastName5" name="lastName5" required className="w-full p-2 mb-4 rounded" />
                <label htmlFor="email5" className="text-white mb-2 block">Email:</label>
                <input type="email" id="email5" name="email5" required className="w-full p-2 mb-4 rounded" />
                <label htmlFor="phone5" className="text-white mb-2 block">Phone:</label>
                <input type="tel" id="phone5" name="phone5" required className="w-full p-2 mb-4 rounded" />
                <label htmlFor="address5" className="text-white mb-2 block">Address:</label>
                <input type="text" id="address5" name="address5" required className="w-full p-2 mb-4 rounded" />
                <label htmlFor="message5" className="text-white mb-2 block">Message/Query:</label>
                <textarea id="message5" name="message5" required className="w-full p-2 mb-4 rounded" />
                <button type="submit" className="w-full p-2 bg-blue-600 hover:bg-blue-800 text-white rounded">Submit Inquiry</button>
              </form>
            </div>
          </div>
        </div>
      ),
      "form-12": () => (
        <div className="scale-90 origin-top">
          <div className="bg-gray-800 hover:bg-indigo-950 flex duration-500 hover:scale-105 justify-center items-center relative group p-8 rounded-lg shadow-2xl transform transition-transform perspective-1000 mb-4">
            <div className="transform hover:rotate-x-6 hover:rotate-y-6 transition-transform duration-700">
              <form>
                <h2 className="text-center mb-4 text-white">Contact Us</h2>
                <label htmlFor="firstName1" className="text-white mb-2 block">First Name:</label>
                <input type="text" id="firstName1" name="firstName1" required className="w-full p-2 mb-4 rounded" />
                <label htmlFor="lastName1" className="text-white mb-2 block">Last Name:</label>
                <input type="text" id="lastName1" name="lastName1" required className="w-full p-2 mb-4 rounded" />
                <label htmlFor="email1" className="text-white mb-2 block">Email:</label>
                <input type="email" id="email1" name="email1" required className="w-full p-2 mb-4 rounded" />
                <label htmlFor="phone1" className="text-white mb-2 block">Phone:</label>
                <input type="tel" id="phone1" name="phone1" required className="w-full p-2 mb-4 rounded" />
                <label htmlFor="address1" className="text-white mb-2 block">Address:</label>
                <input type="text" id="address1" name="address1" required className="w-full p-2 mb-4 rounded" />
                <label htmlFor="message1" className="text-white mb-2 block">Message/Query:</label>
                <textarea id="message1" name="message1" required className="w-full p-2 mb-4 rounded" />
                <button type="submit" className="w-full p-2 bg-blue-600 hover:bg-blue-800 text-white rounded">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      ),
      "form-13": () => (
        <div className="scale-90 origin-top">
          <div className="bg-gray-700 hover:bg-gray-500 flex hover:scale-105 justify-center items-center relative group p-8 rounded-lg shadow-2xl transform transition-transform duration-500 perspective-1000 mb-4">
            <div className="transform hover:rotate-x-6 hover:rotate-y-6 transition-transform duration-700">
              <form>
                <h2 className="text-center mb-4 text-white">Feedback Form</h2>
                <label htmlFor="firstName2" className="text-white mb-2 block">First Name:</label>
                <input type="text" id="firstName2" name="firstName2" required className="w-full p-2 mb-4 rounded" />
                <label htmlFor="lastName2" className="text-white mb-2 block">Last Name:</label>
                <input type="text" id="lastName2" name="lastName2" required className="w-full p-2 mb-4 rounded" />
                <label htmlFor="email2" className="text-white mb-2 block">Email:</label>
                <input type="email" id="email2" name="email2" required className="w-full p-2 mb-4 rounded" />
                <label htmlFor="phone2" className="text-white mb-2 block">Phone:</label>
                <input type="tel" id="phone2" name="phone2" required className="w-full p-2 mb-4 rounded" />
                <label htmlFor="address2" className="text-white mb-2 block">Address:</label>
                <input type="text" id="address2" name="address2" required className="w-full p-2 mb-4 rounded" />
                <label htmlFor="message2" className="text-white mb-2 block">Message/Query:</label>
                <textarea id="message2" name="message2" required className="w-full p-2 mb-4 rounded" />
                <button type="submit" className="w-full p-2 bg-blue-600 hover:bg-blue-800 text-white rounded">Send Feedback</button>
              </form>
            </div>
          </div>
        </div>
      ),
      "form-14": () => (
        <div className="scale-90 origin-top">
          <div className="bg-gray-600 hover:bg-gray-800 flex duration-500 hover:scale-105 justify-center items-center relative group p-8 rounded-lg shadow-2xl transform transition-transform perspective-1000 mb-4">
            <div className="transform hover:rotate-x-6 hover:rotate-y-6 transition-transform duration-700">
              <form>
                <h2 className="text-center mb-4 text-white">Inquiry Form</h2>
                <label htmlFor="firstName3" className="text-white mb-2 block">First Name:</label>
                <input type="text" id="firstName3" name="firstName3" required className="w-full p-2 mb-4 rounded" />
                <label htmlFor="lastName3" className="text-white mb-2 block">Last Name:</label>
                <input type="text" id="lastName3" name="lastName3" required className="w-full p-2 mb-4 rounded" />
                <label htmlFor="email3" className="text-white mb-2 block">Email:</label>
                <input type="email" id="email3" name="email3" required className="w-full p-2 mb-4 rounded" />
                <label htmlFor="phone3" className="text-white mb-2 block">Phone:</label>
                <input type="tel" id="phone3" name="phone3" required className="w-full p-2 mb-4 rounded" />
                <label htmlFor="address3" className="text-white mb-2 block">Address:</label>
                <input type="text" id="address3" name="address3" required className="w-full p-2 mb-4 rounded" />
                <label htmlFor="message3" className="text-white mb-2 block">Message/Query:</label>
                <textarea id="message3" name="message3" required className="w-full p-2 mb-4 rounded" />
                <button type="submit" className="w-full p-2 bg-blue-600 hover:bg-blue-800 text-white rounded">Submit Inquiry</button>
              </form>
            </div>
          </div>
        </div>
      ),
      "form-15": () => (
        <div className="scale-90 origin-top">
          <div className="bg-blue-900 hover:bg-blue-600 hover:text-black flex duration-500 hover:scale-105 justify-center items-center relative group p-8 rounded-lg shadow-2xl transform transition-transform perspective-1000 mb-4">
            <div className="transform hover:rotate-x-6 hover:rotate-y-6 transition-transform duration-700">
              <form>
                <h2 className="text-center mb-4 text-white">Registration Form</h2>
                <label htmlFor="firstName4" className="text-white mb-2 block">First Name:</label>
                <input type="text" id="firstName4" name="firstName4" required className="w-full p-2 mb-4 rounded" />
                <label htmlFor="lastName4" className="text-white mb-2 block">Last Name:</label>
                <input type="text" id="lastName4" name="lastName4" required className="w-full p-2 mb-4 rounded" />
                <label htmlFor="email4" className="text-white mb-2 block">Email:</label>
                <input type="email" id="email4" name="email4" required className="w-full p-2 mb-4 rounded" />
                <label htmlFor="phone4" className="text-white mb-2 block">Phone:</label>
                <input type="tel" id="phone4" name="phone4" required className="w-full p-2 mb-4 rounded" />
                <label htmlFor="address4" className="text-white mb-2 block">Address:</label>
                <input type="text" id="address4" name="address4" required className="w-full p-2 mb-4 rounded" />
                <label htmlFor="message4" className="text-white mb-2 block">Message/Query:</label>
                <textarea id="message4" name="message4" required className="w-full p-2 mb-4 rounded" />
                <button type="submit" className="w-full p-2 bg-blue-600 hover:bg-blue-800 text-white rounded">Register</button>
              </form>
            </div>
          </div>
        </div>
      ),
      neon: () => (
        <div className={style.neon}>
          <button>...</button>
        </div>
      ),
      loader: () => (
        <div className={style.loader}>
          <div></div>
        </div>
      ),
      cube: () => (
        <div className={style.cube}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ),
      "glass-card": () => (
        <div className={style.glassCard}>
          <h2>Glassmorphism Card</h2>
          <p>Beautiful transparent, frosted glass effect.</p>
        </div>
      ),
      "search-bar": () => (
        <div className={style.searchContainer}>
          <input type="text" className={style.searchBar} placeholder="Search..." />
          <div className={style.searchBtn}>🔍</div>
        </div>
      ),
      "neumorphism-btn": () => <button className={style.neuButton}>Click Me</button>,
      "animated-link": () => (
        <a href="#" className={style.animatedLink}>
          Hover Me
        </a>
      ),
      "card-3d": () => (
        <div className={style.card3d}>
          <div className={style.cardcontent}>
            <h3>Hover me</h3>
            <a href="#" className={style.btn3d}>
              Learn More
            </a>
          </div>
        </div>
      ),
      card: () => (
        <div className={style.card}>
          <img src="./image.webp" alt="card image" className={style.cardImg} />
          <div className={style.cardContent}>
            <h3>Card Title</h3>
            <a href="" className={style.cardBtn}>
              Read More
            </a>
          </div>
        </div>
      ),
      // Basic form previews for items saved from Form gallery
      // We detect by id prefix 'form-' or by item.type === 'form'
      __renderFormPreview: (title) => (
        <div className="w-full p-4">
          <form className="w-full">
            <h2 className="text-center mb-3 text-gray-800 dark:text-gray-200">{title || "Form"}</h2>
            <label className="mb-2 block text-gray-700 dark:text-gray-300">Field 1</label>
            <input className="w-full p-2 mb-3 rounded bg-white dark:bg-gray-700" />
            <label className="mb-2 block text-gray-700 dark:text-gray-300">Field 2</label>
            <input className="w-full p-2 mb-3 rounded bg-white dark:bg-gray-700" />
            <button className="w-full p-2 bg-blue-600 text-white rounded">Submit</button>
          </form>
        </div>
      ),
    }),
    []
  );

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const list = raw ? JSON.parse(raw) : [];
      setFavorites(Array.isArray(list) ? list : []);
    } catch (_) {
      setFavorites([]);
    }
  }, []);

  const reloadFavorites = () => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const list = raw ? JSON.parse(raw) : [];
      setFavorites(Array.isArray(list) ? list : []);
    } catch (_) {}
  };

  const handleViewItemClick = async (item) => {
    try {
      const isForm = item?.type === "form" || String(item?.id || "").startsWith("form-");
      const htmlPath = isForm ? `/formCode/${item.htmlFile}` : `/htmlCode/${item.htmlFile}`;
      const htmlResponse = await fetch(htmlPath);
      const htmlCode = await htmlResponse.text();

      let cssCode = "";
      if (!isForm && item?.cssFile) {
        try {
          const cssResponse = await fetch(`/cssCode/${item.cssFile}`);
          cssCode = await cssResponse.text();
        } catch (_) {
          cssCode = "";
        }
      }

      setHtmlCodeToShow(htmlCode || "");
      setCssCodeToShow(cssCode || "");
      setShowCodeModal(true);
    } catch (error) {
      console.error("Error fetching files:", error);
    }
  };

  const handleCopyHtmlToClipboard = () => {
    navigator.clipboard.writeText(htmlCodeToShow).then(() => {
      alert("HTML Code copied to clipboard!");
    });
  };

  const handleCopyCssToClipboard = () => {
    navigator.clipboard.writeText(cssCodeToShow).then(() => {
      alert("CSS Code copied to clipboard!");
    });
  };

  const forms = favorites.filter((f) => f?.type === "form" || String(f?.id || "").startsWith("form-"));
  const cssSnippets = favorites.filter((f) => f?.type === "css" || !(String(f?.id || "").startsWith("form-")));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 pt-24">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">Your Favorites</h1>
        {favorites.length === 0 ? (
          <p className="text-gray-700 dark:text-gray-300">No favorites saved yet.</p>
        ) : (
          <>
            {/* Forms Section */}
            {forms.length > 0 && (
              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4 h-20">Forms</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-2">
                  {forms.map((snip) => (
                    <div key={snip.id} className="w-56 h-72 flex flex-col items-stretch relative group bg-transparent dark:bg-transparent rounded-xl border border-transparent shadow-none overflow-visible">
                      <div className="absolute top-2 right-2 z-10 flex items-center gap-2">
                        <FavoriteButton item={snip} onToggle={reloadFavorites} />
                        <button
                          className="flex items-center justify-center w-8 h-8 bg-gray-200/90 dark:bg-gray-700/80 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-full cursor-pointer transition-colors duration-200"
                          onClick={() => handleViewItemClick(snip)}
                          aria-label="View code"
                        >
                          <Copy size={18} className="text-gray-700 dark:text-gray-200" />
                        </button>
                      </div>
                      <div className="w-full h-full flex items-center justify-center p-3">
                        {renderers[snip.id] ? renderers[snip.id]() : renderers.__renderFormPreview(snip.title)}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* CSS Section */}
            {cssSnippets.length > 0 && (
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">CSS</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-2">
                  {cssSnippets.map((snip) => (
                    <div key={snip.id} className="w-56 h-72 flex flex-col items-stretch relative group bg-transparent dark:bg-transparent rounded-xl border border-transparent shadow-none overflow-visible">
                      <div className="absolute top-2 right-2 z-10 flex items-center gap-2">
                        <FavoriteButton item={snip} onToggle={reloadFavorites} />
                        <button
                          className="flex items-center justify-center w-8 h-8 bg-gray-200/90 dark:bg-gray-700/80 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-full cursor-pointer transition-colors duration-200"
                          onClick={() => handleViewItemClick(snip)}
                          aria-label="View code"
                        >
                          <Copy size={18} className="text-gray-700 dark:text-gray-200" />
                        </button>
                      </div>
                      <div className="w-full h-full flex items-center justify-center p-3 overflow-auto">
                        {renderers[snip.id] ? (
                          renderers[snip.id]()
                        ) : (
                          <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{snip.title}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </>
        )}
      </div>

      {showCodeModal && (
        <CodeModal
          htmlCode={htmlCodeToShow}
          cssCode={cssCodeToShow}
          onClose={() => setShowCodeModal(false)}
          onCopyHtml={handleCopyHtmlToClipboard}
          onCopyCss={handleCopyCssToClipboard}
        />
      )}
    </div>
  );
}
