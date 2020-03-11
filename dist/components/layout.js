"use strict";
/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const PropTypes = require("prop-types");
const gatsby_1 = require("gatsby");
require("../assets/styles/styles.scss");
const header_1 = require("@Components/header");
const footer_1 = require("@Components/footer");
const Layout = ({ children }) => {
    const data = gatsby_1.useStaticQuery(gatsby_1.graphql `
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "layout" },
            React.createElement("div", { className: "layout__wrap container" },
                React.createElement("div", { className: "layout__item layout__item--header" },
                    React.createElement(header_1.default, null)),
                React.createElement("div", { className: "layout__item layout__item--body" },
                    React.createElement("main", null, children)),
                React.createElement("div", { className: "layout__item layout__item--footer" },
                    React.createElement(footer_1.default, null))))));
};
Layout.propTypes = {
    children: PropTypes.node.isRequired,
};
exports.default = Layout;
//# sourceMappingURL=layout.js.map