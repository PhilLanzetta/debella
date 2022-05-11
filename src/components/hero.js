import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="overlay"></div>
      <StaticImage
        src="../images/DeBellaHero.png"
        alt="freshly sealed asphalt"
        className="hero-image"
        placeholder="blurred"
      />
      <div className="hero-text">
        <h1 className="hero-tagline">
          The best in asphalt construction &amp; maintenance
        </h1>
        <Link to="/contact" className="btn">
          Schedule a Free Quote Today!
        </Link>
      </div>
    </div>
  )
}

export default Hero
