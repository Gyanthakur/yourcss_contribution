import { Meteors } from "@/components/ui/meteors";

const ContactPage = () => {
	return (
		// <div className="flex justify-center items-center min-h-screen mb-5">
		// 	<Meteors number={50} />
		// <form className="bg-zinc-500 flex flex-col justify-start p-6 rounded-lg w-full max-w-lg">
		// 	<label htmlFor="firstName" className="text-white mb-2">
		// 		First Name:
		// 	</label>
		// 	<input
		// 		className="bg-white rounded-md py-2 px-3 mb-4"
		// 		type="text"
		// 		id="firstName"
		// 		name="firstName"
		// 		placeholder="Enter your first name"
		// 		required
		// 	/>

		// 	<lable htmlFor="Middle Name" className="text-white mb-2">
		// 		Middle Name
		// 	</lable>
		// 	<input
		// 		className="bg-white rounded-md px-3 py-2 mb-4"
		// 		type="text"
		// 		id="MiddleName"
		// 		name="MiddleName"
		// 		placeholder="Enter your middle name"
		// 	/>

		// 	<label htmlFor="lastName" className="text-white mb-2">
		// 		Last Name:
		// 	</label>
		// 	<input
		// 		className="bg-white rounded-md py-2 px-3 mb-4"
		// 		type="text"
		// 		id="lastName"
		// 		name="lastName"
		// 		placeholder="Enter your last name"
		// 		required
		// 	/>

		// 	<label htmlFor="phone" className="text-white mb-2">
		// 		Phone No:
		// 	</label>
		// 	<input
		// 		className="bg-white rounded-md py-2 px-3 mb-4"
		// 		type="number"
		// 		id="phone"
		// 		name="phone"
		// 		placeholder="Enter your phone number"
		// 		required
		// 	/>

		// 	<label htmlFor="email" className="text-white mb-2">
		// 		Email:
		// 	</label>
		// 	<input
		// 		className="bg-white rounded-md py-2 px-3 mb-4"
		// 		type="email"
		// 		id="email"
		// 		name="email"
		// 		placeholder="Enter your email address"
		// 		required
		// 	/>

		// 	<label htmlFor="textArea" className="text-white mb-2">
		// 		Write your message or query here:
		// 	</label>
		// 	<textarea
		// 		className="bg-white rounded-md py-2 px-3 mb-4"
		// 		id="textArea"
		// 		name="textArea"
		// 		placeholder="Enter your message here"
		// 		rows="4"
		// 		required
		// 	></textarea>

		// 	<button
		// 		type="submit"
		// 		className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
		// 	>
		// 		Send Feedback
		// 	</button>
		// </form>
		// </div>

		<div className="min-h-screen w-full flex items-center justify-center -mb-8 bg-gray-950 py-12 px-4">
			<div className="w-full relative max-w-2xl">
				<div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] rounded-full blur-3xl" />
				<div className="relative shadow-xl bg-gray-900 border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
					<form className="bg-zinc-800/50 flex flex-col justify-start p-8 rounded-lg w-full">
						<h2 className="text-white text-3xl font-bold text-center mb-6">Contact Us</h2>
						<label htmlFor="firstName" className="text-white mb-2">
							First Name:
						</label>
						<input
							className="bg-gray-800 text-white border border-gray-700 rounded-md py-2 px-3 mb-4 focus:outline-none focus:ring-2 focus:ring-teal-500"
							type="text"
							id="firstName"
							name="firstName"
							placeholder="Enter your first name"
							required
						/>

						<label htmlFor="middleName" className="text-white mb-2">
							Middle Name
						</label>
						<input
							className="bg-gray-800 text-white border border-gray-700 rounded-md px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-teal-500"
							type="text"
							id="middleName"
							name="middleName"
							placeholder="Enter your middle name"
						/>

						<label htmlFor="lastName" className="text-white mb-2">
							Last Name:
						</label>
						<input
							className="bg-gray-800 text-white border border-gray-700 rounded-md py-2 px-3 mb-4 focus:outline-none focus:ring-2 focus:ring-teal-500"
							type="text"
							id="lastName"
							name="lastName"
							placeholder="Enter your last name"
							required
						/>

						<label htmlFor="phone" className="text-white mb-2">
							Phone No:
						</label>
						<input
							className="bg-gray-800 text-white border border-gray-700 rounded-md py-2 px-3 mb-4 focus:outline-none focus:ring-2 focus:ring-teal-500"
							type="number"
							id="phone"
							name="phone"
							placeholder="Enter your phone number"
							required
						/>

						<label htmlFor="email" className="text-white mb-2">
							Email:
						</label>
						<input
							className="bg-gray-800 text-white border border-gray-700 rounded-md py-2 px-3 mb-4 focus:outline-none focus:ring-2 focus:ring-teal-500"
							type="email"
							id="email"
							name="email"
							placeholder="Enter your email address"
							required
						/>

						<label htmlFor="textArea" className="text-white mb-2">
							Write your message or query here:
						</label>
						<textarea
							className="bg-gray-800 text-white border border-gray-700 rounded-md py-2 px-3 mb-4 focus:outline-none focus:ring-2 focus:ring-teal-500"
							id="textArea"
							name="textArea"
							placeholder="Enter your message here"
							rows="4"
							required
						></textarea>

						<button
							type="submit"
							className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
						>
							Send Feedback
						</button>
					</form>

					<Meteors number={50} />
				</div>
			</div>
		</div>
	);
};

export default ContactPage;
