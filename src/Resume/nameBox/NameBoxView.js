import { Container, Typography, Button, IconButton } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import "./nameBox.css";


const lngs = {
  ptBR: { nativeName: "Pt" },
  enUS: { nativeName: "En" },
};

export default function NameBoxView() {
  const {t, i18n} = useTranslation();

  return (
    <Container className="name-box" align="center">
      <Container>
        <Typography variant="h4" gutterBottom>
          Victor Fagundes Silva Ferreira
        </Typography>
        <Container className="name-underline" />
        <Typography variant="h4" gutterBottom>
          {t("desenvolvedor")} - Full Stack
        </Typography>
      </Container>
      {Object.keys(lngs).map((lng) => (
            <Button
              type="submit"
              className="switch-button"
              key={lng}
              onClick={() => i18n.changeLanguage(lng)}
              disabled={i18n.resolvedLanguage === lng}
            >
              {lngs[lng].nativeName}
            </Button>
            
          ))}
    </Container>
  );
}
