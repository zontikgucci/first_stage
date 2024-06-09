import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import  Rating  from 'react-rating'
import { SwiperNavButton } from "../SwiperNavButton/SwiperNavButton"


import 'swiper/swiper-bundle.css'
import './card.scss'

export const Card = ({ prodicts }) => {
  return (
    <div className='card'>
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidersPerView={3}
        navigation={{
          nextEl: '.card__next',
          prevEl: '.card__prev'
        }}
        className="card__swiper"
      >
        {prodicts.map(prodict => (
          !prodict.absent ?
            <SwiperSlide className="card__item">
              <div className="card__image"></div>
              <Rating
                emptySymbol="far fa-star" // класс FontAwesome для пустой звезды
                fullSymbol="fas fa-star" // класс FontAwesome для полной звезды
                fractions={2} // дробные значения (например, 2 для половинок)
                initialRating={2.5} // начальный рейтинг
                className="card__rating"
              />
              <h3 className="card__title">{prodict.title}</h3>
              <p className="card__price">{prodict.price}</p>
              <button className="card__button">
                <p className="card__basket">В корзину</p>
                <svg className="card__plus" width="13" height="13" viewBox="0 0 13 13" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.70703 5.70837V0.958374H7.29036V5.70837H12.0404V7.29171H7.29036V12.0417H5.70703V7.29171H0.957031V5.70837H5.70703Z"/>
                </svg>
              </button>
            </SwiperSlide> : ''
        ))}
      </Swiper>
      <SwiperNavButton nameClass={'card'} />
    </div>
  )
}