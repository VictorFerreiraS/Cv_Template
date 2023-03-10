import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

import BackEndView from "./backEnd/BackEndView";
import CertificatesView from "./certificates/CertificatesView";
import DegreesView from "./degrees/DegreesView";
import FrontEndView from "./frontEnd/FrontEndView";
import KnowledgeAndInterests from "./knowledge/KnowledgeAndInterests";
import LanguagesView from "./languages/LanguagesView";
import NameBoxView from "./nameBox/NameBoxView";
import PersonalInfoView from "./personalInfo/PersonalInfoView";
import ProjectsView from "./projects/ProjectsView";

import "./resume.css";

export default function ResumeView(dev) {
  const {t} = useTranslation()

  return (
    <Box display={"flex"} justifyContent={"center"}>
      {/* MAIN BOX with name and info*/}
      <Box width={"800px"} className="page-wraper">
        {/* Name box */}
        <Paper elevation={3}>
          <NameBoxView />
        </Paper>

        {/* INFORMATION BOX */}
        <Paper elevation={3} className="content-container">
          {/* CONTENT WRAPER */}

          <Box className="content-wraper">
            {/* DADOS PESSOAIS E FORMAÇÃO BOX*/}
            <Grid container>
              <Grid item md={6}>
                <PersonalInfoView />
              </Grid>
              <Grid item md={6}>
                <DegreesView />
              </Grid>
            </Grid>

            {/* DOMÍNIO */}
            <Grid display={"flex"} justifyContent={"center"} margin={"10px"}>
              <Typography variant="h6" className="titles">
                {t("dominio")}
              </Typography>
            </Grid>

            <Grid container columns={21}>
              {/* LEFT SIDE */}
              <Grid item xs={10} sm={10} md={10}>
                <Box height={"200px"}>
                  <BackEndView />
                </Box>
                <LanguagesView />
                <CertificatesView />
              </Grid>

              {/* CENTRAL LINE */}
              <Grid item xs={1} sm={1} md={1} align={"center"}>
                <Box width={"2px"} className="central-line" />
              </Grid>

              {/* RIGHT SIDE */}
              <Grid item xs={10} sm={10} md={10}>
                <Box height={"200px"}>
                  <FrontEndView />
                </Box>
                <ProjectsView />
              </Grid>
            </Grid>

            <Grid>
              {/* CONHECIMENTOS E INTERESSES  */}
              <KnowledgeAndInterests />
            </Grid>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}
