import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <h1>under construction</h1>
    <StaticImage src="../images/emberlogo.png" alt="Ember Logo" placeholder="blurred"></StaticImage>

  <h2>Concerts:</h2>
    {data.allMarkdownRemark.edges.map( (item, index) => (
      <p key={index}>
        <a href={item.node.fields.slug}>{item.node.frontmatter.title}</a>
        <img src={item.node.frontmatter.cover} alt={item.node.frontmatter.title} />
      </p>
    ))}

  </Layout>
)


export const query = graphql`
query MyQuery {
  allMarkdownRemark(filter: {fileAbsolutePath: {glob: "**/pages/artists/**/*"}}) {
    edges {
      node {
        frontmatter {
          cover
          description
          images
          title
        }
        fields {
          slug
        }
      }
    }
  }
}
`
export default IndexPage