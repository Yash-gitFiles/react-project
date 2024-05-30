import React from "react";
import SaleParts from "./SaleParts";
import Title from "../common/Title";
import styles from "../../styles/home/saleParts.module.css";

function SalePartsRow() {
  const data = [
    { img: "/images/bag02.jpg", title: "CANVAS BACKPACK", desc: "90" },
    { img: "/images/bag02.jpg", title: "TECHINAL PACK", desc: "75" },
    { img: "/images/bag02.jpg", title: "CAMO BACKPACK ", desc: "65" },
  ];
  const componet = data.map((value, index) => {
    return (
      <SaleParts
        key={index}
        img={value.img}
        title={value.title}
        desc={value.desc}
      />
    );
  });
  return (
    <div>
      <div>
        <Title title="NOW ON SALE" desc="UP TO 50% OFF" />
      </div>
      <div className={styles.finalContainer}>{componet}</div>
    </div>
  );
}

export default SalePartsRow;
