import React from "react";

import { Box, Link, Typography } from "@mui/material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import {ReactComponent as BrazilFlag} from "../../images/brazil-flag-icon.svg"

import "./personalInfo.css";

export default function PersonalInfoView() {
  return (
    <Box>
      <Typography variant="h6">DADOS PESSOAIS</Typography>
      <Box className="age" display={"flex"} alignItems={"center"}>
        <PersonOutlineOutlinedIcon className="icons" />
        <Box>
          <Typography variant="body1">19 anos </Typography>
          <Typography variant="body1">São João del Rei - MG </Typography>
        </Box>
        <BrazilFlag className="brazil-flag"/>
      </Box>
      <Box display={"flex"}>
        <PhoneAndroidOutlinedIcon className="icons" />
        <Box display={"flex"} alignItems={"center"}>
          <Typography variant="body1">(32) 99990-1005</Typography>
        </Box>
      </Box>
      <Box display={"flex"} justifyContent={""}>
        <LinkedInIcon className="icons" />
        <Typography variant="body1" display={"flex"} alignItems={"center"}>
          <Link
            marginLeft={"5px"}
            target={"blank"}
            href="https://www.linkedin.com/in/victor-fagundes-ferreira/"
          >
            Victor Ferreira
          </Link>
        </Typography>
      </Box>
      <Box display={"flex"}>
        <GitHubIcon className="icons" />
        <Typography
          marginLeft={"5px"}
          variant="body1"
          display={"flex"}
          alignItems={"center"}
        >
          <Link target={"blank"} href="https://github.com/VictorFerreiraS">
            VictorFerreiraS
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}
