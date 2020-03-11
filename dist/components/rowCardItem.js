"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const PropTypes = require("prop-types");
const skeleton_1 = require("@Components/skeleton");
const RowCardItem = ({ index, name, infected, healed, deaths, isLoading }) => (React.createElement("li", { className: "row-card-item" },
    React.createElement("div", { className: "row-card-item__wrap" }, isLoading ? (React.createElement(skeleton_1.default, { fullHeight: true },
        React.createElement("p", null, "Loading"))) : (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "row-card-item__item row-card-item__item--text" },
            React.createElement("p", null,
                React.createElement("span", null, index + 1),
                name)),
        React.createElement("div", { className: "row-card-item__item row-card-item__item--stats" },
            React.createElement("div", { className: "row-card-item-stat" },
                React.createElement("p", null,
                    React.createElement("span", { role: "img" }, "\uD83D\uDE37"),
                    infected)),
            React.createElement("div", { className: "row-card-item-stat" },
                React.createElement("p", null,
                    React.createElement("span", { role: "img" }, "\uD83D\uDE0A"),
                    healed)),
            React.createElement("div", { className: "row-card-item-stat" },
                React.createElement("p", null,
                    React.createElement("span", { role: "img" }, "\uD83D\uDE22"),
                    deaths))))))));
RowCardItem.defaultProps = {
    index: 0,
    name: "",
    infected: 0,
    healted: 0,
    deaths: 0,
    isLoading: false,
};
RowCardItem.propTypes = {
    index: PropTypes.number,
    name: PropTypes.string,
    infected: PropTypes.number,
    healted: PropTypes.number,
    deaths: PropTypes.number,
    isLoading: PropTypes.bool,
};
exports.default = RowCardItem;
//# sourceMappingURL=rowCardItem.js.map