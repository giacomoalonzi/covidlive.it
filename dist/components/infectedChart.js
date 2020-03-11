"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @Flow
const React = require("react");
const PropTypes = require("prop-types");
const react_chartjs_2_1 = require("react-chartjs-2");
const InfectedChart = ({ data, options }) => {
    return (React.createElement("div", { className: "chart" },
        React.createElement("div", { className: "chart__wrap" },
            React.createElement("div", { className: "chart__item" },
                React.createElement(react_chartjs_2_1.Line, { data: data, width: 100, height: 50, options: { maintainAspectRatio: false, ...options } })))));
};
InfectedChart.defaultProps = {
    data: [],
    options: [],
};
InfectedChart.propTypes = {
    data: PropTypes.any,
    options: PropTypes.any,
};
exports.default = InfectedChart;
//# sourceMappingURL=infectedChart.js.map