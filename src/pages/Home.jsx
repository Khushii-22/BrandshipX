import React from "react";
import HomeHero from "../components/Homepage/homeHero";
import Control from "../components/Homepage/control";
import HowItWorks from "../components/Homepage/howItWorks";
import Integrations from "../components/Homepage/integrations";
import Pillars from "../components/Homepage/pillars";
import Pricing from "../components/Homepage/pricing";
import Proof from "../components/Homepage/proof";
import Results from "../components/Homepage/results";
import Ship from "../components/Homepage/ship";
import Hours from "../components/Homepage/hours";

const Home = () => {
  return (
    <div>
      <HomeHero />
      <Hours />
      <Ship />
      <Pillars />
      <Proof />
      <Integrations />
      <HowItWorks />
      <Results />
      <Pricing />
      <Control />
    </div>
  );
};

export default Home;
