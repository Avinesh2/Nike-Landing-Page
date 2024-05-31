import React from 'react'
import { products } from '../Constants'
import ProductCard from './ProductCard'

const PopularProducts = () => {
  return (
    <section id="products" className='max-container max-sm:mt-12'>
      <div className='flex flex-col justify-start gap-5'>
        <h2 className='text-4xl font-palanquin font-bold'>Our <span className='text-[#DFA35C] font-bold'>Team </span>Members</h2>
        <p className='text-slate-gray mt-2 lg:max-w-lg font-montserrat'>Our members are driven by a shared enthusiasm for exploration and a dedication to pushing the boundaries of what is possible in the world of technology.</p>
      </div>

      <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14  max-sm:ml-20 '>
      {products.map(product=>(
        <div>
          <ProductCard key="product.name" {...product} />
        </div>
      ))}

      </div>
    </section>
  )
}

export default PopularProducts