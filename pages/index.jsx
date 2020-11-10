import React, { useState, useEffect } from 'react'

import SpinnerAvocado from '@components/Spinner/SpinnerAvocado'

//Components
import ProductList from '../components/ProductList/ProductList'

const HomePage = () => {
  const [productList, setProductList] = useState([])
  const [loading, setLoading] = useState([true])

  useEffect(() => {
    setLoading(true)
    const api = async () => {
      const response = await fetch('/api/avo')
      const { data, lenght } = await response.json()
      setProductList(data)
      setLoading(false)
    }
    api()
  }, [])

  return (
    <div>
      <div>Avocado Next.js!</div>
      {loading ? <SpinnerAvocado /> : <ProductList productList={productList} />}
    </div>
  )
}

export default HomePage
