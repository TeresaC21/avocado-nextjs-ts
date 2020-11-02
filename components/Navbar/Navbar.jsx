import React from 'react'
import Link from 'next/link'

// Styles
import { Container, Navbar as NavbarBt, Row } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'

export default function Navbar() {
  return (
    <NavbarBt bg="light" variant="light" fixed="top">
      <Container style={{ maxWidth: '800px' }}>
        <Link href="/" passHref>
          <Nav.Link>Home</Nav.Link>
        </Link>
        <Link href="/about" passHref>
          <Nav.Link>About</Nav.Link>
        </Link>
      </Container>
    </NavbarBt>
    /*  <nav>
      <menu>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
      </menu>
    </nav> */
  )
}
