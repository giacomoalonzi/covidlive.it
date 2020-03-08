// @flow
import React from "react"
import { Provider as RegionsDataProvider } from '@Contexts/regionsData'
import { Provider as NationalTrandDataProvider } from '@Contexts/nationalTrendData'

export const wrapWithProvider = ({ element }: { element: any }) => (
  <NationalTrandDataProvider>
    <RegionsDataProvider>
      {element}
    </RegionsDataProvider>
  </NationalTrandDataProvider>
)