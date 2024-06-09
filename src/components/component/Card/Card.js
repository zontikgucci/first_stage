import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { SwiperNavButton } from "../SwiperNavButton/SwiperNavButton"

import { products } from "../../data/products";

import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

import { formatNumberIntl } from "../../../core/function";


import 'swiper/swiper-bundle.css'
import './card.scss'

export const Card = ({slidesPerView, spaceBetween, nameClass, discount = false, loop = false}) => {

  const nextEl = `.swiperNavButton__next--${nameClass}`
  const nextPrev = `.swiperNavButton__prev--${nameClass}`

  return (
    <div className='card'>
      <Swiper
        modules={[Navigation]}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        loop={loop}
        navigation={{
          nextEl: nextEl,
          prevEl: nextPrev
        }}
        className="card__swiper"
      >
        {products.filter(prodict => !prodict.absent).map(prodict => (
          <SwiperSlide className={`card__item card__item--${nameClass}`} key={prodict.id}>
            <a href="$" className="card__top" onClick={e => e.preventDefault()}>
              <div
                className={`card__discount ${!discount ? 'disable' : ''}`}
              >
                {`-${prodict.discount}%`}
              </div>
              <div className="card__img"></div>
            </a>
            <Stack spacing={1} className="card__rating">
            <Rating
              name="half-rating-read"
                defaultValue={prodict.rating.rate}
                precision={0.1} readOnly
                className="card__star" />
            </Stack>
            <a
              href="$"
              className="card__title"
              onClick={e => e.preventDefault()}
            >
              {prodict.title}
            </a>
            <div className="card__value">
              <p
                className={`card__old ${!discount ? 'disable' : ''}`}
              >
                {`${formatNumberIntl(prodict.price + prodict.price * prodict.discount / 100)} ₽`}
              </p>
              <p className="card__price">{`${formatNumberIntl(prodict.price)} ₽`}</p>
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
      <SwiperNavButton nameClass={nameClass} />
    </div>
  )
}