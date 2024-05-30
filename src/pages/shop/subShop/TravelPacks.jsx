import React from "react";
import styles from "../../../styles/shop/travelPacks.module.css";

function TravelPacks(props) {
  const { img, alt, title, prisePara, ratingPara } = props;
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img src={img} alt={alt} />
      </div>
      <div className={styles.descContainer}>
        <h4>{title}</h4>
        <p>$ {prisePara}</p>
        <div style={{ display: "flex" }}>
          <i className="fa-solid fa-star" style={{ color: "#fafafa" }}></i>
          <p>{ratingPara}</p>
        </div>
      </div>
    </div>
  );
}

export default TravelPacks;
