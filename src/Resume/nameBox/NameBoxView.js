import { Container, Typography } from '@mui/material'
import React from 'react'

export default function NameBoxView() {
  return (
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
  )
}
