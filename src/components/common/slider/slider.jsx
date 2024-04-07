'use client';

import React, { useState, useEffect, memo, useRef } from 'react';
import s from './slider.module.scss';
import {
  EffectFade,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Thumbs,
  Controller,
} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-creative';
import 'swiper/css/effect-cards';
import 'swiper/css/effect-coverflow';

const Slider = (props) => {
  const {
    data,
    config,
    configThumb,
    modifier,
    className,
    isNavigation,
    isCustomNav,
    isCustomPageination = false,
    classCustomPageination = '.custome-pagination',
    isPagination,
    CustomNavNext,
    CustomNavPrev,
    thumbsData = false,
    // slidesPerViewThubs = 1,
    classNameThumb,
    ...other
  } = props;

  const [configMain, setConfigMain] = useState(config);

  const swiperreflocal = useRef();

  useEffect(() => {
    if (swiperreflocal) {
      swiperreflocal?.current?.swiper?.autoplay?.stop();
    }
  }, [swiperreflocal]);

  let modifiers =
    modifier &&
    modifier.split(' ')?.map((item) => {
      return s[item];
    });

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <Swiper
      {...other}
      className={`${modifiers} ${className ?? ''}`}
      modules={[
        Navigation,
        Autoplay,
        Pagination,
        Thumbs,
        Scrollbar,
        A11y,
        EffectFade,
        Controller,
      ]}
      {...configMain}
      // onSwiper={(swiper) => {
      //   setSwiperInstace(swiper);
      // }}
      // controller={{ control: thumbsSwiper }}
      ref={swiperreflocal}
      navigation={
        isNavigation
          ? true
          : isCustomNav
          ? {
              nextEl: CustomNavNext ?? '.custom-swiper-button-next',
              prevEl: CustomNavPrev ?? '.custom-swiper-button-prev',
            }
          : false
      }
      pagination={
        isPagination
          ? { clickable: true }
          : isCustomPageination
          ? {
              el: classCustomPageination,
              clickable: true,
              renderBullet: (index, className) => {
                return '<span class="' + className + '"></span>';
              },
            }
          : false
      }
      thumbs={{
        swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
      }}
    >
      {data?.map((slide, index) => {
        return <SwiperSlide key={index}>{slide}</SwiperSlide>;
      })}
    </Swiper>
  );
};

export default memo(Slider);
