import React, { useEffect, useCallback, useState } from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'

export interface FarmsProps {
  tokenMode?: boolean
}
const Slid = styled.div`
`

const SlideImage: React.FC<FarmsProps> = (farmsProps) => {
  

  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 250,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
      
        {
        breakpoint: 1140,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <>
        
      <Slid>
    <Slider  {...sliderSettings}>
          
          <div className='ml-10 '>
            <img src="/images/slider1.png" className=" rounded-2xl " width='350' alt='1' />
          </div>
          <div className='ml-10 '>
            <img src="/images/slider2.png" className=" rounded-2xl " width='350' alt='1' />
          </div>
          <div className='ml-10 '>
            <img src="/images/slider3.png" className=" rounded-2xl"  width='350' alt='1' />
          </div>
          
         

    </Slider>
    </Slid>

    

    </>
  )
}

export default SlideImage
