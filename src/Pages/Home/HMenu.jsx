import React, { useEffect, useState } from 'react'
import SectionTitle from '../../Components/SectionTitle'
import MenuItem from '../../Components/MenuItem'

const HMenu = () => {
    const [items, setItems] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/menu')
        .then(res => res.json())
        .then(data => {
            setItems(data.filter(item => item.category == "popular"))
        })
    },[])

  return (
    <div>
        <SectionTitle heading={"From our menu"} subHeading={"---Check it out---"}></SectionTitle>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {
                items.map(item => <MenuItem item={item}></MenuItem>)
            }
        </div>
        
    </div>
  )
}

export default HMenu
