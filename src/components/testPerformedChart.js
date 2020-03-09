import React from "react"
import ChartistGraph from "react-chartist"

const TestPerformedChart = ({ data, options }) => {
  const chartOptions = {
    ...options,
    low: 0,
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
            type="Bar"
            responsiveOptions={responsiveOptions}
          />
        </div>
      </div>
    </div>
  )
}

export default TestPerformedChart
