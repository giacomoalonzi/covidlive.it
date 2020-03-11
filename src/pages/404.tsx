// 
import * as React from "react"
import { Link } from "gatsby"
import Layout from "@Components/layout"
import SEO from "@Components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="notfound-page">
      <div className="notfound-page__wrap">
        <div className="notfound-page__item">
          <h1>Pagina non trovata trovata</h1>
          <Link className="button button--primary" to="/">
            Torna alla home
          </Link>
        </div>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
