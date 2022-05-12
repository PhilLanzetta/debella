import * as React from "react"
import InstaCarousel from "../components/instaCarousel"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Seo from "../components/seo"
import Services from "../components/services"

const IndexPage = () => (
  <Layout>
    <Seo
      title="Home"
      description="Superior asphalt construction and maintenance services"
    />
    <Hero />
    <Services />
    <InstaCarousel />
  </Layout>
)

export default IndexPage
