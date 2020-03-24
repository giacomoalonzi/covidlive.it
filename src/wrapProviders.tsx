import * as React from "react"
import { Provider as RegionsDataProvider } from "@Contexts/regionsData"
import { Provider as NationalTrandDataProvider } from "@Contexts/nationalTrendData"
import { Provider as WorldDataProvider } from "@Contexts/worldData"
interface Props {
  element: any
}
export const wrapWithProvider = ({ element }: Props) => (
  <NationalTrandDataProvider>
    <WorldDataProvider>
      <RegionsDataProvider>{element}</RegionsDataProvider>
    </WorldDataProvider>
  </NationalTrandDataProvider>
)
