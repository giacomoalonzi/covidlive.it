// @Flow
import * as React from "react"
import { Bar } from "react-chartjs-2"

interface Props {
  data: any //tbd,
  options?: any //tbd
}
const TestPerformedChart = ({ data, options }: Props) => {
  const responsiveOptions = [
    [
      "screen and (max-width: 640px)",
      {
        axisX: {
          labelInterpolationFnc: function(value: string, index: number): string | null {
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
          <Bar data={data} width={100} height={50} options={{ maintainAspectRatio: false, ...options }} />
        </div>
      </div>
    </div>
  )
}

export default TestPerformedChart
