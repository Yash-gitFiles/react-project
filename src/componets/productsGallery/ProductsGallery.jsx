import React from "react";
import Gallery from "./Gallery";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { allProducts, backPack, travelpacks } from "../../data/productPageData";

function ProductsGallery(props) {
  const { activeTab } = props;
  const products = [allProducts, backPack, travelpacks];
  return (
    <div>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry gutter="16px">
          {products[activeTab].map((value, index) => {
            return (
              <Gallery
                key={index}
                src={value.src}
                title={value.title}
                desc={value.desc}
              />
            );
          })}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
}

export default ProductsGallery;
