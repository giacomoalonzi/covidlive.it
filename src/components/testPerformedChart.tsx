import * as React from "react"
import { Bar } from "react-chartjs-2"

interface Props {
  data: any //tbd,
  options?: any //tbd
}
const TestPerformedChart = ({ data, options }: Props) => {
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
