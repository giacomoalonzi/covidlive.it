import { WORLD_DATA_FETCH, WORLD_DATA_SUCCESS, WORLD_DATA_FAIL } from "@Actions/worldData"

export const getWorldDataReducer = (state: any, action: any) => {
  switch (action.type) {
    case WORLD_DATA_FETCH:
      return { ...state, pending: true, error: false }
    case WORLD_DATA_SUCCESS:
      return { ...state, data: action.data, pending: false, error: false }
    case WORLD_DATA_FAIL:
      return { ...state, data: {}, pending: false, error: true, errorMessage: action.errorMessage }
    default:
      return state
  }
}
