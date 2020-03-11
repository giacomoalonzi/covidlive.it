"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const normalize_1 = require("./normalize");
const baseURL = "https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json";
const http = axios_1.default.create({
    baseURL,
    timeout: process.env.NODE_ENV !== "production" ? 100000 : 10000,
});
exports.getRegionsData = () => {
    return http.get("/dpc-covid19-ita-regioni.json").then(normalize_1.normalizeRegionData);
};
exports.getNationalTrendData = () => {
    return http.get("/dpc-covid19-ita-andamento-nazionale.json").then(normalize_1.normalizeNationalTrendData);
};
//# sourceMappingURL=api.js.map