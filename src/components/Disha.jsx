import React from "react";
import { Box } from "@material-ui/core";
import imgDishaNumbers from "../static/images/disha-call-centers.jpg";

function Disha() {
  return (
    <Box textAlign="center">
      <h2>Disha phone numbers</h2>
      <ul>
        <li>
          <h4>1056</h4>
        </li>
        <li>0471 2309250</li>
        <li>0471 2309251</li>
        <li>0471 2309252</li>
        <li>0471 2309253</li>
        <li>0471 2309254</li>
        <li>0471 2309255</li>
      </ul>
      <Box textAlign="center">
        <img src={imgDishaNumbers} className="img-fluid" />
      </Box>
    </Box>
  );
}

export default Disha;
