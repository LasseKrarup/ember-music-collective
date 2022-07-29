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

const path = require("path")

const Header = () => {
  return(
    <Link to="../">
      <ArrowBackIcon className="mt-4 ml-4 md:mt-8 md:ml-8 md:text-4xl opacity-50 hover:opacity-100 transition-opacity" />
    </Link>
  );
}

export default function BandTemplate({ data }) {
  const post = data.markdownRemark
  const metaData = data.site.siteMetadata

  const showTime = post.frontmatter.showstart !== "" ? moment(post.frontmatter.showstart).format("HH:mm") : "tba"
  const showDate = post.frontmatter.showstart !== "" ? moment(post.frontmatter.showstart).format("Do. MMMM YYYY") : ""
  console.log(showDate)

  const image = post.frontmatter.image[0].split("/upload/")[1]
  const cld = "https://res.cloudinary.com/embermusic-dk/image/upload/"

  return (
    <Layout header={<Header />}>
      <SEO title={post.frontmatter.title} />

      <div className="flex flex-col lg:flex-row lg:w-full lg:pl-16 lg:mb-0"> {/* Logo hero thingy */}
        <Link to="/" className="flex flex-col items-center">
          <img src={EmberColour} alt="Ember Logo" className="w-16 sm:w-24 md:w-28 mt-4 sm:mt-8 md:mt-12"></img>
          <h2 className="font-logo text-xl sm:text-xl md:text-2xl lg:text-4xl">EMBERFEST</h2>
        </Link>
        <div className="flex flex-col items-center lg:items-end lg:pt-16 lg:ml-auto lg:mr-32 3xl:mr-72">
          <h2 className="text-sm sm:text-base md:text-lg lg:text-5xl text-disabled lg:hidden">{showDate} {(showTime !== "tba") && showTime}</h2>
          <h2 className="text-sm sm:text-base md:text-lg lg:text-5xl text-disabled hidden lg:block">{showDate} <span className="text-black">{(showTime !== "tba") && showTime}</span></h2>
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

      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:w-full lg:self-start">
        <picture>
          <source
            className="object-cover w-64 sm:w-72 md:w-96 lg:w-500 h-64 sm:h-72 md:h-96 lg:h-500 xl:w-712 2xl:w-888 mb-2"
            media="(min-width: 1280px)"
            sizes="(min-width: 1536px) 888px, 712px"
            srcSet={`
            ${cld}c_fill,w_712,h_400/${image} 712w,
            ${cld}c_fill,w_888,h_500/${image} 888w,
            ${cld}c_fill,w_1024,h_576/${image} 1024w,
            ${cld}c_fill,w_1280,h_720/${image} 1280w
            `}
            alt={post.frontmatter.title} />

          <img
            className="object-cover w-64 sm:w-72 md:w-96 lg:w-500 h-64 sm:h-72 md:h-96 lg:h-500 xl:w-712 2xl:w-888 mb-2"
            sizes="(min-width: 1536px) 888px, (min-width: 1280px) 712px, (min-width: 1024px) 500px, (min-width: 768px) 384px, (min-width: 640px) 288px, 256px"
            srcSet={`
              ${cld}c_fill,w_256,h_256/${image} 256w,
              ${cld}c_fill,w_288,h_288/${image} 288w,
              ${cld}c_fill,w_384,h_384/${image} 384w,
              ${cld}c_fill,w_500,h_500/${image} 500w,
            `}
            src={path.join("https://res.cloudinary.com/embermusic-dk/image/upload", "c_fill,w_1024,h_1024", image)}
            alt={post.frontmatter.title} />
        </picture>
        <div className="pt-4 lg:pt-0 w-4/5 lg:w-1/2 2xl:w-888 lg:h-500 text-justify lg:px-16 lg:flex flex-col justify-center 3xl:px-0 3xl:pr-16 2xl:ml-auto" dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>

      <Link to="../" className="mt-4 flex items-center opacity-50 hover:opacity-100 transition-opacity"><ArrowBackIcon /> back</Link>

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