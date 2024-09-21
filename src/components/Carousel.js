import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Swiper core styles
import "swiper/css/navigation"; // Swiper navigation styles
import { Navigation } from "swiper/modules"; // Correctly import Navigation module
import styles from "./Carousel.module.css"; // Custom CSS module

const Carousel = ({ items }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className={styles.carousel}>
      <Swiper
        spaceBetween={20}
        slidesPerView={"auto"}
        navigation={{
          prevEl: prevRef.current, // Assign custom navigation elements
          nextEl: nextRef.current,
        }}
        modules={[Navigation]}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
          1440: {
            slidesPerView: 7,
          },
        }}
        onSwiper={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>{item}</SwiperSlide>
        ))}
      </Swiper>
      <button ref={prevRef} className={styles.swiperButtonPrev}>
        ❮
      </button>
      <button ref={nextRef} className={styles.swiperButtonNext}>
        ❯
      </button>
    </div>
  );
};

export default Carousel;
