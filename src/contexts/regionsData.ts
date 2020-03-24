import createContext from "./createContext"
import { getRegionsDataReducer } from "@Reducers/regionsData"
import { noop } from "@Services/util"
import { getRegionsData } from "@Services/api"
import { REGIONS_DATA_FETCH, REGIONS_DATA_SUCCESS, REGIONS_DATA_FAIL } from "@Actions/regionsData"
import { RegionDataType } from "@Types/regionData"

type Store = {
  pending: boolean
  error: boolean
  errorMessage: string
  data: RegionDataType[]
}

const defaultStore: Store = {
  pending: false,
  error: false,
  errorMessage: "",
  data: [],
}

const onGetRegionsData = (dispatch: Function) => (onComplete: Function = noop, onError: Function = noop) => {
  dispatch({ type: REGIONS_DATA_FETCH })
  getRegionsData()
    .then(response => {
      dispatch({ type: REGIONS_DATA_SUCCESS, data: response })
      onComplete()
    })
    .catch(error => {
      console.log(error)
      dispatch({ type: REGIONS_DATA_FAIL, errorMessage: "Something went wrong" })
      onError()
    })
}

export const { Context, Provider } = createContext(getRegionsDataReducer, { onGetRegionsData }, defaultStore)
