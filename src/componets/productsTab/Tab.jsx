import React from "react";
import styles from "../../styles/products/productsTab.module.css";

function Tab(props) {
  const { activeTab, setActiveTab } = props;
  function handleClick(index) {
    setActiveTab(index);
    // console.log(activeTab);
  }
  return (
    <div>
      <ul className={styles.productsListContainer}>
        <li
          onClick={function () {
            handleClick(0);
          }}
        >
          All Products
        </li>
        <li
          onClick={function () {
            handleClick(1);
          }}
        >
          Back Packs
        </li>
        <li
          onClick={function () {
            handleClick(2);
          }}
        >
          Travel Packs
        </li>
      </ul>
    </div>
  );
}

export default Tab;
