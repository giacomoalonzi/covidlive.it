"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @Flow
const React = require("react");
const react_chartjs_2_1 = require("react-chartjs-2");
const TestPerformedChart = ({ data, options }) => {
    const responsiveOptions = [
        [
            "screen and (max-width: 640px)",
            {
                axisX: {
                    labelInterpolationFnc: function (value, index) {
                        return index % 4 === 0 ? value : null;
                    },
                },
            },
        ],
    ];
    return (React.createElement("div", { className: "chart" },
        React.createElement("div", { className: "chart__wrap" },
            React.createElement("div", { className: "chart__item" },
                React.createElement(react_chartjs_2_1.Bar, { data: data, width: 100, height: 50, options: { maintainAspectRatio: false, ...options } })))));
};
exports.default = TestPerformedChart;
//# sourceMappingURL=testPerformedChart.js.map