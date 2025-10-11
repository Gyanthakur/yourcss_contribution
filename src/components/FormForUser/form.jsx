"use client";

import React, { useState, useEffect } from "react";
// import style from "./form.Module.css";
import style from "./form.module.css";
import { Copy } from "phosphor-react";
import FavoriteButton from "@/components/FavoriteButton";

// Modal component to display both HTML and CSS code with copy functionality
const CodeModal = ({ htmlCode, cssCode, onClose, onCopyHtml, onCopyCss }) => {
	return (
		<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 dark:bg-black dark:bg-opacity-70 z-50 mb-10 backdrop-blur-sm">
			<div className="bg-white dark:bg-gray-800 p-6 rounded-lg w-full max-w-4xl relative flex flex-col h-3/4 shadow-2xl border border-gray-200 dark:border-gray-700 transition-colors duration-300">
				<h2 className="text-xl mb-4 text-gray-900 dark:text-gray-100 font-semibold">Code Viewer:</h2>
				<div className="flex-1 overflow-y-auto custom-scrollbar scroll-smooth">
					{/* Display HTML Code */}
					<div className="relative">
						<h3 className="text-lg mb-2 font-bold text-gray-800 dark:text-gray-200">HTML Code:</h3>
						<button
							className="absolute top-0 right-0 m-2 text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200"
							onClick={onCopyHtml}
						>
							<Copy size={20} />
						</button>
						<pre className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 p-4 rounded overflow-auto mb-4 border border-gray-200 dark:border-gray-600 text-sm">
							{htmlCode}
						</pre>
					</div>
					{/* Display CSS Code */}
					{/* <div className="relative">
						<h3 className="text-lg mb-2 font-bold">CSS Code:</h3>
						<button
							className="absolute top-0 right-0 m-2 text-blue-500 hover:text-blue-700"
							onClick={onCopyCss}
						>
							<Copy size={25} />
						</button>
						<pre className="bg-gray-100 p-4 rounded overflow-auto">
							{cssCode}
						</pre>
					</div> */}
				</div>
				{/* Copy and Close Buttons */}
				<div className="mt-4 flex flex-col sm:flex-row gap-2 justify-between">
					<button
						className="bg-blue-500 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors duration-200 w-full sm:w-auto"
						onClick={onCopyHtml}
					>
						Copy HTML Code
					</button>
					{/* <button
						className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 w-full sm:w-auto"
						onClick={onCopyCss}
					>
						Copy CSS Code
					</button> */}
					<button
						className="bg-red-500 hover:bg-red-700 dark:bg-red-600 dark:hover:bg-red-700 text-white px-4 py-2 rounded transition-colors duration-200 w-full sm:w-auto"
						onClick={onClose}
					>
						Close
					</button>
				</div>
			</div>
		</div>
	);
};

const Form = () => {
	const [showCodeModal, setShowCodeModal] = useState(false);
	const [htmlCodeToShow, setHtmlCodeToShow] = useState("");
	const [cssCodeToShow, setCssCodeToShow] = useState("");

	// Function to fetch both CSS and HTML file content and open the modal
	const handleViewCodeClick = async (htmlFileName, cssFileName) => {
		try {
			const [htmlResponse, cssResponse] = await Promise.all([
				fetch(`/formCode/${htmlFileName}`),
				fetch(`/cssCode/${cssFileName}`),
			]);
			const htmlCode = await htmlResponse.text();
			const cssCode = await cssResponse.text();
			setHtmlCodeToShow(htmlCode);
			setCssCodeToShow(cssCode);
			setShowCodeModal(true);
		} catch (error) {
			console.error("Error fetching files:", error);
		}
	};

	// Function to copy HTML code to clipboard
	const handleCopyHtmlToClipboard = () => {
		navigator.clipboard.writeText(htmlCodeToShow).then(() => {
			alert("HTML Code copied to clipboard!");
		});
	};

	// Function to copy CSS code to clipboard
	const handleCopyCssToClipboard = () => {
		navigator.clipboard.writeText(cssCodeToShow).then(() => {
			alert("CSS Code copied to clipboard!");
		});
	};
	




	return (
		<div className="bg-white dark:bg-gray-900 transition-colors duration-300">
			<div className="text-center p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md transition-colors duration-300">
				<p className="mt-1 flex items-center justify-center m-auto text-2xl font-bold text-gray-700 dark:text-gray-300">
					You can easily use all the forms by copying the code. When you hover
					over any form, a copy button will appear in the right corner, allowing
					you to quickly copy the component code. All the forms are designed
					using Tailwind CSS for seamless integration.
				</p>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4 rounded-md">
				{showCodeModal && (
					<CodeModal
						htmlCode={htmlCodeToShow}
						cssCode={cssCodeToShow}
						onClose={() => setShowCodeModal(false)}
						onCopyHtml={handleCopyHtmlToClipboard}
						onCopyCss={handleCopyCssToClipboard}
					/>
				)}

				{/* Form 1 */}
				<div className="bg-red-400 dark:bg-red-500 hover:bg-sky-400 dark:hover:bg-sky-500 flex duration-500 hover:scale-105 justify-center items-center relative group p-6 rounded-lg shadow-md dark:shadow-gray-700/30 border border-transparent dark:border-gray-600 transition-all">
					<div>
						<form>
							<h2 className="text-center mb-4 text-white">Login</h2>
							<label htmlFor="email" className="text-white mb-2 block">
								Email:
							</label>
							<input
								type="text"
								id="email"
								name="email"
								required
								className="w-full p-2 mb-4 rounded"
							/>
							<label htmlFor="password" className="text-white mb-2 block">
								Password:
							</label>
							<input
								type="password"
								id="password"
								name="password"
								required
								className="w-full p-2 mb-4 rounded"
							/>
							<button
								type="submit"
								className="w-full p-2 bg-blue-500 hover:bg-blue-700 text-white rounded"
							>
								Login
							</button>
						</form>
						<div className="absolute top-2 right-2 hidden group-hover:flex items-center gap-2">
							<FavoriteButton item={{ id: "form-1", type: "form", title: "Login Form", htmlFile: "form1.html", cssFile: "form1.css" }} />
							<button
								className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full cursor-pointer"
								onClick={() => handleViewCodeClick("form1.html", "form1.css")}
								aria-label="View code"
							>
								<Copy size={20} />
							</button>
						</div>
					</div>
				</div>

				{/* Form 2 */}
				<div className="bg-yellow-400 hover:bg-sky-400 flex duration-500 hover:scale-105 justify-center items-center relative group p-6 rounded-lg shadow-md">
					{/* Another form goes here */}
					<div>
						<form>
							<h2 className="text-center mb-4">Register</h2>
							<label htmlFor="username" className="mb-2 block">
								Username:
							</label>
							<input
								type="text"
								id="username"
								name="username"
								required
								className="w-full p-2 mb-4 rounded"
							/>
							<label htmlFor="password" className="mb-2 block">
								Password:
							</label>
							<input
								type="password"
								id="password"
								name="password"
								required
								className="w-full p-2 mb-4 rounded"
							/>
							<button
								type="submit"
								className="w-full p-2 bg-green-500 hover:bg-green-700 text-white rounded"
							>
								Register
							</button>
						</form>
						<div className="absolute top-2 right-2 hidden group-hover:flex items-center gap-2">
							<FavoriteButton item={{ id: "form-2", type: "form", title: "Register Form", htmlFile: "form2.html", cssFile: "form2.css" }} />
							<button
								className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full cursor-pointer"
								onClick={() => handleViewCodeClick("form2.html", "form2.css")}
								aria-label="View code"
							>
								<Copy size={20} />
							</button>
						</div>
					</div>
				</div>

				{/* Form 3 */}
				<div className="bg-green-400 hover:bg-sky-400 flex duration-500 hover:scale-105 justify-center items-center relative group p-6 rounded-lg shadow-md">
					{/* Another form goes here */}
					<div className={style.loginForm}>
						<form className={style.loginForm}>
							<h2 className="text-center mb-4">Contact Us</h2>
							<label htmlFor="name" className="mb-2 block">
								Name:
							</label>
							<input
								type="text"
								id="name"
								name="name"
								required
								className="w-full p-2 mb-4 rounded"
							/>
							<label htmlFor="message" className="mb-2 block">
								Message:
							</label>
							<textarea
								id="message"
								name="message"
								required
								className="w-full p-2 mb-4 rounded"
							></textarea>
							<button
								type="submit"
								className="w-full p-2 bg-red-500 hover:bg-red-700 text-white rounded"
							>
								Send
							</button>
						</form>
						<div className="absolute top-2 right-2 hidden group-hover:flex items-center gap-2">
							<FavoriteButton item={{ id: "form-3", type: "form", title: "Contact Us Form", htmlFile: "form3.html", cssFile: "form3.css" }} />
							<button
								className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full cursor-pointer"
								onClick={() => handleViewCodeClick("form3.html", "form3.css")}
								aria-label="View code"
							>
								<Copy size={20} />
							</button>
						</div>
					</div>
				</div>

				{/* Form 4 (2D Form) */}
				<div className="bg-pink-500 hover:bg-yellow-400 transform transition-transform duration-500 hover:scale-105 flex justify-center items-center relative group p-4 rounded-lg shadow-lg">
					<div>
						<form>
							<h2 className="text-center mb-4 text-white">Survey</h2>
							<label htmlFor="age" className="text-white mb-2 block">
								Age:
							</label>
							<input
								type="number"
								id="age"
								name="age"
								required
								className="w-full p-2 mb-4 rounded"
							/>
							<label htmlFor="feedback" className="text-white mb-2 block">
								Feedback:
							</label>
							<textarea
								id="feedback"
								name="feedback"
								required
								className="w-full p-2 mb-4 rounded"
							></textarea>
							<button
								type="submit"
								className="w-full p-2 bg-blue-500 hover:bg-blue-700 text-white rounded"
							>
								Submit
							</button>
						</form>
						<div className="absolute top-2 right-2 hidden group-hover:flex items-center gap-2">
							<FavoriteButton item={{ id: "form-4", type: "form", title: "Survey Form", htmlFile: "form4.html", cssFile: "form4.css" }} />
							<button
								className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full cursor-pointer"
								onClick={() => handleViewCodeClick("form4.html", "form4.css")}
								aria-label="View code"
							>
								<Copy size={20} />
							</button>
						</div>
					</div>
				</div>

				{/* Form 5 (3D Form) */}
				<div className="bg-blue-500 hover:bg-purple-500 transform transition-transform duration-700 hover:rotate-45 hover:scale-105 flex justify-center items-center relative group p-6 rounded-lg shadow-2xl perspective-1000">
					<div className="loginForm transform hover:rotate-y-45">
						<form>
							<h2 className="text-center mb-4 text-white">Booking</h2>
							<label htmlFor="name" className="text-white mb-2 block">
								Full Name:
							</label>
							<input
								type="text"
								id="name"
								name="name"
								required
								className="w-full p-2 mb-4 rounded"
							/>
							<label htmlFor="date" className="text-white mb-2 block">
								Date:
							</label>
							<input
								type="date"
								id="date"
								name="date"
								required
								className="w-full p-2 mb-4 rounded"
							/>
							<button
								type="submit"
								className="w-full p-2 bg-green-500 hover:bg-green-700 text-white rounded"
							>
								Book
							</button>
						</form>
						<div className="absolute top-2 right-2 hidden group-hover:flex items-center gap-2">
							<FavoriteButton item={{ id: "form-5", type: "form", title: "Booking Form", htmlFile: "form5.html", cssFile: "form5.css" }} />
							<button
								className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full cursor-pointer"
								onClick={() => handleViewCodeClick("form5.html", "form5.css")}
								aria-label="View code"
							>
								<Copy size={20} />
							</button>
						</div>
					</div>
				</div>

				{/* Form 6 (Simple with Extra Inputs) */}
				<div className="bg-purple-400 hover:bg-green-400 flex justify-center duration-500 hover:scale-x-90 items-center relative group p-5 rounded-lg shadow-lg">
					<div>
						<form>
							<h2 className="text-center mb-4 text-white">Job Application</h2>
							<label htmlFor="name" className="text-white mb-2 block">
								Full Name:
							</label>
							<input
								type="text"
								id="name"
								name="name"
								required
								className="w-full p-2 mb-4 rounded"
							/>
							<label htmlFor="cv" className="text-white mb-2 block">
								Upload CV:
							</label>
							<input
								type="file"
								id="cv"
								name="cv"
								required
								className="w-full p-2 mb-4 rounded"
							/>
							<label htmlFor="portfolio" className="text-white mb-2 block">
								Portfolio Link:
							</label>
							<input
								type="url"
								id="portfolio"
								name="portfolio"
								className="w-full p-2 mb-4 rounded"
							/>
							<button
								type="submit"
								className="w-full p-2 bg-red-500 hover:bg-red-700 text-white rounded"
							>
								Apply
							</button>
						</form>
						<div className="absolute top-2 right-2 hidden group-hover:flex items-center gap-2">
							<FavoriteButton item={{ id: "form-6", type: "form", title: "Job Application", htmlFile: "form6.html", cssFile: "form6.css" }} />
							<button
								className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full cursor-pointer"
								onClick={() => handleViewCodeClick("form6.html", "form6.css")}
								aria-label="View code"
							>
								<Copy size={20} />
							</button>
						</div>
					</div>
				</div>

				{/* Form 7 (Compact 2D Form) */}
				<div className="bg-teal-400 hover:bg-teal-600 flex duration-500 hover:scale-105 justify-center items-center relative group p-4 rounded-lg shadow-md">
					<div>
						<form>
							<h2 className="text-center mb-4 text-white">Feedback</h2>
							<label htmlFor="userEmail" className="text-white mb-2 block">
								Email:
							</label>
							<input
								type="email"
								id="userEmail"
								name="userEmail"
								required
								className="w-full p-2 mb-4 rounded"
							/>
							<label htmlFor="userFeedback" className="text-white mb-2 block">
								Your Feedback:
							</label>
							<textarea
								id="userFeedback"
								name="userFeedback"
								required
								className="w-full p-2 mb-4 rounded"
							></textarea>
							<button
								type="submit"
								className="w-full p-2 bg-blue-600 hover:bg-blue-800 text-white rounded"
							>
								Submit
							</button>
						</form>
						<div className="absolute top-2 right-2 hidden group-hover:flex items-center gap-2">
							<FavoriteButton item={{ id: "form-7", type: "form", title: "Feedback Form", htmlFile: "form7.html", cssFile: "form7.css" }} />
							<button
								className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full cursor-pointer"
								onClick={() => handleViewCodeClick("form7.html", "form7.css")}
								aria-label="View code"
							>
								<Copy size={20} />
							</button>
						</div>
					</div>
				</div>

				{/* Form 8 (3D Rotation Form) */}
				<div className="bg-orange-500 hover:bg-orange-700 duration-500 hover:scale-105 flex justify-center items-center relative group p-6 rounded-lg shadow-xl perspective-1000">
					<div className="loginForm transform hover:rotate-x-6 hover:rotate-y-6 transition-transform duration-700">
						<form>
							<h2 className="text-center mb-4 text-white">
								Event Registration
							</h2>
							<label htmlFor="eventName" className="text-white mb-2 block">
								Event Name:
							</label>
							<input
								type="text"
								id="eventName"
								name="eventName"
								required
								className="w-full p-2 mb-4 rounded"
							/>
							<label htmlFor="attendeeName" className="text-white mb-2 block">
								Your Name:
							</label>
							<input
								type="text"
								id="attendeeName"
								name="attendeeName"
								required
								className="w-full p-2 mb-4 rounded"
							/>
							<label htmlFor="attendeeName" className="text-white mb-2 block">
								Event Date:
							</label>
							<input
								type="date"
								id="date"
								name="date"
								required
								className="w-full p-2 mb-4 rounded"
							/>
							<button
								type="submit"
								className="w-full p-2 bg-green-600 hover:bg-green-800 text-white rounded"
							>
								Register
							</button>
						</form>
						<div className="absolute top-2 right-2 hidden group-hover:flex items-center gap-2">
							<FavoriteButton item={{ id: "form-8", type: "form", title: "Event Registration", htmlFile: "form8.html", cssFile: "form8.css" }} />
							<button
								className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full cursor-pointer"
								onClick={() => handleViewCodeClick("form8.html", "form8.css")}
								aria-label="View code"
							>
								<Copy size={20} />
							</button>
						</div>
					</div>
				</div>

				{/* Form 9 (Vertical Layout Form) */}
				<div className="bg-indigo-400 hover:bg-indigo-600 flex duration-500 hover:scale-x-90 justify-center items-center relative group p-5 rounded-lg shadow-lg">
					<div>
						<form>
							<h2 className="text-center mb-4 text-white">Profile Update</h2>
							<label htmlFor="fullName" className="text-white mb-2 block">
								Full Name:
							</label>
							<input
								type="text"
								id="fullName"
								name="fullName"
								required
								className="w-full p-2 mb-4 rounded"
							/>
							<label htmlFor="bio" className="text-white mb-2 block">
								Bio:
							</label>
							<textarea
								id="bio"
								name="bio"
								className="w-full p-2 mb-4 rounded"
							></textarea>
							<label htmlFor="profilePic" className="text-white mb-2 block">
								Profile Picture:
							</label>
							<input
								type="file"
								id="profilePic"
								name="profilePic"
								required
								className="w-full p-2 mb-4 rounded"
							/>
							<button
								type="submit"
								className="w-full p-2 bg-red-600 hover:bg-red-800 text-white rounded"
							>
								Update
							</button>
						</form>
						<div className="absolute top-2 right-2 hidden group-hover:flex items-center gap-2">
							<FavoriteButton item={{ id: "form-9", type: "form", title: "Profile Update", htmlFile: "form9.html", cssFile: "form9.css" }} />
							<button
								className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full cursor-pointer"
								onClick={() => handleViewCodeClick("form9.html", "form9.css")}
								aria-label="View code"
							>
								<Copy size={20} />
							</button>
						</div>
					</div>
				</div>

				{/* Form 10 (Stylized Card Form) */}
				<div className="bg-gray-600 hover:bg-gray-800 flex duration-500 hover:scale-105 justify-center items-center relative group p-5 rounded-lg shadow-2xl">
					<div>
						<form>
							<h2 className="text-center mb-4 text-white">
								Newsletter Subscription
							</h2>
							<label
								htmlFor="newsletterEmail"
								className="text-white mb-2 block"
							>
								Email:
							</label>
							<input
								type="email"
								id="newsletterEmail"
								name="newsletterEmail"
								required
								className="w-full p-2 mb-4 rounded"
							/>
							<button
								type="submit"
								className="w-full p-2 bg-teal-600 hover:bg-teal-800 text-white rounded"
							>
								Subscribe
							</button>
						</form>
						<div className="absolute top-2 right-2 hidden group-hover:flex items-center gap-2">
							<FavoriteButton item={{ id: "form-10", type: "form", title: "Newsletter Subscription", htmlFile: "form10.html", cssFile: "form10.css" }} />
							<button
								className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full cursor-pointer"
								onClick={() => handleViewCodeClick("form10.html", "form10.css")}
								aria-label="View code"
							>
								<Copy size={20} />
							</button>
						</div>
					</div>
				</div>

				{/* long form start here */}

				{/* form 11 */}
				<div className="bg-teal-900 hover:bg-teal-600 flex duration-500 hover:scale-105 justify-center items-center relative group p-8 rounded-lg shadow-2xl transform transition-transform perspective-1000 mb-4">
					<div className="loginForm transform hover:rotate-x-6 hover:rotate-y-6 transition-transform duration-700">
						<form>
							<h2 className="text-center mb-4 text-white">
								Inquiry Submission Form
							</h2>

							{/* First Name */}
							<label htmlFor="firstName5" className="text-white mb-2 block">
								First Name:
							</label>
							<input
								type="text"
								id="firstName5"
								name="firstName5"
								required
								className="w-full p-2 mb-4 rounded"
							/>

							{/* Last Name */}
							<label htmlFor="lastName5" className="text-white mb-2 block">
								Last Name:
							</label>
							<input
								type="text"
								id="lastName5"
								name="lastName5"
								required
								className="w-full p-2 mb-4 rounded"
							/>

							{/* Email */}
							<label htmlFor="email5" className="text-white mb-2 block">
								Email:
							</label>
							<input
								type="email"
								id="email5"
								name="email5"
								required
								className="w-full p-2 mb-4 rounded"
							/>

							{/* Phone */}
							<label htmlFor="phone5" className="text-white mb-2 block">
								Phone:
							</label>
							<input
								type="tel"
								id="phone5"
								name="phone5"
								required
								className="w-full p-2 mb-4 rounded"
							/>

							{/* Address */}
							<label htmlFor="address5" className="text-white mb-2 block">
								Address:
							</label>
							<input
								type="text"
								id="address5"
								name="address5"
								required
								className="w-full p-2 mb-4 rounded"
							/>

							{/* Message/Query */}
							<label htmlFor="message5" className="text-white mb-2 block">
								Message/Query:
							</label>
							<textarea
								id="message5"
								name="message5"
								required
								className="w-full p-2 mb-4 rounded"
							></textarea>

							{/* Submit Button */}
							<button
								type="submit"
								className="w-full p-2 bg-blue-600 hover:bg-blue-800 text-white rounded"
							>
								Submit Inquiry
							</button>
						</form>

						<div className="absolute top-2 right-2 hidden group-hover:flex items-center gap-2">
							<FavoriteButton item={{ id: "form-11", type: "form", title: "Inquiry Submission", htmlFile: "form11.html", cssFile: "form11.css" }} />
							<button
								className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full cursor-pointer"
								onClick={() => handleViewCodeClick("form11.html", "form11.css")}
								aria-label="View code"
							>
								<Copy size={20} />
							</button>
						</div>
					</div>
				</div>

				{/* form 12 */}

				<div className="bg-gray-800 hover:bg-indigo-950 flex duration-500 hover:scale-105 justify-center items-center relative group p-8 rounded-lg shadow-2xl transform transition-transform perspective-1000 mb-4">
					<div className="loginForm transform hover:rotate-x-6 hover:rotate-y-6 transition-transform duration-700">
						<form>
							<h2 className="text-center mb-4 text-white">Contact Us</h2>

							{/* First Name */}
							<label htmlFor="firstName1" className="text-white mb-2 block">
								First Name:
							</label>
							<input
								type="text"
								id="firstName1"
								name="firstName1"
								required
								className="w-full p-2 mb-4 rounded"
							/>

							{/* Last Name */}
							<label htmlFor="lastName1" className="text-white mb-2 block">
								Last Name:
							</label>
							<input
								type="text"
								id="lastName1"
								name="lastName1"
								required
								className="w-full p-2 mb-4 rounded"
							/>

							{/* Email */}
							<label htmlFor="email1" className="text-white mb-2 block">
								Email:
							</label>
							<input
								type="email"
								id="email1"
								name="email1"
								required
								className="w-full p-2 mb-4 rounded"
							/>

							{/* Phone */}
							<label htmlFor="phone1" className="text-white mb-2 block">
								Phone:
							</label>
							<input
								type="tel"
								id="phone1"
								name="phone1"
								required
								className="w-full p-2 mb-4 rounded"
							/>

							{/* Address */}
							<label htmlFor="address1" className="text-white mb-2 block">
								Address:
							</label>
							<input
								type="text"
								id="address1"
								name="address1"
								required
								className="w-full p-2 mb-4 rounded"
							/>

							{/* Message/Query */}
							<label htmlFor="message1" className="text-white mb-2 block">
								Message/Query:
							</label>
							<textarea
								id="message1"
								name="message1"
								required
								className="w-full p-2 mb-4 rounded"
							></textarea>

							{/* Submit Button */}
							<button
								type="submit"
								className="w-full p-2 bg-blue-600 hover:bg-blue-800 text-white rounded"
							>
								Send Message
							</button>
						</form>

						<div className="absolute top-2 right-2 hidden group-hover:flex items-center gap-2">
							<FavoriteButton item={{ id: "form-12", type: "form", title: "Contact Us (2)", htmlFile: "form12.html", cssFile: "form12.css" }} />
							<button
								className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full cursor-pointer"
								onClick={() => handleViewCodeClick("form12.html", "form12.css")}
								aria-label="View code"
							>
								<Copy size={20} />
							</button>
						</div>
					</div>
				</div>

				{/* form  13*/}
				<div className="bg-gray-700 hover:bg-gray-500 flex hover:scale-105  justify-center items-center relative group p-8 rounded-lg shadow-2xl transform transition-transform duration-500 perspective-1000 mb-4">
					<div className="loginForm transform hover:rotate-x-6 hover:rotate-y-6 transition-transform duration-700">
						<form>
							<h2 className="text-center mb-4 text-white">Feedback Form</h2>

							{/* First Name */}
							<label htmlFor="firstName2" className="text-white mb-2 block">
								First Name:
							</label>
							<input
								type="text"
								id="firstName2"
								name="firstName2"
								required
								className="w-full p-2 mb-4 rounded"
							/>

							{/* Last Name */}
							<label htmlFor="lastName2" className="text-white mb-2 block">
								Last Name:
							</label>
							<input
								type="text"
								id="lastName2"
								name="lastName2"
								required
								className="w-full p-2 mb-4 rounded"
							/>

							{/* Email */}
							<label htmlFor="email2" className="text-white mb-2 block">
								Email:
							</label>
							<input
								type="email"
								id="email2"
								name="email2"
								required
								className="w-full p-2 mb-4 rounded"
							/>

							{/* Phone */}
							<label htmlFor="phone2" className="text-white mb-2 block">
								Phone:
							</label>
							<input
								type="tel"
								id="phone2"
								name="phone2"
								required
								className="w-full p-2 mb-4 rounded"
							/>

							{/* Address */}
							<label htmlFor="address2" className="text-white mb-2 block">
								Address:
							</label>
							<input
								type="text"
								id="address2"
								name="address2"
								required
								className="w-full p-2 mb-4 rounded"
							/>

							{/* Message/Query */}
							<label htmlFor="message2" className="text-white mb-2 block">
								Message/Query:
							</label>
							<textarea
								id="message2"
								name="message2"
								required
								className="w-full p-2 mb-4 rounded"
							></textarea>

							{/* Submit Button */}
							<button
								type="submit"
								className="w-full p-2 bg-blue-600 hover:bg-blue-800 text-white rounded"
							>
								Send Feedback
							</button>
						</form>

						<div className="absolute top-2 right-2 hidden group-hover:flex items-center gap-2">
							<FavoriteButton item={{ id: "form-13", type: "form", title: "Feedback (2)", htmlFile: "form13.html", cssFile: "form13.css" }} />
							<button
								className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full cursor-pointer"
								onClick={() => handleViewCodeClick("form13.html", "form13.css")}
								aria-label="View code"
							>
								<Copy size={20} />
							</button>
						</div>
					</div>
				</div>

				{/* form 14 */}
				<div className="bg-gray-600 hover:bg-gray-800 flex duration-500 hover:scale-105 justify-center items-center relative group p-8 rounded-lg shadow-2xl transform transition-transform perspective-1000 mb-4">
					<div className="loginForm transform hover:rotate-x-6 hover:rotate-y-6 transition-transform duration-700">
						<form>
							<h2 className="text-center mb-4 text-white">Inquiry Form</h2>

							{/* First Name */}
							<label htmlFor="firstName3" className="text-white mb-2 block">
								First Name:
							</label>
							<input
								type="text"
								id="firstName3"
								name="firstName3"
								required
								className="w-full p-2 mb-4 rounded"
							/>

							{/* Last Name */}
							<label htmlFor="lastName3" className="text-white mb-2 block">
								Last Name:
							</label>
							<input
								type="text"
								id="lastName3"
								name="lastName3"
								required
								className="w-full p-2 mb-4 rounded"
							/>

							{/* Email */}
							<label htmlFor="email3" className="text-white mb-2 block">
								Email:
							</label>
							<input
								type="email"
								id="email3"
								name="email3"
								required
								className="w-full p-2 mb-4 rounded"
							/>

							{/* Phone */}
							<label htmlFor="phone3" className="text-white mb-2 block">
								Phone:
							</label>
							<input
								type="tel"
								id="phone3"
								name="phone3"
								required
								className="w-full p-2 mb-4 rounded"
							/>

							{/* Address */}
							<label htmlFor="address3" className="text-white mb-2 block">
								Address:
							</label>
							<input
								type="text"
								id="address3"
								name="address3"
								required
								className="w-full p-2 mb-4 rounded"
							/>

							{/* Message/Query */}
							<label htmlFor="message3" className="text-white mb-2 block">
								Message/Query:
							</label>
							<textarea
								id="message3"
								name="message3"
								required
								className="w-full p-2 mb-4 rounded"
							></textarea>

							{/* Submit Button */}
							<button
								type="submit"
								className="w-full p-2 bg-blue-600 hover:bg-blue-800 text-white rounded"
							>
								Submit Inquiry
							</button>
						</form>

						<div className="absolute top-2 right-2 hidden group-hover:flex items-center gap-2">
							<FavoriteButton item={{ id: "form-14", type: "form", title: "Inquiry (2)", htmlFile: "form14.html", cssFile: "form14.css" }} />
							<button
								className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full cursor-pointer"
								onClick={() => handleViewCodeClick("form14.html", "form14.css")}
								aria-label="View code"
							>
								<Copy size={20} />
							</button>
						</div>
					</div>
				</div>

				{/* form 15 */}

				<div className="bg-blue-900 hover:bg-blue-600 hover:text-black flex duration-500 hover:scale-105 justify-center items-center relative group p-8 rounded-lg shadow-2xl transform transition-transform perspective-1000 mb-4">
					<div className="loginForm transform hover:rotate-x-6 hover:rotate-y-6 transition-transform duration-700">
						<form>
							<h2 className="text-center mb-4 text-white">Registration Form</h2>

							{/* First Name */}
							<label htmlFor="firstName4" className="text-white mb-2 block">
								First Name:
							</label>
							<input
								type="text"
								id="firstName4"
								name="firstName4"
								required
								className="w-full p-2 mb-4 rounded"
							/>

							{/* Last Name */}
							<label htmlFor="lastName4" className="text-white mb-2 block">
								Last Name:
							</label>
							<input
								type="text"
								id="lastName4"
								name="lastName4"
								required
								className="w-full p-2 mb-4 rounded"
							/>

							{/* Email */}
							<label htmlFor="email4" className="text-white mb-2 block">
								Email:
							</label>
							<input
								type="email"
								id="email4"
								name="email4"
								required
								className="w-full p-2 mb-4 rounded"
							/>

							{/* Phone */}
							<label htmlFor="phone4" className="text-white mb-2 block">
								Phone:
							</label>
							<input
								type="tel"
								id="phone4"
								name="phone4"
								required
								className="w-full p-2 mb-4 rounded"
							/>

							{/* Address */}
							<label htmlFor="address4" className="text-white mb-2 block">
								Address:
							</label>
							<input
								type="text"
								id="address4"
								name="address4"
								required
								className="w-full p-2 mb-4 rounded"
							/>

							{/* Message/Query */}
							<label htmlFor="message4" className="text-white mb-2 block">
								Message/Query:
							</label>
							<textarea
								id="message4"
								name="message4"
								required
								className="w-full p-2 mb-4 rounded"
							></textarea>

							{/* Submit Button */}
							<button
								type="submit"
								className="w-full p-2 bg-blue-600 hover:bg-blue-800 text-white rounded"
							>
								Register
							</button>
						</form>

						<div className="absolute top-2 right-2 hidden group-hover:flex items-center gap-2">
							<FavoriteButton item={{ id: "form-15", type: "form", title: "Registration Form", htmlFile: "form15.html", cssFile: "form15.css" }} />
							<button
								className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full cursor-pointer"
								onClick={() => handleViewCodeClick("form15.html", "form15.css")}
								aria-label="View code"
							>
								<Copy size={20} />
							</button>
						</div>
					</div>
				</div>

			</div>
		</div>
	);
};

export default Form;
