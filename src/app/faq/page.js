import React from 'react'
import Faq from '../../components/Faq'
import Navbar from '../../components/navbar'

export default function Page() {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen">
        <Faq />
      </main>
    </div>
  )
}
