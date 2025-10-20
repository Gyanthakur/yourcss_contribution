"use client"
import CssEntity from "@/components/CssEntity/cssentity";
import Form from "@/components/FormForUser/form";
import { LampDemo } from "@/components/ui/lamp";
import React from "react";

import { Meteors } from "@/components/ui/meteors";

export default function Home() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
			<div className="container mx-auto px-4 max-w-[1200px]">
				<div className="py-8">
					<LampDemo className="mt-0" />
				</div>
				<div className="py-8">
					<h1 className="flex justify-center items-center px-6 text-5xl mt-3 font-bold text-gray-900 dark:text-gray-100 text-center">
						Beautifully simple click-to-copy CSS effects
					</h1>

					<p className="mt-6 flex items-center justify-center px-20 mx-auto text-xl font-semibold text-gray-700 dark:text-gray-300 text-center max-w-4xl">
						Explore a variety of stunning CSS effects that you can easily copy and
						use in your projects. Simply click the button, and the code is
						instantly copied to your clipboard. No hassle, just beautiful design.
					</p>
				</div>

				<div className="py-8">
					<CssEntity />
				</div>
				<div className="py-8">
					<Form/>
				</div>
				{/* <Meteors number={20} /> */}
			</div>
		</div>
	);
}
