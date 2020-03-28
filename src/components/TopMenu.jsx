import React, { useContext } from "react";
import { Grid } from "@material-ui/core";

import { LanguageContext } from "../languageContext";

function TopMenu({ updatedDate }) {
  const appLanguage = useContext(LanguageContext);

  return (
    <div className="text-size-lesser">
      {/*       <Grid container spacing={2} alignItems="center" justify="space-between">
        <Grid item>
          <FiClock size="1.25em" />
          <small>
            {" "}
            {appLanguage.lastUpdated}: <i>{updatedDate}</i>
          </small>
        </Grid>

      </Grid> */}
    </div>
  );
}

export default TopMenu;
