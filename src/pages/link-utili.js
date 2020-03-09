import React from "react"
import Layout from "@Components/layout"
import SEO from "@Components/seo"
const LinkUtili = () => {
  return (
    <Layout>
      <SEO title="Link Utili" />

      <div className="layout-wrap">
        <h2 className="u-margin-bottom-spacer-large">Link utili</h2>
        <div className="card">
          <div className="card__wrap">
            <div className="card__item">
              <a href="#" rel="nofollow" target="_blank">Test</a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default LinkUtili
