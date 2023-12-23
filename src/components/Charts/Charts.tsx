import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from "recharts";

export default function Charts() {
  const data = [
    { name: "فروردین", uv: 4000, pv: 2400, amt: 2400 },
    { name: "اردیبهشت", uv: 3000, pv: 1398, amt: 2210 },
    { name: "خرداد", uv: 2000, pv: 9800, amt: 2290 },
    // و داده‌های دیگر
  ];
  return (
    <div className="charts">
      <div className="h-[400px] w-[500px] border-solid border-2 border-pink">
        <LineChart width={500} height={300} data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </div>
    </div>
  );
}
