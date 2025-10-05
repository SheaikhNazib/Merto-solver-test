"use client"
import React from "react"

export default function WhyUs() {
  return (
    <section className="w-full py-16 md:py-20 px-6 md:px-10 bg-gradient-to-br from-[#0b0710] via-[#1b0f28] to-[#2b1639] rounded-lg overflow-hidden relative">
      {/* Radial gradient overlays */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[800px] h-[400px] bg-purple-600/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[300px] bg-indigo-900/20 rounded-full blur-[80px]"></div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 min-h-[420px] relative z-10">
        {/* Left Section */}
        <div className="flex-1 lg:max-w-[52%] w-full">
          <h2 className="text-white text-[40px] md:text-[48px] lg:text-[54px] leading-[1.08] font-bold mb-5 tracking-tight">
            Why You<br />
            Choose Metro<br />
            Solver?
          </h2>
          <p className="text-white/75 text-[14px] md:text-[15px] leading-[1.7] mb-8 max-w-[460px]">
            We are constantly growing or learning and improving.Enter your personal real estate sanctuary, where finding the ideal home is effortless and comfortable with our assistance.
          </p>
          <button className="inline-flex items-center gap-3 bg-gradient-to-r from-[#7b3df3] to-[#a54bff] text-white px-6 py-3.5 rounded-full font-semibold text-[15px] shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40 transition-all">
            <span className="text-lg">✨</span>
            Book Now
          </button>
        </div>

        {/* Right Section - Pills */}
        <div className="flex-1 lg:max-w-[48%] relative w-full h-[340px] lg:h-[380px]">
          {/* Cancel Anytime */}
          <div className="absolute top-3 right-4 md:right-8 lg:right-10 -rotate-[11deg] bg-black/70 backdrop-blur-sm text-white text-[17px] md:text-[19px] lg:text-[20px] font-semibold px-7 md:px-8 py-3.5 md:py-4 rounded-full shadow-xl whitespace-nowrap">
            Cancel Anytime
          </div>
          
          {/* 24/7 Customer Service - Highlighted */}
          <div className="absolute top-[82px] md:top-[90px] lg:top-[95px] right-2 md:right-6 lg:right-8 rotate-[9deg] bg-gradient-to-r from-[#5F35F5] to-[#A54BFF] text-white text-[18px] md:text-[20px] lg:text-[21px] font-semibold px-9 md:px-11 lg:px-12 py-3.5 md:py-4 rounded-full shadow-2xl shadow-purple-500/40 whitespace-nowrap">
            24/7 Customer Service
          </div>
          
          {/* Refers & Earn */}
          <div className="absolute top-[168px] md:top-[180px] lg:top-[190px] right-12 md:right-20 lg:right-28 -rotate-[7deg] bg-black/70 backdrop-blur-sm text-white text-[17px] md:text-[19px] lg:text-[20px] font-semibold px-8 md:px-9 py-3.5 md:py-4 rounded-full shadow-xl whitespace-nowrap">
            Refers & Earn
          </div>
          
          {/* Money Back Guarantee */}
          <div className="absolute top-[255px] md:top-[270px] lg:top-[285px] right-0 md:right-2 lg:right-4 rotate-[5deg] bg-black/70 backdrop-blur-sm text-white text-[17px] md:text-[19px] lg:text-[20px] font-semibold px-9 md:px-10 py-3.5 md:py-4 rounded-full shadow-xl whitespace-nowrap">
            Money Back Guarantee
          </div>
        </div>
      </div>
    </section>
  )
}
