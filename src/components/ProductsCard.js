import {AiFillStar} from 'react-icons/ai'

import React from 'react'

function ProductsCard({image, title, price, rating, count, description}) {

  return (
    <>
    
    <div className='flex flex-col'>
      <img className=' w-28 h-20 mx-auto shadow-md shadow-green-200' src={image} alt='productimage'/>
   
    <div className='flex flex-col p-2 font-serif'>
        <p>{title.slice(0,50)}</p>
        <p>${price}</p>
        <p className='flex'>{rating}{<AiFillStar/>}</p>
        <p>{count} Units</p>
        <p className='bg-cyan-50'>{description.slice(0,150)}....</p>

    </div>

    </div>
    </>
  )
}

export default ProductsCard
