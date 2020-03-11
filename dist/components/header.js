"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @flow
const React = require("react");
const PropTypes = require("prop-types");
const gatsby_1 = require("gatsby");
const Header = () => (React.createElement("header", { className: "header" },
    React.createElement("div", { className: "header__wrap" },
        React.createElement("div", { className: "header__item header__item--brand" },
            React.createElement("p", null,
                React.createElement(gatsby_1.Link, { to: "/" },
                    React.createElement("span", { role: "img" }, "\uD83E\uDDA0"),
                    ` `,
                    "covid",
                    React.createElement("span", null, "live"),
                    React.createElement("small", null, "La situazione in italia in tempo reale")))),
        React.createElement("div", { className: "header__item header__item--nav" },
            React.createElement("nav", null,
                React.createElement("ul", null,
                    React.createElement("li", null,
                        React.createElement(gatsby_1.Link, { to: "/faq" }, "FAQ"),
                        React.createElement(gatsby_1.Link, { to: "/link-utili" }, "Link utili"),
                        React.createElement("a", { href: "mailto:ciao@covidlive.it" }, "Contatti"))))))));
Header.propTypes = {
    siteTitle: PropTypes.string,
};
Header.defaultProps = {
    siteTitle: ``,
};
exports.default = Header;
//# sourceMappingURL=header.js.map