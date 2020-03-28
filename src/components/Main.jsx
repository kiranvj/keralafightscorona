import React, { useEffect, useState } from "react";
import csv from "csvtojson";
import Grid from "@material-ui/core/Grid";
import "../styles/date-chip.scss";

import { PAGE_TYPE_TABLE } from "../core/constants";
import InfoLineChart from "./InfoLineChart";

import virus from "../static/images/bacteria.svg";
import ActiveVsDeath from "./ActiveVsDeath";
import { Box, Chip } from "@material-ui/core";
import { getActiveTotal } from "../core/helpers";
import Panel from "./UI/Panel";
import Summary from "./Summary";
import Reference from "./Reference";
import InfoBar from "./InfoBar";
import TopMenu from "./TopMenu";
import TopStats from "./TopStats";
import { STATS, LAST_UPDATED } from "../data/stats";
import clsx from "clsx";
import TweetsByHealthMinister from "./TweetsByHealthMinister";
import imgDisha from "../static/images/disha-call-center.jpg";
import { Link } from "react-router-dom";

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

            <InfoBar data={data} totals={totals} />
          </Grid>
          <Grid item xs="auto">
            <Box textAlign="center">
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

        {pageType === PAGE_TYPE_TABLE ? (
          <>
            {/* <Grid container spacing={2} alignItems="stretch">
              <Grid item xs={12} md={5}>
                <Panel title="Total active, deaths & recoveries">
                  <ActiveVsDeath data={data} totals={totals} />
                </Panel>
              </Grid>
              <Grid item xs={12} md={3}>
                <Panel title="INDIA SUMMARY">
                  <Summary
                    data={data}
                    totals={totals}
                    updatedDate={updatedDate}
                  />
                </Panel>
              </Grid>
              <Grid item xs={12} md={4}>
                <Panel title="TOP 10 STATES">
                  <TopStats data={data} />
                </Panel>
              </Grid>
            </Grid> */}
            {/* <Box mt={2}>
              <Panel
                title={
                  <>
                    State vice <span className="text-color-active">active</span>
                    , <span className="text-grey">deaths</span> &amp;{" "}
                    <span className="text-green">recoveries</span>
                  </>
                }
              >
                <Grid container spacing={2}>
                  {data &&
                    data.map((stateData, index) => {
                      return (
                        <Grid key={index} item xs={6} sm={3} lg={2}>
                          <ActiveVsDeath
                            totals={totals}
                            data={data}
                            state={stateData.state}
                          />
                        </Grid>
                      );
                    })}
                </Grid>
              </Panel>
            </Box> */}
            {/* <Panel title="State vs Reported cases">
              <InfoLineChart data={data} />
            </Panel> */}

            {/* <Panel title="Tabular view">
              <div className="table-responsive">
                <table className="table table-striped table-sm">
                  <thead>
                    <tr>
                      <th scope="col">State or Union territory</th>
                      <th scope="col" className="text-center">
                        Active cases
                      </th>
                      <th scope="col" className="text-center">
                        Recoveries
                      </th>
                      <th scope="col" className="text-center">
                        Deaths
                      </th>
                      <th scope="col" className="text-center">
                        Total
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {Array.isArray(data) &&
                      data.map(
                        (
                          {
                            state = "",
                            active = 0,
                            deaths = 0,
                            recoveries = 0,
                            total = 0
                          },
                          index
                        ) => {
                          return (
                            <tr key={index}>
                              <td>{state}</td>
                              <td className="text-center">{active || 0}</td>
                              <td className="text-center">{recoveries || 0}</td>
                              <td className="text-center">{deaths || 0}</td>
                              <td className="text-center">{total || 0}</td>
                            </tr>
                          );
                        }
                      )}
                    <tr className="font-weight-bold">
                      <td>Total</td>
                      <td className="text-center text-color-active">
                        {totals.active || 0}
                      </td>
                      <td className="text-center text-green">
                        {totals.recoveries || 0}
                      </td>
                      <td className="text-center text-grey">
                        {totals.deaths || 0}
                      </td>
                      <td className="text-center">{totals.total || 0}</td>
                    </tr>
                  </tbody>
                </table>
                <div className="font-weight-bold h5">
                  <span role="img" aria-label="masked person">
                    😷
                  </span>{" "}
                  Total reported cases: {totals.total || 0}
                </div>
                <div className="font-weight-bold h5">
                  <span role="img" aria-label="masked person">
                    <img src={virus} alt="" height="24" />
                  </span>{" "}
                  Total active cases : {totals.active || 0}
                </div>
                <div>
                  <small className="text-muted font-italic">
                    As of {updatedDate || "--"}
                  </small>
                </div>
              </div>
            </Panel>
           */}
          </>
        ) : (
          "Show Maps"
        )}
        <hr />
        <div id="reference-container">
          <Reference updatedDate={updatedDate} />
        </div>
      </div>
    </Box>
  );
}

export default Main;
