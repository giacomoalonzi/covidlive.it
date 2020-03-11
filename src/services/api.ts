import axios from "axios"
import { normalizeRegionData, normalizeNationalTrendData } from "./normalize"

console.log(process.env.API_URL)

const http = axios.create({
  baseURL: process.env.API_URL,
  timeout: process.env.NODE_ENV !== "production" ? 100000 : 10000,
})

export const getRegionsData = () => {
  return http.get("/dpc-covid19-ita-regioni.json").then(normalizeRegionData)
}

export const getNationalTrendData = () => {
  return http.get("/dpc-covid19-ita-andamento-nazionale.json").then(normalizeNationalTrendData)
}
