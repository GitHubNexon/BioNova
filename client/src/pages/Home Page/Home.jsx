import React from "react";
import HeroSection from "./A - Hero Section/HeroSection"; 
import FeaturesSection from "./B - Features Section/FeaturesSection";
import PurposeSection from "./C - Purpose Section/PurposeSection";
import PeopleSection from "./D - Our People Section/PeopleSection";
import PlatformSection from "./E - Platform Section/PlatformSection";
import SustainabilitySection from "./F - Sustainability Section/SustainabilitySection";
import ForumSection from "./G - Forum Section/ForumSection";


const Home = () => {
  return (
      <div>
      <HeroSection />
      <FeaturesSection />
      <PurposeSection />
      <PeopleSection />
      <PlatformSection />
      <SustainabilitySection />
      <ForumSection />
    </div>        
  );
};

export default Home;
