import createContext from './createContext'
import { getNationalTrandDataReducer } from '../reducers/nationalTrendData'
import { NATIONAL_DATA_FETCH, NATIONAL_DATA_SUCCESS, NATIONAL_DATA_FAIL } from '../actions/nationalData'
import { noop } from '../services/util'
import { getNationalTrendData } from '../services/api'
const defaultStore = {
  pending: false,
  error: false,
  errorMessage: '',
  data: [],
}

const onGetNationalTrandData = (dispatch) => (onComplete: Function = noop, onError: Function = noop) => {
  dispatch({ type: NATIONAL_DATA_FETCH })
  getNationalTrendData()
    .then(response => {
      dispatch({ type: NATIONAL_DATA_SUCCESS, data: response })
    })
    .catch(error => {
      console.log(error)
      dispatch({ type: NATIONAL_DATA_FAIL, errorMessage: 'Something went wrong' })
    })
}


export const { Context, Provider } = createContext(
  getNationalTrandDataReducer,
  {
    onGetNationalTrandData,
  },
  defaultStore
)
