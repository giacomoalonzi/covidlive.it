"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//@ flow
const React = require();
'react';
const PropTypes = require("prop-types");
exports.default = (reducer, actions, initialState) => {
    const Context = React.createContext();
    const Provider = ({ children }) => {
        const [store, dispatch] = React.useReducer(reducer, initialState);
        const boundActions = Object.keys(actions).reduce((acc, key) => {
            return { ...acc, [key]: actions[key](dispatch) };
        }, {});
        return value;
        {
            {
                store, ;
                boundActions;
            }
        }
         > { children } < /Context.Provider>;
    };
    Provider.defaultProps = {
        children: [],
    };
    Provider.propTypes = {
        children: PropTypes.any,
    };
    return { Context, Provider };
};
//# sourceMappingURL=createContext.js.map