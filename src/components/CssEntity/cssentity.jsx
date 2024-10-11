"use client";

import React, { useState } from "react";
import style from "./cssentity.module.css";
import { Copy } from "phosphor-react";

// Modal component to display both HTML and CSS code with copy functionality
const CodeModal = ({ htmlCode, cssCode, onClose, onCopyHtml, onCopyCss }) => {
	return (
		<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
			<div className="bg-white p-6 rounded-lg w-full max-w-4xl relative flex flex-col h-3/4">
				<h2 className="text-xl mb-4">Code Viewer:</h2>

				<div className="flex-1 overflow-y-auto custom-scrollbar">
					{/* Display HTML Code */}
					<div className="relative">
						<h3 className="text-lg mb-2 font-bold">HTML Code:</h3>
						<button
							className="absolute top-0 right-0 m-2 text-blue-500 hover:text-blue-700"
							onClick={onCopyHtml}
						>
							<Copy size={25} />
						</button>
						<pre className="bg-gray-100 p-4 rounded overflow-auto mb-4">
							{htmlCode}
						</pre>
					</div>

					{/* Display CSS Code */}
					<div className="relative">
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
					</div>
				</div>

				{/* Copy and Close Buttons */}
				<div className="mt-4 flex flex-col sm:flex-row gap-2 justify-between">
					<button
						className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 w-full sm:w-auto"
						onClick={onCopyHtml}
					>
						Copy HTML Code
					</button>
					<button
						className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 w-full sm:w-auto"
						onClick={onCopyCss}
					>
						Copy CSS Code
					</button>
					<button
						className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 w-full sm:w-auto"
						onClick={onClose}
					>
						Close
					</button>
				</div>
			</div>
		</div>
	);
};

const CssEntity = () => {
	const [showCodeModal, setShowCodeModal] = useState(false);
	const [htmlCodeToShow, setHtmlCodeToShow] = useState("");
	const [cssCodeToShow, setCssCodeToShow] = useState("");

	// Function to fetch both CSS and HTML file content and open the modal
	const handleViewCodeClick = async (htmlFileName, cssFileName) => {
		try {
			const [htmlResponse, cssResponse] = await Promise.all([
				fetch(`/htmlCode/${htmlFileName}`),
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
		// <div className="grid grid-cols-5 gap-4">
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
			{/* Display modal with both HTML and CSS code when showCodeModal is true */}
			{showCodeModal && (
				<CodeModal
					htmlCode={htmlCodeToShow}
					cssCode={cssCodeToShow}
					onClose={() => setShowCodeModal(false)}
					onCopyHtml={handleCopyHtmlToClipboard}
					onCopyCss={handleCopyCssToClipboard}
				/>
			)}

			{/* Example Component for Bubble Left to Right */}
			<div className="ml-16 m-10 hover:bg-zinc-400 w-40 h-40 flex justify-center items-center relative group">
				<button className={style.bubbleLeftToRight}>Bubble -&gt;</button>
				<div
					className="absolute top-2 right-2 hidden group-hover:flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full cursor-pointer"
					onClick={() =>
						handleViewCodeClick(
							"bubbleLeftToRight1.html",
							"bubbleLeftToRight1.css"
						)
					}
				>
					<Copy size={25} />
				</div>
			</div>

			{/* Example Component for Bubble Right to Left */}
			<div className="ml-16 m-10 hover:bg-zinc-400 w-40 h-40 flex justify-center items-center relative group">
				<button className={style.bubbleRightToLeft}>Bubble &lt;-</button>
				<div
					className="absolute top-2 right-2 hidden group-hover:flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full cursor-pointer"
					onClick={() =>
						handleViewCodeClick(
							"bubbleRightToLeft.html",
							"bubbleRightToLeft.css"
						)
					}
				>
					<Copy size={25} />
				</div>
			</div>
			{/* Example Component for Bubble Right to Left */}

			{/* component start here  */}
			<div className="ml-16 m-10 hover:bg-zinc-400 w-40 h-40 flex justify-center items-center relative group">
				<button className={style.bubbleUpToDown}>Bubble &darr;</button>
				<div
					className="absolute top-2 right-2 hidden group-hover:flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full cursor-pointer"
					onClick={() =>
						handleViewCodeClick("bubbleUpToDown.html", "bubbleUpToDown.css")
					}
				>
					<Copy size={25} />
				</div>
			</div>

			{/* component end here  */}

			{/* Add more components with both HTML and CSS buttons as needed */}

			<div className="ml-16 m-10 hover:bg-zinc-400 w-40 h-40 flex justify-center items-center relative group ">
				<div className={style.wave}>
					<div>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
				<div
					className="absolute top-2 right-2 hidden group-hover:flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full cursor-pointer"
					onClick={() => handleViewCodeClick("wave.html", "wave.css")}
				>
					<Copy size={25} />
				</div>
			</div>

			{/* component start here  */}
			<div className="ml-16 m-10 hover:bg-zinc-400 w-40 h-40 flex justify-center items-center relative group">
				<div className={style.balls}>
					<div></div>
					<div></div>
					<div></div>
				</div>

				<div
					className="absolute top-2 right-2 hidden group-hover:flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full cursor-pointer"
					onClick={() => handleViewCodeClick("balls.html", "balls.css")}
				>
					<Copy size={25} />
				</div>
			</div>

			{/* component end here  */}
			{/* component start here  */}
			<div className="ml-16 m-10 hover:bg-zinc-400 w-40 h-40 flex justify-center items-center relative group">
				<div className={style.fillRact}>
					<div></div>
				</div>

				<div
					className="absolute top-2 right-2 hidden group-hover:flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full cursor-pointer"
					onClick={() => handleViewCodeClick("fillRact.html", "fillRact.css")}
				>
					<Copy size={25} />
				</div>
			</div>

			{/* component end here  */}
			{/* component start here  */}
			<div className="ml-16 m-10 hover:bg-sky-500 w-40 h-40 flex justify-center items-center relative group">
				<div className={style.neon}>
					<button>...</button>
				</div>

				<div
					className="absolute top-2 right-2 hidden group-hover:flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full cursor-pointer"
					onClick={() => handleViewCodeClick("neon.html", "neon.css")}
				>
					<Copy size={25} />
				</div>
			</div>

			{/* component end here  */}

			{/* component start here  */}
			<div className="ml-16 m-10 hover:bg-zinc-400 w-40 h-40 flex justify-center items-center relative group">
				<div className={style.loader}>
					<div></div>
				</div>

				<div
					className="absolute top-2 right-2 hidden group-hover:flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full cursor-pointer"
					onClick={() => handleViewCodeClick("loader.html", "loader.css")}
				>
					<Copy size={25} />
				</div>
			</div>

			{/* component end here  */}

			{/* component start here  */}
			<div className="ml-16 m-10 hover:bg-sky-400 w-40 h-40 flex justify-center items-center relative group">
				<div className={style.cube}>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>

				<div
					className="absolute top-2 right-2 hidden group-hover:flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full cursor-pointer"
					onClick={() => handleViewCodeClick("cube.html", "cube.css")}
				>
					<Copy size={25} />
				</div>
			</div>

			{/* component end here  */}
			{/* component start here  */}
			<div className="ml-16 m-10 hover:bg-sky-400 w-40 h-40 flex justify-center items-center relative group">
				<div className={style.glassCard}>
					<h2>Glassmorphism Card</h2>
					<p>Beautiful transparent, frosted glass effect.</p>
				</div>

				<div
					className="absolute top-2 right-2 hidden group-hover:flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full cursor-pointer"
					onClick={() => handleViewCodeClick("glass.html", "glass.css")}
				>
					<Copy size={25} />
				</div>
			</div>

			{/* component start here  */}
			<div className="ml-16 m-10 hover:bg-zinc-400 w-40 h-40 flex justify-center items-center relative group">
				<div className={style.searchContainer}>
					<input
						type="text"
						className={style.searchBar}
						placeholder="Search..."
					/>
					<div className={style.searchBtn}>🔍</div>
				</div>

				<div
					className="absolute top-2 right-2 hidden group-hover:flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full cursor-pointer"
					onClick={() => handleViewCodeClick("searchBar.html", "searchBar.css")}
				>
					<Copy size={25} />
				</div>
			</div>

			{/* component end here  */}
			{/* component start here  */}
			<div className="ml-16 m-10 w-36 h-40 hover:bg-zinc-600 flex justify-center items-center relative group">
				<button className={style.neuButton}>Click Me</button>

				<div
					className="absolute top-2 right-2 hidden group-hover:flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full cursor-pointer"
					onClick={() => handleViewCodeClick("neuButton.html", "neuButton.css")}
				>
					<Copy size={25} />
				</div>
			</div>

			{/* component end here  */}
			{/* component start here  */}
			<div className="ml-16 m-10 w-36 h-40 hover:bg-zinc-600 flex justify-center items-center relative group">
				<a href="#" class={style.animatedLink}>
					Hover Me
				</a>

				<div
					className="absolute top-2 right-2 hidden group-hover:flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full cursor-pointer"
					onClick={() =>
						handleViewCodeClick("animatedLink.html", "animatedLink.css")
					}
				>
					<Copy size={25} />
				</div>
			</div>

			{/* component end here  */}
			{/* component start here  */}
			<div className="ml-16 m-10 w-36 h-40 flex justify-center items-center relative group">
				<div className={style.card3d}>
					<div className={style.cardcontent}>
						<h3>Hover me</h3>
						
						<a href="#" className={style.btn3d}>
							Learn More
						</a>
					</div>
				</div>

				<div
					className="absolute top-2 right-2 hidden group-hover:flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full cursor-pointer"
					onClick={() =>
						handleViewCodeClick("card3d.html", "card3d.css")
					}
				>
					<Copy size={25} />
				</div>
			</div>

			{/* component end here  */}

			{/* component start here  */}
			<div className="ml-16 m-10 h w-40 h-40 flex justify-center items-center relative group">
				<div className={style.card}>
					{/* <img src="image.jpg" alt="Card Image" class="card-img"> */}
					<img src="./image.webp" alt="card image" className={style.cardImg} />
					<div className={style.cardContent}>
						<h3>Card Title</h3>
						<a href="" className={style.cardBtn}>
							Read More
						</a>
					</div>
				</div>

				<div
					className="absolute top-2 right-2 hidden group-hover:flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full cursor-pointer"
					onClick={() => handleViewCodeClick("card.html", "card.css")}
				>
					<Copy size={25} />
				</div>
			</div>

			{/* component end here  */}
		</div>
	);
};

export default CssEntity;
