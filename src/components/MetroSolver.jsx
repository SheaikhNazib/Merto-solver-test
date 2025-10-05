"use client"

import React from 'react'

const MetroSolver = () => {
    return (
        <section className="w-full flex justify-center px-4 py-12" aria-labelledby="newsletter-title">
            <div className="relative w-full max-w-6xl bg-gradient-to-r from-[#0f0720] via-[#1e0b2b] to-[#2a0d3a] rounded-3xl py-14 px-8 shadow-[0_10px_30px_rgba(10,8,20,0.6)]">

                {/* Centered logo overlapping the top (icon + title + tagline) */}
                <div className="absolute left-1/2 top-0 -translate-y-1/2 -translate-x-1/2 bg-transparent">
                    <div className="flex items-center gap-4 bg-transparent mb-1">
                        <img src="/Frame_1.gif" alt="Metro Solver animation" className="w-36 h-16 object-contain" />
                        <div className="flex flex-col">
                            <div className="text-xl md:text-2xl font-bold text-white tracking-wide">METRO SOLVER</div>
                            <div className="text-xs text-white/70 mt-1">your it partner</div>
                        </div>
                    </div>
                </div>

            <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 mt-8">
                    {/* Left: heading */}
                    <div className="w-full md:max-w-[52%] pl-2 text-center md:text-left">
                        <h2 id="newsletter-title" className="text-white text-4xl md:text-5xl font-extrabold leading-tight">Subscribe to Our Newsletter</h2>
                        <p className="text-white/70 text-sm mt-4">Join the 25000+ client, in our company</p>
                    </div>

                    {/* Right: email pill */}
                    <form className="w-full md:min-w-[420px] md:max-w-[50%]" onSubmit={(e) => e.preventDefault()} aria-label="Subscribe form">
                        <label htmlFor="email" className="sr-only">Email</label>

                        <div className="relative">
                            {/* Outer white pill */}
                            <div className="bg-white rounded-full px-4 py-3 shadow-[inset_0_1px_0_rgba(0,0,0,0.04)]">
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full bg-transparent text-gray-700 placeholder-gray-400 text-sm py-3 pl-6 pr-40 rounded-full outline-none"
                                    required
                                />
                            </div>

                            {/* Button wrapped in a small white ring that sits on the right inside the pill */}
                            <div className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-[3px] bg-white">
                                <button className="flex items-center gap-3 bg-gradient-to-r from-[#7b4bff] via-[#a13bff] to-[#6b4bff] text-white px-5 py-2.5 rounded-full font-semibold shadow-[0_6px_18px_rgba(106,43,255,0.28)]" type="submit" aria-label="Subscribe">
                                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                                        <path d="M12 2l2.39 4.85L19 9l-4.5 2.04L14.78 16 12 13.77 9.22 16l.28-4.96L5 9l4.61-2.15L12 2z" fill="white" />
                                    </svg>
                                    <span className="text-sm">Subscribe</span>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default MetroSolver
