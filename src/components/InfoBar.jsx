import React, { useContext } from "react";
import Panel from "./UI/Panel";
import { Grid, Box } from "@material-ui/core";
import { LanguageContext } from "../languageContext";
import {
  FiEye,
  FiUserCheck,
  FiUserMinus,
  FiUserPlus,
  FiUsers
} from "react-icons/fi";
import { GiEyedropper, GiGooeyEyedSun } from "react-icons/gi";
import { MdRadioButtonChecked } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import { FaUserTie } from "react-icons/fa";
import { IoMdBed } from "react-icons/io";
import Icon from "./UI/Icon";

function InfoBar({ data = {}, totals = {} }) {
  const appLanguage = useContext(LanguageContext);
  return (
    <Grid container spacing={1} alignItems="stretch">
      <Grid item xs={6} lg="auto">
        <Panel variant="small" title={appLanguage.totalCases}>
          <div className="text-count">{(data && data.totalCases) || "--"}</div>
        </Panel>
      </Grid>
      <Grid item xs={6} lg="auto">
        <Panel variant="small" title={appLanguage.postiveNew}>
          <div className="text-count">
            <Icon icon={FiUserPlus} />{" "}
            <span className="text-color-active">
              {(data && data.postiveNew) || "--"}
            </span>
          </div>
        </Panel>
      </Grid>
      <Grid item xs={6} lg="auto">
        <Panel variant="small" title={appLanguage.totalPositive}>
          <div className="text-count">
            <Icon icon={GiGooeyEyedSun} />{" "}
            <span className="text-color-active"></span>
            {(data && data.totalPositive) || "--"}
          </div>
        </Panel>
      </Grid>
      <Grid item xs={6} lg="auto">
        <Panel variant="small" title={appLanguage.recoveries}>
          <div className="text-count">
            <Icon icon={FiUserCheck} />{" "}
            <span className="text-color-recoveries">
              {(data && data.recoveries) || "--"}
            </span>
          </div>
        </Panel>
      </Grid>
      <Grid item xs={6} lg="auto">
        <Panel variant="small" title={appLanguage.deaths}>
          <div className="text-count">
            <Icon icon={MdRadioButtonChecked} />{" "}
            <span className="text-color-deaths">
              {" "}
              {(data && data.deaths) || "--"}
            </span>
          </div>
        </Panel>
      </Grid>

      <Grid item xs={6} lg="auto">
        <Panel variant="small" title={appLanguage.negativeCases}>
          <div className="text-count">
            <Icon icon={FiUserMinus} /> {(data && data.negativeCases) || "--"}
          </div>
        </Panel>
      </Grid>
      <Grid item xs={6} lg="auto">
        <Panel variant="small" title={appLanguage.underSurveillance}>
          <div className="text-count">
            <Icon icon={FiEye} /> {(data && data.underSurveillance) || "--"}
          </div>
        </Panel>
      </Grid>
      <Grid item xs={6} lg="auto">
        <Panel variant="small" title={appLanguage.inHomeIsolation}>
          <div className="text-count">
            <Icon icon={AiOutlineHome} />{" "}
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
            <Icon icon={IoMdBed} />{" "}
            {(data && data.inDesignatedIsolationFacilities) || "--"}
          </div>
        </Panel>
      </Grid>
      <Grid item xs={6} lg="auto">
        <Panel variant="small" title={appLanguage.totalSamplesSendForTesting}>
          <div className="text-count">
            <Icon icon={GiEyedropper} />{" "}
            {(data && data.totalSamplesSendForTesting) || "--"}
          </div>
        </Panel>
      </Grid>
      <Grid item xs={6} lg="auto">
        <Panel variant="small" title={appLanguage.psySupportPerson}>
          <div className="text-count">
            <Icon icon={FiUsers} /> {(data && data.psySupportPerson) || "--"}
          </div>
        </Panel>
      </Grid>
      <Grid item xs={6} lg="auto">
        <Panel variant="small" title={appLanguage.teleCounselling}>
          <div className="text-count">
            <Icon icon={FaUserTie} /> {(data && data.teleCounselling) || "--"}
          </div>
        </Panel>
      </Grid>
    </Grid>
  );
}

export default InfoBar;
