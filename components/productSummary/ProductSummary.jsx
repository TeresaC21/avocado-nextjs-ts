import React from 'react'

import ProductAddForm from './ProductAddForm'
import ProductAttributes from './ProductAttributes'

// Styles
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const ProductSummary = ({ avocado }) => {
  const { id, name, sku, price, image, attributes } = avocado

  return (
    <>
      <section style={{ paddingTop: '5rem' }}>
        {/* <h1 className="p-5">Página producto: {query.id}</h1> */}
        <Row>
          <Col sm={4} style={{ paddingLeft: '0px', paddingRight: '0px' }}>
            <Card.Img variant="top" src={image} />
          </Col>
          <Col sm={8}>
            <Card.Title className="text-dark">{name}</Card.Title>
            <Card.Title>
              <small className="text-success">$ {price}</small>
            </Card.Title>
            <Button variant="secondary">sku: {sku}</Button>

            <Row>
              <ProductAddForm id={id} />
            </Row>
          </Col>
        </Row>

        <ProductAttributes attributes={attributes} />
      </section>
    </>
  )
}

export default ProductSummary
