import React, { useState } from "react";
import styles from "../../../styles/shop/giftCard.module.css";

function GiftCard() {
  const [count, setCount] = useState(0);
  const [prise, setPrise] = useState(25);

  function decrement() {
    if (count <= 0) {
      alert("Minimum Quantity is 1");
    }
    setCount(count - 1);
  }

  function increment() {
    setCount(count + 1);
  }

  function twoFive() {
    setPrise(25);
  }
  function fifty() {
    setPrise(50);
  }
  function hundread() {
    setPrise(100);
  }
  function oneFifty() {
    setPrise(150);
  }
  function twoHundread() {
    setPrise(200);
  }

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img src="/images/bag02.jpg" alt="" />
      </div>
      <div className={styles.descContainer}>
        <h2>Gift Card</h2>
        <h3>Select Your Prise :</h3>
        <p>$ {prise}</p>
        <div className={styles.inputGroup}>
          <button onClick={twoFive} className={styles.btn}>
            $ 25
          </button>
          <button onClick={fifty} className={styles.btn}>
            $ 50
          </button>
          <button onClick={hundread} className={styles.btn}>
            $ 100
          </button>
          <button onClick={oneFifty} className={styles.btn}>
            $ 150
          </button>
          <button onClick={twoHundread} className={styles.btn}>
            $ 200
          </button>
        </div>
        <p>
          You can't go wrong with a gift card. Choose an amount and write a
          personalized message to make this gift your own.
        </p>
        <div className={styles.information}>
          <form action="#">
            <label htmlFor="name">Name</label>
            <input type="text" placeholder="Enter your name" required />
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Enter your email" required />
            <label htmlFor="message">Message</label>
            <textarea placeholder="Write something nice..." />
            <label htmlFor="qua">Quantity</label>
            <div className={styles.btnContainer}>
              <button onClick={decrement} className={styles.btn}>
                -
              </button>
              <h2 className={styles.quantityAnswer}>{count}</h2>
              <button onClick={increment} className={styles.btn}>
                +
              </button>
            </div>
            <button className={styles.btn}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default GiftCard;
