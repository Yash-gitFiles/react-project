import React from "react";
import styles from "../../styles/home/tourister.module.css";

function Tourister() {
  return (
    <div>
      <div className={styles.imgContainer}>
        <img src="/images/tou01.jpg" alt="" />
        <img src="/images/men02.jpg" alt="" />
        <img src="/images/men03.jpg" alt="" />
      </div>
    </div>
  );
}

export default Tourister;
