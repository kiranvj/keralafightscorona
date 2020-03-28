import React, { useContext } from "react";
import Panel from "./UI/Panel";
import { Grid, Box, Hidden } from "@material-ui/core";
import { LanguageContext } from "../languageContext";

function InfoBar({ data = {}, totals = {} }) {
  const appLanguage = useContext(LanguageContext);
  return (
    <Grid container spacing={1} alignItems="stretch">
      <Grid item xs={6} lg="auto">
        <Panel variant="small" title={appLanguage.postiveNew}>
          <div className="text-count text-color-active">
            {(data && data.postiveNew) || "--"}
          </div>
        </Panel>
      </Grid>
      <Grid item xs={6} lg="auto">
        <Panel variant="small" title={appLanguage.totalPositive}>
          <div className="text-count text-color-active">
            {(data && data.totalPositive) || "--"}
          </div>
        </Panel>
      </Grid>
      <Grid item xs={6} lg="auto">
        <Panel variant="small" title={appLanguage.recoveries}>
          <div className="text-count text-color-recoveries">
            {(data && data.recoveries) || "--"}
          </div>
        </Panel>
      </Grid>
      <Grid item xs={6} lg="auto">
        <Panel variant="small" title={appLanguage.deaths}>
          <div className="text-count text-color-deaths">
            {(data && data.deaths) || "--"}
          </div>
        </Panel>
      </Grid>
      <Grid item xs={6} lg="auto">
        <Panel variant="small" title={appLanguage.underSurveillance}>
          <div className="text-count">
            {(data && data.underSurveillance) || "--"}
          </div>
        </Panel>
      </Grid>
      <Grid item xs={6} lg="auto">
        <Panel variant="small" title={appLanguage.inHomeIsolation}>
          <div className="text-count">
            {(data && data.inHomeIsolation) || "--"}
          </div>
        </Panel>
      </Grid>
      <Grid item xs={6} lg="auto">
        <Panel
          variant="small"
          title={appLanguage.inDesignatedIsolationFacilities}
        >
          <div className="text-count">
            {(data && data.inDesignatedIsolationFacilities) || "--"}
          </div>
        </Panel>
      </Grid>
      <Grid item xs={6} lg="auto">
        <Panel variant="small" title={appLanguage.totalSamplesSendForTesting}>
          <div className="text-count">
            {(data && data.totalSamplesSendForTesting) || "--"}
          </div>
        </Panel>
      </Grid>
      <Grid item xs={6} lg="auto">
        <Panel variant="small" title={appLanguage.negativeCases}>
          <div className="text-count">
            {(data && data.negativeCases) || "--"}
          </div>
        </Panel>
      </Grid>
      <Grid item xs={6} lg="auto">
        <Panel variant="small" title={appLanguage.totalCases}>
          <div className="text-count">{(data && data.totalCases) || "--"}</div>
        </Panel>
      </Grid>
    </Grid>
  );
}

export default InfoBar;
