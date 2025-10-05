"use client";
import React, { useState } from 'react';

const categories = [
  'Digital Marketing',
  'Web & Software Development',
  'Graphic Design & Logo',
  'Multimedia & Video Editing',
  'Creative Writing Solutions',
  'E-Commerce Solutions',
  'Refund, Earn & Cancel Policies',
  'Getting Started & General Info',
  'General Policies & Customer Support',
];

const sampleFaqs = {
  'Digital Marketing': [
    {
      q: 'What services do you offer in digital marketing?',
      a: 'We provide SEO, social media management, email marketing, content marketing, PPC campaigns, and more. We tailor strategies to your goals and measure everything with transparent reporting.',
    },
    { q: 'How can digital marketing help my business?', a: 'Digital marketing increases visibility, generates leads, and helps convert visitors into customers through targeted campaigns and optimised funnels.' },
    { q: 'How do you measure campaign success?', a: 'We track KPIs like traffic, conversion rate, CPA, ROAS and provide monthly reports with actionable insights.' },
    { q: 'Do you offer local SEO?', a: 'Yes — we optimise Google Business Profiles, create local citations, and target region-specific keywords to help you rank for nearby customers.' },
  ],
  // fallback for other categories
};

for (const cat of categories) {
  if (!sampleFaqs[cat]) sampleFaqs[cat] = sampleFaqs['Digital Marketing'];
}

export default function Faq() {
  const [activeCat, setActiveCat] = useState(categories[0]);
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = sampleFaqs[activeCat] || [];

  return (
    <>
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left column */}
        <div className="lg:col-span-4">
          <div className="text-left">
            <h3 className="text-4xl sm:text-5xl font-extrabold leading-tight">
              Got Questions?
              <br />
              <span className="text-4xl sm:text-5xl">We've got Answers</span>
            </h3>

            <div className="mt-8">
              <ul className="space-y-4">
                {categories.map((cat) => {
                  const active = cat === activeCat;
                  return (
                    <li key={cat}>
                      <button
                        onClick={() => {
                          setActiveCat(cat);
                          setOpenIndex(0);
                        }}
                        className={`w-full text-left flex items-center gap-4 py-2 pr-3 rounded-md transition-colors ${
                          active ? 'text-white' : 'text-white/70'
                        }`}
                      >
                        <span className="flex items-center justify-center w-5 h-5">
                          {active ? (
                            <span className="w-3.5 h-3.5 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(255,200,80,0.15)] block" />
                          ) : (
                            <span className="w-3.5 h-3.5 rounded-full border border-white/10 block" />
                          )}
                        </span>
                        <span className={`truncate ${active ? 'font-semibold' : ''}`}>{cat}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        {/* Right column - Accordion */}
        <div className="lg:col-span-8">
          <div className="bg-transparent rounded-lg">
            <div className="border-t border-white/6 divide-y divide-white/6">
              {faqs.map((f, i) => {
                const open = i === openIndex;
                return (
                  <div key={f.q} className="py-6">
                    <button
                      onClick={() => setOpenIndex(open ? -1 : i)}
                      className="w-full flex items-start justify-between gap-6 text-left"
                      aria-expanded={open}
                    >
                      <div>
                        <h4 className={`text-lg ${open ? 'text-white font-semibold' : 'text-white/80'}`}>{f.q}</h4>
                        {open && <p className="mt-3 text-white/70 max-w-2xl">{f.a}</p>}
                      </div>

                      <div className="flex items-center">
                        <svg
                          className={`w-5 h-5 transition-transform duration-200 ${open ? 'rotate-180 text-amber-400' : 'text-white/60'}`}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Map block like screenshot */}
    <section className="py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-2xl overflow-hidden bg-black/40">
          <img src="/map.png" alt="map" className="w-full h-[420px] object-cover opacity-95" />

          {/* Overlay card positioned roughly like the screenshot */}
          <div className="absolute right-12 top-8 bg-[#0b0f16]/80 border border-white/6 rounded-2xl p-6 max-w-[380px] shadow-lg">
          

         
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

