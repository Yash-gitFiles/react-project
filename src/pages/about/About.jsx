import React from "react";
import styles from "../../styles/about/about.module.css";
import Carousel from "./Carousel";

function About() {
  return (
    <>
      <div className={styles.aboutContainer}>
        <div className={styles.imgContainer}>
          <img src="/images/adve01.jpg" alt="" />
        </div>
        <div className={styles.descContainer}>
          <h2>ABOUT US</h2>
          <p>
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. I’m a great place for you to
            tell a story and let your users know a little more about you.
          </p>
          <button>CLICK ME!</button>
        </div>
      </div>
      <div>
        <Carousel />
      </div>
    </>
  );
}

export default About;
