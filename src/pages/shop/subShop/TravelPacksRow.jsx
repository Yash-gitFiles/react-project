import React from "react";
import styles from "../../../styles/shop/travelPacks.module.css";
import TravelPacks from "./TravelPacks";

function TravelPacksRow() {
  const data = [
    {
      img: "/images/bag2.jpg",
      title: "Travel Backpack",
      prisePara: "67",
      ratingPara: "5",
    },
    {
      img: "/images/bag2.jpg",
      title: "Travel Backpack",
      prisePara: "67",
      ratingPara: "5",
    },
    {
      img: "/images/bag2.jpg",
      title: "Travel Backpack",
      prisePara: "10",
      ratingPara: "5",
    },
    {
      img: "/images/bag2.jpg",
      title: "Travel Backpack",
      prisePara: "10",
      ratingPara: "5",
    },
    {
      img: "/images/bag2.jpg",
      title: "Travel Backpack",
      prisePara: "10",
      ratingPara: "5",
    },
    {
      img: "/images/bag2.jpg",
      title: "Travel Backpack",
      prisePara: "10",
      ratingPara: "5",
    },
  ];

  const componet = data.map((value, index) => {
    return (
      <TravelPacks
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

export default TravelPacksRow;
