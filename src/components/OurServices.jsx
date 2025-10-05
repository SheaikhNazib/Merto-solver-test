"use client"
import React, { useEffect, useState, useRef } from 'react'
import Link from 'next/link'

const OurServices = () => {
  const services = [
    {
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" />
          <path d="M2 17L12 22L22 17" />
          <path d="M2 12L12 17L22 12" />
        </svg>
      ),
      title: 'Graphic Design',
      description: 'We are constantly growing or learning and improving Enter your personal real estate wacelf story, where finding the ideal home is',
    },
    {
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <rect x="7" y="7" width="10" height="10" rx="1" />
        </svg>
      ),
      title: 'Web & Software Development',
      description: 'We are constantly growing or learning and improving Enter your personal real estate wacelf story, where finding the ideal home is',
      featured: true,
    },
    {
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="2" width="20" height="20" rx="2.18" />
          <line x1="7" y1="2" x2="7" y2="22" />
          <line x1="17" y1="2" x2="17" y2="22" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <line x1="2" y1="7" x2="7" y2="7" />
          <line x1="2" y1="17" x2="7" y2="17" />
          <line x1="17" y1="7" x2="22" y2="7" />
          <line x1="17" y1="17" x2="22" y2="17" />
        </svg>
      ),
      title: 'Multimedia & Video Editing',
      description: 'We are constantly growing or learning and improving Enter your personal real estate wacelf story, where finding the ideal home is',
    },
    {
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 20V10M12 20V4M6 20v-6" />
        </svg>
      ),
      title: 'Digital Marketing',
      description: 'We are constantly growing or learning and improving Enter your personal real estate wacelf story, where finding the ideal home is',
    },
    {
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 1v6m0 6v6M5.6 5.6l4.2 4.2m4.4 4.4l4.2 4.2M1 12h6m6 0h6M5.6 18.4l4.2-4.2m4.4-4.4l4.2-4.2" />
        </svg>
      ),
      title: 'Creative Writing Solution',
      description: 'We are constantly growing or learning and improving Enter your personal real estate wacelf story, where finding the ideal home is',
    },
    {
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.35-4.35" />
        </svg>
      ),
      title: 'SEO',
      description: 'We are constantly growing or learning and improving Enter your personal real estate wacelf story, where finding the ideal home is',
    },
    {
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <circle cx="12" cy="11" r="3" />
        </svg>
      ),
      title: '3D Animation & Visualization',
      description: 'We are constantly growing or learning and improving Enter your personal real estate wacelf story, where finding the ideal home is',
    },
    {
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        </svg>
      ),
      title: 'E-Commerce Solution',
      description: 'We are constantly growing or learning and improving Enter your personal real estate wacelf story, where finding the ideal home is',
    },
    {
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20 6L9 17l-5-5" />
          <circle cx="12" cy="12" r="10" strokeWidth="1" />
        </svg>
      ),
      title: 'Accounting',
      description: 'We are constantly growing or learning and improving Enter your personal real estate wacelf story, where finding the ideal home is',
    },
    {
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      title: 'Special Combo',
      description: 'We are constantly growing or learning and improving Enter your personal real estate wacelf story, where finding the ideal home is',
    },
    {
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
      title: 'Premium Website',
      description: 'We are constantly growing or learning and improving Enter your personal real estate wacelf story, where finding the ideal home is',
    },
    {
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      ),
      title: 'Premium Domains',
      description: 'We are constantly growing or learning and improving Enter your personal real estate wacelf story, where finding the ideal home is',
    },
    {
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="18" cy="18" r="3" />
          <circle cx="6" cy="6" r="3" />
          <path d="M6 21V9a9 9 0 0 0 9 9" />
        </svg>
      ),
      title: 'Proxy',
      description: 'We are constantly growing or learning and improving Enter your personal real estate wacelf story, where finding the ideal home is',
    },
    {
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="8.5" cy="7" r="4" />
          <polyline points="17 11 19 13 23 9" />
        </svg>
      ),
      title: 'Merchandise',
      description: 'We are constantly growing or learning and improving Enter your personal real estate wacelf story, where finding the ideal home is',
    },
    {
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
      ),
      title: 'Academy',
      description: 'We are constantly growing or learning and improving Enter your personal real estate wacelf story, where finding the ideal home is',
    },
  ]

  const [logoLoaded, setLogoLoaded] = useState(false)
  const logoContainer = useRef(null)
  const animRef = useRef(null)

  useEffect(() => {
    // Load lottie-web from CDN to avoid adding a package and peer dependency conflicts.
    const existing = document.querySelector('script[data-lottie=cdn]')
    const path = '/Lottie%20Files/Logo.json'

    function start() {
      try {
        // eslint-disable-next-line no-undef
        animRef.current = window.lottie.loadAnimation({
          container: logoContainer.current,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          path,
        })
        setLogoLoaded(true)
      } catch (err) {
        console.error('Failed to start lottie animation', err)
      }
    }

    if (window.lottie) {
      start()
      return () => animRef.current?.destroy()
    }

    if (!existing) {
      const s = document.createElement('script')
      s.src = 'https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.12.2/lottie.min.js'
      s.async = true
      s.setAttribute('data-lottie', 'cdn')
      s.onload = start
      s.onerror = () => console.error('Failed to load lottie-web from CDN')
      document.body.appendChild(s)
      return () => {
        animRef.current?.destroy()
        // don't remove script to avoid reloading on next mount
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section className="bg-[#0a0a1f] text-white py-16 px-4 sm:px-6 lg:px-8 relative">
      {/* Discount Badge */}
      <div className="absolute top-8 left-8 bg-black/80 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
        <div className="w-9 h-6 flex items-center" ref={logoContainer} aria-hidden={!logoLoaded}></div>
        <span>Get My 15% OFF</span>
        <button className="text-white hover:text-gray-300 ml-2">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Enter your personal real estate secretary, where finding the ideal home is effortless and comfortable with our experience
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl p-6 transition-all duration-300 hover:transform hover:scale-105 ${
                service.featured
                  ? 'bg-gradient-to-br from-purple-600/20 to-purple-900/20 border-2 border-purple-500'
                  : 'bg-[#13132a] border-2 border-transparent hover:border-purple-500/30'
              }`}
            >
              {/* Icon */}
              <div className="mb-4 text-purple-400">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>

              {/* Description */}
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Read More Link */}
              <Link 
                href="#" 
                className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors"
              >
                Read More
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurServices
