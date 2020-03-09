import React from "react"
import ChartistGraph from "react-chartist"
import Chartist from "chartist"
import "chartist-plugin-tooltips"
import { max } from 'lodash'
const InfectedChart = ({ data, options }) => {
  const highestValue = max(data.series[0].map(d => d.value))
  const chartOptions = {
    ...options,
    high: highestValue * 1.1,
    plugins: [
      Chartist.plugins.tooltip({
        appendToBody: true,
        pointClass: 'my-cool-point'
      })
    ]
  }

  const responsiveOptions = [
    [
      "screen and (max-width: 640px)",
      {
        axisX: {
          labelInterpolationFnc: function(value, index) {
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
            type="Line"
            responsiveOptions={responsiveOptions}
          />
        </div>
      </div>
    </div>
  )
}

export default InfectedChart
