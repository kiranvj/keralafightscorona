import React, { useContext } from "react";
import Panel from "../UI/Panel";
import { Grid, Box } from "@material-ui/core";
import { LanguageContext } from "../../languageContext";
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
import Icon from "../UI/Icon";
import InfoBarItem from "./InfoBarItem";

function InfoBar(props) {
  let data = props.data;
  const appLanguage = useContext(LanguageContext);
  return (
    <Grid container spacing={1} alignItems="stretch">
      <Grid item xs={6} lg="auto">
        <Panel variant="small" title={appLanguage.totalCases}>
          <InfoBarItem {...props} dataKey="totalCases" upIsBad />
        </Panel>
      </Grid>
      <Grid item xs={6} lg="auto">
        <Panel variant="small" title={appLanguage.postiveNew}>
          <InfoBarItem
            {...props}
            dataKey="postiveNew"
            upIsBad
            countClass="text-color-active"
          />
        </Panel>
      </Grid>
      <Grid item xs={6} lg="auto">
        <Panel variant="small" title={appLanguage.totalPositive}>
          <InfoBarItem
            {...props}
            dataKey="totalPositive"
            upIsBad
            countClass="text-color-active"
            icon={GiGooeyEyedSun}
          />
        </Panel>
      </Grid>
      <Grid item xs={6} lg="auto">
        <Panel variant="small" title={appLanguage.totalRecoveries}>
          <InfoBarItem
            {...props}
            dataKey="totalRecoveries"
            countClass="text-color-recoveries"
            icon={FiUserCheck}
          />
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
        <Panel variant="small" title={appLanguage.totalDeaths}>
          <div className="text-count">
            <Icon icon={MdRadioButtonChecked} />{" "}
            <span className="text-color-deaths">
              {" "}
              {(data && data.totalDeaths) || "--"}
            </span>
          </div>
        </Panel>
      </Grid>
      <Grid item xs={6} lg="auto">
        <Panel variant="small" title={appLanguage.totalSamplesSendForTesting}>
          <InfoBarItem
            {...props}
            dataKey="totalSamplesSendForTesting"
            icon={GiEyedropper}
          />
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
          <InfoBarItem {...props} dataKey="underSurveillance" icon={FiEye} />
        </Panel>
      </Grid>
      <Grid item xs={6} lg="auto">
        <Panel variant="small" title={appLanguage.inHomeIsolation}>
          <InfoBarItem
            {...props}
            dataKey="inHomeIsolation"
            icon={AiOutlineHome}
          />
        </Panel>
      </Grid>
      <Grid item xs={6} lg="auto">
        <Panel
          variant="small"
          title={appLanguage.inDesignatedIsolationFacilities}
        >
          <InfoBarItem
            {...props}
            dataKey="inDesignatedIsolationFacilities"
            icon={IoMdBed}
          />
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
          <InfoBarItem {...props} dataKey="teleCounselling" icon={FaUserTie} />
        </Panel>
      </Grid>
    </Grid>
  );
}

export default InfoBar;
