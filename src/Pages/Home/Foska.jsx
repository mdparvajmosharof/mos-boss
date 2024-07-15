import React from 'react'
import { Parallax } from 'react-parallax'
import p1 from '../../../Assets/home/featured.jpg'
import SectionTitle from '../../Components/SectionTitle'

const Foska = () => {
  return (
    <div className='my-10'>
        
      <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={p1}
        bgImageAlt="chef-service.jpg"
        strength={-200}

    >
      <div className='text-white'>
      <SectionTitle heading={"From our menu"} subHeading={"--Check it out--"}></SectionTitle> 
      </div>
      <div className=' flex items-center gap-5 px-10 pb-20' >
        <div className='w-1/2'>
            <img src={p1} alt="" />
        </div>
      <div className=' w-1/2 p-10 text-center text-white mx-auto my-6 '>
      <p className='text-2xl font-bold'>March 30 2024</p>
          <h1 className='text-4xl font-bold'>Where Can I Get Some?</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, quae libero sunt dolorem ducimus4 optio accusamus id soluta incidunt et iure nulla excepturi officiis ex voluptas, numquam .</p>
          <button className='btn btn-outline border-0 border-b-4'>Book Now</button>
        </div>
      </div>
        
    </Parallax>
    </div>
  )
}

export default Foska
