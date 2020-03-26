/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import * as React from "react"
import * as PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { useIntl } from "gatsby-plugin-intl"

const ogImage = require("@Assets/images/image-og.jpg")

type Props = {
  description?: string
  meta?: Array<string>
  title: string
  path: string
}

function SEO({ description, meta, title, path }: Props): any {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  const intl = useIntl()

  return (
    <Helmet
      htmlAttributes={{
        lang: intl.locale,
      }}
      title={title}
      link={[
        {
          rel: "alternate",
          hrefLang: "x-default",
          href: `${site.siteMetadata.siteUrl}${path}`,
        },
        {
          rel: "alternate",
          hrefLang: "it",
          href: `${site.siteMetadata.siteUrl}/it${path}`,
        },
        {
          rel: "alternate",
          hrefLang: "en",
          href: `${site.siteMetadata.siteUrl}/en${path}`,
        },
      ]}
      //@ts-ignore
      meta={[
        ...meta,
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:url`,
          content: `${site.siteMetadata.siteUrl}/${intl.locale}${path}`,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: "og:image",
          content: `${site.siteMetadata.siteUrl}${ogImage}`,
        },
        {
          property: "og:image:width",
          content: 1200,
        },
        {
          property: "og:image:height",
          content: 630,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]}
    />
  )
}

SEO.defaultProps = {
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
}

export default SEO
