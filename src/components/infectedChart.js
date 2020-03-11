import React from "react"
import {Line} from 'react-chartjs-2';
import { max } from "lodash"

const InfectedChart = ({ data, options }) => {
  return (
    <div className="chart">
      <div className="chart__wrap">
        <div className="chart__item">
          <Line 
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

export default InfectedChart
