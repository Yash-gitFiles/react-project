import React from "react";
import styles from "../../styles/group/suggested.module.css";

function Suggested(props) {
  const { img, alt, title, desc } = props;
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img src={img} alt={alt} />
      </div>
      <div className={styles.descContainer}>
        <p>{title}</p>
        <h6>{desc}</h6>
        <button>Join Now</button>
      </div>
    </div>
  );
}

export default Suggested;
