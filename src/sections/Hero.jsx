import React from 'react'
import Button from './Button'
import { arrowRight } from '../assets/icons'
import { shoes, statistics } from '../Constants'
import { bigShoe1 } from '../assets/images'
import ShoeCard from './ShoeCard'
import { useState } from 'react';

const Hero = () => {

  
  return (
    <section id="home" className='w-full  p-2 flex flex-col xl:flex-row min-h-screen justify-center gap-10 max-container'>

    <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28  '>
    <p className='text-[#DFA35C] text-xl font-montserrat'>We Welcome You to</p>
    <h1 className='mt-10 font-palanquin text-8xl font-bold max-sm:text-[72px] max-sm:leading-[82px]'>
    <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'> 
    Technical Society of 
    </span>
    <br/>
    <span className='text-[#DFA35C] inline-block mt-3'>IIIT</span> Kota
    </h1>
    <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-[30rem]'>
    Society fueled by a collective passion for technology and a commitment to fostering a vibrant tech culture within the college .
    </p>
    <Button label="Contact Us" iconURL={arrowRight}/>

    
    </div>

    <div className='relative flex flex-1 justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
      {/* <img src={} width={610} height={500} className='object-contain relative z-10' /> */}
       
      
    </div>

    

    </section>
  )
}

export default Hero