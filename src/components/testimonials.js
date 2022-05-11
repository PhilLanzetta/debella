import React from "react"
import Slider from "react-slick"
import { FaQuoteLeft } from "react-icons/fa"

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  }
  return (
    <section className="testimonial-container">
      <h2>Testimonials</h2>
      <div className="testimonial-slider">
        <Slider {...settings}>
          <div className="testimonial">
            <FaQuoteLeft></FaQuoteLeft>
            <h3>
              Add customer reviews and testimonials to showcase your store’s
              happy customers.
            </h3>
            <p>- Author's name</p>
          </div>
          <div className="testimonial">
            <FaQuoteLeft></FaQuoteLeft>
            <h3>
              Add customer reviews and testimonials to showcase your store’s
              happy customers.
            </h3>
            <p>- Author's name</p>
          </div>
          <div className="testimonial">
            <FaQuoteLeft></FaQuoteLeft>
            <h3>
              Add customer reviews and testimonials to showcase your store’s
              happy customers.
            </h3>
            <p>- Author's name</p>
          </div>
          <div className="testimonial">
            <FaQuoteLeft></FaQuoteLeft>
            <h3>
              Add customer reviews and testimonials to showcase your store’s
              happy customers.
            </h3>
            <p>- Author's name</p>
          </div>
          <div className="testimonial">
            <FaQuoteLeft></FaQuoteLeft>
            <h3>
              Add customer reviews and testimonials to showcase your store’s
              happy customers.
            </h3>
            <p>- Author's name</p>
          </div>
        </Slider>
      </div>
    </section>
  )
}

export default Testimonials
