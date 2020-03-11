// @flow
import createContext from './createContext'
import { getNationalTrandDataReducer } from '@Reducers/nationalTrendData'
import { NATIONAL_DATA_FETCH, NATIONAL_DATA_SUCCESS, NATIONAL_DATA_FAIL } from '@Actions/nationalData'
import { noop } from '@Services/util'
import { getNationalTrendData } from '@Services/api'
import { NationalTrendDataType } from '@Types/nationalTrendData'

interface Store {
  pending: false,
  error: false,
  errorMessage: '',
  data: [NationalTrendDataType]
}

const defaultStore = {
  pending: false,
  error: false,
  errorMessage: '',
  data: [],
}

const onGetNationalTrandData = (dispatch: Function) => (onComplete: Function = noop, onError: Function = noop) => {
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
