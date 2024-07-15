import React, { useEffect, useState } from 'react'
import SectionTitle from '../../Components/SectionTitle'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Rating as Rev } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const Rating = () => {

  const [reviews, setReviews] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/reviews')
      .then(res => res.json())
      .then(data => setReviews(data))
  }, [])

  return (
    <div>
      <SectionTitle heading={"Testimonial"} subHeading={"--what our client say--"}></SectionTitle>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {
          reviews.map(review => <SwiperSlide>
            <div className='w-5/6 mx-auto space-y-5 mb-16'>
              <div className='flex justify-center'>
                <Rev
                  style={{ maxWidth: 180 }}
                  value={review.rating}
                  readOnly
                />
              </div>
              <div className='text-center space-y-5'>
                <p>{review.details}</p>
                <p className='font-bold text-3xl text-emerald-600'>{review.name}</p>
              </div>
            </div>
          </SwiperSlide>)
        }
      </Swiper>

    </div>
  )
}

export default Rating
