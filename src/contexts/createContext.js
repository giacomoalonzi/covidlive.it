//@ flow
import React, { useReducer } from 'react'
import PropTypes from 'prop-types'

type Props = {
  children: any,
}
export default (reducer: any, actions: any, initialState: any): Function => {
  const Context = React.createContext()
  const Provider = ({ children }: Props) => {
    const [store, dispatch] = useReducer(reducer, initialState)

    const boundActions = Object.keys(actions).reduce((acc, key): any => {
      return { ...acc, [key]: actions[key](dispatch) }
    }, {})
    return <Context.Provider value={{ store, ...boundActions }}>{children}</Context.Provider>
  }

  Provider.defaultProps = {
    children: [],
  }

  Provider.propTypes = {
    children: PropTypes.any,
  }

  return { Context, Provider }
}
