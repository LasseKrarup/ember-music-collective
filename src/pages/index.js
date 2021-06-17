import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import EmberColour from "../images/EmberColour.svg"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <img src={EmberColour} alt="Ember Logo" className="w-28 mt-12 sm:mt-24 md:w-64"></img>

    <h1 className="font-logo text-5xl md:text-7xl mb-3 pointer-events-none">EMBERFEST</h1>
    <h2 className="text-lg md:text-2xl text-disabled">4. september 13:00-24:00</h2>
    <h3 className="text-sm md:text-lg text-disabled">Tage Hansens Gade 2a, 9</h3>

    <div className="mt-12 sm:mt-24">
      <ul className="list-none uppercase text-2xl md:text-4xl text-center">
        <li className="mb-4"><Link to="/program/">Line up</Link></li>
        <li>Event</li>
      </ul>
    </div>

  </Layout>
)

export default IndexPage