import createContext from './createContext'

export const { Context, Provider } = createContext(
  invoicesReducer,
  {
    onGetInvoices,
    onGetInvoicePdf,
  },
  defaultStore
)
