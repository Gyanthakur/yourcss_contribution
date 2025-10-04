import { Meteors } from "@/components/ui/meteors";

const ContactPage = () => {
	return (
		<div className="min-h-screen w-full relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-gray-50 dark:from-gray-900 dark:via-slate-900 dark:to-black">
			{/* Animated gradient orbs - full page background */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				{/* Animated gradient blob 1 */}
				<div className="absolute top-0 -left-4 w-72 h-72 bg-blue-300/30 dark:bg-blue-500/20 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl animate-blob"></div>
				{/* Animated gradient blob 2 */}
				<div className="absolute top-0 -right-4 w-72 h-72 bg-purple-300/30 dark:bg-purple-500/20 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl animate-blob animation-delay-2000"></div>
				{/* Animated gradient blob 3 */}
				<div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300/30 dark:bg-pink-500/20 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl animate-blob animation-delay-4000"></div>
				{/* Animated gradient blob 4 */}
				<div className="absolute bottom-0 right-20 w-72 h-72 bg-indigo-300/30 dark:bg-indigo-500/20 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl animate-blob animation-delay-6000"></div>
			</div>
			
			{/* Floating particles */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/40 dark:bg-blue-300/30 rounded-full animate-float"></div>
				<div className="absolute top-1/3 right-1/3 w-3 h-3 bg-purple-400/40 dark:bg-purple-300/30 rounded-full animate-float animation-delay-2000"></div>
				<div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-pink-400/40 dark:bg-pink-300/30 rounded-full animate-float animation-delay-4000"></div>
				<div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-indigo-400/40 dark:bg-indigo-300/30 rounded-full animate-float animation-delay-6000"></div>
				<div className="absolute top-1/2 left-1/2 w-2 h-2 bg-cyan-400/40 dark:bg-cyan-300/30 rounded-full animate-float animation-delay-3000"></div>
			</div>

			{/* Content area */}
			<div className="relative z-10 flex justify-center items-center min-h-screen py-8 px-4">
				<div className="w-full relative max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl">
					{/* Subtle glow effect matching header/footer theme */}
					<div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-200/30 via-blue-300/30 to-blue-400/30 dark:from-blue-800/30 dark:via-purple-800/30 dark:to-gray-800/30 transform scale-[0.85] rounded-2xl blur-2xl" />
					
					<div className="relative shadow-2xl bg-white/90 backdrop-blur-md border border-blue-200/50 dark:bg-gray-900/90 dark:border-gray-700/50 px-6 py-10 md:px-8 md:py-12 h-full overflow-hidden rounded-2xl flex flex-col justify-center items-center">
						<form className="bg-blue-50/80 backdrop-blur-sm border border-blue-200/30 dark:bg-gray-800/80 dark:border-gray-600/30 flex flex-col justify-start p-6 md:p-8 lg:p-10 rounded-xl w-full max-w-none shadow-xl">
							{/* Name fields - responsive grid layout */}
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6">
								<div>
									<label htmlFor="firstName" className="block text-gray-800 dark:text-white mb-3 font-medium">
										First Name:
									</label>
									<input
										className="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg py-3 px-4 w-full text-gray-900 dark:text-white text-base focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:outline-none transition-all"
										type="text"
										id="firstName"
										name="firstName"
										placeholder="Enter your first name"
										required
									/>
								</div>
								
								<div>
									<label htmlFor="MiddleName" className="block text-gray-800 dark:text-white mb-3 font-medium">
										Middle Name
									</label>
									<input
										className="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg py-3 px-4 w-full text-gray-900 dark:text-white text-base focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:outline-none transition-all"
										type="text"
										id="MiddleName"
										name="MiddleName"
										placeholder="Enter your middle name"
									/>
								</div>
							</div>

							<div className="mb-6">
								<label htmlFor="lastName" className="block text-gray-800 dark:text-white mb-3 font-medium">
									Last Name:
								</label>
								<input
									className="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg py-3 px-4 w-full text-gray-900 dark:text-white text-base focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:outline-none transition-all"
									type="text"
									id="lastName"
									name="lastName"
									placeholder="Enter your last name"
									required
								/>
							</div>

							{/* Contact fields - responsive grid layout */}
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6">
								<div>
									<label htmlFor="phone" className="block text-gray-800 dark:text-white mb-3 font-medium">
										Phone No:
									</label>
									<input
										className="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg py-3 px-4 w-full text-gray-900 dark:text-white text-base focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:outline-none transition-all"
										type="tel"
										id="phone"
										name="phone"
										placeholder="Enter your phone number"
										required
									/>
								</div>

								<div>
									<label htmlFor="email" className="block text-gray-800 dark:text-white mb-3 font-medium">
										Email:
									</label>
									<input
										className="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg py-3 px-4 w-full text-gray-900 dark:text-white text-base focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:outline-none transition-all"
										type="email"
										id="email"
										name="email"
										placeholder="Enter your email address"
										required
									/>
								</div>
							</div>

							<div className="mb-8">
								<label htmlFor="textArea" className="block text-gray-800 dark:text-white mb-3 font-medium">
									Write your message or query here:
								</label>
								<textarea
									className="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg py-3 px-4 w-full text-gray-900 dark:text-white text-base focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:outline-none transition-all resize-vertical"
									id="textArea"
									name="textArea"
									placeholder="Enter your message here"
									rows="5"
									required
								></textarea>
							</div>

							<button
								type="submit"
								className="w-full md:w-auto md:min-w-[200px] bg-blue-600 hover:bg-blue-700 active:bg-blue-800 dark:bg-blue-900 dark:hover:bg-blue-800 dark:active:bg-blue-950 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors duration-200 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:outline-none shadow-lg"
							>
								Send Feedback
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactPage;
