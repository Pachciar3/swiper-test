import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { Pagination } from "swiper";
import classNames from "classnames";
import styles from "./Slider.module.scss";
import { images } from "./data.js";

export default function Slider() {
  return (
    <div className={styles.slider}>
      <Swiper
        spaceBetween={20}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1284: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        style={{
          marginLeft: -20,
        }}
        slidesPerView={1}
        grabCursor={true}
        slideToClickedSlide={true}
        onSlideChange={() => console.log("slide change")}
        centeredSlides={true}
        loop={true}
        onSwiper={(swiper) => console.log(swiper)}
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
          },
        }}
        modules={[Pagination]}
      >
        {images &&
          images.map(({ id, img, alt }) => (
            <SwiperSlide key={id}>
              <div className={classNames(styles.slide, styles[`slide${id}`])}>
                <Image
                  placeholder="blur"
                  layout="fill"
                  objectFit="cover"
                  src={img}
                  alt={alt}
                />
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
