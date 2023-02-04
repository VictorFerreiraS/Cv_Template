import { Container, Typography } from "@mui/material";
import React from "react";

import "./nameBox.css";

export default function NameBoxView() {
  return (
    <Container align="center">
      <Container>
        <Typography variant="h5" className="name-tag" gutterBottom>
          Victor Fagundes Silva Ferreira
        </Typography>
        <Container className="name-underline" />
        <Typography variant="h6" className="name-tag" gutterBottom>
          Desenvolverdor - Full Stack
        </Typography>
      </Container>
    </Container>
  );
}
