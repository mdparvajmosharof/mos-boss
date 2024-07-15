import React from 'react'

const MenuBanner = ({img, heading, subHeading}) => {


  return (
    <div style={{backgroundImage: `url(${img})`}} className='bg-cover bg-center h-[500px] flex justify-center items-center '>
        <div className='p-16 bg-black bg-opacity-50 text-white space-y-6 text-center w-5/6'>
            <p className='text-5xl font-bold '>{heading}</p>
            <p className=''>{subHeading}</p>
        </div>
    </div>
  )
}

export default MenuBanner
