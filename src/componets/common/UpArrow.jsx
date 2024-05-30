import React from "react";
import styles from "../../styles/componet/common/upArrow.module.css";

function UpArrow() {
  function upArrow() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <div className={styles.arrowContainer}>
      <div onClick={upArrow} className={styles.arrowInnerContainer}>
        <i className="fa-solid fa-arrow-up"></i>
      </div>
    </div>
  );
}

export default UpArrow;
