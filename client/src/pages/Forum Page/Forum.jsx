import React from 'react'
import HeroForum from './A - Hero Forum/HeroForumSection'
import BiotechSection from './B - Forum Articles Section/BiotechSection'
import BioMimicrySection from './B - Forum Articles Section/BioMimicrySection'
import AllArticlesSection from './C - All Articles Section/AllArticlesSection'

const Forum = () => {
  return (
    <div>
      <HeroForum />
      <BiotechSection />
      <BioMimicrySection />
      <AllArticlesSection />
    </div>
  )
}

export default Forum