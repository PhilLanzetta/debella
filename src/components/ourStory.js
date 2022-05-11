import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { Link } from "gatsby"
import FadeIn from "./fadeIn"

const OurStory = () => {
  return (
    <section className="about-us">
      <h2>About Us</h2>
      <div className="about-info">
          <StaticImage
            src="../images/carousel/DeBella2.png"
            alt="man laying blacktop"
            placeholder="blurred"
            className="about-info-image"
          />
        <FadeIn className="about-info-text">
            <p>
              <span>DeBella Seal Coating LLC</span> provides the best in asphalt
              construction &amp; maintenance services ANYWHERE! With over 14
              years of experience, DeBella Seal Coating LLC will meet your
              asphalt needs at affordable rates. Personable, reliable, and
              productive, DeBella Seal Coating LLC is happy to be there for any
              client in need of great service.
            </p>
            <Link to="/contact" className="btn">
              Schedule a Free Quote Today!
            </Link>
          </FadeIn>
      </div>
    </section>
  )
}

export default OurStory
