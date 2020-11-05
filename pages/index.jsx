import React, { useState, useEffect } from 'react'

import SpinnerAvocado from '@components/Spinner/SpinnerAvocado'

//Components
import ProductList from './product/ProductList'

const HomePage = () => {
  const [productList, setProductList] = useState([])
  const [loading, setLoading] = useState([true])

  useEffect(() => {
    setLoading(true)
    fetch('/api/avo')
      .then((response) => response.json())
      .then(({ data, lenght }) => {
        setProductList(data)
        setLoading(false)
      })
  }, [])

  return (
    <div>
      <div>Avocado Next.js!</div>
      {loading ? <SpinnerAvocado /> : <ProductList productList={productList} />}
    </div>
  )
}

export default HomePage
