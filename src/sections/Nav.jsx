import React from 'react'
import { headerLogo } from '../assets/images'
import {navLinks}  from '../Constants'
import { hamburger } from '../assets/icons'
import { TechKnow } from '../assets/images'
const Nav = () => {
  return (
    <header className='padding-x py-8  w-full fixed bg-white-400 z-50'>
        <nav className='flex justify-between items-center max-container'>
            <div className=''>
            <a href="/">
            <img
                src={TechKnow} 
                alt='Logo'    
                width={60}
                className='rounded-[40px]'
                />

            </a>
            </div>
            <a><h3 className='text-[#DFA35C] font-palanquin text-2xl font-bold max-sm:text-[72px] max-sm:leading-[82px] ml-4'>TechKnow</h3></a>
            <ul className='flex-1 flex  justify-evenly items-center gap-16 max-lg:hidden'>
            {navLinks.map(data=>(
              <li key={data.href}>
                <a href={data.href} className='font-montserrat leading-normal text-lg text-slate-gray'>{data.label}</a>
              </li>
            ))}

            

            </ul>
            <div className='w-5 lg:hidden cursor-pointer'>
              <img src={hamburger} />
            </div>

        </nav>
    </header>
  )
}

export default Nav;