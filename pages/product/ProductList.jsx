import React from 'react'

import Product from './Product'

// Styles
import Row from 'react-bootstrap/Row'

const ProductList = ({ productList }) => {
  return (
    <Row className="justify-content-between">
      {productList.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </Row>
  )
}

export default ProductList
