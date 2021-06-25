import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import moment from "moment"
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

// assets
import "./emberfest-bands.css"
import EmberColour from "../images/EmberColour.svg"
import Pane from "../components/pane"

const Header = () => {
  return(
    <Link to="/program/">
      <ArrowBackIcon className="mt-4 ml-4 md:mt-8 md:ml-8 md:text-4xl opacity-50 hover:opacity-100 transition-opacity" />
    </Link>
  );
}

export default function BandTemplate({ data }) {
  const post = data.markdownRemark
  const metaData = data.site.siteMetadata
  const showTime = post.frontmatter.showstart !== "" ? moment(post.frontmatter.showstart).format("HH:mm") : "tba"
  return (
    <Layout header={<Header />}>
      <SEO title={post.frontmatter.title} />

      <div className="flex flex-col lg:flex-row lg:w-full lg:pl-16 lg:mb-16"> {/* Logo hero thingy */}
        <Link to="/" className="flex flex-col items-center">
          <img src={EmberColour} alt="Ember Logo" className="w-16 sm:w-24 md:w-28 mt-4 sm:mt-8 md:mt-12"></img>
          <h2 className="font-logo text-xl sm:text-xl md:text-2xl lg:text-4xl">EMBERFEST</h2>
        </Link>
        <div className="flex flex-col items-center lg:items-end lg:pt-16 lg:ml-auto lg:mr-32">
          <h2 className="text-sm sm:text-base md:text-lg lg:text-5xl text-disabled lg:hidden">{metaData.emberDate}</h2>
          <h2 className="text-sm sm:text-base md:text-lg lg:text-5xl text-disabled hidden lg:block">4. september <span className="text-black">{showTime}</span></h2>
          <h3 className="text-xs sm:text-sm md:text-base lg:text-3xl text-disabled">{metaData.address}</h3>
          <div className="flex-col items-center hidden lg:flex lg:self-center">
            <h1 className="text-xl md:text-2xl uppercase mt-8 lg:text-5xl">{post.frontmatter.title} <sup className="lg:hidden text-sm md:text-lg">{showTime}</sup></h1>
            <h2 className="lowercase tracking-wide md:text-lg lg:text-2xl">{post.frontmatter.description}</h2>
          </div>
        </div>
      </div>


      <div className="flex flex-col items-center lg:hidden">
        <h1 className="text-xl md:text-2xl uppercase mt-8">{post.frontmatter.title} <sup className="lg:hidden text-sm md:text-lg">{showTime}</sup></h1>
        <h2 className="lowercase tracking-wide md:text-lg">{post.frontmatter.description}</h2>
      </div>

      <div className="flex flex-col lg:flex-row items-center lg:items-start">
        <img className="object-cover h-52 sm:h-72 md:h-96 mb-2" src={post.frontmatter.image} alt={post.frontmatter.title} />
        <div className="pt-4 lg:pt-0 w-4/5 lg:w-auto text-justify lg:px-16 lg:flex flex-col lg:h-96 justify-center" dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>

      <Link to="/program/" className="mt-4 flex items-center opacity-50 hover:opacity-100 transition-opacity"><ArrowBackIcon /> back</Link>

      <Pane colour="#C96480" initial={{height: "100vh", bottom: 0, top: "auto"}} animate={{height: 0, bottom: 0, top: "auto"}} exit={{height: "100vh", bottom: "auto"}}></Pane>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        image
        showstart
        description
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