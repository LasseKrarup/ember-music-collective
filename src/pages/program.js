import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"
import EmberColour from "../images/EmberColour.svg"

import moment from "moment"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Line Up" />
    <Link to="/" className="flex flex-col items-center">
      <img src={EmberColour} alt="Ember Logo" className="w-16 sm:w-24 md:w-28 mt-4 sm:mt-8 md:mt-12"></img>
      <h2 className="font-logo text-xl sm:text-xl md:text-2xl">EMBERFEST</h2>
    </Link>
    <h3 className="text-sm sm:text-base md:text-lg text-disabled">4. september 13:00-24:00</h3>
    <h4 className="text-xs sm:text-sm md:text-base text-disabled">Tage Hansens Gade 2a, 9</h4>

    <h1 className="text-2xl uppercase mt-8 mb-4 md:text-3xl">LINE UP</h1>

    <div className="">
        {data.allMarkdownRemark.edges.map( (item, index) => (
        <Link to={item.node.fields.slug} key={item.node.fields.slug} className="lowercase">
            <div className="relative grid w-52 sm:w-72 md:w-96 transition-all opacity-100 hover:opacity-90 hover:text-gray-700 mb-8 sm:text-lg md:text-xl">
                <img className="col-span-2 object-cover h-52 sm:h-72 md:h-96 mb-2" src={item.node.frontmatter.image} alt={item.node.frontmatter.title} />
                
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