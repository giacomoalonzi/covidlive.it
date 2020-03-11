"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @flow
const regionsData_1 = require("@Actions/regionsData");
exports.getRegionsDataReducer = (state, action) => {
    switch (action.type) {
        case regionsData_1.REGIONS_DATA_FETCH:
            return { ...state, pending: true, error: false };
        case regionsData_1.REGIONS_DATA_SUCCESS:
            return { ...state, data: action.data, pending: false, error: false };
        case regionsData_1.REGIONS_DATA_FAIL:
            return { ...state, data: {}, pending: false, error: true, errorMessage: action.errorMessage };
        default:
            return state;
    }
};
//# sourceMappingURL=regionsData.js.map