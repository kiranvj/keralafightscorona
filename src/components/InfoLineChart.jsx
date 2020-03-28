import React from "react";
import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar
} from "recharts";

import virus from "../static/images/bacteria.svg";
import {
  COLOR_ACTIVE,
  COLOR_DEATHS,
  COLOR_RECOVERIES
} from "../core/constants/colors";

function CustomizedLabel(props) {
  const { x, y, value } = props;

  return (
    <>
      <image x={x - 19} y={y - 23} href={virus} height="15" width="15" />

      <text
        x={x + 5}
        y={y}
        dy={-10}
        fill={COLOR_ACTIVE}
        fontSize={16}
        textAnchor="middle"
      >
        {value}
      </text>
    </>
  );
}
function CustomizedAxisTick(props) {
  const { x, y, payload } = props;

  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={-13}
        dy={16}
        textAnchor="end"
        fill="#666"
        transform="rotate(-75)"
        fontSize={12}
      >
        {payload.value}
      </text>
    </g>
  );
}
function InfoLineChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        barSize={10}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 10
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="state"
          height={110}
          interval={0}
          tick={<CustomizedAxisTick />}
        />
        <YAxis
          hide={true}
          type="number"
          domain={[0, "dataMax + 5"]}
          label="Count"
        />
        <Tooltip />
        <Legend verticalAlign="top" />
        <Bar type="monotone" dataKey="total" fill="#4682B4" />
        <Bar
          type="monotone"
          dataKey="active"
          fill={COLOR_ACTIVE}
          label={<CustomizedLabel />}
        />
        <Bar type="monotone" dataKey="recoveries" fill={COLOR_RECOVERIES} />
        <Bar type="monotone" dataKey="deaths" fill={COLOR_DEATHS} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default InfoLineChart;
