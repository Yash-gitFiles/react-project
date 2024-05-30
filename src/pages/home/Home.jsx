import React from "react";
import HeroSection from "../../componets/home/HeroSection";
import InfoRow from "../../componets/home/InfoRow";
import Tourister from "../../componets/home/Tourister";
import SalePartsRow from "../../componets/home/SalePartsRow";
import Contact from "../../componets/home/Contact";
import FaqRow from "../../componets/home/FaqRow";
import PricingCardRow from "../../componets/home/pricingCard/PricingCardRow";
import About from "../about/About";
import CountRow from "../../componets/common/CountRow";
import UpArrow from "../../componets/common/UpArrow";

function Home() {
  return (
    <>
      <HeroSection />
      <UpArrow />
      <InfoRow />
      <Tourister />
      <SalePartsRow />
      <About />
      <CountRow />
      <PricingCardRow />
      <FaqRow />
      <Contact />
    </>
  );
}

export default Home;
