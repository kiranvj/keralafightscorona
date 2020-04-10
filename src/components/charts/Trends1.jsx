import React, { useState } from "react";
import { useEffect } from "react";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  ResponsiveContainer,
} from "recharts";
import Panel from "../UI/Panel";
import { Box } from "@material-ui/core";
/**
 * A line chart with Under surveillance, positive cases
 */
function Trends1({ fullData, dataKey, dataKeyName, dataColor }) {
  let [chartData, setChartData] = useState(fullData);

  useEffect(() => {
    let newData =
      (fullData &&
        Array.isArray(fullData) &&
        fullData.map((item) => {
          return {
            ...item,
            [dataKey]: parseInt(item[dataKey]),
          };
        })) ||
      [];
    console.log(newData);
    setChartData(newData);
  }, [fullData, dataKey]);

  return (
    <Box>
      <Panel
        variant="small"
        title={
          <>
            {dataKeyName}
            {fullData && fullData[fullData.length - 1] ? (
              <span>
                {" "}
                -{" "}
                <span style={{ color: dataColor }}>
                  {fullData[fullData.length - 1][dataKey]}
                </span>
              </span>
            ) : (
              ""
            )}
          </>
        }
      >
        <div style={{ width: "100%" }}>
          <ResponsiveContainer height={150}>
            <LineChart
              width={500}
              height={300}
              data={chartData}
              margin={{
                top: 20,
                right: 5,
                left: 5,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey={dataKey}
                name={dataKeyName}
                stroke={dataColor || "#000000"}
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Panel>
    </Box>
  );
}
export default Trends1;
