import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>under construction</h1>
    <StaticImage src="../images/emberlogo.png" alt="Ember Logo" placeholder="blurred"></StaticImage>
  </Layout>
)

export default IndexPage
