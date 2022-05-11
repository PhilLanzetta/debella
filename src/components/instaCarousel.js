import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Slider from "react-slick"
import { GatsbyImage } from "gatsby-plugin-image"
import { FaInstagramSquare } from "react-icons/fa"

function SampleNextArrow(props) {
  const { onClick } = props
  return (
    <div
      className="image-next press-arrow-right"
      onClick={onClick}
      onKeyDown={onClick}
      role="button"
      tabIndex={0}
      aria-label="go to next"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.617 72.699">
        <g
          id="Group_61"
          data-name="Group 61"
          transform="translate(-1641.773 -5563.813)"
        >
          <line
            id="Line_93"
            data-name="Line 93"
            x2="34.163"
            y2="36.163"
            transform="translate(1642.5 5564.5)"
            fill="none"
            stroke="#fff"
            stroke-width="4"
          />
          <line
            id="Line_94"
            data-name="Line 94"
            y1="36.163"
            x2="34.163"
            transform="translate(1642.5 5599.663)"
            fill="none"
            stroke="#fff"
            stroke-width="4"
          />
        </g>
      </svg>
    </div>
  )
}

function SamplePrevArrow(props) {
  const { onClick } = props
  return (
    <div
      className="image-prev press-arrow-left"
      onClick={onClick}
      onKeyDown={onClick}
      role="button"
      tabIndex={0}
      aria-label="go to previous"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.617 72.699">
        <g
          id="Group_62"
          data-name="Group 62"
          transform="translate(0.727 0.687)"
        >
          <line
            id="Line_93"
            data-name="Line 93"
            x1="34.163"
            y2="36.163"
            transform="translate(0)"
            fill="none"
            stroke="#fff"
            stroke-width="4"
          />
          <line
            id="Line_94"
            data-name="Line 94"
            x1="34.163"
            y1="36.163"
            transform="translate(0 35.163)"
            fill="none"
            stroke="#fff"
            stroke-width="4"
          />
        </g>
      </svg>
    </div>
  )
}

const InstaCarousel = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { relativeDirectory: { eq: "carousel" } }) {
        nodes {
          id
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
    }
  `)

  const settings = {
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <section className="gallery">
      <h2>Gallery</h2>
      <div className="insta-carousel-container">
        <Slider {...settings}>
          {data.allFile.nodes.map(node => (
            <div className="insta-image-holder" key={node.id}>
              <GatsbyImage
                image={node.childImageSharp.gatsbyImageData}
                alt=""
                className="insta-image"
              />
            </div>
          ))}
        </Slider>
      </div>
      <a
        href="https://www.instagram.com/debellasealcoating"
        target="_blank"
        rel="noreferrer"
        className="gallery-link"
      >
        <FaInstagramSquare className="gallery-insta" /> View More of Our Work
      </a>
    </section>
  )
}

export default InstaCarousel
