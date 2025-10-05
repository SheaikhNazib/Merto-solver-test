import React from 'react'

const Star = ({ color = '#f6c84c' }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" fill={color} />
  </svg>
)

const WhatPeopleSay = () => {
  return (
    <section className="bg-gradient-to-b from-[#14061a] to-[#2b0b2a] py-16 px-4 md:py-24" aria-labelledby="testimonials-heading">
      <div className="max-w-6xl mx-auto text-center">
        <h2 id="testimonials-heading" className="text-4xl md:text-5xl font-extrabold text-white">What People Say</h2>
        <p className="text-slate-200 max-w-3xl mx-auto mt-3 mb-8 leading-7">
          Based on the description of Metro Solver and the image provided, here is a
          6-step process that Metro Solver uses to scale a customer&apos;s business
        </p>

        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-4 items-stretch">
            <article className="w-80 bg-white/5 rounded-2xl p-6 text-left shadow-lg flex flex-col">
              <div className="flex items-center gap-4">
                <img src="/person.jpg" alt="avatar" className="w-14 h-14 rounded-full border-4 border-white/5 object-cover" />
                <div className="ml-auto flex gap-2" title="5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} color="#f6c84c" />
                  ))}
                </div>
              </div>

              <h3 className="text-white font-semibold text-base mt-3">Katie Johnson <span className="text-white/70 text-sm ml-2">| Founder of Strava</span></h3>
              <p className="text-white/90 text-sm leading-6 mt-2">
                “Metro Solver with Mixer was the best solution. I am very satisfied with the team and the work they did. I am sincerely grateful for the work and effort.”
              </p>
              <div className="mt-auto text-white/80 text-sm flex items-center gap-2"> <span className="text-[#f6c84c]">★</span> Google <span className="text-white/40">|</span> Review by google</div>
            </article>

            <article className="w-80 rounded-2xl p-6 text-left shadow-xl flex flex-col -translate-y-2 bg-gradient-to-b from-[#4b1b73]/10 to-[#301042]/10 border border-white/10">
              <div className="flex items-center gap-4">
                <img src="/person.jpg" alt="avatar" className="w-14 h-14 rounded-full border-4 border-white/5 object-cover" />
                <div className="ml-auto flex gap-2" title="5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} color="#0fd6b4" />
                  ))}
                </div>
              </div>

              <h3 className="text-white font-semibold text-base mt-3">Wade Warren <span className="text-white/70 text-sm ml-2">| Founder of Strava</span></h3>
              <p className="text-white/90 text-sm leading-6 mt-2">
                “Metro Solver with Mixer was the best solution. I am very satisfied with the team and the work they did. I am sincerely grateful for the work and effort.”
              </p>
              <div className="mt-auto text-white/80 text-sm flex items-center gap-2"> <span className="text-[#0fd6b4]">★</span> Trustpilot <span className="text-white/40">|</span> Review by Trustpilot</div>
            </article>

            <article className="w-80 bg-white/5 rounded-2xl p-6 text-left shadow-lg flex flex-col">
              <div className="flex items-center gap-4">
                <img src="/person.jpg" alt="avatar" className="w-14 h-14 rounded-full border-4 border-white/5 object-cover" />
                <div className="ml-auto flex gap-2" title="4 stars">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <Star key={i} color="#f6c84c" />
                  ))}
                  <Star key={'half'} color="#aaaaaa" />
                </div>
              </div>

              <h3 className="text-white font-semibold text-base mt-3">Jenny Wilson <span className="text-white/70 text-sm ml-2">| Founder of Strava</span></h3>
              <p className="text-white/90 text-sm leading-6 mt-2">
                “Metro Solver with Mixer was the best solution. I am very satisfied with the team and the work they did. I am sincerely grateful for the work and effort.”
              </p>
              <div className="mt-auto text-white/80 text-sm flex items-center gap-2"> <span className="text-[#f6c84c]">★</span> Google <span className="text-white/40">|</span> Review by google</div>
            </article>
          </div>
          <div className="flex items-center gap-4">
            <button className="w-12 h-12 rounded-full bg-white/5 text-white flex items-center justify-center text-xl hover:scale-105 transition-transform" aria-label="previous">
              <span className="text-2xl">‹</span>
            </button>
            <button className="w-12 h-12 rounded-full bg-white/5 text-white flex items-center justify-center text-xl hover:scale-105 transition-transform" aria-label="next">
              <span className="text-2xl">›</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatPeopleSay
