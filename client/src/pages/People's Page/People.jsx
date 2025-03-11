import React from 'react';
import HeroPeopleSection from './A - Hero Peoples Section/HeroPeopleSection';
import WhoWeAreSection from './B - Who We Are Section/WhoWeAreSection';
import WordsToLiveBy from './C - Words To Live By Section/WordsToLiveBy';
import LeadershipSection from './D - Our Leadership Section/LeadershipSection';
import LeadershipMembers from './D - Our Leadership Section/LeadershipMembers';
import InvestorsandPartners from './E - Investors & Partners/InvestorsandPartners';

const People = () => {
    return (
        <div>
            <HeroPeopleSection />
            <WhoWeAreSection />
            <WordsToLiveBy />
            <LeadershipSection />
            <LeadershipMembers />
            <InvestorsandPartners />
        </div>
    );
};

export default People;