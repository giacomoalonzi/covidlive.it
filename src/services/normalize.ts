import { get } from "lodash"
import { NationalTrendDataType } from "@Types/nationalTrendData"
import { RegionDataType } from "@Types/regionData"

export const normalizeRegionData = (response: any): [RegionDataType] => {
  const { data } = response
  return data.map(region => ({
    id: get(region, "codice_regione", ""),
    name: get(region, "denominazione_regione", ""),
    infected: get(region, "totale_attualmente_positivi", 0), // Total amount of current positive cases (Hospitalised patients + Home confinement)
    newInfected: get(region, "nuovi_attualmente_positivi", 0), // News amount of current positive cases (Hospitalised patients + Home confinement)
    healed: get(region, "dimessi_guariti", 0),
    totalCases: get(region, "totale_casi", 0),
    testPerformed: get(region, "tamponi", 0),
    homeConfinement: get(region, "isolamento_domiciliare", 0),
    hospitalized: get(region, "totale_ospedalizzati", 0),
    intensiveCare: get(region, "terapia_intensiva", 0),
    hospitalizedWithSymptoms: get(region, "ricoverati_con_sintomi", 0),
    deaths: get(region, "deceduti", 0),
    date: get(region, "data", 0),
  }))
}

export const normalizeNationalTrendData = (response: any): [NationalTrendDataType] => {
  const { data } = response
  return data.map(nation => ({
    date: get(nation, "data", ""),
    hospitalized: get(nation, "totale_ospedalizzati", 0),
    infected: get(nation, "totale_attualmente_positivi", 0), // Total amount of current positive cases (Hospitalised patients + Home confinement)
    newInfected: get(nation, "nuovi_attualmente_positivi", 0), // News amount of current positive cases (Hospitalised patients + Home confinement)
    healed: get(nation, "dimessi_guariti", 0),
    totalCases: get(nation, "totale_casi", 0),
    deaths: get(nation, "deceduti", ""),
    homeConfinement: get(nation, "isolamento_domiciliare", 0),
    intensiveCare: get(nation, "terapia_intensiva", 0),
    testPerformed: get(nation, "tamponi", 0),
    hospitalizedWithSymptoms: get(nation, "ricoverati_con_sintomi", 0),
  }))
}
