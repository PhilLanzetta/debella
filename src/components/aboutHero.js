import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const AboutHero = () => {
  return (
    <div className="hero-container">
      <div className="overlay"></div>
      <StaticImage
        src="../images/DomAndKids.jpeg"
        alt="father plays with kids"
        className="hero-image"
        placeholder="blurred"
      />
      <div className="hero-text">
        <h1 className="hero-tagline">Family owned &amp; run since 2008</h1>
      </div>
    </div>
  )
}

export default AboutHero
