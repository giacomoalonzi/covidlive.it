import * as React from 'react'
import { Provider as RegionsDataProvider } from '@Contexts/regionsData'
import { Provider as NationalTrandDataProvider } from '@Contexts/nationalTrendData'


export const wrapWithProvider = ({ element }) => (
  <NationalTrandDataProvider>
    <RegionsDataProvider>
      {element}
    </RegionsDataProvider>
  </NationalTrandDataProvider>
)