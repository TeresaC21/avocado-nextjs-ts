import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

// Styles
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styles from '../product/id.module.css'

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
        <Col lg={4} style={{ paddingLeft: '0px', paddingRight: '0px' }}>
          <Card /* style={{ width: '18rem' }} */>
            <Card.Img variant="top" src={avocado.image} />
          </Card>
        </Col>
        <Col
          lg={8}
          style={{
            paddingLeft: '0px',
            paddingRight: '0px',
            display: 'flex',
            justifyContent: 'end',
          }}
        >
          <Card>
            <Card.Body>
              <Card.Title className="text-info">
                {avocado.name}{' '}
                <span className="text-secondary">ID: {avocado.id}</span>
              </Card.Title>
              <Card.Text>
                {/* {avocado.attributes.description} */} Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Animi totam error placeat?
                Ratione placeat voluptatibus omnis quos, possimus et provident.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-success">$ {avocado.price}</small>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </section>
  )
}

export default ProductPage
