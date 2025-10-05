import React from 'react';

export default function Navbar() {
  return (
    <nav className="w-full bg-[#1f2a33] text-[#e6eef8] py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center gap-6">
        <div className="flex items-center">
          <div className="w-20 h-10 p-1 flex items-center justify-center bg-transparent" aria-hidden>
            <img src="/Frame_1.gif" alt="logo" className="w-16 h-8 object-contain block" />
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <div className="w-full max-w-[840px] flex items-center gap-4 bg-[rgba(255,255,255,0.02)] rounded-full px-4 py-2 backdrop-blur">
            <div className="flex items-center gap-3 min-w-[300px] bg-gradient-to-r from-[#7a4bff]/10 to-[#50c8ff]/6 rounded-full px-3 py-2">
              <svg className="w-4 h-4 text-[#e6eef8]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14z" stroke="#e6eef8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21 21l-4.35-4.35" stroke="#e6eef8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <input className="bg-transparent outline-none border-none text-[#dbe9ff] placeholder:text-[#c6d9f8] text-sm" placeholder="Maharon Nasa Marjan" aria-label="Search" />
            </div>

            <div className="flex items-center gap-7 ml-2 text-sm">
              <a className="text-[rgba(230,238,248,0.9)]" href="#">About us</a>
              <div className="flex items-center gap-2 text-[rgba(230,238,248,0.9)] cursor-pointer">
                <span>Services</span>
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 9l6 6 6-6" stroke="#e6eef8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <a className="text-[rgba(230,238,248,0.9)]" href="#">White label</a>
              <a className="text-[rgba(230,238,248,0.9)]" href="#">Contact us</a>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="bg-white/5 w-12 h-12 rounded-full flex items-center justify-center" aria-label="Open cart">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 6h15l-1.5 9h-12L4 2H2" stroke="#e6eef8" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="10" cy="20" r="1" fill="#e6eef8" />
              <circle cx="18" cy="20" r="1" fill="#e6eef8" />
            </svg>
          </button>

          <button className="bg-gradient-to-r from-[#8b4bff] to-[#5de1ff] text-[#0b1020] px-5 py-2 rounded-full font-semibold flex items-center gap-2">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2l1.8 4.2L18 8l-4.2 1.8L12 14l-1.8-4.2L6 8l4.2-1.8L12 2z" fill="#fff" opacity="0.9"/>
            </svg>
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
}
