import React from 'react'
import HeroInnovation from "./A - Hero Innovation/Hero-Innovation";
import FeaturedInnovation from './B - Featured Innovation/Featured-Innovation';
import GeneticEngineering from './C - Innovation Products/GeneticEngineering';
import BiopharmaceuticalSolutions from './C - Innovation Products/BiopharmaSolution';
import AgriculturalBiotech from './C - Innovation Products/ArgiculturalBiotech';
import WhyItMatters from './D - Why it Matters/WhyItMatters';
import PurposeSection from '../Home Page/C - Purpose Section/PurposeSection';

const Innovation = () => {
  return (
    <div>
      <HeroInnovation />
      <FeaturedInnovation />
      <GeneticEngineering />
      <BiopharmaceuticalSolutions />
      <AgriculturalBiotech />
      <WhyItMatters />
      <PurposeSection />
    </div>
  )
}

export default Innovation