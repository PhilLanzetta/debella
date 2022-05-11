import React from 'react'
import ContactForm from '../components/contactForm'
import Layout from '../components/layout'

const Contact = () => {
  return (
    <Layout>
      <section className="contact-page">
        <ContactForm />
      </section>
    </Layout>
  )
}

export default Contact