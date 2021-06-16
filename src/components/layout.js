/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import "./layout.css"

const Layout = ({ children, header }) => {

  return (
    <div className="flex flex-col min-h-screen">
        <header className="w-full absolute top-0">
          {header}
        </header>
        <main className="flex flex-col items-center flex-grow">{children}</main>
        <footer className="mt-12 self-center text-gray-400">
          © {new Date().getFullYear()}
          {` `}
          <a href="https://www.lassekrarup.com">Lasse Krarup</a>
        </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
