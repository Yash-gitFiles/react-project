import React from "react";
import styles from "../../styles/home/faqRow.module.css";

function Faq(props) {
  const { number, question, answer, index, isVisible, setIsVisible } = props;

  function handleClick() {
    setIsVisible(index);
  }

  return (
    <div className={styles.container}>
      <div className={styles.queContainer}>
        <p>{number}</p>
        <p>{question}</p>
        {isVisible === index ? (
          <i onClick={handleClick} className="fa-solid fa-arrow-up"></i>
        ) : (
          <i onClick={handleClick} className="fa-solid fa-arrow-down"></i>
        )}
      </div>
      <div className={styles.answerParaContainer}>
        {isVisible === index && <p>{answer}</p>}
      </div>
    </div>
  );
}

export default Faq;
