import React from "react";
import { Box } from "@material-ui/core";
import "../../styles/panel.scss";
import clsx from "clsx";

function Panel({ title, variant, ...panelProps }) {
  return (
    <div
      className={clsx(
        "panel-container",
        variant === "small" ? "small-panel" : ""
      )}
    >
      <Box py={1} px={2} className="panel-header">
        <div className="panel-title">
          <span m={0} p={0}>
            {title}
          </span>
        </div>
      </Box>
      <Box className="panel-content">{panelProps.children}</Box>
    </div>
  );
}

export default Panel;
