import React, { useEffect } from "react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
  Label
} from "recharts";
import { useState } from "react";
import { Box } from "@material-ui/core";
import { getFindStatefromData } from "../core/helpers";
import {
  COLOR_ACTIVE,
  COLOR_GREEN,
  COLOR_GREY
} from "../core/constants/colors";

function ActiveVsDeath({ data, state, totals }) {
  const [pieData, setPieData] = useState([]);
  const [isMinimal, setIsMinimal] = useState(!!state);
  let chartHeight = isMinimal ? 95 : 300;

  const customMainLabel = ({ x, y, value }) => {
    return (
      <text fontSize=".825em" fill="#FC0">
        {value}d
      </text>
    );
  };
  const renderCustomizedLabel = (
    { cx, cy, midAngle, innerRadius, outerRadius, value, name, fill },
    isMinimal
  ) => {
    outerRadius = isMinimal ? outerRadius - 20 : outerRadius;
    const RADIAN = Math.PI / 180;
    // eslint-disable-next-line
    const radius = 25 + innerRadius + (outerRadius - innerRadius);
    // eslint-disable-next-line
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    // eslint-disable-next-line
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <>
        <text
          fontSize=".825em"
          x={x}
          y={y}
          fill={fill}
          textAnchor={x > cx ? "start" : "end"}
          dominantBaseline="central"
        >
          {isMinimal || window.outerWidth < 500 ? value : name + " " + value}
        </text>
      </>
    );
  };

  /*   const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index
  }) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  }; */

  useEffect(() => {
    let totalActiveCases = 0;
    let totalDeaths = 0;
    let totalRecoveries = 0;
    let stateData = {};
    if (data && state) {
      stateData = getFindStatefromData(data, state);
      if (stateData) {
        totalActiveCases += parseInt(stateData.active);
        totalDeaths += parseInt(stateData.deaths);
        totalRecoveries += parseInt(stateData.recoveries);
      }
    } else if (data && Array.isArray(data)) {
      data.forEach(({ active, deaths, recoveries }) => {
        totalActiveCases += parseInt(active);
        totalDeaths += parseInt(deaths);
        totalRecoveries += parseInt(recoveries);
      });
    }

    const modifiedData = [
      { name: "Active", value: totalActiveCases },
      { name: "Recoveries", value: totalRecoveries },
      { name: "Deaths", value: totalDeaths }
    ];
    setPieData(modifiedData);
  }, [data, state]);

  return (
    <div>
      <div className="text-size-medium">
        {state ? <Box textAlign="center">{state}</Box> : null}
      </div>
      <div style={{ width: "100%", height: chartHeight }}>
        <ResponsiveContainer>
          <PieChart>
            <Tooltip />
            {/* <Legend layout="vertical" verticalAlign="top" align="left" /> */}
            {isMinimal ? null : <Legend iconType="circle" />}
            <Pie
              dataKey="value"
              data={pieData}
              fill="#FC0"
              innerRadius="40%"
              outerRadius={!isMinimal && window.outerWidth < 350 ? 80 : "70%"}
              labelLine={!isMinimal}
              label={(labelProps) => {
                return renderCustomizedLabel(labelProps, isMinimal);
              }}
            >
              <Label
                formatter={(value) => {
                  return !isMinimal ? value : "";
                }}
                value={`${totals.total}`}
                offset={0}
                position="center"
              />
              <Cell fill={COLOR_ACTIVE} />
              <Cell fill={COLOR_GREEN} />
              <Cell fill={COLOR_GREY} />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default ActiveVsDeath;

/*import React, { PureComponent } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

 export default function Pies() {
  //static jsfiddleUrl = "https://jsfiddle.net/alidingling/pb1jwdt1/";
  const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
    { name: "Group E", value: 278 },
    { name: "Group F", value: 189 }
  ];
  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <PieChart width={400} height={400}>
          <Pie dataKey="value" data={data} fill="#8884d8" label />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
} */
