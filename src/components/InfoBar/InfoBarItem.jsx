import React from "react";
import { Grid, Box } from "@material-ui/core";
import { GoArrowUp, GoArrowDown } from "react-icons/go";
import clsx from "clsx";
import { MdCompareArrows } from "react-icons/md";
import Icon from "../UI/Icon";
function InfoBarItem({
  data,
  title,
  fullData,
  highlight,
  dataPointer,
  dataKey,
  upIsBad,
  countClass,
  icon,
}) {
  let diff = null;
  let diffPercentage = 0;
  let diffToPrint = null;

  if (dataPointer > 0) {
    diff = data[dataKey] - fullData[dataPointer - 1][dataKey];

    if (parseInt(fullData[dataPointer - 1][dataKey]) === 0) {
      diffPercentage = diff * 100;
    } else {
      diffPercentage = Math.round(
        ((diff / fullData[dataPointer - 1][dataKey]) * 100).toFixed(2)
      );
    }

    if (diffPercentage > 0) {
      diffToPrint = (
        <>
          <span className={clsx(upIsBad ? "text-red" : "text-green")}>
            <GoArrowUp />
            {diffPercentage}%
          </span>
          <Box className="diff-numbers">[+ {diff}]</Box>
        </>
      );
    } else if (diffPercentage < 0) {
      diffToPrint = (
        <>
          <span className={clsx(upIsBad ? "text-green" : "text-red")}>
            <GoArrowDown />
            {diffPercentage}%
          </span>
          <Box className="diff-numbers">[{diff}]</Box>
        </>
      );
    } else {
      diffToPrint = (
        <span>
          <MdCompareArrows />
          {diffPercentage}%
        </span>
      );
    }
  }
  return (
    <Box className={clsx("stat-section", highlight ? "stat-highlight" : "")}>
      <Grid container alignItems="center">
        <Grid item xs={6}>
          <Grid container alignItems="center">
            <Grid item xs="auto">
              <Box mr={1}>{icon && <Icon icon={icon} />}</Box>
            </Grid>
            <Grid item xs>
              <Box className="stat-title">{title}</Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <div className="text-count text-nowrap text-center">
            <span className={clsx(countClass ? countClass : "")}>
              {(data && data[dataKey]) || "--"}
            </span>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className="text-center">
            <span title="Change from previous day">{diffToPrint || "--"}</span>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}

export default InfoBarItem;
