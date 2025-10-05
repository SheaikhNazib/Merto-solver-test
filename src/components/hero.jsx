import React from "react";

export default function Hero() {
	const logos = ["luminus", "brembo", "motorola", "luminus", "brembo"];

	return (
		<section
			aria-label="Hero"
			className="py-20 px-6 bg-gradient-to-b from-[#0f0b13] via-[#160622] to-[#120617] text-white"
		>
			<div className="max-w-7xl mx-auto flex gap-8 items-center justify-between lg:justify-start lg:items-stretch flex-col lg:flex-row">
				<div className="w-full lg:w-1/2">
					<h1 className="text-4xl sm:text-5xl lg:text-[56px] leading-tight font-extrabold mb-4">
						Expert to
						<br />
						Digitalise Your
						<br />
						<span className="bg-gradient-to-r from-[#b165ff] to-[#7c4dff] bg-clip-text text-transparent">Growth</span>
					</h1>

					<p className="text-sm sm:text-base text-white/80 max-w-xl mb-6">
						We are constantly growing or learning and improving. Enter your the
						personal real estate sanctuary, where finding the ideal home is
						simple and delightful.
					</p>

					<div className="flex items-center gap-4 mb-6">
						<a
							href="#"
							className="inline-flex items-center gap-3 bg-gradient-to-r from-[#7c4dff] to-[#b165ff] text-white px-5 py-3 rounded-full font-semibold"
						>
							<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="white" />
							</svg>
							Explore Now
						</a>

					</div>

					<div className="flex gap-4 items-center mt-2">
						{logos.map((name, i) => (
							<div key={i} className="bg-white/5 px-4 py-2 rounded-md text-sm font-medium">
								{name}
							</div>
						))}
					</div>
				</div>

				<div className="w-full lg:w-1/2 relative mt-8 lg:mt-0">
					<div className="relative w-full h-80 lg:h-[320px] overflow-hidden rounded-xl">
						{/* GIF from public/Comp 1_4.gif */}
						<img
							src="/Comp%201_4.gif"
							alt="Decorative animation"
							className="w-full h-full object-cover"
						/>


						<div className="absolute bottom-4 right-4 w-14 h-14 rounded-full bg-gradient-to-b from-[#7c4dff] to-[#b165ff] grid place-items-center text-lg shadow-xl overflow-hidden">
							<img src="/Frame%203.gif" alt="assistant" className="w-10 h-10 object-contain" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
