import { Container, Typography } from "@mui/material";
import React from "react";

import "./nameBox.css";

export default function NameBoxView() {
  return (
    <Container className="name-box" align="center">
      <Container>
        <Typography variant="h4" gutterBottom>
          Victor Fagundes Silva Ferreira
        </Typography>
        <Container className="name-underline" />
        <Typography variant="h4" gutterBottom>
          Desenvolvedor - Full Stack
        </Typography>
      </Container>
    </Container>
  );
}
