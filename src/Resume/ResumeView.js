import { Box, Grid } from "@mui/material";
import React from "react";

import BackEndView from "./backEnd/BackEndView";
import CertificatesView from "./certificates/CertificatesView";
import DegreesView from "./degrees/DegreesView";
import FrontEndView from "./frontEnd/FrontEndView";
import KnowledgeAndInterests from "./knowledge/KnowledgeAndInterests";
import LanguagesView from "./languages/LanguagesView";
import NameBoxView from "./nameBox/NameBoxView";
import PersonalInfoView from "./personalInfo/PersonalInfoView";
import ProjectsView from "./projects/ProjectsView";

export default function ResumeView(dev) {
  return (
    <Box display={"flex"} justifyContent={"center"}>
      <Grid>
        {/* MAIN BOX with name and info*/}
        <Box maxWidth={"820px"}>
          {/* Name box */}
          <NameBoxView />
          <Box>
            {/* Dados Pessoais Box */}
            <PersonalInfoView />
            {/* FORMAÇÃO BOX */}
            <DegreesView />
            {/* DOMÍNIO */}
            <Box>
              {/* BACKEND */}
              <BackEndView />
              {/* FRONT END */}
              <FrontEndView />

              {/* IDIOMAS */}
              <LanguagesView />
              {/* CERTIFICADOS */}
              <CertificatesView />
              {/* PROJETOS */}
              <ProjectsView />
            </Box>
          </Box>
          {/* CONHECIMENTOS E INTERESSES  */}
          <KnowledgeAndInterests />
        </Box>
      </Grid>
    </Box>
  );
}
