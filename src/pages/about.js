import React from "react"
import Layout from "../components/layout"
import AboutHero from "../components/aboutHero"
import OurStory from "../components/ourStory"
import Testimonials from "../components/testimonials"

const About = () => {
  return (
    <Layout>
      <AboutHero />
      <OurStory />
      <Testimonials />
    </Layout>
  )
}

export default About
