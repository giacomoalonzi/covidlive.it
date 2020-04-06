import * as React from "react"
import { Bar } from "react-chartjs-2"

type Props = {
  data: any //tbd,
  options?: any //tbd
}
const BarChart = ({ data, options }: Props) => {
  return (
    <div className="chart">
      <div className="chart__wrap">
        <div className="chart__item">
          <Bar
            data={data}
            width={100}
            height={50}
            options={{
              scales: {
                xAxes: [
                  {
                    gridLines: {
                      color: "rgba(0, 0, 0, 0)",
                    },
                  },
                ],
                yAxes: [
                  {
                    gridLines: {
                      color: "rgba(0, 0, 0, 0)",
                    },
                    ticks: {
                      min: 0,
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

export default BarChart
