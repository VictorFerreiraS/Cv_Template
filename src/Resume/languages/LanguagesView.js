import { Box, Typography } from "@mui/material";
import React from "react";

export default function LanguagesView() {
  return (
    <Box>
      <Typography variant="h6" className="titles">
        IDIOMAS:
      </Typography>
      <Typography variant="body1">Inglês:</Typography>
      <Typography variant="body1">FALA: Avançado</Typography>
      <Typography variant="body1">Leitura e Escrita: Avançadas</Typography>
      <Typography variant="body1">Compreensão: Fuida</Typography>
    </Box>
  );
}
