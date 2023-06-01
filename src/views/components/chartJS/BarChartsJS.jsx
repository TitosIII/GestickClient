import {Bar} from 'react-chartjs-2'
import { Chart as ChartJS} from 'chart.js/auto';


export default function BarChartsJS({charData}) {

    return (
        <Bar data={charData}/>
    )
}
