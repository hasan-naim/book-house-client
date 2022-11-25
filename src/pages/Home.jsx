import React, { useEffect } from "react";
import Banner from "../components/Banner/Banner";
import CatagoriesSection from "../components/CatagoriesSection/CatagoriesSection";
import Subscribe from "../components/Subscribe/Subscribe";

function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div>
      <Banner />
      <CatagoriesSection />
      <Subscribe />
    </div>
  );
}

export default Home;
