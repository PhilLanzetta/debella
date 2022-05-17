import React from "react"
import { navigate } from "gatsby"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const ContactForm = () => {
  const [state, setState] = React.useState({})

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }

  return (
    <article className="contact-form">
      <h1>contact us today for a free estimate</h1>
      <form
        name="contact"
        method="POST"
        data-netlify-honeypot="bot-field"
        data-netlify="true"
        action="/success/"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out if you’re human:{" "}
            <input name="bot-field" onChange={handleChange} />
          </label>
        </p>
        <div className="form-group">
          <label className="label">
            Name:
            <input
              type="text"
              name="name"
              onChange={handleChange}
              required
              className="form-control"
            />
          </label>
          <label className="label">
            Email:
            <input
              type="email"
              name="email"
              onChange={handleChange}
              required
              className="form-control"
            />
          </label>
          <label className="label">
            Phone Number:
            <input
              type="tel"
              name="phone"
              onChange={handleChange}
              className="form-control"
            />
          </label>
          <label className="label">
            Street Address:
            <input
              type="text"
              name="street-address"
              onChange={handleChange}
              required
              className="form-control"
            />
          </label>
          <label className="label">
            Zip Code:
            <input
              type="text"
              name="zipcode"
              onChange={handleChange}
              required
              className="form-control"
            />
          </label>
          <label className="label">
            How can we help you?
            <textarea
              name="message"
              id="message"
              rows="5"
              onChange={handleChange}
              className="form-control"
            ></textarea>
          </label>
        </div>
        <button type="submit" className="submit-btn btn">
          submit here
        </button>
      </form>
    </article>
  )
}

export default ContactForm
