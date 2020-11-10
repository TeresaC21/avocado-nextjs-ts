import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

// Styles
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const ProductPage = () => {
  const { query } = useRouter()
  const [avocado, setAvocado] = useState({})

  useEffect(() => {
    const fetchAvocado = async () => {
      const response = await fetch(`/api/avo/${query.id}`)
      setAvocado(await response.json())
    }
    fetchAvocado()
  }, [])
  console.log(avocado)

  return (
    <section>
      <h1 className="p-5">Página producto: {query.id}</h1>
      <Row>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={avocado.image} />
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>{avocado.name}</Card.Title>
              <Card.Text>{avocado.attributes.description}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">{avocado.price}</small>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </section>
  )
}

export default ProductPage
