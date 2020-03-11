"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
exports.normalizeRegionData = (response) => {
    const { data } = response;
    return data.map(region => ({
        id: lodash_1.get(region, 'codice_regione', ''),
        name: lodash_1.get(region, 'denominazione_regione', ''),
        infected: lodash_1.get(region, 'totale_attualmente_positivi', 0),
        newInfected: lodash_1.get(region, 'nuovi_attualmente_positivi', 0),
        healed: lodash_1.get(region, 'dimessi_guariti', 0),
        totalCases: lodash_1.get(region, 'totale_casi', 0),
        testPerformed: lodash_1.get(region, 'tamponi', 0),
        homeConfinement: lodash_1.get(region, 'isolamento_domiciliare', 0),
        hospitalized: lodash_1.get(region, 'totale_ospedalizzati', 0),
        intensiveCare: lodash_1.get(region, 'terapia_intensiva', 0),
        hospitalizedWithSymptoms: lodash_1.get(region, 'ricoverati_con_sintomi', 0),
        deaths: lodash_1.get(region, 'deceduti', 0),
        date: lodash_1.get(region, 'data', 0)
    }));
};
exports.normalizeNationalTrendData = (response) => {
    const { data } = response;
    return data.map(nation => ({
        date: lodash_1.get(nation, 'data', ''),
        hospitalized: lodash_1.get(nation, 'totale_ospedalizzati', 0),
        infected: lodash_1.get(nation, 'totale_attualmente_positivi', 0),
        newInfected: lodash_1.get(nation, 'nuovi_attualmente_positivi', 0),
        healed: lodash_1.get(nation, 'dimessi_guariti', 0),
        totalCases: lodash_1.get(nation, 'totale_casi', 0),
        deaths: lodash_1.get(nation, 'deceduti', ''),
        homeConfinement: lodash_1.get(nation, 'isolamento_domiciliare', 0),
        intensiveCare: lodash_1.get(nation, 'terapia_intensiva', 0),
        testPerformed: lodash_1.get(nation, 'tamponi', 0),
        hospitalizedWithSymptoms: lodash_1.get(nation, 'ricoverati_con_sintomi', 0),
    }));
};
//# sourceMappingURL=normalize.js.map