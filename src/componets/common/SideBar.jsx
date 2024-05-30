import React from "react";
import styles from "../../styles/componet/common/sidebar.module.css";

function SideBar() {
  return (
    <div className={styles.sideBarContainer}>
      <div className={styles.brouseContainer}>
        <h4>Brouse By</h4>
        <hr />
        <ul className={styles.brouseList}>
          <li>All Products</li>
          <li>BackPacks</li>
          <li>Duffle Bags</li>
          <li>New Arrival</li>
          <li>Travel Packs</li>
        </ul>
      </div>
      <div>
        <h4>Filter By</h4>
        <hr />
      </div>
      <div className={styles.iconContainer}>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-brands fa-facebook"></i>
      </div>
    </div>
  );
}

export default SideBar;
