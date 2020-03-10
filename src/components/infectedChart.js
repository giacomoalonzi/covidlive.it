// @Flow
import React from "react"
import PropTypes from "prop-types"
import type { Element } from "react"
import ChartistGraph from "react-chartist"
import Chartist from "chartist"
import { max } from "lodash"

type Props = {
  data: any, // tbd
  options?: any, // tbd
}

const InfectedChart = ({ data, options }): Element<'div'> => {
  const highestValue = max(data.series[0].map(d => d.value))
  const chartOptions = {
    ...options,
    high: highestValue * 1.1,
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
          <ChartistGraph data={data} options={chartOptions} type="Line" responsiveOptions={responsiveOptions} />
        </div>
      </div>
    </div>
  )
}

InfectedChart.defaultProps = {
  children: [],
}

InfectedChart.propTypes = {
  children: PropTypes.array,
}

export default InfectedChart
