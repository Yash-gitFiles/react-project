import React from "react";
import PricingCard from "./PricingCard";
import styles from "../../../styles/home/pricingCard.module.css";

function PricingCardRow() {
  const components = [
    <PricingCard
      title="Tourist Plan One"
      price="69"
      features={[
        { feature: "Feature 1", isIncluded: true },
        { feature: "Feature 2", isIncluded: true },
        { feature: "Feature 3", isIncluded: false },
        { feature: "Feature 4", isIncluded: false },
        { feature: "Feature 5", isIncluded: false },
      ]}
    />,
    <PricingCard
      title="Tourist Plan Two"
      price="83"
      features={[
        { feature: "Feature 1", isIncluded: true },
        { feature: "Feature 2", isIncluded: true },
        { feature: "Feature 3", isIncluded: true },
        { feature: "Feature 4", isIncluded: false },
        { feature: "Feature 5", isIncluded: false },
      ]}
    />,
    <PricingCard
      title="Tourist Plan Three"
      price="106"
      features={[
        { feature: "Feature 1", isIncluded: true },
        { feature: "Feature 2", isIncluded: true },
        { feature: "Feature 3", isIncluded: true },
        { feature: "Feature 4", isIncluded: true },
        { feature: "Feature 5", isIncluded: true },
      ]}
    />,
  ];
  return (
    <div className={styles.pricingRowContainer}>
      <div className={styles.pricingCards}>{components}</div>
    </div>
  );
}

export default PricingCardRow;
