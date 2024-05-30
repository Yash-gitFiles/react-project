import React from "react";
import styles from "../../styles/about/sliderinner.module.css";
import InnerCard from "./InnerCard";

function Carousel() {
  const data1 = [
    { src: "/images/adve01.jpg" },
    { src: "/images/adv02.jpg" },
    { src: "/images/adve03.jpg" },
  ];

  const data2 = [
    { src: "/images/map01.jpg" },
    { src: "/images/map02.jpg" },
    { src: "/images/map03.jpg" },
  ];

  const data3 = [
    { src: "/images/water01.jpg" },
    { src: "/images/water02.jpg" },
    { src: "/images/water03.jpg" },
  ];

  const data4 = [
    { src: "/images/travelling02.jpg" },
    { src: "/images/travelling01.jpg" },
    { src: "/images/travelling03.jpg" },
  ];

  return (
    <div className={styles.sliderContainer}>
      <InnerCard
        data={data1}
        title="Slider One"
        desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, inventore."
      />
      <InnerCard
        data={data2}
        title="Slider Two"
        desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, inventore."
      />
      <InnerCard
        data={data3}
        title="Slider Three"
        desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, inventore."
      />
      <InnerCard
        data={data4}
        title="Slider Four"
        desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, inventore."
      />
    </div>
  );
}

export default Carousel;
