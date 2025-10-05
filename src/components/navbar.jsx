"use client";
import React, { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'About us', href: '#' },
    { label: 'Services', href: '#' },
    { label: 'White label', href: '#' },
    { label: 'Contact us', href: '#' },
  ];

  return (
    <nav className="w-full text-white py-4 px-6 bg-transparent">
      <div className="max-w-7xl mx-auto flex items-center gap-6">
        <div className="flex items-center">
          <div className="w-20 h-10 p-1 flex items-center justify-center bg-transparent" aria-hidden>
            <img src="/Frame_1.gif" alt="logo" className="w-24 h-auto object-contain block" />
          </div>
        </div>

        {/* Center - hidden on small screens, visible from md */}
        <div className="flex-1 flex justify-center">
          <div className="w-full max-w-[840px] hidden md:flex items-center justify-center gap-6 bg-[rgba(255,255,255,0.03)] rounded-full px-4 py-3 backdrop-blur text-center">
            <div className="flex items-center pl-3">
              <div className="rounded-full p-[2px] bg-gradient-to-r from-[#955dfd] to-white">
                <div className="rounded-full bg-[#1f2a33] px-8 py-2 text-white font-semibold text-lg flex items-center justify-center">
                  Home
                </div>
              </div>
            </div>

            <div className="flex items-center gap-8 text-sm justify-center">
              {navItems.map((it, idx) => (
                <a key={idx} className="text-[rgba(230,238,248,0.9)] inline-block" href={it.href}>
                  {it.label}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile / tablet: show simple labeled area when md:hidden */}
          <div className="w-full md:hidden flex justify-center">
            <div className="w-full max-w-[420px] flex items-center justify-between gap-4 bg-[rgba(255,255,255,0.03)] rounded-full px-4 py-2 backdrop-blur text-center">
              <div className="flex items-center gap-2 truncate">
                <div className="rounded-full p-[1px] bg-gradient-to-r from-[#955dfd] to-white">
                  <div className="rounded-full bg-[#1f2a33] px-4 py-1 text-white font-semibold text-sm flex items-center justify-center">
                    Home
                  </div>
                </div>
                <span className="text-[rgba(230,238,248,0.9)] text-sm truncate">Services</span>
              </div>

              {/* hamburger for mobile to open full menu */}
              <button
                className="p-2 rounded-md bg-white/5"
                aria-label="Open menu"
                aria-expanded={open}
                onClick={() => setOpen((s) => !s)}
              >
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
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

          <button className="hidden sm:inline-flex bg-gradient-to-r from-[#8b4bff] to-[#5de1ff] text-[#0b1020] px-5 py-2 rounded-full font-semibold items-center gap-2">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2l1.8 4.2L18 8l-4.2 1.8L12 14l-1.8-4.2L6 8l4.2-1.8L12 2z" fill="#fff" opacity="0.9"/>
            </svg>
            Sign In
          </button>

          {/* On very small screens show a compact sign-in icon */}
          <button className="sm:hidden bg-gradient-to-r from-[#8b4bff] to-[#5de1ff] text-[#0b1020] w-10 h-10 rounded-full flex items-center justify-center" aria-label="Sign in">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2l1.8 4.2L18 8l-4.2 1.8L12 14l-1.8-4.2L6 8l4.2-1.8L12 2z" fill="#fff" opacity="0.9"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div className={`md:hidden transition-max-h duration-300 overflow-hidden ${open ? 'max-h-96' : 'max-h-0'}`}>
        <div className="px-6 pb-4">
          <div className="flex flex-col gap-3 bg-[rgba(255,255,255,0.03)] rounded-xl p-4 mt-3">
            {navItems.map((it, idx) => (
              <a key={idx} href={it.href} className="text-white/90 py-2 px-3 rounded-md hover:bg-white/5">
                {it.label}
              </a>
            ))}

            <div className="pt-2 border-t border-white/5 mt-2 flex items-center justify-between">
              <button className="bg-gradient-to-r from-[#8b4bff] to-[#5de1ff] text-[#0b1020] px-4 py-2 rounded-full font-semibold">Sign In</button>
              <button className="bg-white/5 px-3 py-2 rounded-md">Cart</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
