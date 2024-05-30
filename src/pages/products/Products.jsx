import React, { useState } from "react";
import Title from "../../componets/common/Title";
import ProductsTab from "../../componets/productsTab/ProductsTab";
import ProductsGallery from "../../componets/productsGallery/ProductsGallery";

function Products() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div>
      <div>
        <Title
          title="Our Products"
          desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias, commodi."
        />
        <div>
          <ProductsTab activeTab={activeTab} setActiveTab={setActiveTab} />
          <ProductsGallery activeTab={activeTab} />
        </div>
      </div>
    </div>
  );
}

export default Products;
