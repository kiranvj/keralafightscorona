import React from "react";
import { Box } from "@material-ui/core";

function Footer() {
  return (
    <Box pt={5} textAlign="center">
      <Box component="small" my={8}>
        &copy; Initiative by{" "}
        <a href="https://whatindiathinks.com" title="What India Thinks">
          WhatIndiaThinks Insights
        </a>
      </Box>
    </Box>
  );
}
export default Footer;
