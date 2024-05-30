import React from "react";
import styles from "../../../styles/componet/common/popOver.module.css";

function PopOver(props) {
  const { message, showPopOver, status } = props;

  const statusMap = {
    success: { color: "green" },
    error: { color: "red" },
  };

  return (
    <div
      className={`${styles.popOverContainer} ${
        showPopOver ? styles.visible : ""
      }`}
      style={{ borderRight: "6px solid " + statusMap[status].color }}
    >
      <div className={styles.msgContainer}>{message}</div>
    </div>
  );
}

export default PopOver;
