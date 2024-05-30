import React from "react";

function FeatureListItem(props) {
  const { feature } = props;
  return (
    <>
      {props.isIncluded ? (
        <li>
          <i className="fa-solid fa-check"></i> {feature}
        </li>
      ) : (
        <li>
          <i className="fa-solid fa-xmark"></i>
          <span style={{ textDecoration: "line-through" }}>{feature}</span>
        </li>
      )}
    </>
  );
}

export default FeatureListItem;
