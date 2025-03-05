import React from "react";
import HeroPurpose from "./A - Hero Purpose/Hero-Purpose";
import PeopleSection from "../Home Page/D - Our People Section/PeopleSection";
import ForumSection from "../Home Page/G - Forum Section/ForumSection";
import OriginSection from "./B - Origin/OriginSection";
import SustainabilityPurpose from "./C - Sustainability Purpose Section/SustainabilityPurpose";
import PartnersSection from "./D - Partners Section/PartnersSection";
import ProgressSection from "./E - Progress Section/ProgressSection";

const Purpose = () => {
  return (
    <div>
      <HeroPurpose />
      <OriginSection />
      <SustainabilityPurpose />
      <PartnersSection />
      <PeopleSection />
      <ForumSection />
      <ProgressSection />
    </div>
  );
};

export default Purpose;
