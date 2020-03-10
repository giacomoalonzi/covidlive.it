import axios from "axios"
import { normalizeRegionData, normalizeNationalTrendData } from "./normalize"
import { delay } from "@Services/util"
const baseURL = "https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json"

const http = axios.create({
  baseURL,
  timeout: process.env.NODE_ENV !== "production" ? 100000 : 10000,
})

export const getRegionsData = () => {
  return http.get("/dpc-covid19-ita-regioni.json").then(res => delay(3000).then(() => normalizeRegionData(res)))
}

export const getNationalTrendData = () => {
  return http
    .get("/dpc-covid19-ita-andamento-nazionale.json")
    .then(res => delay(3000).then(() => normalizeNationalTrendData(res)))
}
