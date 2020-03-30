import React, { useEffect, useState } from "react";
import csv from "csvtojson";
import Grid from "@material-ui/core/Grid";
import "../styles/date-chip.scss";

import { PAGE_TYPE_TABLE } from "../core/constants";

import ActiveVsDeath from "./ActiveVsDeath";
import { Box, Chip } from "@material-ui/core";
import Reference from "./Reference";

import { STATS, LAST_UPDATED } from "../data/stats";
import clsx from "clsx";
import TweetsByHealthMinister from "./TweetsByHealthMinister";
import imgDisha from "../static/images/disha-call-center.jpg";
import { Link } from "react-router-dom";
import RightPane from "./RightPane";
import InfoBar from "./InfoBar";

function Main({ type }) {
  const [data, setData] = useState(null);
  const [fullData, setFullData] = useState([]);
  const [dataPointer, setDataPointer] = useState(0);
  const updatedDate = LAST_UPDATED;
  const [pageType, setPageType] = useState(PAGE_TYPE_TABLE);
  const [totals, setTotals] = useState({});

  useEffect(() => {
    csv()
      .fromString(STATS)
      .then((csvRow) => {
        setFullData(csvRow);
        if (csvRow.length) {
          setDataPointer(csvRow.length - 1);
          //setData(csvRow[csvRow.length - 1]);
        } else {
          setData({});
        }
      });
  }, []);

  /* Set data when data pointer is changed */
  useEffect(() => {
    setData(fullData[dataPointer]);
  }, [dataPointer, fullData]);

  useEffect(() => {
    setPageType(type);
  }, [type]);
  return (
    <Box>
      <div className="container">
        {/* <TopMenu updatedDate={updatedDate} /> */}
        <Grid container>
          <Grid item xs={12} md>
            <Box textAlign="center">
              <div
                className={clsx(
                  "date-chip",
                  dataPointer <= 0 ? "date-chip-disabled" : null
                )}
                onClick={() => {
                  setDataPointer(dataPointer - 1);
                }}
              >
                Prev
              </div>
              <div
                onClick={() => {
                  setDataPointer(fullData.length - 1);
                }}
                className="date-chip date-chip-selected"
              >
                {(data && data.date) || "--"}
              </div>
              <div
                onClick={() => {
                  setDataPointer(dataPointer + 1);
                }}
                className={clsx(
                  "date-chip",
                  dataPointer === fullData.length - 1
                    ? "date-chip-disabled"
                    : null
                )}
              >
                Next
              </div>
            </Box>

            <InfoBar
              data={data}
              fullData={fullData}
              dataPointer={dataPointer}
              totals={totals}
            />
          </Grid>
          <Grid item xs={12} md="auto">
            <RightPane />
            <Box my={2} textAlign="center">
              <Link to="/disha">
                <img
                  width="200"
                  src={imgDisha}
                  alt="Disha 24x7 call center numbers"
                />
              </Link>
            </Box>
            <TweetsByHealthMinister />
          </Grid>
        </Grid>
        <hr />
        <div id="reference-container">
          <Reference updatedDate={updatedDate} />
        </div>
      </div>
    </Box>
  );
}

export default Main;
