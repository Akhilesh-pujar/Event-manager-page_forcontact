import React from 'react'
import Navbar from "../components/Navbar"
import HeroSection from "../components/HeroSection"
import About from "../components/About"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import { Toaster } from "react-hot-toast";
import Services from "../components/Services"

const AllComponents = () => {
  return (
    <div>
       <Navbar />
      <HeroSection />
      <Services />
      <About />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  )
}

export default AllComponents