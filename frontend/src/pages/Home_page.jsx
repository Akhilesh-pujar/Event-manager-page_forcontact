import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from "react-router-dom";
import {motion} from "framer-motion"
import ImageCaursel from '../components/ImageCaursel';
import Description from '../components/Description';


const Home_page = () => {
  return (
    <div className='bg-[#5fbda533] h-screen'>
         <header className="px-4 lg:px-6 h-14 flex items-center">
         <NavLink to='/' className="w-16 h-14 object-contain items-center  text-white flex font-semibold justify-center rounded-lg">
        <p className=' bg-gradient-to-r from-[#00c6ff] to-[#0072ff] bg-clip-text text-transparent p-0' >Nayana</p>
      </NavLink>
      <motion.div
       initial={{
        x:500,
        opacity:0,
        scale:0.5
      }} 
      animate={{
        x:0,
        opacity:1,
        scale:1
      }}
      transition={{
        duration:1.5,
      }}
      className='flex flex-row items-center cursor-pointer'>
      
      <nav className='flex text-lg gap-4 justify-end font-medium text-black'>
        <NavLink to='/home/signin' >
         Sign in
        </NavLink>
        <NavLink to='/home/signup' className= "text-black">
          Sign up
        </NavLink>
      </nav>
      </motion.div>
      </header>

        <section className="w-full h-[70dvh] relative overflow-hidden">
          {/* <img
            src="/party.jpg"
            alt="Event Management"
            className="absolute inset-0 w-full h-full object-cover object-center"
          /> */}
          
          <ImageCaursel/>
  
         
 
        </section>
      

    </div>
    
  )
}

export default Home_page