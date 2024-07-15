import React from 'react'
import SectionTitle from '../../Components/SectionTitle'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import sld1 from '../../../Assets/home/slide1.jpg'
import sld2 from '../../../Assets/home/slide2.jpg'
import sld3 from '../../../Assets/home/slide3.jpg'
import sld4 from '../../../Assets/home/slide4.jpg'
import sld5 from '../../../Assets/home/slide5.jpg'
import p1 from '../../../Assets/home/chef-service.jpg'
import { Parallax } from 'react-parallax';

const OrderSld = () => {
  return (
    <div>
      <SectionTitle heading={"order now"} subHeading={"---From 11:00am to 10:00pm---"}></SectionTitle>
      <div className='my-5'>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper py-3"
      >
        <SwiperSlide className='mb-10'>
          <img src={sld1} alt="" />
        </SwiperSlide>
        <SwiperSlide className='mb-10'>
          <img src={sld2} alt="" />
        </SwiperSlide>
        <SwiperSlide className='mb-10'>
          <img src={sld3} alt="" />
        </SwiperSlide>
        <SwiperSlide className='mb-10'>
          <img src={sld4} alt="" />
        </SwiperSlide>
        <SwiperSlide className='mb-10'>
          <img src={sld5} alt="" />
        </SwiperSlide>
        
      </Swiper>

      </div>

      <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={p1}
        bgImageAlt="chef-service.jpg"
        strength={-200}
    >
      <div className='h-[500px] flex items-center' >
      <div className='bg-white bg-opacity-75 w-3/4 p-10 text-center text-black mx-auto my-6 '>
          <h1 className='text-5xl'>Mos Boss</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, quae libero sunt dolorem ducimus optio accusamus id soluta incidunt et iure nulla excepturi officiis ex voluptas, numquam inventore nisi beatae, doloribus porro. Labore, facilis repudiandae voluptas deserunt ex obcaecati autem exercitationem dolores nihil in rerum quas fugiat laudantium eius sed.</p>
        </div>
      </div>
        
    </Parallax>
      
    </div>
  )
}

export default OrderSld
