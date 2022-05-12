import React from "react"
import Slider from "react-slick"
import { FaQuoteLeft } from "react-icons/fa"

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  }
  return (
    <section className="testimonial-container">
      <h2>Testimonials</h2>
      <div className="testimonial-slider">
        <Slider {...settings}>
          <div className="testimonial">
            <FaQuoteLeft></FaQuoteLeft>
            <h3>
              Extremely satisfied with the work done by DeBella Seal Coating,
              they are professional and the quality is second to none.
            </h3>
            <div className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            <p>- Margaret</p>
          </div>
          <div className="testimonial">
            <FaQuoteLeft></FaQuoteLeft>
            <h3>
              The owner is very courteous, walked us through every step, no
              surprises and it was a big job. Fifty percent cheaper than other
              estimates, and the workman he had on the team were a pleasure.
              From step one to completion everything was as he had said it would
              be, great guy and a great company. They were fantastic.
            </h3>
            <div className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            <p>- Brian K.</p>
          </div>
          <div className="testimonial">
            <FaQuoteLeft></FaQuoteLeft>
            <h3>
              Dom and his crew did a great job! When I bought my house the
              driveway was a mix of grass, stone and dirt. Dom came and measured
              out a 4-car driveway and blacktopped it the next week. It came out
              beautifully and with the rain the past few days its been great not
              worrying about parking in the grass/mud. In addition to the
              driveway Dom and the team tore down an old deck and replaced it
              with beautiful stone pavers. Again, Dom did the job quickly and
              beautifuly. It will be a great place to host this summer. I'm so
              happy with the work!
            </h3>
            <div className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            <p>- Kiersten C.</p>
          </div>
        </Slider>
      </div>
    </section>
  )
}

export default Testimonials
