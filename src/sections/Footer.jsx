import React from 'react'
import { TechKnow, footerLogo } from '../assets/images'

const Footer = () => {
  return (
    <footer className='max-container'>
      <div className='flex justify-between items-start gap-20 flex-wrap max-lg:flex-col'>
        <div className='flex flex-col items-start'>
        <div className='flex gap-3'>
          <a href='/'>
            <img src={TechKnow} width={60} height={46} className='rounded-[40px]'/>
          </a>
          <a href='/' className='text-white text-4xl font-palanquin font-semibold'> 
            TechKnow
          </a>
          </div>
          <p className='mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm'>Join us on a journey where curiosity meets capability, and together, let's unravel the limitless possibilities that the world of technology has to offer</p>
          
        </div>
        <div className='w-full flex justify-between'>
         <p className='text-white-400'>Ⓒ Copyright . All rights reserved</p>
         <p className='text-white-400 cursor-pointer'>Terms and Conditions </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer