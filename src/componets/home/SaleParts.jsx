import React from "react";
import styles from "../../styles/home/saleParts.module.css";

function SaleParts(props) {
  const { img, alt, title, desc } = props;
  return (
    <div className={styles.mainContainer}>
      <div className={styles.imgContainer}>
        <img src={img} alt={alt} />
      </div>
      <div className={styles.descContainer}>
        <h3>{title}</h3>
        <p>$ {desc}</p>
        <button className={styles.showBtn}>View Details</button>
      </div>
    </div>
  );
}

export default SaleParts;
