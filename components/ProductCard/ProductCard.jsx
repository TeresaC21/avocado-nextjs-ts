import React from 'react'
import Link from 'next/link'

// Styles
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const Product = ({ product }) => {
  return (
    <div>
      <Col md="6" className="my-3">
        <Link href={`/product/${product.id}`}>
          <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Button variant="warning">Buy</Button>
            </Card.Body>
          </Card>
        </Link>
      </Col>
    </div>
  )
}

export default Product
