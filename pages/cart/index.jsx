import React from 'react'
import { useCart } from '../../context/cartContext'

// Styles
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Badge from 'react-bootstrap/Badge'

const DetailsCart = (/* { avocado } */) => {
  /* const { name, price, image } = avocado */

  const { quantity } = useCart()

  return (
    <section style={{ paddingTop: '5rem' }}>
      <Row>
        <Col sm={4} style={{ paddingLeft: '0px', paddingRight: '0px' }}>
          <Card.Img variant="top" src="image" /* {image} */ />
        </Col>
        <Col sm={8}>
          <Card.Title className="text-dark">{/* {name} */} Names</Card.Title>
          <Card.Title>
            <small className="text-success">
              {quantity} x $ {/* {price} */}
            </small>
          </Card.Title>
        </Col>
      </Row>
      <Row>
        <Card
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            paddingTop: '1rem',
          }}
        >
          <Col sm={8} style={{ alignItems: 'center' }}>
            <Card.Title>Sub Total {quantity}</Card.Title>
          </Col>
          <Col sm={3} style={{ alignItems: 'center' }}>
            <Badge variant="secondary">Check out</Badge>
          </Col>
        </Card>
      </Row>
    </section>
  )
}

export default DetailsCart
