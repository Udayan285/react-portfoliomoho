import React from "react";
import "./testimonials.css";
import AVTR1 from "../../src/assets/avatar1.jpg";
import AVTR2 from "../../src/assets/avatar2.jpg";
import AVTR3 from "../../src/assets/avatar3.jpg";
import AVTR4 from "../../src/assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

function Testimonials() {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="avtar one" />
          </div>
          <h5 className="client__name">Earnest Achiver</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint eaque
            accusamus quaerat quod doloremque! Assumenda, ipsam! Nostrum,
            recusandae totam! Asperiores ipsam ut delectus tenetur illo
            assumenda rem dicta unde excepturi.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR2} alt="avtar two" />
          </div>
          <h5 className="client__name">Earnest Achiver</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint eaque
            accusamus quaerat quod doloremque! Assumenda, ipsam! Nostrum,
            recusandae totam! Asperiores ipsam ut delectus tenetur illo
            assumenda rem dicta unde excepturi.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR3} alt="avtar three" />
          </div>
          <h5 className="client__name">Earnest Achiver</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint eaque
            accusamus quaerat quod doloremque! Assumenda, ipsam! Nostrum,
            recusandae totam! Asperiores ipsam ut delectus tenetur illo
            assumenda rem dicta unde excepturi.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR4} alt="avtar four" />
          </div>
          <h5 className="client__name">Earnest Achiver</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint eaque
            accusamus quaerat quod doloremque! Assumenda, ipsam! Nostrum,
            recusandae totam! Asperiores ipsam ut delectus tenetur illo
            assumenda rem dicta unde excepturi.
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Testimonials;
