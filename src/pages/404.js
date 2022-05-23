import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import {Link} from 'gatsby'

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <section className="error-page">
      <h1>Looks like the path to this route isn't paved yet</h1>
      <Link to="/" className="btn">
        Return Home
      </Link>
    </section>
  </Layout>
)

export default NotFoundPage
