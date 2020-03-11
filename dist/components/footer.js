"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @flow
const React = require("react");
const Footer = () => (React.createElement("footer", { className: "footer" },
    React.createElement("div", { className: "footer__wrap" },
        React.createElement("div", { className: "footer__item" },
            React.createElement("p", null,
                "COVIDLIVE.IT \u00A9 ",
                new Date().getFullYear(),
                " \u2014 Licenza:",
                " ",
                React.createElement("a", { rel: "noopener noreferrer", target: "_blank", href: "https://creativecommons.org/licenses/by/4.0/deed.en" }, "CC-BY-4.0"),
                " ",
                "\u2014",
                " ",
                React.createElement("a", { rel: "noopener noreferrer", target: "_blank", href: "https://github.com/pcm-dpc/COVID-19/blob/master/LICENSE" }, "Visualizza licenza"),
                " ",
                "\u2014 Editore / Autore dataset:",
                " ",
                React.createElement("a", { rel: "noopener noreferrer", target: "_blank", href: "http://www.protezionecivile.gov.it/home" }, "Dipartimento della Protezione Civile"),
                " ",
                React.createElement("br", null),
                "Developed with ",
                React.createElement("span", { role: "img" }, "\u2764\uFE0F"),
                " by",
                " ",
                React.createElement("a", { rel: "noopener noreferrer", href: "https://twitter.com/realbardaxx" }, "@giacomo.alonzi"))))));
exports.default = Footer;
//# sourceMappingURL=footer.js.map