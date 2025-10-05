import React from 'react'

const items = [
  { src: '/map.png', span: 'span 2 / span 2', alt: 'project 1' },
  { src: '/Frame.gif', span: 'span 2 / span 3', alt: 'project 2' },
  { src: '/grouping.jpg', span: 'span 2 / span 2', alt: 'project 3' },
  { src: '/Comp 1_4.gif', span: 'span 3 / span 3', alt: 'project 4' },
  { src: '/circle.png', span: 'span 2 / span 2', alt: 'project 5' },
  { src: '/person.jpg', span: 'span 2 / span 2', alt: 'project 6' },
  { src: '/Frame_1.gif', span: 'span 2 / span 2', alt: 'project 7' },
  { src: '/Frame 3.gif', span: 'span 2 / span 2', alt: 'project 8' },
  { src: '/Text.json', span: 'span 2 / span 2', alt: 'project 9' },
  { src: '/v.mp4', span: 'span 2 / span 2', alt: 'project 10', isVideo: true },
]

const LatestWork = () => {
  return (
    <section
      aria-labelledby="latest-works-heading"
      className="px-6 py-16 bg-gradient-to-b from-[#0f0813] to-[#2b102b] text-white rounded-2xl m-3 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-start gap-6 mb-8">
          <h2 id="latest-works-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
            Our Latest Works
          </h2>
          <p className="text-sm text-gray-300 max-w-3xl">
            Based on the description of Metro Solver and the image provided, here is a
            curated selection of recent UI explorations and projects displayed in a
            mosaic of cards.
          </p>
        </div>

        <div className="grid grid-cols-8 auto-rows-[120px] gap-5">
          {items.map((it, i) => (
            <article
              key={i}
              aria-label={`Work ${i + 1} - ${it.alt}`}
              className="relative rounded-xl overflow-hidden bg-gradient-to-b from-white/5 to-black/10 shadow-lg hover:shadow-2xl transform transition-all duration-300"
              style={{ gridColumn: it.span }}
            >
              {it.isVideo ? (
                <video className="w-full h-full object-cover" src={it.src} autoPlay muted loop playsInline />
              ) : (
                <img className="w-full h-full object-cover" src={it.src} alt={it.alt} />
              )}

              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 pointer-events-none" />

              <div className="absolute left-4 bottom-3 text-white pointer-events-none">
                <span className="inline-block bg-white/5 text-xs px-2 py-1 rounded-full">UI/UX</span>
                <h3 className="mt-2 text-sm font-semibold">Project {i + 1}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LatestWork
