import React from "react";
import { Grid } from "@material-ui/core";
import { GoArrowUp, GoArrowDown } from "react-icons/go";
import clsx from "clsx";
import { MdCompareArrows } from "react-icons/md";
import Icon from "../UI/Icon";
function InfoBarItem({
  data,
  fullData,
  dataPointer,
  dataKey,
  upIsBad,
  countClass,
  icon
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
        <span className={clsx(upIsBad ? "text-red" : "text-green")}>
          <GoArrowUp />
          {diffPercentage}%
        </span>
      );
    } else if (diffPercentage < 0) {
      diffToPrint = (
        <span className={clsx(upIsBad ? "text-green" : "text-red")}>
          <GoArrowDown />
          {diffPercentage}%
        </span>
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
    <Grid container alignItems="center">
      <Grid item xs>
        <div className="text-count text-nowrap">
          {icon && <Icon icon={icon} />}{" "}
          <span className={clsx(countClass ? countClass : "")}>
            {(data && data[dataKey]) || "--"}
          </span>
        </div>
      </Grid>
      <Grid item xs>
        <span title="Change from previous day">{diffToPrint || "--"}</span>
      </Grid>
    </Grid>
  );
}

export default InfoBarItem;
