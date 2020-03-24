import createContext from "./createContext"
import { getWorldDataReducer } from "@Reducers/worldData"
import { noop } from "@Services/util"
import { getWorldData } from "@Services/api"
import { WORLD_DATA_FETCH, WORLD_DATA_SUCCESS, WORLD_DATA_FAIL } from "@Actions/worldData"
import { WorldDataType } from "@Types/worldData"

type Store = {
  pending: boolean
  error: boolean
  errorMessage: string
  data: WorldDataType[]
}

const defaultStore: Store = {
  pending: false,
  error: false,
  errorMessage: "",
  data: [],
}

const onGetWorldData = (dispatch: Function) => (onComplete: Function = noop, onError: Function = noop) => {
  dispatch({ type: WORLD_DATA_FETCH })
  getWorldData()
    .then(response => {
      dispatch({ type: WORLD_DATA_SUCCESS, data: response })
      onComplete()
    })
    .catch(error => {
      console.log(error)
      dispatch({ type: WORLD_DATA_FAIL, errorMessage: "Something went wrong" })
      onError()
    })
}

export const { Context, Provider } = createContext(getWorldDataReducer, { onGetWorldData }, defaultStore)
