import React, { useState, useEffect } from 'react'

//Components
import ProductList from './product/ProductList'

const HomePage = () => {
  const [productList, setProductList] = useState([])

  useEffect(() => {
    window
      .fetch('/api/avo')
      .then((response) => response.json())
      .then(({ data, lenght }) => {
        setProductList(data)
      })
  }, [])
  return (
    <div>
      <div>Avocado Next.js!</div>
      <ProductList productList={productList} />
    </div>
  )
}

export default HomePage
