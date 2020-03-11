"use strict";
// @flow
/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const PropTypes = require("prop-types");
const react_helmet_1 = require("react-helmet");
const gatsby_1 = require("gatsby");
const image_og_jpg_1 = require("../assets/images/image-og.jpg");
function SEO({ description, lang, meta, title }) {
    const { site } = gatsby_1.useStaticQuery(gatsby_1.graphql `
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `);
    const metaDescription = description || site.siteMetadata.description;
    return (React.createElement(react_helmet_1.default, { htmlAttributes: {
            lang,
        }, title: title, titleTemplate: `%s | ${site.siteMetadata.title}`, meta: [
            {
                name: `description`,
                content: metaDescription,
            },
            {
                property: `og:title`,
                content: title,
            },
            {
                property: "og:image",
                content: image_og_jpg_1.default,
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
        ].concat(meta) }));
}
SEO.defaultProps = {
    lang: `en`,
    meta: [],
    description: ``,
};
SEO.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string.isRequired,
};
exports.default = SEO;
//# sourceMappingURL=seo.js.map