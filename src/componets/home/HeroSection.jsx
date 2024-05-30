import React from "react";
import styles from "../../styles/home/heroSection.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function HeroSection() {
  var settings = {
    // ======== simple slider =======
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 2000,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
    arrows: false,
  };
  return (
    <Slider {...settings}>
      <div className={styles.mainContainer}>
        <img src="/images/adve01.jpg" alt="" />
        <div className={styles.descContainer}>
          <h1>PLAN YOUR ADVENTURE</h1>
          <button>SHOP NOW</button>
        </div>
      </div>
      <div className={styles.mainContainer}>
        <img src="/images/adv02.jpg" alt="" />
        <div className={styles.descContainer}>
          <h1>PLAN YOUR ADVENTURE</h1>
          <button>SHOP NOW</button>
        </div>
      </div>
      <div className={styles.mainContainer}>
        <img src="/images/adve03.jpg" alt="" />
        <div className={styles.descContainer}>
          <h1>PLAN YOUR ADVENTURE</h1>
          <button>SHOP NOW</button>
        </div>
      </div>
    </Slider>
  );
}

export default HeroSection;
