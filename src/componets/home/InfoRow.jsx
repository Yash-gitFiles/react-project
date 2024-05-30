import React from "react";
import styles from "../../styles/home/infoRow.module.css";

function InfoRow() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.descContainer}>
        <h1>NEW ARRIVALS</h1>
        <button>SHOP NOW</button>
      </div>
      <div className={styles.imgContainer}>
        <img src="/images/bag02.jpg" alt="" />
      </div>
    </div>
  );
}

export default InfoRow;
