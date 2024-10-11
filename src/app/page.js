"use client"
import CssEntity from "@/components/CssEntity/cssentity";
import Form from "@/components/FormForUser/form";
import { LampDemo } from "@/components/ui/lamp";
import React, { useState, useEffect } from "react";

import { Meteors } from "@/components/ui/meteors";


export default function Home() {

	const [isDarkMode, setIsDarkMode] = useState(false);

	// Load theme from local storage or default to system preference
	useEffect(() => {
		const theme = localStorage.getItem("theme");
		if (
			theme === "dark" ||
			(!theme && window.matchMedia("(prefers-color-scheme: dark)").matches)
		) {
			setIsDarkMode(true);
			document.documentElement.classList.add("dark");
		} else {
			setIsDarkMode(false);
			document.documentElement.classList.remove("dark");
		}
	}, []);

	// Toggle theme and save preference to local storage
	const toggleTheme = () => {
		if (isDarkMode) {
			document.documentElement.classList.remove("dark");
			localStorage.setItem("theme", "light");
		} else {
			document.documentElement.classList.add("dark");
			localStorage.setItem("theme", "dark");
		}
		setIsDarkMode(!isDarkMode);
	};
	return (
		<div className="dark">
			<div className="">
				<LampDemo className="mt-0" />
				<h1 className=" flex justify-center items-center pl-6 pr-6 text-5xl mt-3 font-bold ">
					Beautifully simple click-to-copy CSS effects
				</h1>

				<p className="mt-6 flex items-center justify-center pl-20 pr-20 m-auto text-1xl font-bold">
					Explore a variety of stunning CSS effects that you can easily copy and
					use in your projects. Simply click the button, and the code is
					instantly copied to your clipboard. No hassle, just beautiful design.
				</p>
			</div>

			<CssEntity />
			<Form/>
			{/* <Meteors number={20} /> */}
		</div>
	);
}
