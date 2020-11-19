import React from 'react'

import Table from 'react-bootstrap/Table'
import Card from 'react-bootstrap/Card'

const ProductAttributes = ({ attributes }) => {
  return (
    <>
      <Card.Body>
        <Card.Title className="text-dark">About this avocado</Card.Title>
        <Card.Text>{attributes.description}</Card.Text>
      </Card.Body>
      <Table striped bordered hover>
        <tbody>
          <tr>
            <td>Shape</td>
            <td>{attributes.shape}</td>
          </tr>
          <tr>
            <td>Hardiness</td>
            <td>{attributes.hardiness}</td>
          </tr>
          <tr>
            <td>Taste</td>
            <td>{attributes.taste}</td>
          </tr>
        </tbody>
      </Table>
    </>
  )
}

export default ProductAttributes
