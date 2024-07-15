import React from 'react'
import '../ComponentCss/MenuItem.css'

const MenuItem = ({item}) => {
    const {name, image, recipe, price} = item;
  return (
    <div className='flex gap-5 items-center justify-around'>
      <div className='image '>
        <img className='w-[100px] image' src={image} alt="" />
      </div>
      <div>
        <p className='font-bold'>{name}</p>
        <p>{recipe}</p>
      </div>
      <div className='text-emerald-600 flex gap-1'>
        <p>$</p>
        <p>{price}</p>
      </div>
    </div>
  )
}

export default MenuItem
