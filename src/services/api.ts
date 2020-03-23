import axios from "axios"
import { normalizeRegionData, normalizeNationalTrendData } from "./normalize"

const httpLocalData = axios.create({
  baseURL: process.env.GATSBY_API_URL,
  timeout: process.env.NODE_ENV !== "production" ? 100000 : 10000,
})

const httpWorldData = axios.create({
  baseURL: process.env.GATSBY_API_WORLD_DATA_URL,
  timeout: process.env.NODE_ENV !== "production" ? 100000 : 10000,
  headers: { "Content-Type": "application/json" },
})

export const getRegionsData = () => {
  return httpLocalData.get("/dpc-covid19-ita-regioni.json").then(normalizeRegionData)
}

export const getNationalTrendData = () => {
  return httpLocalData.get("/dpc-covid19-ita-andamento-nazionale.json").then(normalizeNationalTrendData)
}
export const getWorldData = () => {
  return httpWorldData
    .post("/graphql", {
      query: `
      {
        countries {
          country
          cases
          todayCases
          deaths
          todayDeaths
          recovered
          active
          critical
          casesPerOneMillion
        } 
      }
    `,
    })
    .then(console.log)
}
getWorldData()
