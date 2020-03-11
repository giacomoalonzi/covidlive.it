//@ flow
import * as React from "react"
import * as PropTypes from "prop-types"

interface Props {
  children: any
}
export default (reducer, actions, initialState) => {
  const Context = React.createContext()
  const Provider = ({ children }: Props) => {
    const [store, dispatch] = React.useReducer(reducer, initialState)

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
