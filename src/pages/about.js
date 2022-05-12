import React from "react"
import Layout from "../components/layout"
import AboutHero from "../components/aboutHero"
import OurStory from "../components/ourStory"
import Testimonials from "../components/testimonials"
import Seo from "../components/seo"

const About = () => {
  return (
    <Layout>
      <Seo title="About Us" description="Family owned and run since 2008" />
      <AboutHero />
      <OurStory />
      <Testimonials />
    </Layout>
  )
}

export default About
