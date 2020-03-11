/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import * as React from "react"
import * as PropTypes from "prop-types"
import "../assets/styles/styles.scss"
import Header from "@Components/header"
import Footer from "@Components/footer"

interface Props {
  children: [] | {}
}

const Layout = ({ children }: Props) => {

  return (
    <>
      <div className="layout">
        <div className="layout__wrap container">
          <div className="layout__item layout__item--header">
            <Header />
          </div>
          <div className="layout__item layout__item--body">
            <main>{children}</main>
          </div>
          <div className="layout__item layout__item--footer">
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
