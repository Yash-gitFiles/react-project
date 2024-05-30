import React from "react";
import Suggested from "./Suggested";
import styles from "../../styles/group/suggested.module.css";

function SuggestedRow() {
  const data = [
    { img: "/images/adve01.jpg", title: "Travelling In India", desc: "Public" },
    {
      img: "/images/adv02.jpg",
      title: "Travelling In Australia",
      desc: "Public",
    },
    {
      img: "/images/adve03.jpg",
      title: "Travelling In Europe",
      desc: "Public",
    },
  ];

  const componet = data.map((value, index) => {
    return (
      <Suggested
        key={index}
        img={value.img}
        title={value.title}
        desc={value.desc}
      />
    );
  });
  return <div className={styles.mainContainer}>{componet}</div>;
}

export default SuggestedRow;
