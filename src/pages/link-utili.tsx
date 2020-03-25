import * as React from "react"
import Layout from "@Components/layout"
import SEO from "@Components/seo"
import { useIntl } from "gatsby-plugin-intl"
const LinkUtili = () => {
  const { formatMessage } = useIntl()
  return (
    <Layout>
      <SEO
        title={formatMessage({ id: "pages.usefulLinks.title" })}
        description={formatMessage({ id: "globals.header.description" })}
      />

      <div className="layout-wrap">
        <h2 className="u-margin-bottom-spacer-large">
          {formatMessage({ id: "pages.usefulLinks.donationLinks.title" })}
        </h2>
        <div className="card">
          <div className="card__wrap">
            <div className="card__item">
              <div className="text-section">
                <ul>
                  <li>
                    <a
                      href={formatMessage({ id: "pages.usefulLinks.donationLinks.links.link1.url" })}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {formatMessage({ id: "pages.usefulLinks.donationLinks.links.link1.label" })}
                    </a>
                  </li>
                  <li>
                    <a
                      href={formatMessage({ id: "pages.usefulLinks.donationLinks.links.link2.url" })}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {formatMessage({ id: "pages.usefulLinks.donationLinks.links.link2.label" })}
                    </a>
                  </li>
                  <li>
                    <a
                      href={formatMessage({ id: "pages.usefulLinks.donationLinks.links.link3.url" })}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {formatMessage({ id: "pages.usefulLinks.donationLinks.links.link3.label" })}
                    </a>
                  </li>
                  <li>
                    <a
                      href={formatMessage({ id: "pages.usefulLinks.donationLinks.links.link4.url" })}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {formatMessage({ id: "pages.usefulLinks.donationLinks.links.link4.label" })}
                    </a>
                  </li>
                  <li>
                    <a
                      href={formatMessage({ id: "pages.usefulLinks.donationLinks.links.link5.url" })}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {formatMessage({ id: "pages.usefulLinks.donationLinks.links.link5.label" })}
                    </a>
                  </li>
                  <li>
                    <a
                      href={formatMessage({ id: "pages.usefulLinks.donationLinks.links.link6.url" })}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {formatMessage({ id: "pages.usefulLinks.donationLinks.links.link6.label" })}
                    </a>
                  </li>
                  <li>
                    <a
                      href={formatMessage({ id: "pages.usefulLinks.donationLinks.links.link7.url" })}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {formatMessage({ id: "pages.usefulLinks.donationLinks.links.link7.label" })}
                    </a>
                  </li>
                  <li>
                    <a href="mailto:ciao@covidlive.it" rel="noopener noreferrer" target="_blank">
                      <strong>{formatMessage({ id: "pages.usefulLinks.donationLinks.ctaLabel" })}</strong>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <h2 className="u-margin-bottom-spacer-large u-margin-top-spacer-large">
          {formatMessage({ id: "pages.usefulLinks.usefulLinks.title" })}
        </h2>
        <div className="card text-section">
          <div className="card__wrap text__wrap">
            <div className="card__item text__item">
              <div className="text-section">
                <ul>
                  <li>
                    <a
                      href={formatMessage({ id: "pages.usefulLinks.usefulLinks.links.link1.url" })}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {formatMessage({ id: "pages.usefulLinks.usefulLinks.links.link1.label" })}
                    </a>
                  </li>
                  <li>
                    <a
                      href={formatMessage({ id: "pages.usefulLinks.usefulLinks.links.link2.url" })}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {formatMessage({ id: "pages.usefulLinks.usefulLinks.links.link2.label" })}
                    </a>
                  </li>
                  <li>
                    <a
                      href={formatMessage({ id: "pages.usefulLinks.usefulLinks.links.link3.url" })}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {formatMessage({ id: "pages.usefulLinks.usefulLinks.links.link3.label" })}
                    </a>
                  </li>
                  <li>
                    <a
                      href={formatMessage({ id: "pages.usefulLinks.usefulLinks.links.link4.url" })}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {formatMessage({ id: "pages.usefulLinks.usefulLinks.links.link4.label" })}
                    </a>
                  </li>
                  <li>
                    <a
                      href={formatMessage({ id: "pages.usefulLinks.usefulLinks.links.link5.url" })}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {formatMessage({ id: "pages.usefulLinks.usefulLinks.links.link5.label" })}
                    </a>
                  </li>
                  <li>
                    <a
                      href={formatMessage({ id: "pages.usefulLinks.usefulLinks.links.link6.url" })}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {formatMessage({ id: "pages.usefulLinks.usefulLinks.links.link6.label" })}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default LinkUtili
