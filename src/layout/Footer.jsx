import React from "react";
import styles from "../styles/layout/footer.module.css";

function Footer() {
  return (
    <div className={styles.container}>
      <div>&copy; 2035 by NORTHPOLE. Powered and secured by Yash Gondaliya</div>
      <div>
        <ul className={styles.ulItems}>
          <li>
            <a href="#">FAQs</a>
          </li>
          <li>
            <a href="#">Groups</a>
          </li>
          <li>
            <a href="#">Shipping & Returns</a>
          </li>
          <li>
            <a href="#">Terms & Condition</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
