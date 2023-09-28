import React from "react";
import "./testimonials.css";
import AVTR1 from "../../src/assets/E3F9E6EF-5FE9-4EDD-93C0-E011D7A485BB.webp";
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
          <h5 className="client__name">Rafaelfranco21</h5>
          <small className="client__review">
          Great work! Good communication! Thanks.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR2} alt="avtar two" />
          </div>
          <h5 className="client__name">Yantri</h5>
          <small className="client__review">
          Working with Udayan was an absolute pleasure! Their web development expertise transformed our outdated website into a modern, user-friendly platform. 
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR3} alt="avtar three" />
          </div>
          <h5 className="client__name">Rolfavarga954</h5>
          <small className="client__review">
          We were looking for a reliable web development partner and found just that with Udayan. They not only delivered a visually stunning website but also ensured it's highly functional and optimized for performance.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR4} alt="avtar four" />
          </div>
          <h5 className="client__name">Hiya</h5>
          <small className="client__review">
          I approached Udayan for a website redesign, and I am thrilled with the results! They completely revamped our website, giving it a fresh look and improving its functionality..
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Testimonials;
