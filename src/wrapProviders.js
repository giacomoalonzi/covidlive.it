// @flow
import React from "react"
import { Provider as RegionsDataProvider } from '@Contexts/regionsData'
import { Provider as NationalTrandDataProvider } from '@Contexts/nationalTrendData'

type Props = {
  element: any
}

export const wrapWithProvider = ({ element }: Props) => (
  <NationalTrandDataProvider>
    <RegionsDataProvider>
      {element}
    </RegionsDataProvider>
  </NationalTrandDataProvider>
)