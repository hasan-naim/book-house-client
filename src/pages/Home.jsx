import React from "react";
import Banner from "../components/Banner/Banner";
import CatagoriesSection from "../components/CatagoriesSection/CatagoriesSection";
import Subscribe from "../components/Subscribe/Subscribe";

function Home() {
  return (
    <div>
      <Banner />
      <CatagoriesSection />
      <Subscribe />
    </div>
  );
}

export default Home;
