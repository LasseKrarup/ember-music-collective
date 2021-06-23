import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"
import EmberColour from "../images/EmberColour.svg"
import { motion } from "framer-motion"
import Pane from "../components/pane"

const IndexPage = ({data}) => {
  const metaData = data.site.siteMetadata

  const textInitial = {
    opacity: 0,
    y: "20px"
  }
  const textAnimate = {
    opacity: 1,
    y: 0
  }
  const textTransition = {
    duration: 0.6,
    delay: 0.6
  }

  const variantsParent = {
    animate: {
      transition: {
        delayChildren: 1.2,
        staggerChildren: 0.5
      }
    }
  }
  const variantsChildren = {
    initial: {
      opacity: 0,
      y: "20px"
    },
    animate: {
      opacity: 1,
      y: 0
    }
  }

  return (
    <Layout>
      <SEO title="Home" />
      <img src={EmberColour} alt="Ember Logo" className="w-28 mt-12 sm:mt-24 md:w-64"></img>

      <h1 className="font-logo text-5xl md:text-7xl mb-3 pointer-events-none">EMBERFEST</h1>
      <div className="overflow-hidden"><motion.h2 initial={textInitial} animate={textAnimate} transition={textTransition} className="text-lg md:text-2xl text-disabled">{metaData.emberDate}</motion.h2></div>
      <div className="overflow-hidden"><motion.h3 initial={textInitial} animate={textAnimate} transition={textTransition} className="text-sm md:text-lg text-disabled">{metaData.address}</motion.h3></div>

      <div className="mt-12 sm:mt-24">
        <motion.ul variants={variantsParent} initial="initial" animate="animate" className="list-none uppercase text-2xl md:text-4xl text-center">
          <motion.li variants={variantsChildren} className="mb-4"><Link to="/program/">Line up</Link></motion.li>
          <motion.li variants={variantsChildren}>Event</motion.li>
        </motion.ul>
      </div>

      <Pane colour="#C96480" initial={{height: "100vh", bottom: 0, top: "auto"}} animate={{height: 0, bottom: 0, top: "auto"}} exit={{height: "100vh", bottom: "auto"}}></Pane>
    </Layout>
  )}

export const query = graphql`
query indexQuery {
    site {
      siteMetadata {
        emberDate
        address
      }
    }
  }  
`

export default IndexPage