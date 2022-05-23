import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Success = () => {
  return (
    <Layout>
      <Seo title="Thank You" description="We'll be in touch soon" />
      <section className="contact-page">
        <article className="contact-form">
          <h1>thank you for reaching out</h1>
          <p className="success-message">We've received your message and will be in contact shortly.</p>
          <Link to="/" className="submit-btn btn">
            Return Home
          </Link>
        </article>
      </section>
    </Layout>
  )
}

export default Success
