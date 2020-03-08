// @flow
import { NATIONAL_DATA_FETCH, NATIONAL_DATA_SUCCESS, NATIONAL_DATA_FAIL } from '../actions/nationalData'

export const getNationalTrandDataReducer = (state: any, action: any) => {
  switch (action.type) {
    case NATIONAL_DATA_FETCH:
      return { ...state, pending: true, error: false }
    case NATIONAL_DATA_SUCCESS:
      return { ...state, data: action.data, pending: false, error: false }
    case NATIONAL_DATA_FAIL:
      return { ...state, data: {}, pending: false, error: true, errorMessage: action.errorMessage }
    default:
      return state
  }
}
