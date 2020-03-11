"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const PropTypes = require("prop-types");
const skeleton_1 = require("@Components/skeleton");
const BigCard = ({ emoji, title, content, additionalContent, subContent, isLoading }) => {
    return (React.createElement("div", { className: "big-card card" },
        React.createElement("div", { className: "big-card__wrap card__wrap" }, isLoading ? (React.createElement("div", { className: "big-card__item big-card__item--text card__item" },
            React.createElement(skeleton_1.default, { fullHeight: true },
                React.createElement("h5", null, "Loading")),
            React.createElement(skeleton_1.default, null,
                React.createElement("p", null, "Loading")),
            React.createElement(skeleton_1.default, { fullHeight: true },
                React.createElement("small", null, "Loading")))) : (React.createElement(React.Fragment, null,
            emoji && (React.createElement("div", { className: "big-card__item big-card__item--badge card__item" },
                React.createElement("span", { role: "img" }, emoji))),
            React.createElement("div", { className: "big-card__item big-card__item--text card__item" },
                React.createElement("h5", null, title),
                React.createElement("p", null,
                    content,
                    " ",
                    additionalContent && React.createElement("span", null, additionalContent)),
                subContent && React.createElement("small", null, subContent)))))));
};
BigCard.defaultProps = {
    emoji: "",
    title: "",
    content: "",
    subContent: "",
    additionalContent: "",
    isLoading: false,
};
BigCard.propTypes = {
    emoji: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    subContent: PropTypes.string,
    additionalContent: PropTypes.string,
    isLoading: PropTypes.bool,
};
exports.default = BigCard;
//# sourceMappingURL=bigCard.js.map