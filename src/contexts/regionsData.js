// @flow
import createContext from './createContext'
import { getRegionsDataReducer } from '../reducers/regionsData'
import { noop } from '@Services/util'
import { getRegionsData, getNationalTrendData } from '@Services/api.js'
import { REGIONS_DATA_FETCH, REGIONS_DATA_SUCCESS, REGIONS_DATA_FAIL } from '../actions/regionsData'
const defaultStore = {
  pending: false,
  error: false,
  errorMessage: '',
  data: [],
}

const onGetRegionsData = (dispatch) => (onComplete: Function = noop, onError:Function = noop) => {
  dispatch({ type: REGIONS_DATA_FETCH })
  getRegionsData()
    .then(response => {
      dispatch({ type: REGIONS_DATA_SUCCESS, data: response })
    })
    .catch(error => {
      console.log(error)
      dispatch({ type: REGIONS_DATA_FAIL, errorMessage: 'Something went wrong' })
    })
}

export const { Context, Provider } = createContext(
  getRegionsDataReducer,
  { onGetRegionsData },
  defaultStore
)