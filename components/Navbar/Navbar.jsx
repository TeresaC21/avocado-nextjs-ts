import React from 'react'
import Link from 'next/link'
import { useCart } from '../../context/cartContext'

// Icons
import Avocado from '@components/SVGIcons/Avocato'
import ShoppingIcon from '@components/SVGIcons/ShoppingIcon'

// Styles
import { Container, Navbar as NavbarBt, Row } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'
import Badge from 'react-bootstrap/Badge'

export default function Navbar() {
  const { quantity } = useCart() /* cartItems */

  return (
    <NavbarBt bg="light" variant="light">
      <Container style={{ maxWidth: '800px' }}>
        <Link href="/" passHref>
          <Nav.Link style={{ color: 'green' }}>
            <Avocado /> Avo store
          </Nav.Link>
        </Link>
        <Link href="/cart" passHref>
          <Nav.Link style={{ color: 'green' }}>
            <ShoppingIcon />
            <Badge variant="primary">{quantity}</Badge>
          </Nav.Link>
        </Link>
      </Container>
    </NavbarBt>
  )
}
