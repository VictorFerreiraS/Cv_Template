import { Container, Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

export default function ResumeView(dev) {
  return (
    <Box display={"flex"} justifyContent={"center"}>
      {/* MAIN BOX */}
      <Box maxWidth={"820px"}>
        {/* Name box */}
        <Container align="center">
          <Container>
            <Typography variant="h5" className="name-tag" gutterBottom>
              Victor Fagundes Silva Ferreira
            </Typography>
            <Typography variant="h6" className="name-tag" gutterBottom>
              Desenvolverdor - Full Stack
            </Typography>
          </Container>
        </Container>

        <Box>
          {/* Dados Pessoais Box */}
          <Box>
            <Typography className="titles">DADOS PESSOAIS</Typography>
            <Box>
              <PersonOutlineOutlinedIcon />
              <Typography>19 anos </Typography>
              <Typography>São João del Rei - MG </Typography>
            </Box>
          </Box>
          {/* FORMAÇÃO BOX */}
          <Box>
            <Typography className="titles">FORMAÇÃO</Typography>
            <Typography>Cursando Ciêcia da Computação</Typography>
            <Typography>Descomplica Faculdade</Typography>
          </Box>

          {/* DOMÍNIO */}
          <Box>
            {/* BACKEND */}
            <Box>
              <Typography className="title">BACK END</Typography>{" "}
              <Box>
                <Typography>Java</Typography>
                <Typography>POO</Typography>
                <Typography>SpringBoot</Typography>
                <Typography>MongoDb</Typography>
                <Typography>PostGress</Typography>
              </Box>
            </Box>
            {/* FRONT END */}
            <Box>
              <Typography className="title">FRONT END</Typography>
              <Box>
                <Typography>React</Typography>
                <Typography>CSS / Sass / Material Ui</Typography>
              </Box>

              {/* IDIOMAS */}
              <Box>
                <Typography>Inglês</Typography>
                <Typography>FALA: Avançado</Typography>
                <Typography>Inglês: Avançado</Typography>
                <Typography>Inglês: Avançado</Typography>
              </Box>
              {/* CERTIFICADOS */}
              <Box>
                <Typography>Linkedin 4</Typography>
                <Typography>Destaques: React, Java POO</Typography>
              </Box>

              {/* PROJETOS */}
              <Box>
                <Typography className="title"> PROJETOS</Typography>
                <Typography>Memory Game: <Link>https://github.com/VictorFerreiraS/magic-memory</Link></Typography>
                <Typography>Memory Game Api: <Link>https://github.com/VictorFerreiraS/MagicMemories-Api</Link></Typography>
                <Typography>Former Apple Landing Page <Link>https://github.com/VictorFerreiraS/apple-clone</Link></Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
