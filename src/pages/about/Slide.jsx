import React from "react";
import styles from "../../styles/about/sliderinner.module.css";

function Slide(props) {
  const { src } = props;
  return (
    <div className={styles.slide}>
      <img src={src} />
    </div>
  );
}

export default Slide;
