import React from 'react'
import Link from 'next/link'

// Icons
import Avocado from '@components/SVGIcons/Avocato'
import ShoppingIcon from '@components/SVGIcons/ShoppingIcon'

// Styles
import { Container, Navbar as NavbarBt, Row } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'

export default function Navbar() {
  return (
    <NavbarBt bg="light" variant="light">
      <Container style={{ maxWidth: '800px' }}>
        <Link href="/" passHref>
          <Nav.Link style={{ color: 'green' }}>
            {' '}
            <Avocado /> Avo store{' '}
          </Nav.Link>
        </Link>
        <Link href="/about" passHref>
          <Nav.Link style={{ color: 'green' }}>
            <ShoppingIcon />{' '}
          </Nav.Link>
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
