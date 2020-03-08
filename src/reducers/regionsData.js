import { REGIONS_DATA_FETCH, REGIONS_DATA_SUCCESS, REGIONS_DATA_FAIL } from '../actions/regionsData'

export const getRegionsDataReducer = (state, action) => {
  switch (action.type) {
    case REGIONS_DATA_FETCH:
      return { ...state, pending: true, error: false, fetchNotStarted: true }
    case REGIONS_DATA_SUCCESS:
      return { ...state, data: action.data, pending: false, error: false, fetchNotStarted: false }
    case REGIONS_DATA_FAIL:
      return { ...state, data: {}, pending: false, error: true, errorMessage: action.errorMessage }
    default:
      return state
  }
}
