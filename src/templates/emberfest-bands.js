import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import moment from "moment"
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

// assets
import "./emberfest-bands.css"
import EmberColour from "../images/EmberColour.svg"

const Header = () => {
  return(
    <Link to="/program/"><ArrowBackIcon className="mt-4 ml-4 opacity-50 hover:opacity-100 transition-opacity" /></Link>
  );
}

export default function BandTemplate({ data }) {
  const post = data.markdownRemark
  const showTime = moment(post.frontmatter.showstart).format("HH:mm")
  return (
    <Layout header={<Header />}>
      <SEO title={post.frontmatter.title} />
      <img src={EmberColour} alt="Ember Logo" className="w-16 mt-4"></img>

      <h2 className="font-logo text-xl">EMBERFEST</h2>
      <h2 className="text-sm text-disabled">4. september 13:00-24:00</h2>
      <h3 className="text-xs text-disabled">Tage Hansens Gade 2a, 9</h3>

      <h1 className="text-xl uppercase mt-8">{post.frontmatter.title} <sup className="text-sm">{showTime}</sup></h1>
      <h2 className="lowercase tracking-wide">{post.frontmatter.description}</h2>
      <img className="col-span-2 object-cover h-52 mb-2" src={post.frontmatter.image} alt={post.frontmatter.title} />
      <div className="pt-4 w-4/5 text-justify" dangerouslySetInnerHTML={{ __html: post.html }} />

      <Link to="/program/" className="mt-4 flex items-center opacity-50 hover:opacity-100 transition-opacity"><ArrowBackIcon /> back</Link>
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
  }
`