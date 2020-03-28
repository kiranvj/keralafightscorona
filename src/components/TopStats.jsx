import React from "react";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  YAxis,
  XAxis,
  Tooltip,
  Cell
} from "recharts";
import { useEffect } from "react";
import { useState } from "react";
import { Box } from "@material-ui/core";
import {
  SORT_KEY_ACTIVE,
  SORT_KEY_RECOVERIES,
  SORT_KEY_DEATHS,
  STATE_COLORS
} from "../core/constants";
import clsx from "clsx";

function CustomizedLabel(props) {
  const { x, y, width, value } = props;
  return (
    <>
      <text
        x={x + width + 17}
        y={y}
        /* dx={x + width} */
        dy={12}
        fill="#7D7D7D"
        fontSize={13}
        textAnchor="middle"
      >
        {value}
      </text>
    </>
  );
}

const colors = [
  "#5674b9",
  "#fdc689",
  "#754c24",
  "#92278f",
  "#998675",
  "#003471",
  "#630460",
  "#a3d39c",
  "#fff799"
];
function TopStats({ data }) {
  const [topData, setTopData] = useState([]);
  const [sortKey, setSortKey] = useState(SORT_KEY_ACTIVE);
  function filterChange(e, key) {
    e.preventDefault();
    setSortKey(key);
  }
  useEffect(() => {
    if (data && Array.isArray(data)) {
      setTopData(
        data
          .sort((a, b) => {
            if (a[sortKey] > b[sortKey]) {
              return -1;
            }
            if (a[sortKey] < b[sortKey]) {
              return 1;
            }
            return 0;
          })
          .slice(0, 10)
      );
    }
  }, [data, sortKey]);
  return (
    <>
      <Box className="top-10-states text-size-small" mb={1}>
        Sort by:{" "}
        <a
          href="/#"
          className={clsx(sortKey === SORT_KEY_ACTIVE ? "sort-selected" : "")}
          onClick={(e) => {
            filterChange(e, SORT_KEY_ACTIVE);
          }}
        >
          active
        </a>
        ,{" "}
        <a
          href="/#"
          className={clsx(
            sortKey === SORT_KEY_RECOVERIES ? "sort-selected" : ""
          )}
          onClick={(e) => {
            filterChange(e, SORT_KEY_RECOVERIES);
          }}
        >
          recoveries
        </a>
        ,{" "}
        <a
          href="/#"
          className={clsx(sortKey === SORT_KEY_DEATHS ? "sort-selected" : "")}
          onClick={(e) => {
            filterChange(e, SORT_KEY_DEATHS);
          }}
        >
          deaths
        </a>
      </Box>
      <div style={{ width: "100%", height: "250px" }}>
        <ResponsiveContainer width="100%">
          <BarChart layout="vertical" data={topData}>
            <XAxis
              type="number"
              domain={[0, (dataMax) => Math.ceil(dataMax + dataMax * 0.25)]}
            />
            <Tooltip />
            <YAxis interval={0} dataKey="state" width={100} type="category" />
            <Bar dataKey={sortKey} fill="#8884d8" label={<CustomizedLabel />}>
              {topData.map(({ state }, index) => {
                return (
                  <Cell
                    key={`cell-${index}`}
                    fill={STATE_COLORS[state] || colors[index % 20]}
                  />
                );
              })}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}

export default TopStats;
