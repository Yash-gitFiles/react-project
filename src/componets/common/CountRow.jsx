import React from "react";
import Count from "./Count";
import Title from "./Title";
import styles from "../../styles/componet/common/count.module.css";

function CountRow() {
  const data = [
    { countValue: 100, title: "First", desc: "First Para" },
    { countValue: 300, title: "Second", desc: "Second Para" },
    { countValue: 500, title: "Third", desc: "Third Para" },
  ];

  const componet = data.map((value, index) => {
    return (
      <Count
        key={index}
        countValue={value.countValue}
        title={value.title}
        desc={value.desc}
      />
    );
  });
  return (
    <div style={{ margin: "32px" }}>
      <div>
        <Title
          title="Our Report"
          desc=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, molestias. "
        />
      </div>
      <div className={styles.container}>
        <div className={styles.innerContainer}>{componet}</div>
      </div>
    </div>
  );
}

export default CountRow;
