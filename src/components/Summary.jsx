import React from "react";
import { Box, Grid } from "@material-ui/core";
import { FaBed } from "react-icons/fa";
import { FiSmile } from "react-icons/fi";
import { FaRegStopCircle } from "react-icons/fa";

function Summary({ totals, data, updatedDate }) {
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <ul className="summary-list">
            <li>
              Total cases reported : <b>{totals.total}</b>
            </li>
            <li>
              Total active cases :{" "}
              <b className="text-color-active">{totals.active}</b>
              <Box mx={1} textAlign="left" className="text-size-medium">
                <FaBed size="1.5em" />{" "}
                {totals && totals.percentage && totals.percentage.recoveries} of
                total cases
              </Box>
            </li>
            <li>
              Total recoveries :{" "}
              <b className="text-color-recoveries">{totals.recoveries}</b>
              <Box mx={1} textAlign="left" className="text-size-medium">
                <FiSmile size="1.5em" />{" "}
                {totals && totals.percentage && totals.percentage.recoveries} of
                total cases
              </Box>
            </li>
            <li>
              Total deaths :{" "}
              <b className="text-color-deaths">{totals.deaths}</b>
              <Box mx={1} textAlign="left" className="text-size-medium">
                <FaRegStopCircle size="1.5em" />{" "}
                {totals && totals.percentage && totals.percentage.deaths} of
                total cases
              </Box>
            </li>
          </ul>
        </Grid>
        {/*         <Grid item xs={12} lg={6}>
          <TopStats data={data} />
        </Grid> */}
      </Grid>
      <hr />
      <Box textAlign="right">
        <small>
          <p>
            Last updated: <i>{updatedDate}</i>
          </p>
        </small>
      </Box>
    </div>
  );
}
export default Summary;
