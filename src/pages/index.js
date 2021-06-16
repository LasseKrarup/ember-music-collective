import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import EmberColour from "../images/EmberColour.svg"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <img src={EmberColour} alt="Ember Logo" className="w-28 mt-12"></img>

    <h1 className="font-logo text-5xl mb-3">EMBERFEST</h1>
    <h2 className="text-lg text-disabled">4. september 13:00-24:00</h2>
    <h3 className="text-sm text-disabled">Tage Hansens Gade 2a, 9</h3>

    <div className="mt-12">
      <ul className="list-none uppercase text-2xl text-center">
        <li className="mb-4"><Link to="/program/">Line up</Link></li>
        <li>Event</li>
      </ul>
    </div>

  </Layout>
)

export default IndexPage