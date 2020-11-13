import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

// Components
import SpinnerAvocado from '../../components/Spinner/SpinnerAvocado'

// Styles
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'

const ProductPage = () => {
  const [avocado, setAvocado] = useState({})
  const [loading, setLoading] = useState(true)

  const { name, sku, price, image, attributes } = avocado

  //const { shape, hardiness, taste } = attributes

  const {
    query: { id },
  } = useRouter()

  useEffect(() => {
    setLoading(true)
    const fetchAvocado = async () => {
      if (id) {
        const response = await fetch(`/api/avo/${id}`)
        setAvocado(await response.json())
        setLoading(false)
      }
    }
    fetchAvocado()
  }, [id])

  if (loading) {
    return <SpinnerAvocado />
  }

  return (
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
          <Button variant="secondary">sku: {id}</Button>
          <Row>
            <Col lg={12}></Col>
          </Row>
        </Col>
      </Row>
      <Card.Body>
        <Card.Title className="text-dark">About this avocado</Card.Title>
        <Card.Text>{attributes.description}</Card.Text>
      </Card.Body>

      <Table striped bordered hover>
        <tbody>
          <tr>
            <td>Shape</td>
            {/*   <td>{shape}</td> */}
          </tr>
          <tr>
            <td>Hardiness</td>
            {/*    <td>{hardiness}</td>  */}
          </tr>
          <tr>
            <td>Taste</td>
            {/*  <td>{taste}</td>  */}
          </tr>
        </tbody>
      </Table>
    </section>
  )
}

export default ProductPage
