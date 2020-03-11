import React from "react"
import ChartistGraph from "react-chartist"
import { Bar } from 'react-chartjs-2';

const TestPerformedChart = ({ data, options }) => {
  return (
    <div className="chart">
      <div className="chart__wrap">
        <div className="chart__item">
          <Bar
            data={data}
            width={100}
            height={50}
            options={{ maintainAspectRatio: false, ...options }}
          />
        </div>
      </div>
    </div>
  )
}

export default TestPerformedChart
