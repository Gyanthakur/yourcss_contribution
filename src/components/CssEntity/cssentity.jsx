"use client";

import React, { useMemo, useState } from "react";
import style from "./cssentity.module.css";
import { Copy } from "phosphor-react";
import FavoriteButton from "@/components/FavoriteButton";

// Modal component to display both HTML and CSS code with copy functionality
const CodeModal = ({ htmlCode, cssCode, onClose, onCopyHtml, onCopyCss }) => {
	return (
		<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 dark:bg-black dark:bg-opacity-70 z-50 backdrop-blur-sm">
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
							<Copy size={20} className="text-gray-600 dark:text-gray-300" />
						</button>
						<pre className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 p-4 rounded overflow-auto mb-4 border border-gray-200 dark:border-gray-600 text-sm">
							{htmlCode}
						</pre>
					</div>

					{/* Display CSS Code */}
					<div className="relative">
						<h3 className="text-lg mb-2 font-bold text-gray-800 dark:text-gray-200">CSS Code:</h3>
						<button
							className="absolute top-0 right-0 m-2 text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200"
							onClick={onCopyCss}
						>
							<Copy size={20} className="text-gray-600 dark:text-gray-300" />
						</button>
						<pre className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 p-4 rounded overflow-auto border border-gray-200 dark:border-gray-600 text-sm">
							{cssCode}
						</pre>
					</div>
				</div>

				{/* Copy and Close Buttons */}
				<div className="mt-4 flex flex-col sm:flex-row gap-2 justify-between">
					<button
						className="bg-blue-500 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors duration-200 w-full sm:w-auto"
						onClick={onCopyHtml}
					>
						Copy HTML Code
					</button>
					<button
						className="bg-blue-500 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors duration-200 w-full sm:w-auto"
						onClick={onCopyCss}
					>
						Copy CSS Code
					</button>
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

const CssEntity = () => {
	const [showCodeModal, setShowCodeModal] = useState(false);
	const [htmlCodeToShow, setHtmlCodeToShow] = useState("");
	const [cssCodeToShow, setCssCodeToShow] = useState("");

	const snippets = useMemo(
		() => [
			{
				id: "bubble-ltr",
				title: "Bubble ->",
				htmlFile: "bubbleLeftToRight1.html",
				cssFile: "bubbleLeftToRight1.css",
				render: () => <button className={style.bubbleLeftToRight}>Bubble -&gt;</button>,
			},
			{
				id: "bubble-rtl",
				title: "Bubble <-",
				htmlFile: "bubbleRightToLeft.html",
				cssFile: "bubbleRightToLeft.css",
				render: () => <button className={style.bubbleRightToLeft}>Bubble &lt;-</button>,
			},
			{
				id: "bubble-down",
				title: "Bubble ↓",
				htmlFile: "bubbleUpToDown.html",
				cssFile: "bubbleUpToDown.css",
				render: () => <button className={style.bubbleUpToDown}>Bubble &darr;</button>,
			},
			{
				id: "wave",
				title: "Wave",
				htmlFile: "wave.html",
				cssFile: "wave.css",
				render: () => (
					<div className={style.wave}>
						<div>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
						</div>
					</div>
				),
			},
			{
				id: "balls",
				title: "Balls",
				htmlFile: "balls.html",
				cssFile: "balls.css",
				render: () => (
					<div className={style.balls}>
						<div></div>
						<div></div>
						<div></div>
					</div>
				),
			},
			{
				id: "fill-rect",
				title: "Fill Rect",
				htmlFile: "fillRact.html",
				cssFile: "fillRact.css",
				render: () => (
					<div className={style.fillRact}>
						<div></div>
					</div>
				),
			},
			{
				id: "neon",
				title: "Neon Button",
				htmlFile: "neon.html",
				cssFile: "neon.css",
				render: () => (
					<div className={style.neon}>
						<button>...</button>
					</div>
				),
			},
			{
				id: "loader",
				title: "Loader",
				htmlFile: "loader.html",
				cssFile: "loader.css",
				render: () => (
					<div className={style.loader}>
						<div></div>
					</div>
				),
			},
			{
				id: "cube",
				title: "Cube",
				htmlFile: "cube.html",
				cssFile: "cube.css",
				render: () => (
					<div className={style.cube}>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
					</div>
				),
			},
			{
				id: "glass-card",
				title: "Glass Card",
				htmlFile: "glass.html",
				cssFile: "glass.css",
				render: () => (
					<div className={style.glassCard}>
						<h2>Glassmorphism Card</h2>
						<p>Beautiful transparent, frosted glass effect.</p>
					</div>
				),
			},
			{
				id: "search-bar",
				title: "Search Bar",
				htmlFile: "searchBar.html",
				cssFile: "searchBar.css",
				render: () => (
					<div className={style.searchContainer}>
						<input type="text" className={style.searchBar} placeholder="Search..." />
						<div className={style.searchBtn}>🔍</div>
					</div>
				),
			},
			{
				id: "neumorphism-btn",
				title: "Neumorphism Button",
				htmlFile: "neuButton.html",
				cssFile: "neuButton.css",
				render: () => <button className={style.neuButton}>Click Me</button>,
			},
			{
				id: "animated-link",
				title: "Animated Link",
				htmlFile: "animatedLink.html",
				cssFile: "animatedLink.css",
				render: () => (
					<a href="#" className={style.animatedLink}>
						Hover Me
					</a>
				),
			},
			{
				id: "card-3d",
				title: "3D Card",
				htmlFile: "card3d.html",
				cssFile: "card3d.css",
				render: () => (
					<div className={style.card3d}>
						<div className={style.cardcontent}>
							<h3>Hover me</h3>
							<a href="#" className={style.btn3d}>
								Learn More
							</a>
						</div>
					</div>
				),
			},
			{
				id: "card",
				title: "Card",
				htmlFile: "card.html",
				cssFile: "card.css",
				render: () => (
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
			},
		],
		[]
	);

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
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4 bg-white dark:bg-gray-900 transition-colors duration-300">
			{showCodeModal && (
				<CodeModal
					htmlCode={htmlCodeToShow}
					cssCode={cssCodeToShow}
					onClose={() => setShowCodeModal(false)}
					onCopyHtml={handleCopyHtmlToClipboard}
					onCopyCss={handleCopyCssToClipboard}
				/>
			)}

			{snippets.map((snip) => (
				<div
					key={snip.id}
					className="ml-16 m-10 hover:bg-zinc-400 dark:hover:bg-gray-600 w-40 h-40 flex justify-center items-center relative group bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 transition-colors duration-300 shadow-sm hover:shadow-md"
				>
					{snip.render()}
					<div
						className="absolute top-2 right-2 hidden group-hover:flex items-center gap-2"
					>
						<FavoriteButton
							item={{ id: snip.id, type: "css", title: snip.title, htmlFile: snip.htmlFile, cssFile: snip.cssFile }}
						/>
						<button
							className="flex items-center justify-center w-8 h-8 bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500 rounded-full cursor-pointer transition-colors duration-200"
							onClick={() => handleViewCodeClick(snip.htmlFile, snip.cssFile)}
							aria-label="View code"
						>
							<Copy size={20} className="text-gray-600 dark:text-gray-300" />
						</button>
					</div>
				</div>
			))}
		</div>
	);
};

export default CssEntity;
