"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const regionsData_1 = require("@Contexts/regionsData");
const nationalTrendData_1 = require("@Contexts/nationalTrendData");
exports.wrapWithProvider = ({ element }) => (React.createElement(nationalTrendData_1.Provider, null,
    React.createElement(regionsData_1.Provider, null, element)));
//# sourceMappingURL=wrapProviders.js.map