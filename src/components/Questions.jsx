import React from 'react'

const Questions = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-[#0f0b13] via-[#160622] to-[#120617] text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left card */}
        <div className="lg:col-span-4">
          <div className="rounded-2xl bg-gradient-to-br from-[#0b0710]/80 to-[#17121a]/70 p-10 shadow-2xl h-full min-h-[420px] flex flex-col justify-center gap-8">
            <div className="flex items-start gap-4">
              <div className="w-20 h-20 rounded-lg bg-gradient-to-r from-[#7c4dff] to-[#5dd1ff] grid place-items-center overflow-hidden">
                <img src="/Frame_1.gif" alt="logo" className="w-14 h-14 object-contain" />
              </div>
            </div>

            <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight">
              Still Have
              <br />
              <span className="text-[40px] sm:text-[44px]">A Questions?</span>
            </h2>

            <p className="text-white/60 max-w-sm">Reach out to us — we’re here to help. Drop a quick message and we will get back to you as soon as possible.</p>

            <div className="flex items-center gap-3">
              {[
                { key: 'in', label: 'in' },
                { key: 'f', label: 'f' },
                { key: 'ig', label: 'ig' },
                { key: 'x', label: 'x' },
                { key: 'yt', label: 'yt' },
                { key: 'tt', label: 'tt' },
              ].map((s) => (
                <div key={s.key} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-sm text-white/90">
                  <span className="font-semibold lowercase">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right form */}
        <div className="lg:col-span-8">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="text-sm text-white/80 mb-2">Name</label>
              <input placeholder="Enter your name..." className="bg-transparent border border-[#5b2f6d] rounded-xl px-4 py-3 text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-[#7c4dff]/40" />
            </div>

            <div className="flex flex-col">
              <label className="text-sm text-white/80 mb-2">Email Address</label>
              <input placeholder="Enter your name..." className="bg-transparent border border-[#5b2f6d] rounded-xl px-4 py-3 text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-[#7c4dff]/40" />
            </div>

            <div className="flex flex-col">
              <label className="text-sm text-white/80 mb-2">WhatsApp/Phone</label>
              <input placeholder="Enter your number..." className="bg-transparent border border-[#5b2f6d] rounded-xl px-4 py-3 text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-[#7c4dff]/40" />
            </div>

            <div className="flex flex-col">
              <label className="text-sm text-white/80 mb-2">Which are You Looking for Support in?</label>
              <select className="bg-transparent border border-[#5b2f6d] rounded-xl px-4 py-3 text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-[#7c4dff]/40 appearance-none">
                <option>Choose services</option>
                <option>Web Development</option>
                <option>Design</option>
                <option>Marketing</option>
              </select>
            </div>

            <div className="md:col-span-2 flex flex-col">
              <label className="text-sm text-white/80 mb-2">How Can We Help?</label>
              <textarea placeholder="Message goes in here..." rows={8} className="resize-none bg-transparent border border-[#5b2f6d] rounded-xl px-4 py-4 text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-[#7c4dff]/40" />
            </div>

            <div className="md:col-span-2">
              <button type="button" className="w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#7c4dff] to-[#5de1ff] text-[#071024] px-8 py-4 rounded-full font-semibold text-lg shadow-lg">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2l1.8 4.2L18 8l-4.2 1.8L12 14l-1.8-4.2L6 8l4.2-1.8L12 2z" fill="#fff" opacity="0.9" />
                </svg>
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Questions
