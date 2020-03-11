"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
// @flow
const createContext_1 = require("./createContext");
const nationalTrendData_1 = require("@Reducers/nationalTrendData");
const nationalData_1 = require("@Actions/nationalData");
const util_1 = require("@Services/util");
const api_1 = require("@Services/api");
const defaultStore = {
    pending: false,
    error: false,
    errorMessage: '',
    data: [],
};
const onGetNationalTrandData = (dispatch) => (onComplete = util_1.noop, onError = util_1.noop) => {
    dispatch({ type: nationalData_1.NATIONAL_DATA_FETCH });
    api_1.getNationalTrendData()
        .then(response => {
        dispatch({ type: nationalData_1.NATIONAL_DATA_SUCCESS, data: response });
    })
        .catch(error => {
        console.log(error);
        dispatch({ type: nationalData_1.NATIONAL_DATA_FAIL, errorMessage: 'Something went wrong' });
    });
};
_a = createContext_1.default(nationalTrendData_1.getNationalTrandDataReducer, {
    onGetNationalTrandData,
}, defaultStore), exports.Context = _a.Context, exports.Provider = _a.Provider;
//# sourceMappingURL=nationalTrendData.js.map