import React from 'react';
import {CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis} from "recharts";


const data = [
    {
        name: '0 responses',
        Weight: 7,
    },
    {
        name: '5 responses',
        Weight: 2,
    }, {
        name: '6',
        Weight: 1,
    },
    {name: '8', Weight: 6},
    {name: '8', Weight: 6},
    {name: '8', Weight: 6}
]

function StatsChart() {
    const vh = window.innerHeight;
    const vw = window.innerWidth;
    return (
        <div>
            <LineChart width={vw * 0.5} height={vh*0.6} data={data}>
                <Line type="monotone" dataKey="Weight" stroke="#198754" activeDot={{ r: 8 }}/>
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="name" name="Number of points"/>
                <YAxis/>
                <Tooltip />
            </LineChart>
            <p className="text-success lead">Points</p>
        </div>
    );
}

export default StatsChart;