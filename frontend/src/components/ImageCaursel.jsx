import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const slidesData = [
{ id: 1, image: '/party.jpg', description: 'Event 1: Party Event' },
{ id: 2, image: '/anniversary.jpg', description: 'Event 2: Birthday Surprises' },
{ id: 3, image: '/gamenight.jpg', description: 'Event 3: Game Hubs' },
];

const SliderWrapper = styled.div`
  width: 100%;
  height:100%;
  margin: auto;
  .slick-slide {
    text-align: center;
    position:relative;
    
    .description {
    border-radius:10px;
      position:absolute;
      top:0.5%;
      left:50%;
      tranform:translate(-50%, -50%);
      width: 100%;
      text-align: left;
      font-size: 1.5rem;
      color: #fff;
      background: rgba(255, 0, 0, 0.5);
      padding: 10px ;
      z-index:2;
    }
    img {
      width: 100%;
      height: auto;
      object-fit: cover;
      max-height:80vh;
      z-index:1;
    }
  }
`;
const ImageCaursel = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
      };

  return (
    <SliderWrapper>
    <Slider {...settings}>
      {slidesData.map((slide) => (
        <div key={slide.id}>
          <div className="description">{slide.description}</div>
          <img src={slide.image} alt={slide.description} />
        </div>
      ))}
    </Slider>
  </SliderWrapper>
  );
};

export default ImageCaursel;
