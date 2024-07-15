import React from 'react'
import MenuBanner from '../Components/MenuBanner'
import MenuItem from '../Components/MenuItem'
import { Link } from 'react-router-dom'

const MenuCategory = ({img, heading, subHeading, items}) => {
  return (
    <div className='my-10 space-y-10'>
      {
        img && <MenuBanner img={img} heading={heading} subHeading={subHeading}></MenuBanner> 
      }
      
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {
                items.map(item => <MenuItem item={item}></MenuItem>)
            }
      </div>
      {
        heading && <div>
        <Link to={`/shop/${heading}`}><button className='btn btn-outline border-0 border-b-2 '>Order Your Favourite Food</button></Link>
      </div>
      }
    </div>
  )
}

export default MenuCategory
