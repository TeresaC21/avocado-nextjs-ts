import React from 'react'

import ProductCard from '../ProductCard/ProductCard'

// Styles
import Row from 'react-bootstrap/Row'

const ProductList = ({ productList }) => {
  return (
    <Row className="justify-content-between">
      {productList.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </Row>
  )
}

export default ProductList
