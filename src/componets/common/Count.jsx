import React from "react";
import CountUp from "react-countup";
import styles from "../../styles/componet/common/count.module.css";

function Count(props) {
  const { title, desc, countValue } = props;
  return (
    <div className={styles.countContainer}>
      <div className={styles.countInnerContainer}>
        <h2>{title}</h2>
        <h1>
          <CountUp end={countValue} />+
        </h1>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default Count;
