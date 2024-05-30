import React from "react";
import styles from "../../styles/componet/common/title.module.css";

function Title(props) {
  return (
    <div className={styles.mainContainer}>
      <h1>{props.title}</h1>
      <p>{props.desc}</p>
    </div>
  );
}

export default Title;
