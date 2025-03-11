import React from 'react'
import HeroContactSection from './A - Hero Contact Section/HeroContactSection'
import WordsToLiveBy from './B - Word To Live By Section/WordsToLiveBy';
import RatingAndQuotesSection from './C - Rating and Quotes Section/RatingAndQuotes';
import JobOpenings from './D - Job Openings Section/JobOpenings';
import BenefitsSection from './E - Benefits Section/Benefits';
import ContactForm from './F - Contact Form Section/ContactForm';
import FindUsFollowUs from './G - Find Us and Follow Us Section/FindUsFollowUs';

const Contact = () => {
  return (
    <div>
      <HeroContactSection />  
      <WordsToLiveBy />
      <RatingAndQuotesSection />
      <JobOpenings />
      <BenefitsSection />
      <ContactForm />
      <FindUsFollowUs />
    </div>
  )
}

export default Contact