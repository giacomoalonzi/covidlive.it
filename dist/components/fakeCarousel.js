"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @Flow
const React = require("react");
const PropTypes = require("prop-types");
const FakeCarousel = ({ children }) => (React.createElement("div", { className: "fake-carousel" },
    React.createElement("div", { className: "fake-carousel__wrap" }, children)));
FakeCarousel.defaultProps = {
    children: [],
};
FakeCarousel.propTypes = {
    children: PropTypes.arrayOf(PropTypes.node).isRequired,
};
exports.default = FakeCarousel;
//# sourceMappingURL=fakeCarousel.js.map