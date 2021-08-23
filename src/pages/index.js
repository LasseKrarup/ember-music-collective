import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"
import EmberColour from "../images/EmberColour.svg"
import { motion } from "framer-motion"
import Pane from "../components/pane"

import FacebookIcon from '@material-ui/icons/Facebook';
import Paragraph from "../components/paragraph"

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
      <img src={EmberColour} width="600" height="600" alt="Ember Logo" className="w-28 mt-12 sm:mt-24 md:w-64"></img>

      <h1 className="font-logo text-5xl md:text-7xl mb-3 pointer-events-none">EMBERFEST</h1>
      <div className="overflow-hidden"><motion.h2 initial={textInitial} animate={textAnimate} transition={textTransition} className="text-lg md:text-2xl text-disabled">{metaData.emberDate}</motion.h2></div>
      <div className="overflow-hidden"><motion.h3 initial={textInitial} animate={textAnimate} transition={textTransition} className="text-sm md:text-lg text-disabled">{metaData.address}</motion.h3></div>

      <div className="mt-12 sm:mt-12">
        <motion.ul variants={variantsParent} initial="initial" animate="animate" className="list-none uppercase text-2xl md:text-4xl text-center">
          <motion.li variants={variantsChildren} className="mb-4 hover:opacity-75 transition-opacity"><Link to="/program/">Line up</Link></motion.li>
          <motion.li variants={variantsChildren} className="hover:opacity-75 transition-opacity"><a className="flex items-center" href="https://www.facebook.com/events/1623845561141329" target="_blank" rel="noreferrer">Event&nbsp;<FacebookIcon /></a></motion.li>
        </motion.ul>
      </div>

      <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.5, delay: 1.8}} className="mt-12">
        <Paragraph>
          Ember Music Collective er en musikforening og et kulturelt hotspot i Århus, der har fokus på upcoming musik. Hvert år afholder vi Emberfest - en hyldest og fejring af musikere, musikelskere og festglade folk af alle typer. Emberfest er en mangfoldig festival, som omfavner alle gæster, og hvor både bands fra Ember Music Collective og resten af musikmiljøet i Århus spiller koncerter i vores idylliske oase på Tage-Hansens Gade 2, bygning 9a ("Ember Music Collective" på Google Maps).
        </Paragraph>
  
        <Paragraph>
          Der er gratis entré og en fed bar med gode fadøl fra <a href="https://www.erlings.dk/" target="_blank" rel="noreferrer" className="font-bold">Erling's Øl &amp; Jazzbar</a>, drinks og alt, der hører sig til. Du kan betale med kort, men ikke med MobilePay, så husk plastikkortet, Apple- eller Google Pay. Det er ikke tilladt at medbringe drikkevarer udefra.
        </Paragraph>
  
        <Paragraph>
          <Link to="/program" className="font-bold">Tjek programmet ud</Link> og se, hvilke kunstnere der tager plads på scenen 4. september 2021 til Emberfest!
        </Paragraph>
      </motion.div>

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