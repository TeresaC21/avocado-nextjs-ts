import React from 'react'

// Style
import Container from 'react-bootstrap/Container'

const Main = ({ children }) => {
  return <Container style={{ maxWidth: '800px' }}>{children}</Container>
}

export default Main
