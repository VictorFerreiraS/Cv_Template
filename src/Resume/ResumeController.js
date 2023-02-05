import React from "react";
import ResumeView from "./ResumeView";

import "./resume.css";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins",
    h4: {
      fontSize: "20px",
    },
    h6: {
      fontSize: "16px",
      letterSpacing: "5px",
    },
    body1: {
      fontSize: "12px",
    },
  },
  paper: {
    borderRadious: "40px",
  },
});

export default function ResumeController() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ResumeView />
      </ThemeProvider>
    </>
  );
}
