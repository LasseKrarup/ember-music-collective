import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"
import EmberColour from "../images/EmberColour.svg"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <img src={EmberColour} alt="Ember Logo" className="w-16 mt-4"></img>

    <h1 className="font-logo text-xl">EMBERFEST</h1>
    <h2 className="text-sm text-disabled">4. september 13:00-24:00</h2>
    <h3 className="text-xs text-disabled">Tage Hansens Gade 2a, 9</h3>

    <h2 className="text-xl uppercase mt-8 mb-4">LINE UP</h2>

    <div className="">
        {data.allMarkdownRemark.edges.map( (item, index) => (
        <Link to={item.node.fields.slug} className="lowercase">
            <div className="relative grid w-52 transition-all opacity-100 hover:opacity-90 hover:text-gray-700" key={index}>
                <img className="col-span-2 object-cover h-52 mb-2" src={item.node.frontmatter.cover} alt={item.node.frontmatter.title} />
                
                <span className="">{item.node.frontmatter.title}</span>
                <span className="text-right">14:00</span>
            </div>
        </Link>
        ))}
    </div>

  </Layout>
)


export const query = graphql`
query ProgramQuery {
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