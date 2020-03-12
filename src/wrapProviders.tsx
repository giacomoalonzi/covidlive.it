import * as React from "react"
import { Provider as RegionsDataProvider } from "@Contexts/regionsData"
import { Provider as NationalTrandDataProvider } from "@Contexts/nationalTrendData"
interface Props {
  element: any
}
export const wrapWithProvider = ({ element }: Props) => (
  <NationalTrandDataProvider>
    <RegionsDataProvider>{element}</RegionsDataProvider>
  </NationalTrandDataProvider>
)
