// @Flow
import * as React from 'react'
import * as PropTypes from "prop-types"
import { Line } from 'react-chartjs-2';

interface Props  {
  data: any, // tbd
  options?: any, // tbd
}

const InfectedChart = ({ data, options }: Props) => {

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

InfectedChart.defaultProps = {
  data: [], // tbd
  options: [], // tbd
}

InfectedChart.propTypes = {
  data: PropTypes.any, // tbd
  options: PropTypes.any, // tbd
}

export default InfectedChart
