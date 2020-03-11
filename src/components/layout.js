/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import type { Node } from "react"
import { useStaticQuery, graphql } from "gatsby"
import "../assets/styles/styles.scss"
import Header from "@Components/header"
import Footer from '@Components/footer'

type Props = {
  children: Node
}

const Layout = ({ children }: Props): Node => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

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
