import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { Pagination } from "swiper";
import classNames from "classnames";
import styles from "./Slider.module.scss";

import pic1 from "../assets/pic1.jpg";
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.jpg";
import pic4 from "../assets/pic4.jpg";
import pic5 from "../assets/pic5.jpg";
import pic6 from "../assets/pic6.jpg";
import pic7 from "../assets/pic7.jpg";
import pic8 from "../assets/pic8.jpg";
import pic9 from "../assets/pic9.jpg";
import pic10 from "../assets/pic10.jpg";

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
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
          },
        }}
        modules={[Pagination]}
      >
        <SwiperSlide>
          <div className={classNames(styles.slide, styles.slide1)}>
            <Image
              placeholder="blur"
              layout="fill"
              objectFit="cover"
              src={pic1}
              alt="picture"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classNames(styles.slide, styles.slide2)}>
            <Image
              placeholder="blur"
              layout="fill"
              objectFit="cover"
              src={pic2}
              alt="picture"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classNames(styles.slide, styles.slide3)}>
            <Image
              placeholder="blur"
              layout="fill"
              objectFit="cover"
              src={pic3}
              alt="picture"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classNames(styles.slide, styles.slide4)}>
            <Image
              placeholder="blur"
              layout="fill"
              objectFit="cover"
              src={pic4}
              alt="picture"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classNames(styles.slide, styles.slide5)}>
            <Image
              placeholder="blur"
              layout="fill"
              objectFit="cover"
              src={pic5}
              alt="picture"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classNames(styles.slide, styles.slide6)}>
            <Image
              placeholder="blur"
              layout="fill"
              objectFit="cover"
              src={pic6}
              alt="picture"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classNames(styles.slide, styles.slide7)}>
            <Image
              placeholder="blur"
              layout="fill"
              objectFit="cover"
              src={pic7}
              alt="picture"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classNames(styles.slide, styles.slide8)}>
            <Image
              placeholder="blur"
              layout="fill"
              objectFit="cover"
              src={pic8}
              alt="picture"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classNames(styles.slide, styles.slide9)}>
            <Image
              placeholder="blur"
              layout="fill"
              objectFit="cover"
              src={pic9}
              alt="picture"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classNames(styles.slide, styles.slide10)}>
            <Image
              placeholder="blur"
              layout="fill"
              objectFit="cover"
              src={pic10}
              alt="picture"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
