import React, { useReducer } from 'react'
import PropTypes from 'prop-types'

export default (reducer, actions, initialState) => {
  const Context = React.createContext()
  const Provider = ({ children }) => {
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
