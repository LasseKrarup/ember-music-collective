import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Ember Artister" />

    <h1 className="text-3xl">Ember Artister</h1>

    <p className="my-12">Ember Music Collective består af en række bands og solister solidt plantet i Aarhus C. Sammen arrangerer vi events for den spirrende musikscene.</p>
    
    <div>
      {data.allMarkdownRemark.edges.map( (item, index) => (
        <p key={index}>
          <a href={item.node.fields.slug}>{item.node.frontmatter.title}</a>
          <img src={item.node.frontmatter.cover} alt={item.node.frontmatter.title} />
        </p>
      ))}
    </div>

  </Layout>
)


export const query = graphql`
query EmberArtister {
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