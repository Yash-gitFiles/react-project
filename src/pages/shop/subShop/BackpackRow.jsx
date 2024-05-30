import React from "react";
import styles from "../../../styles/shop/backPack.module.css";
import BackPacks from "./BackPacks";

function BackpackRow() {
  const data = [
    {
      img: "/images/bag02.jpg",
      title: "Canvas Backpack",
      prisePara: "67",
      ratingPara: "5",
    },
    {
      img: "/images/bag02.jpg",
      title: "Canvas Backpack",
      prisePara: "67",
      ratingPara: "5",
    },
    {
      img: "/images/bag02.jpg",
      title: "Canvas Backpack",
      prisePara: "10",
      ratingPara: "5",
    },
    {
      img: "/images/bag02.jpg",
      title: "Canvas Backpack",
      prisePara: "10",
      ratingPara: "5",
    },
    {
      img: "/images/bag02.jpg",
      title: "Canvas Backpack",
      prisePara: "10",
      ratingPara: "5",
    },
    {
      img: "/images/bag02.jpg",
      title: "Canvas Backpack",
      prisePara: "10",
      ratingPara: "5",
    },
  ];

  const componet = data.map((value, index) => {
    return (
      <BackPacks
        key={index}
        img={value.img}
        title={value.title}
        prisePara={value.prisePara}
        ratingPara={value.ratingPara}
      />
    );
  });
  return <div className={styles.finalContainer}>{componet}</div>;
}

export default BackpackRow;
