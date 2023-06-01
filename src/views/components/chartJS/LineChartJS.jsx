import { Line } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto';

export default function LineChartJS({charData}) {
    return (
        <Line data={charData}/>
    )
}
