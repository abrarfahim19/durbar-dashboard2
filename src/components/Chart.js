import React from "react";
import { BiDownArrow } from "react-icons/bi";
import {
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  AreaChart,
  Area,
  ReferenceDot,
  ResponsiveContainer,
} from "recharts";

const Chart = () => {
  const data = [
    {
      name: "4:00",
      order: 4000,
      views: 2400,
      amt: 2400,
    },
    {
      name: "5:00",
      order: 3000,
      views: 1398,
      amt: 2210,
    },
    {
      name: "6:00",
      order: 2000,
      views: 9800,
      amt: 2290,
    },
    {
      name: "7:00",
      order: 2780,
      views: 3908,
      amt: 2000,
    },
    {
      name: "8:00",
      order: 1890,
      views: 4800,
      amt: 2181,
    },
    {
      name: "9:00",
      order: 2390,
      views: 3800,
      amt: 2500,
    },
    {
      name: "10:00",
      order: 3490,
      views: 4300,
      amt: 2100,
    },
  ];
  return (
    <>
      <h2 className="text-white text-left text-base p-5">Customer Visits</h2>
      <div
        style={{
          backgroundColor: "#32363f",
          width: "100%",
          height: 300,
          fontSize: "12px",
          fontWeight: "bolder",
        }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="colororder" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorviews" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
              </linearGradient>
            </defs>

            {/* <CartesianGrid /> */}
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend verticalAlign="top" align="center" height={36} />
            <Area
              type="monotone"
              dataKey="order"
              stroke="#B073FF"
              fillOpacity={1}
              fill="url(#colororder)"
            />
            <Area
              type="monotone"
              dataKey="views"
              stroke="orange"
              fillOpacity={1}
              fill="url(#colorviews)"
            />
            {/* 
          <ReferenceLine
            strokeWidth={2}
            x="C"
            stroke="white"
            label={{ value: "OA", position: "right", fill: "white" }}
          /> */}
            <ReferenceDot x="6:00" y={9800} r={5} fill="orange" stroke="none" />
            <ReferenceDot
              x="8:00"
              y={1890}
              r={5}
              fill="#B073FF"
              stroke="none"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default Chart;
