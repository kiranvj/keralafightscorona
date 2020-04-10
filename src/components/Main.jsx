import React, { useEffect, useState, useContext } from "react";
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
import { LanguageContext } from "../languageContext";
import LangSelector from "./LangSelector";
import Trends1 from "./charts/Trends1";

function Main({ type, ...props }) {
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
          <Grid item xs={12} md={8} lg={9}>
            <Grid container alignItems="center">
              <Grid item xs>
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
              </Grid>
              <Grid item xs="auto">
                <LangSelector {...props} />
              </Grid>
            </Grid>
            <Box mb={2}>
              <InfoBar
                data={data}
                fullData={fullData}
                dataPointer={dataPointer}
                totals={totals}
              />
            </Box>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} xl={4}>
                <Trends1
                  fullData={fullData}
                  dataKey="inDesignatedIsolationFacilities"
                  dataColor="#56D47C"
                  dataKeyName="In Isolation Facility"
                />
              </Grid>
              <Grid item xs={12} md={6} xl={4}>
                <Trends1
                  fullData={fullData}
                  dataKey="totalPositive"
                  dataColor="#ff0000"
                  dataKeyName="Positive"
                />
              </Grid>
              <Grid item xs={12} md={6} xl={4}>
                <Trends1
                  fullData={fullData}
                  dataKey="inHomeIsolation"
                  dataColor="#DA6124"
                  dataKeyName="Home Isolation"
                />
              </Grid>
            </Grid>
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
