"use client";

import React from "react";
import { RechartsDevtools } from '@recharts/devtools';
import { FiUser } from "react-icons/fi";

import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
  {
    name: 'Page A',
    mouse: 4000,
    keyboard: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    mouse: 3000,
    keyboard: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    mouse: 2000,
    keyboard: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    mouse: 2780,
    keyboard: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    mouse: 1890,
    keyboard: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    mouse: 2390,
    keyboard: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    mouse: 3490,
    keyboard: 4300,
    amt: 2100,
  },
];

export const ActivityGraph = () => {
    return (
        <div className="col-span-8 overflow-hidden rounded border border-stone-300">
            <div className="p-4">
                <h3 className="flex items-center gap-1.5 font-medium">
                    <FiUser /> Activity
                </h3>
            </div>

            <LineChart
                style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
                responsive
                data={data}>
                    
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
                <YAxis width="auto" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="keyboard" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="mouse" stroke="#82ca9d" />
                <RechartsDevtools />
            </LineChart>
        </div>
    );
};