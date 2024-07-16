import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import {motion} from "framer-motion"
import ImageCaursel from '../components/ImageCaursel';
import Description from '../components/Description';
import { SocialIcon } from 'react-social-icons';
import Testimonial from '../components/Testimonial';


const Home_page = () => {
  return (
    <div className='bg-gradient-to-r from-[#cce9ca] to-[#919cfa] h-screen'>
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 
    xl:items-center'>
      <motion.div 
      initial={{
        x:-500,
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
      
      className='flex flex-row items-center'>
        {/*--------------Social Icons--------------*/}
        <span className=' text-xl bg-gradient-to-r from-[#473e92] to-[#6089bb] bg-clip-text text-transparent p-0'>
          Nayana</span>
      </motion.div>
   
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
            
      
      
      className='flex flex-row items-center text-gray-300 cursor-pointer'>
        
        
        <SocialIcon url="https://www.linkedin.com/in/akhilesh-pujar-70aa26212/" 
        bgColor='transparent'
        fgColor='black'
        />
        <SocialIcon url="https://www.instagram.com/akhileshspujar/" 
        bgColor='transparent'
        fgColor='black'
        />
    
          <NavLink to='/home/signin' className="text-black flex hover:text-pink-300 font-normal text-xl" >
         Sign in|
        </NavLink>
        <NavLink to='/home/signup' className= "text-black flex hover:text-pink-300 font-normal text-xl">
          Sign up
        </NavLink>
       
        

      </motion.div>

    </header>

        <section className="w-full h-[70dvh] relative overflow-hidden rounded-md">
          
          <ImageCaursel/>

          
        </section>
        <Testimonial/>
      

    </div>
    
  )
}

export default Home_page