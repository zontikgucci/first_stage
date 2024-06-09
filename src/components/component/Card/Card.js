import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { SwiperNavButton } from "../SwiperNavButton/SwiperNavButton"

import { products } from "../../data/products";

import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

import 'swiper/swiper-bundle.css'
import './card.scss'

export const Card = () => {
  return (
    <div className='card'>
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={3}
        navigation={{
          nextEl: '.card__next',
          prevEl: '.card__prev'
        }}
        className="card__swiper"
      >
        {products.filter(prodict => !prodict.absent).map(prodict => (
          <SwiperSlide className="card__item">
            <div className="card__top">
              <div className="card__discount"></div>
              <div className="card__img"></div>
            </div>
            <Stack spacing={1} className="card__rating">
            <Rating
              name="half-rating-read"
                defaultValue={prodict.rating.rate}
                precision={0.1} readOnly
                className="card__star" />
            </Stack>
            <h3 className="card__title">{prodict.title}</h3>
            <div className="card__value">
              <p className="card__old"></p>
              <p className="card__price">{prodict.price.priceString}</p>
            </div>
            <button className="card__button">
                <p className="card__basket">В корзину</p>
                <svg className="card__plus" width="13" height="13" viewBox="0 0 13 13" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.70703 5.70837V0.958374H7.29036V5.70837H12.0404V7.29171H7.29036V12.0417H5.70703V7.29171H0.957031V5.70837H5.70703Z"/>
                </svg>
              </button>
          </SwiperSlide>
        ))}
      </Swiper>
      <SwiperNavButton nameClass={'card'} />
    </div>
  )
}