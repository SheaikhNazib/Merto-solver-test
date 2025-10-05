"use client";
import React, { useState } from "react";

export default function SuccessStory() {
  const [activeTab, setActiveTab] = useState("stories");

  const cards = [
    {
      id: 1,
      title: "The Future of Metro Systems by Company",
      description:
        "Provide a quick introduction to your metro solver company. Highlight your mission, core expertise",
      img: "/discuss.jpg",
      stats: ["50M+ Views", "39% Lower CPA", "$2M+ Sales Generated"],
    },
    {
      id: 2,
      title: "The Future of Metro Systems by Company",
      description:
        "Provide a quick introduction to your metro solver company. Highlight your mission, core expertise",
      img: "/discuss.jpg",
      stats: ["50M+ Views", "39% Lower CPA", "$2M+ Sales Generated"],
    },
    {
      id: 3,
      title: "The Future of Metro Systems by Company",
      description:
        "Provide a quick introduction to your metro solver company. Highlight your mission, core expertise",
      img: "/discuss.jpg",
      stats: ["50M+ Views", "39% Lower CPA", "$2M+ Sales Generated"],
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-[#0f0b13] via-[#160622] to-[#120617] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl lg:text-[56px] leading-tight font-extrabold mb-4">
            The Success Stories,
            <br /> Case Studies & Blog
          </h2>

          <p className="text-sm sm:text-base text-white/70 mb-10">
            Based on the description of Metro Solver and the image provided, here is a
            6-step process that Metro Solver uses to scale a customer's business
          </p>

          {/* Tabs - wide pill buttons like screenshot */}
          <div className="flex items-center justify-center gap-6 mb-12">
            <div
              className={`rounded-full p-[2px] w-[260px] ${
                activeTab === "stories" ? "bg-gradient-to-r from-[#7c4dff] to-[#5b2fbe]" : "bg-[rgba(255,255,255,0.02)]"
              }`}
            >
              <button
                onClick={() => setActiveTab("stories")}
                className={`w-full rounded-full px-6 py-3 text-sm font-medium transition-colors ${
                  activeTab === "stories" ? "bg-[#23102a] text-white" : "bg-transparent text-white/80"
                }`}
              >
                Success Stories
              </button>
            </div>

            <div
              className={`rounded-full p-[2px] w-[260px] ${
                activeTab === "cases" ? "bg-gradient-to-r from-[#7c4dff] to-[#5b2fbe]" : "bg-[rgba(255,255,255,0.02)]"
              }`}
            >
              <button
                onClick={() => setActiveTab("cases")}
                className={`w-full rounded-full px-6 py-3 text-sm font-medium transition-colors ${
                  activeTab === "cases" ? "bg-[#23102a] text-white" : "bg-transparent text-white/80"
                }`}
              >
                Case Studies
              </button>
            </div>

            <div
              className={`rounded-full p-[2px] w-[260px] ${
                activeTab === "blog" ? "bg-gradient-to-r from-[#7c4dff] to-[#5b2fbe]" : "bg-[rgba(255,255,255,0.02)]"
              }`}
            >
              <button
                onClick={() => setActiveTab("blog")}
                className={`w-full rounded-full px-6 py-3 text-sm font-medium transition-colors ${
                  activeTab === "blog" ? "bg-[#23102a] text-white" : "bg-transparent text-white/80"
                }`}
              >
                Blog and News
              </button>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((c, idx) => (
            <div key={c.id} className={`relative rounded-2xl`}>
              {/* Outer gradient border for center card */}
              {idx === 1 ? (
                <div className="rounded-2xl p-[2px] bg-gradient-to-b from-[#7c4dff] to-[#5b2fbe]">
                  <article className="rounded-2xl overflow-hidden shadow-xl bg-[#120617]">
                    <div className="w-full h-52 overflow-hidden">
                      <img src={c.img} alt={c.title} className="w-full h-full object-cover rounded-t-2xl" />
                    </div>

                    <div className="p-6 bg-gradient-to-b from-[#2b0f2b] via-[#35163f] to-[#120617]">
                      <h3 className="text-lg font-semibold mb-2 text-white">{c.title}</h3>
                      <p className="text-sm text-white/70 mb-4">{c.description}</p>

                      <div className="flex gap-3 mb-4 flex-wrap">
                        {c.stats.map((s, i) => (
                          <span key={i} className="text-xs bg-[rgba(0,0,0,0.35)] px-3 py-2 rounded-full text-white/90">
                            {s}
                          </span>
                        ))}
                      </div>

                      <div className="flex justify-center">
                        <button className="bg-gradient-to-r from-[#7c4dff] to-[#b165ff] px-6 py-2 rounded-full text-sm font-medium">
                          View More
                        </button>
                      </div>
                    </div>
                  </article>
                </div>
              ) : (
                <article className="rounded-2xl overflow-hidden shadow-xl bg-[#0b0710]">
                  <div className="w-full h-52 overflow-hidden">
                    <img src={c.img} alt={c.title} className="w-full h-full object-cover rounded-t-2xl" />
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-2">{c.title}</h3>
                    <p className="text-sm text-white/70 mb-4">{c.description}</p>

                    <div className="flex gap-3 mb-4 flex-wrap">
                      {c.stats.map((s, i) => (
                        <span key={i} className="text-xs bg-[rgba(0,0,0,0.35)] px-3 py-2 rounded-full text-white/90">
                          {s}
                        </span>
                      ))}
                    </div>

                    <div className="flex justify-center">
                      <button className="bg-gradient-to-r from-[#7c4dff] to-[#b165ff] px-6 py-2 rounded-full text-sm font-medium">
                        View More
                      </button>
                    </div>
                  </div>
                </article>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          {/* Outer gradient ring with inner dark pill to match the design */}
          <div className="rounded-full p-[2px] bg-gradient-to-r from-[#7c4dff] to-[#5b2fbe]">
            <button className="rounded-full px-8 py-3 bg-[#120617] text-white font-semibold transition-colors hover:brightness-110">
              View More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
