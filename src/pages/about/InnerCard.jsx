import React, { useState } from "react";
import Slider from "react-slick";
import { NextArrow, PrevArrow } from "./Arrows";
import styles from "../../styles/about/sliderinner.module.css";
import Slide from "./Slide";

function InnerCard(props) {
  const { data, title, desc } = props;
  const [isLoading, setIsLoading] = useState(false);
  const settings = {
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  function btn() {
    setIsLoading(true);
  }

  setTimeout(setIsLoading, 3000);
  return (
    <div className={styles.sliderInnerContainer}>
      <Slider {...settings}>
        {data.map((value, index) => {
          return <Slide key={index} src={value.src} />;
        })}
      </Slider>
      <div className={styles.sliderInnerDesc}>
        <h3>{title}</h3>
        <p>{desc}</p>
        <button className={styles.descBtn} onClick={btn}>
          {isLoading ? "Sending Details..." : "View Details"}
        </button>
      </div>
    </div>
  );
}

export default InnerCard;
