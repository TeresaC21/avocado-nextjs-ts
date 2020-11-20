import React from 'react'
import { useCart } from '../../context/cartContext'

// Styles
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'

const DetailsCart = () => {
  const { quantity, cartItems, removeItem } = useCart()

  return (
    <section style={{ paddingTop: '5rem' }}>
      {cartItems.map((avo) => {
        return (
          <Row key={avo.id}>
            <Col sm={3} style={{ paddingLeft: '0px', paddingRight: '0px' }}>
              <Card.Img
                style={{ width: '95px', height: '95px' }}
                variant="top"
                src={avo.image}
              />
            </Col>
            <Col sm={8}>
              <Card.Title className="text-dark">{avo.name} Names</Card.Title>
              <Card.Title>
                <small className="text-success">
                  {avo.quantity} x $ {avo.price}
                </small>
              </Card.Title>
              <Card.Title>
                <small className="text-secondary">More details here...</small>
              </Card.Title>
            </Col>
            <Col sm={1}>
              <Button variant="outline-danger" onClick={() => removeItem(avo)}>
                X
              </Button>
            </Col>
          </Row>
        )
      })}

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
