import React, { useContext, useState } from "react";
import Panel from "../UI/Panel";
import {
  Grid,
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { LanguageContext } from "../../languageContext";
import {
  FiEye,
  FiUserCheck,
  FiUserMinus,
  FiUserPlus,
  FiUsers,
} from "react-icons/fi";
import { GiEyedropper, GiGooeyEyedSun } from "react-icons/gi";
import { MdRadioButtonChecked } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import { FaUserTie } from "react-icons/fa";
import { IoMdBed } from "react-icons/io";
import InfoBarItem from "./InfoBarItem";

function InfoBar(props) {
  //let data = props.data;
  const appLanguage = useContext(LanguageContext);
  const [showMoreTotal, setShowMoreTotal] = useState(false);
  return (
    <>
      <Box mb={2} fontWeight="bold">
        {appLanguage.summary}
      </Box>
      <Grid container spacing={1} alignItems="stretch">
        <Grid item xs={12} md={6}>
          <InfoBarItem
            title={appLanguage.totalCases}
            {...props}
            dataKey="totalCases"
            upIsBad
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <InfoBarItem
            {...props}
            title={appLanguage.totalPositive}
            dataKey="totalPositive"
            highlight
            upIsBad
            countClass="text-color-active"
            icon={GiGooeyEyedSun}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <InfoBarItem
            {...props}
            title={appLanguage.totalRecoveries}
            dataKey="totalRecoveries"
            countClass="text-color-recoveries"
            icon={FiUserCheck}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <InfoBarItem
            {...props}
            title={appLanguage.totalDeaths}
            dataKey="totalDeaths"
            upIsBad
            countClass="text-color-deaths"
            icon={MdRadioButtonChecked}
          />
        </Grid>
        <Grid item xs={12}>
          <div className="text-center">
            <a
              href="/#"
              onClick={() => {
                setShowMoreTotal(!showMoreTotal);
              }}
            >
              {showMoreTotal ? "Hide" : "Show more"}
            </a>
          </div>
        </Grid>
        {showMoreTotal ? (
          <>
            <Grid item xs={12} md={6}>
              <InfoBarItem
                {...props}
                title={appLanguage.negativeCases}
                dataKey="negativeCases"
                icon={FiUserMinus}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <InfoBarItem
                {...props}
                title={appLanguage.totalSamplesSendForTesting}
                dataKey="totalSamplesSendForTesting"
                icon={GiEyedropper}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <InfoBarItem
                {...props}
                upIsBad
                title={appLanguage.underSurveillance}
                dataKey="underSurveillance"
                icon={FiEye}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <InfoBarItem
                {...props}
                upIsBad
                title={appLanguage.inHomeIsolation}
                dataKey="inHomeIsolation"
                icon={AiOutlineHome}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <InfoBarItem
                {...props}
                upIsBad
                title={appLanguage.inDesignatedIsolationFacilities}
                dataKey="inDesignatedIsolationFacilities"
                icon={IoMdBed}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <InfoBarItem
                {...props}
                title={appLanguage.psySupportPerson}
                dataKey="psySupportPerson"
                icon={FiUsers}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <InfoBarItem
                {...props}
                title={appLanguage.teleCounselling}
                dataKey="teleCounselling"
                icon={FaUserTie}
              />
            </Grid>
          </>
        ) : null}
      </Grid>
      <Box my={2} fontWeight="bold">
        {(props.data && props.data.date) || "--"}
      </Box>
      <Grid container spacing={1}>
        <Grid item xs={12} md={6}>
          <InfoBarItem
            {...props}
            title={appLanguage.postiveNew}
            dataKey="postiveNew"
            upIsBad
            countClass="text-color-active"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <InfoBarItem
            {...props}
            title={appLanguage.recoveries}
            dataKey="recoveries"
            countClass="text-color-recoveries"
            icon={FiUserCheck}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <InfoBarItem
            {...props}
            title={appLanguage.deaths}
            dataKey="deaths"
            upIsBad
            countClass="text-color-deaths"
            icon={MdRadioButtonChecked}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default InfoBar;
