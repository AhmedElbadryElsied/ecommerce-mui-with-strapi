import { KeyboardArrowUp } from "@mui/icons-material";
import { SpeedDial, useScrollTrigger, Zoom } from "@mui/material";
import React from "react";

function ScrollToTop() {
  return (
    <Zoom in={useScrollTrigger({ threshold: 200 })}>
      <SpeedDial
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        ariaLabel="SpeedDial basic example"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
        icon={<KeyboardArrowUp fontSize="small" />}
      ></SpeedDial>
    </Zoom>
  );
}

export default ScrollToTop;
