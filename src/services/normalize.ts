import { get } from "lodash"
import { NationalTrendDataType } from "@Types/nationalTrendData"
import { RegionDataType } from "@Types/regionData"
import { WorldDataType } from "@Types/worldData"

export const normalizeRegionData = (response: any): RegionDataType[] => {
  const { data } = response
  return data.map((region: any) => ({
    id: get(region, "codice_regione", ""),
    name: get(region, "denominazione_regione", ""),
    infected: get(region, "totale_positivi", 0), // Total amount of current positive cases (Hospitalised patients + Home confinement)
    newInfected: get(region, "nuovi_positivi", 0), // News amount of current positive cases (Hospitalised patients + Home confinement)
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

export const normalizeNationalTrendData = (response: any): NationalTrendDataType[] => {
  const { data } = response
  return data.map((nationData: any) => ({
    date: get(nationData, "data", ""),
    hospitalized: get(nationData, "totale_ospedalizzati", 0),
    infected: get(nationData, "totale_positivi", 0), // Total amount of current positive cases (Hospitalised patients + Home confinement)
    newInfected: get(nationData, "nuovi_positivi", 0), // News amount of current positive cases (Hospitalised patients + Home confinement)
    healed: get(nationData, "dimessi_guariti", 0),
    totalCases: get(nationData, "totale_casi", 0),
    deaths: get(nationData, "deceduti", 0),
    homeConfinement: get(nationData, "isolamento_domiciliare", 0),
    intensiveCare: get(nationData, "terapia_intensiva", 0),
    testPerformed: get(nationData, "tamponi", 0),
    hospitalizedWithSymptoms: get(nationData, "ricoverati_con_sintomi", 0),
  }))
}

export const normalizeWorldData = (response: any): WorldDataType[] => {
  const { countries } = response.data.data
  return countries.map((country: any) => ({
    name: get(country, "country", ""),
    infected: get(country, "cases", 0),
    newInfected: get(country, "todayCases", 0),
    deaths: get(country, "deaths", 0),
    healed: get(country, "recovered", 0),
  }))
}
