import React, { useState } from "react";
import styles from "../styles/layout/navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  function handleShowMenu() {
    setIsVisible(!isVisible);
  }
  return (
    <div className={styles.mainContainer}>
      <div>
        <h2>Logo</h2>
      </div>
      <ul className={`${styles.ulItems} ${isVisible ? styles.visible : ""}`}>
        <li onClick={handleShowMenu}>
          <Link to="/">Home</Link>
        </li>
        <li onClick={handleShowMenu}>
          <div className={styles.dropDownShop}>
            <a href="#">Shopping</a>
            <div className={styles.dropdownDesc}>
              <li>
                <Link to="backpacks">BACK PACKS</Link>
              </li>
              <li>
                <Link to="travelpacks">TRAVEL PACKS</Link>
              </li>
              <li>
                <Link to="giftcard">GIFT CARD</Link>
              </li>
            </div>
          </div>
        </li>
        <li onClick={handleShowMenu}>
          <Link to="about">About</Link>
        </li>
        <li onClick={handleShowMenu}>
          <Link to="products">Products</Link>
        </li>
        <li onClick={handleShowMenu}>
          <Link to="group">Group</Link>
        </li>
        <li onClick={handleShowMenu}>
          <Link to="contact">Contact</Link>
        </li>
      </ul>
      <div className={styles.menuBar} onClick={handleShowMenu}>
        {isVisible ? (
          <i className="fa-solid fa-xmark"></i>
        ) : (
          <i className="fa-solid fa-bars"></i>
        )}
      </div>
    </div>
  );
}

export default Navbar;
