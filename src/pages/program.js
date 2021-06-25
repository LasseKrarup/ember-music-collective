import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"
import EmberColour from "../images/EmberColour.svg"

import moment from "moment"
import { motion } from "framer-motion"
import Pane from "../components/pane"

const IndexPage = ({data}) => {
  const metaData = data.site.siteMetadata

  const variantsContainer = {
    animate: {
      transition: {
        staggerChildren: 0.25,
        delayChildren: 2,
      }
    }
  }

  const variantsChild = {
    initial: {
      opacity: 0,
      x: "100px"
    },
    animate: {
      opacity: 1,
      x: 0
    }
  }

  return(
    <Layout>
      <SEO title="Line Up" />
      <div className="flex flex-col lg:flex-row lg:w-full lg:pl-16"> {/* Logo hero thingy */}
        <Link to="/" className="flex flex-col items-center">
          <img src={EmberColour} alt="Ember Logo" className="w-16 sm:w-24 md:w-28 mt-4 sm:mt-8 md:mt-12"></img>
          <h2 className="font-logo text-xl sm:text-xl md:text-2xl lg:text-4xl">EMBERFEST</h2>
        </Link>
        <div className="flex flex-col items-center lg:items-end lg:pt-16 lg:ml-auto lg:mr-32">
          <h3 className="text-sm sm:text-base md:text-lg lg:text-5xl text-disabled">{metaData.emberDate}</h3>
          <h4 className="text-xs sm:text-sm md:text-base lg:text-3xl text-disabled">{metaData.address}</h4>
        </div>
      </div>

      <h1 className="text-2xl uppercase mt-8 lg:mt-16 mb-4 md:text-5xl">LINE UP</h1>

      <div className="lg:flex lg:flex-col relative">
          <motion.div initial={{height: 0}} animate={{height: "100%"}} transition={{delay: 1, duration: 1.5}} className="hidden lg:block border-r w-0 border-gray-400 absolute left-1/2 transform -translate-x-1/2 z-0"></motion.div> {/* VERTICAL LINE */}

          <motion.div variants={variantsContainer} initial="initial" animate="animate" className="py-16 z-10">
            {data.allMarkdownRemark.edges.map( (item, index) => {
              let imgClass = ""
              let textClass = ""
              if (index % 2 !== 0) {
                imgClass = "lg:order-2"
                textClass = "lg:text-right lg:justify-end lg:mr-16"
              }

              const showStart = item.node.frontmatter.showstart !== null ? moment(item.node.frontmatter.showstart).format("HH:mm") : "tba"

              
              return (
                <Link to={item.node.fields.slug} key={item.node.fields.slug} className="lowercase block mb-8 sm:mb-16 last:mb-0">
                    <div className="grid lg:grid-cols-2 w-52 sm:w-72 md:w-96 lg:w-800 lg:mx-auto transition-all opacity-100 hover:opacity-90 hover:text-gray-700 sm:text-lg md:text-xl lg:text-3xl">
                        <div className={"col-span-2 lg:col-span-1 lg:row-span-2 mb-2 lg:mb-0 overflow-hidden " + imgClass}>
                          <motion.img variants={variantsChild} className="object-cover h-52 sm:h-72 md:h-96 lg:h-400" src={item.node.frontmatter.image} alt={item.node.frontmatter.title}></motion.img>
                        </div>
                        
                        <motion.span variants={variantsChild} className={"lg:flex items-end justify lg:ml-16 lg:order-1 " + textClass}>{item.node.frontmatter.title}</motion.span>
                        <motion.span variants={variantsChild} className={"text-right lg:text-left lg:ml-16 lg:order-last " + textClass}>{showStart}</motion.span>
                    </div>
                </Link>
              )
            })}
          </motion.div>
      </div>

      
      <Pane colour="#C96480" initial={{height: "100vh", bottom: 0, top: "auto"}} animate={{height: 0, bottom: 0, top: "auto"}} exit={{height: "100vh", bottom: "auto"}}></Pane>
    </Layout>
  )
}


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

    site {
      siteMetadata {
        emberDate
        address
      }
    }
  }  
`
export default IndexPage