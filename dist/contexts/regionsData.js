"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
// @flow
const createContext_1 = require("./createContext");
const regionsData_1 = require("@Reducers/regionsData");
const util_1 = require("@Services/util");
const api_js_1 = require("@Services/api.js");
const regionsData_2 = require("@Actions/regionsData");
const defaultStore = {
    pending: false,
    error: false,
    errorMessage: '',
    data: [],
};
const onGetRegionsData = (dispatch) => (onComplete = util_1.noop, onError = util_1.noop) => {
    dispatch({ type: regionsData_2.REGIONS_DATA_FETCH });
    api_js_1.getRegionsData()
        .then(response => {
        dispatch({ type: regionsData_2.REGIONS_DATA_SUCCESS, data: response });
    })
        .catch(error => {
        console.log(error);
        dispatch({ type: regionsData_2.REGIONS_DATA_FAIL, errorMessage: 'Something went wrong' });
    });
};
_a = createContext_1.default(regionsData_1.getRegionsDataReducer, { onGetRegionsData }, defaultStore), exports.Context = _a.Context, exports.Provider = _a.Provider;
//# sourceMappingURL=regionsData.js.map