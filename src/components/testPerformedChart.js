// @Flow
import React from "react"
import ChartistGraph from "react-chartist"
import type { Element } from "react"
type Props = {
  data: any, //tbd,
  options?: any, //tbd
}
const TestPerformedChart = ({ data, options }: Props ): Element<'div'> => {
  const chartOptions = {
    ...options,
    low: 0,
  }

  const responsiveOptions = [
    [
      "screen and (max-width: 640px)",
      {
        axisX: {
          labelInterpolationFnc: function(value: string, index: number): ?string {
            return index % 4 === 0 ? value : null
          },
        },
      },
    ],
  ]

  return (
    <div className="chart">
      <div className="chart__wrap">
        <div className="chart__item">
          <ChartistGraph
            data={data}
            options={chartOptions}
            type="Bar"
            responsiveOptions={responsiveOptions}
          />
        </div>
      </div>
    </div>
  )
}

export default TestPerformedChart
