import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"
import EmberColour from "../images/EmberColour.svg"

import moment from "moment"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Line Up" />
    <img src={EmberColour} alt="Ember Logo" className="w-16 mt-4"></img>

    <h1 className="font-logo text-xl">EMBERFEST</h1>
    <h2 className="text-sm text-disabled">4. september 13:00-24:00</h2>
    <h3 className="text-xs text-disabled">Tage Hansens Gade 2a, 9</h3>

    <h2 className="text-xl uppercase mt-8 mb-4">LINE UP</h2>

    <div className="">
        {data.allMarkdownRemark.edges.map( (item, index) => (
        <Link to={item.node.fields.slug} key={item.node.fields.slug} className="lowercase">
            <div className="relative grid w-52 transition-all opacity-100 hover:opacity-90 hover:text-gray-700 mb-8">
                <img className="col-span-2 object-cover h-52 mb-2" src={item.node.frontmatter.image} alt={item.node.frontmatter.title} />
                
                <span className="">{item.node.frontmatter.title}</span>
                <span className="text-right">{moment(item.node.frontmatter.showstart).format("HH:mm")}</span>
            </div>
        </Link>
        ))}
    </div>

  </Layout>
)


export const query = graphql`
query ProgramQuery {
    allMarkdownRemark(filter: {fileAbsolutePath: {glob: "**/pages/program/**/*"}}, sort: {fields: frontmatter___showstart}) {
      edges {
        node {
          frontmatter {
            description
            image
            title
            showstart
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