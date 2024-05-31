import React from 'react'
import Button from './Button'
import { About, shoe8 } from '../assets/images'

const SuperQuality = () => {
  return (
    <section id="about-us" className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'>
    <div class=" min-h-[80vh] flex items-center justify-center px-16 -z-10 w-1/2 absolute left-[40px] rounded-xl">
  <div class="relative w-full max-w-lg">
    <div class="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
    <div class="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
    <div class="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
    <div class="m-8 relative space-y-4">
    </div>
  </div>
</div>
    <div className='flex flex-1 flex-col'>
    
    <h2 className='font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
    
     
    <span className='text-pink-500'> About
    </span>
    <span > Us </span>
     
    
    </h2>
    <p className='mt-4 lg:max-w-lg info-text text-'>
    At TechKnow, we take pride in being a hub of highly motivated individuals, each equipped with an outstanding technical background. Within our society, you'll find a community of impassioned individuals driven by a shared zeal for innovation and armed with an exceptional technical prowess.
    </p>
    <p className='mt-6 lg:max-w-lg info-text'>
    TechKnow is the place where ideas flourish, skills evolve, and innovation knows no bounds .
    </p>
    <div className='mt-5'>
    <Button label="View Details"/>
    </div>

    </div>
    <div>
        <img src={About} width={570} height={522} className='rounded-lg'/>
    </div>
    
    </section>
  )
}

export default SuperQuality