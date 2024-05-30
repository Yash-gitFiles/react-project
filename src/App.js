import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Layout from "./layout/Layout";
import About from "./pages/about/About";
import Products from "./pages/products/Products";
import Group from "./pages/group/Group";
import Contact from "./componets/home/Contact";
import BackpackRow from "./pages/shop/subShop/BackpackRow";
import TravelPacksRow from "./pages/shop/subShop/TravelPacksRow";
import GiftCard from "./pages/shop/subShop/GiftCard";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="backpacks" element={<BackpackRow />} />
            <Route path="travelpacks" element={<TravelPacksRow />} />
            <Route path="giftcard" element={<GiftCard />} />
            <Route path="about" element={<About />} />
            <Route path="products" element={<Products />} />
            <Route path="group" element={<Group />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
