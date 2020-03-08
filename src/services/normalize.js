
import { get } from 'lodash'

export const normalizeRegionData = (response: any) => {
 const { data } = response
 return data.map(region => ({
   id: get(region,'codice_regione', ''),
   name: get(region,'denominazione_regione', ''),
   infected: get(region,'totale_attualmente_positivi', 0),
   newInfected: get(region,'nuovi_attualmente_positivi', 0),
   healed: get(region,'dimessi_guariti', 0),
   totalCases: get(region,'totale_casi', 0),
   swabs: get(region,'tamponi', 0),
   homeIsolation: get(region,'isolamento_domiciliare', 0),
   hospitalized: get(region,'totale_ospedalizzati', 0),
   intensiveCare: get(region,'terapia_intensiva', 0),
   hospitalizedWithSymptoms: get(region,'ricoverati_con_sintomi', 0),
   deaths: get(region,'deceduti', 0),
   date: get(region,'data', 0)
 }))
}

export const normalizeNationalTrendData = (response) => {
  const { data } = response
  return data.map(region => ({
    date: get(region, 'data', ''),
    hospitalized: get(region, 'totale_ospedalizzati', 0),
    infected: get(region, 'totale_attualmente_positivi', 0),
    newInfected: get(region, 'nuovi_attualmente_positivi', 0),
    healed: get(region, 'dimessi_guariti', 0),
    totalCases: get(region, 'totale_casi', 0),
    deaths: get(region,'deceduti', ''),
    homeIsolation: get(region, 'isolamento_domiciliare', 0),
    hospitalizedWithSymptoms: get(region, 'ricoverati_con_sintomi', 0),
  }))
}
