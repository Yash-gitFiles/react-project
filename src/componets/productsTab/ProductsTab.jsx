import React from "react";
import Tab from "./Tab";

function ProductsTab(props) {
  const { activeTab, setActiveTab } = props;

  return (
    <div>
      <div>
        <Tab activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </div>
  );
}

export default ProductsTab;
