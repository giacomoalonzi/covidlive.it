"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @flow
const React = require("react");
const gatsby_1 = require("gatsby");
const layout_1 = require("@Components/layout");
const seo_1 = require("@Components/seo");
const NotFoundPage = () => (React.createElement(layout_1.default, null,
    React.createElement(seo_1.default, { title: "404: Not found" }),
    React.createElement("div", { className: "notfound-page" },
        React.createElement("div", { className: "notfound-page__wrap" },
            React.createElement("div", { className: "notfound-page__item" },
                React.createElement("h1", null, "Pagina non trovata trovata"),
                React.createElement(gatsby_1.Link, { className: "button button--primary", to: "/" }, "Torna alla home"))))));
exports.default = NotFoundPage;
//# sourceMappingURL=404.js.map