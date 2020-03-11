"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// flow
const React = require("react");
const PropTypes = require("prop-types");
const Skeleton = ({ children, type, fullHeight }) => {
    return (React.createElement("div", { className: `skeleton ${type} ${fullHeight ? "has-full-height" : ""}` },
        React.createElement("div", null, children),
        React.createElement("span", null, children)));
};
Skeleton.defaultProps = {
    children: {},
    type: "is-black",
    fullHeight: false,
};
Skeleton.propTypes = {
    children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    type: PropTypes.string,
    fullHeight: PropTypes.bool,
};
exports.default = Skeleton;
//# sourceMappingURL=skeleton.js.map