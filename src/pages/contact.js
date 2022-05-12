import React from "react"
import ContactForm from "../components/contactForm"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Contact = () => {
  return (
    <Layout>
      <Seo title="Contact" description="Contact us today for a free estimate" />
      <section className="contact-page">
        <ContactForm />
      </section>
    </Layout>
  )
}

export default Contact
