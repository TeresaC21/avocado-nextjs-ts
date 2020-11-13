import React from 'react'

// Styles
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Footer = () => {
  return (
    <Container
      fluid
      style={{
        background: '#2f2a27',
        color: 'white',
        position: 'relative',
        bottom: '-1rem',
      }}
    >
      <Container
        style={{
          maxWidth: '800px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '0.5rem',
        }}
      >
        <h5>
          Icons made by <span>Platzi and Teresa Carbajal</span>
        </h5>
        <small>
          <a
            style={{ textDecoration: 'none' }}
            href="http://www.freepik.com/"
            title="Freepik"
            className="px-3"
          >
            Freepik
          </a>
          <a
            style={{ textDecoration: 'none' }}
            href="https://www.flaticon.com/"
            title="Flaticon"
          >
            flaticon
          </a>
        </small>
      </Container>
    </Container>
  )
}

export default Footer
