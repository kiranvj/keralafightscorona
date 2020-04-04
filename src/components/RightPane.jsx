import React from "react";
import { Box } from "@material-ui/core";

function RightPane() {
  return (
    <div className="text-center">
      <Box my={2}>
        <a
          rel="noopener noreferrer"
          href="https://docs.google.com/forms/d/e/1FAIpQLScBob6yePxWwt-Lx1s-1UlpCJ-pRwbwATs5tdtqTXWypfdL1Q/viewform"
          target="_blank"
          title="Volunteer Registration"
        >
          Kerala COVID-19
          <br />
          Volunteer Registration
        </a>
      </Box>
    </div>
  );
}

export default RightPane;
