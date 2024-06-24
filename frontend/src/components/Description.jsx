import React from 'react'
import { Link } from 'react-router-dom'

const Description = () => {
  return (
    <div>    
             <div className="absolute inset-0 z-10" />
    <div className="relative z-20 h-full flex flex-col items-center justify-center px-4 text-center text-primary-foreground">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter bg-gradient-to-r from-[#00c6ff] to-[#0072ff] bg-clip-text text-transparent">Elevate Your Events</h1>
      <p className="max-w-[600px] mt-4 text-lg md:text-xl text-white" >
        Our event management experts will help you create unforgettable experiences for your guests.
      </p>
      <Link
        to="/home/signup"
        className=" border hover:border-blue-600 bg-gradient-to-r from-[#00c6ff] to-[#0072ff] bg-clip-text text-transparent inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 mt-6"
        prefetch={false}
      >
        Get Started
      </Link>
    </div>
    </div>
  )
}

export default Description