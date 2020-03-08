// @flow
import React from "react"
import { Provider as RegionsDataProvider } from './contexts/regionsData'

export const wrapWithProvider = ({ element }: { element: any }) => (
  <RegionsDataProvider>{element}</RegionsDataProvider>
)