// @flow
import React, { useReducer, createContext } from 'react'
import PropTypes from 'prop-types'

export default (reducer: any, actions: any, initialState: any) => {
  const Context = createContext<any>()
  const Provider = ({ children }: {children: any}): any => {
    const [store, dispatch] = useReducer(reducer, initialState)

    const boundActions = Object.keys(actions).reduce((acc, key) => {
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
