// @Flow
import React from "react"
import PropTypes from "prop-types"
import {Line} from 'react-chartjs-2';
import { max } from "lodash"
import type { Element } from "react"

type Props = {
  data: any, // tbd
  options?: any, // tbd
}

const InfectedChart = ({ data, options }: Props): Element<'div'> => {

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
