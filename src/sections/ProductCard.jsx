import React from 'react'
import { star } from '../assets/icons'

const ProductCard = (props) => {
  return (
    <div className='flex flex-col w-full max-sm:w-full card cursor-pointer'>
        <img src={props.imgURL} className='w-[280px] h-[280px] rounded-3xl' />
        <div className='mt-8 flex gap-2 justify-start '>
        
       
        
        </div>
        <h3 className='text-2xl leading-normal mt-2 font-semibold'>{props.name}</h3>
        <p className=' text-coral-red leading-normal font-montserrat'>{props.price}</p>
    </div>
  )
}

export default ProductCard