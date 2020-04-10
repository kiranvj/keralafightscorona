import React from "react";
import { Box } from "@material-ui/core";

function Footer() {
  return (
    <Box pt={5} textAlign="center">
      <Box component="small" my={8}>
        &copy; Hand crafted with{" "}
        <span role="img" aria-label="love of nature">
          💚
        </span>{" "}
        by{" "}
        <a href="https://kiranvj.com" title="Kiran Paul VJ">
          Kiran Paul VJ
        </a>
      </Box>
    </Box>
  );
}
export default Footer;
