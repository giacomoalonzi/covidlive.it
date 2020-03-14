import * as React from "react"
import * as PropTypes from "prop-types"
import { Line } from "react-chartjs-2"

type Props = {
  data: any // tbd
  options?: any // tbd
}

const LineChart = ({ data, options }: Props) => {
  return (
    <div className="chart">
      <div className="chart__wrap">
        <div className="chart__item">
          <Line
            data={data}
            width={100}
            height={50}
            options={{
              scales: {
                xAxes: [
                  {
                    scaleLabel: {
                      display: true,
                      labelString: "",
                    },
                    gridLines: {
                      color: "rgba(0, 0, 0, 0.05)",
                    },
                  },
                ],
                yAxes: [
                  {
                    gridLines: {
                      display: false,
                    },
                  },
                ],
              },
              tooltips: {
                backgroundColor: "#000",
                titleFontFamily: "Lato",
                bodyFontFamily: "Lato",
                bodySpacing: 32,
                cornerRadius: 8,
                caretSize: 0,
                displayColors: false,
              },
              responsive: true,
              maintainAspectRatio: false,
              ...options,
            }}
          />
        </div>
      </div>
    </div>
  )
}

LineChart.defaultProps = {
  data: [], // tbd
  options: [], // tbd
}

LineChart.propTypes = {
  data: PropTypes.any, // tbd
  options: PropTypes.any, // tbd
}

export default LineChart
