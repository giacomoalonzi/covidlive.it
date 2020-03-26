import * as React from "react"
import Layout from "@Components/layout"
import SEO from "@Components/seo"
import { useIntl, Link } from "gatsby-plugin-intl"
const NotFoundPage = () => {
  const { formatMessage } = useIntl()
  return (
    <Layout>
      <SEO
        title={`404: ${formatMessage({ id: "pages.notFound.title" })}`}
        description={formatMessage({ id: "globals.header.description" })}
        path="/404/"
      />
      <div className="notfound-page">
        <div className="notfound-page__wrap">
          <div className="notfound-page__item">
            <h1>{formatMessage({ id: "pages.notFound.title" })}</h1>
            <Link className="button button--primary" to="/">
              {formatMessage({ id: "pages.notFound.ctaLabel" })}
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default NotFoundPage
