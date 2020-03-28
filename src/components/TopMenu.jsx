import React, { useContext } from "react";
import { Grid } from "@material-ui/core";
import { FiClock } from "react-icons/fi";
import { LanguageContext } from "../languageContext";

function TopMenu({ updatedDate }) {
  const appLanguage = useContext(LanguageContext);

  return (
    <div className="text-size-lesser">
      <Grid container spacing={2} alignItems="center" justify="space-between">
        <Grid item>
          <FiClock size="1.25em" /> {appLanguage.lastUpdated}:{" "}
          <i>{updatedDate}</i>
        </Grid>
        <Grid item>
          <a title="References" href="#reference-container">
            Data source
          </a>
        </Grid>
      </Grid>
    </div>
  );
}

export default TopMenu;
