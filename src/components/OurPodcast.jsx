import React from 'react'

const cards = [
  {
    image: '/person.jpg',
    title: 'How Brands Can Prepare for Black\nFriday & Christmas',
    duration: '30 Minute',
    date: 'Mar 11, 2025',
  },
  {
    image: '/discuss.jpg',
    title: 'How Brands Can Prepare for Black\nFriday & Christmas',
    duration: '30 Minute',
    date: 'Mar 11, 2025',
  },
]

const OurPodcast = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-[#0f0b13] via-[#160622] to-[#120617] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-12 mb-8">
          <div className="lg:w-1/2">
            <h2 className="text-4xl sm:text-5xl lg:text-[56px] leading-tight font-extrabold">
              Did You Hear about
              <br />
              Our Podcast?
            </h2>
          </div>

          <div className="lg:w-1/2 text-sm text-white/70">
            <p className="max-w-md">
              Based on the description of Metro Solver and the image provided, here is a 6-step process that Metro Solver uses to scale a customer&apos;s business
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((c, idx) => (
            <article
              key={idx}
              className="relative rounded-2xl overflow-hidden h-80 bg-[#0b0b10] shadow-lg"
            >
              <img src={c.image} alt={c.title} className="w-full h-full object-cover" />

              {/* top-left pill */}
              <div className="absolute top-4 left-4 bg-white/10 text-white/90 text-sm rounded-full px-3 py-1 flex items-center gap-2">
                <svg className="w-4 h-4 opacity-90" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 7a5 5 0 100 10 5 5 0 000-10z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>{c.duration}</span>
              </div>

              {/* top-right pill */}
              <div className="absolute top-4 right-4 bg-white/10 text-white/90 text-sm rounded-full px-3 py-1 flex items-center gap-2">
                <svg className="w-4 h-4 opacity-90" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.2" />
                </svg>
                <span>{c.date}</span>
              </div>

              {/* center play button */}
              <button aria-label="Play podcast" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-b from-[#7c4dff] to-[#5d2b9f] grid place-items-center shadow-2xl border border-white/10">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 8l6 4-6 4V8z" fill="white" />
                </svg>
              </button>

              {/* title bottom-left */}
              <div className="absolute left-6 bottom-6 text-white">
                <h3 className="text-lg font-semibold leading-snug whitespace-pre-line">{c.title}</h3>
              </div>

              {/* subtle gradient overlay to improve text contrast */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </article>
          ))}
        </div>

        {/* navigation controls */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <button className="w-10 h-10 rounded-full bg-[#1d2730] flex items-center justify-center text-white/90 shadow-md">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <button className="w-10 h-10 rounded-full bg-gradient-to-r from-[#7c4dff] to-[#5d2b9f] flex items-center justify-center text-white shadow-md">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default OurPodcast
