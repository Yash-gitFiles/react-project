import React from "react";
import styles from "../../styles/products/productsGallery.module.css";

function Gallery(props) {
  const { src, title, desc } = props;
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img src={src} />
      </div>
      <div className={styles.descContainer}>
        <h4>{title}</h4>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default Gallery;
