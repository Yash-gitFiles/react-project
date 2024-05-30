import React from "react";
import styles from "../../../styles/home/pricingCard.module.css";
import FeatureListItem from "./FeatureListItem";

function PricingCard(props) {
  const { features, price, title } = props;
  return (
    <div className={styles.pricingCardContainer}>
      <div className={styles.priceContainer}>
        <h3>{title}</h3>
        <p>${price}</p>
      </div>

      <ul className={styles.featuresList}>
        {features.map(function (value, index) {
          return (
            <FeatureListItem
              key={index}
              feature={value.feature}
              isIncluded={value.isIncluded}
            />
          );
        })}
      </ul>

      <button className={styles.btn}>Get Started</button>
    </div>
  );
}

export default PricingCard;
