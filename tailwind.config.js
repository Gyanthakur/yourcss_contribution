const {
	default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",

		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	darkMode: "class",
	theme: {
		// your existing config
		extend: {
			animation: {
				"meteor-effect": "meteor 5s linear infinite",
				"blob": "blob 7s infinite",
				"float": "float 6s ease-in-out infinite",
			},
			keyframes: {
				meteor: {
					"0%": { 
						transform: "rotate(215deg) translateX(0) translateY(-100vh)", 
						opacity: "0" 
					},
					"10%": { opacity: "1" },
					"90%": { opacity: "1" },
					"100%": {
						transform: "rotate(215deg) translateX(100vw) translateY(100vh)",
						opacity: "0",
					},
				},
				blob: {
					"0%": {
						transform: "translate(0px, 0px) scale(1)",
					},
					"33%": {
						transform: "translate(30px, -50px) scale(1.1)",
					},
					"66%": {
						transform: "translate(-20px, 20px) scale(0.9)",
					},
					"100%": {
						transform: "translate(0px, 0px) scale(1)",
					},
				},
				float: {
					"0%, 100%": {
						transform: "translateY(0px) translateX(0px)",
						opacity: "0.5",
					},
					"50%": {
						transform: "translateY(-20px) translateX(10px)",
						opacity: "1",
					},
				},
			},
		},
	},
	plugins: [addVariablesForColors],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
// function addVariablesForColors({ addBase, theme }: any) {
function addVariablesForColors({ addBase, theme }) {
	let allColors = flattenColorPalette(theme("colors"));
	let newVars = Object.fromEntries(
		Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	);

	addBase({
		":root": newVars,
	});
}
