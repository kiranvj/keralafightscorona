import React, { useEffect, useState } from "react";
import csv from "csvtojson";
import Grid from "@material-ui/core/Grid";

import { PAGE_TYPE_TABLE } from "../core/constants";
import InfoLineChart from "./InfoLineChart";

import virus from "../static/images/bacteria.svg";
import ActiveVsDeath from "./ActiveVsDeath";
import { Box } from "@material-ui/core";
import { getActiveTotal } from "../core/helpers";
import Panel from "./UI/Panel";
import Summary from "./Summary";
import Reference from "./Reference";
import InfoBar from "./InfoBar";
import TopMenu from "./TopMenu";
import TopStats from "./TopStats";
import { STATS, LAST_UPDATED } from "../data/stats";

function Main({ type }) {
  const [data, setData] = useState(null);
  const updatedDate = LAST_UPDATED;
  const [pageType, setPageType] = useState(PAGE_TYPE_TABLE);
  const [totals, setTotals] = useState({});

  useEffect(() => {
    csv()
      .fromString(STATS)
      .then((csvRow) => {
        setData(csvRow[0]);
      });

    /* Axios.get(`${SITE_ROOT}data.csv`, config).then((response) => {
      if (response.data) {
        csv()
          .fromString(response.data)
          .then((csvRow) => {
            let newData = [];
            csvRow.forEach((item) => {
              newData.push({
                ...item,
                active: parseInt(item.active),
                total: parseInt(item.total),
                deaths: parseInt(item.deaths),
                recoveries: parseInt(item.recoveries)
              });
            });
            setTotals(getActiveTotal(newData));
            setData(newData);
          });
      } else {
        setData([]);
      }
    }); */
    // get updated time
    /*     Axios.get(`${SITE_ROOT}config.json`, config).then((response) => {
      if (response.data && response.data.updatedDate) {
        setUpdatedDate(response.data.updatedDate);
      }
    }); */
  }, []);

  useEffect(() => {
    setPageType(type);
  }, [type]);
  return (
    <Box mt={5}>
      <div className="container pt-5 mt-4 mb-3">
        <TopMenu updatedDate={updatedDate} />
        <InfoBar data={data} totals={totals} />
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
