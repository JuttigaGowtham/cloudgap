import React from "react";

export default function Team() {
		return (
			<section className="min-h-screen bg-[#fafbfc] flex flex-col items-center justify-center py-12 px-2 md:px-8">
				<h2 className="text-3xl md:text-6xl font-extrabold text-black mb-8">Join Our Team</h2>
				<div className="w-full max-w-6xl bg-white rounded-2xl shadow-xl flex flex-col md:flex-row overflow-hidden">
				{/* Left: Info */}
				<div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
					<a href="#book" className="text-blue-600 font-medium mb-4 hover:underline">Join our team</a>
					<h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Let's Collaborate</h1>
					<p className="text-lg text-gray-700 mb-8 max-w-xl">
						Reach out and let's explore how we can bring your ideas to life. Whether you're ready to begin or just have questions.
					</p>
					<div className="mb-2 text-gray-800 text-lg font-medium">+44 </div>
					<div className="mb-8 text-gray-700">hello@cloudgap.ai</div>
					<div className="mb-8 text-gray-600 text-base">Reach out to us via email or give us a call, we are happy to assist you!</div>
								<div className="flex items-center gap-4 mt-2">
									{/* LinkedIn icon */}
									<a href="#" aria-label="LinkedIn" className="inline-block">
										<svg width="32" height="32" fill="#222" viewBox="0 0 24 24"><rect width="32" height="32" rx="8" fill="#fff"/><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/></svg>
									</a>
									{/* Twitter icon */}
									<a href="#" aria-label="Twitter" className="inline-block">
										<svg width="32" height="32" fill="#222" viewBox="0 0 24 24"><rect width="32" height="32" rx="8" fill="#fff"/><path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 0 0-8.384 4.482c-4.086-.205-7.713-2.164-10.141-5.144a4.822 4.822 0 0 0-.666 2.475c0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417a9.867 9.867 0 0 1-6.102 2.104c-.396 0-.787-.023-1.175-.069a13.945 13.945 0 0 0 7.548 2.212c9.057 0 14.009-7.514 14.009-14.009 0-.213-.005-.425-.014-.636a10.012 10.012 0 0 0 2.457-2.548z"/></svg>
									</a>
								</div>
				</div>
				{/* Right: Form */}
				<div className="flex-1 bg-[#fafbfc] p-8 md:p-12 flex items-center justify-center">
					<form className="w-full max-w-lg bg-white rounded-2xl shadow p-6 md:p-8 flex flex-col gap-4">
						<input type="text" placeholder="Name" className="rounded-full border border-gray-200 px-6 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
						<input type="email" placeholder="Email" className="rounded-full border border-gray-200 px-6 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
						<div className="flex gap-4">
							<input type="text" placeholder="Address" className="flex-1 rounded-full border border-gray-200 px-6 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
							<input type="text" placeholder="Phone" className="flex-1 rounded-full border border-gray-200 px-6 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
						</div>
									<input type="text" placeholder="The role I'm looking for is" className="rounded-full border border-gray-200 px-6 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
						<textarea placeholder="What can we help you with?" rows={4} className="rounded-2xl border border-gray-200 px-6 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none" />
						<button type="submit" className="mt-2 bg-black text-white text-lg font-bold rounded-full py-4 transition hover:bg-blue-700">Send Message</button>
					</form>
				</div>
			</div>
		</section>
	);
}
