import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

// Components
import SpinnerAvocado from '../../components/Spinner/SpinnerAvocado'
import ProductSummary from '@components/productSummary/ProductSummary'

const ProductPage = () => {
  const [avocado, setAvocado] = useState({})
  const [loading, setLoading] = useState(true)

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
    <>
      <ProductSummary avocado={avocado} />
    </>
  )
}

export default ProductPage
