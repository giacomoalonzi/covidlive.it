"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @flow
const nationalData_1 = require("@Actions/nationalData");
exports.getNationalTrandDataReducer = (state, action) => {
    switch (action.type) {
        case nationalData_1.NATIONAL_DATA_FETCH:
            return { ...state, pending: true, error: false };
        case nationalData_1.NATIONAL_DATA_SUCCESS:
            return { ...state, data: action.data, pending: false, error: false };
        case nationalData_1.NATIONAL_DATA_FAIL:
            return { ...state, data: {}, pending: false, error: true, errorMessage: action.errorMessage };
        default:
            return state;
    }
};
//# sourceMappingURL=nationalTrendData.js.map