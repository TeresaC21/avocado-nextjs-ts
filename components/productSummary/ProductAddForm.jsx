import React, { useState } from 'react'
import { useCart } from '../../context/cartContext'

import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'

const ProductAddForm = ({ avocado }) => {
  const [quantity, setQuantity] = useState(1)

  const { addItem } = useCart()

  const handleChange = (e) => {
    setQuantity(parseInt(e.target.value, 10))
  }

  const handleClick = () => {
    addItem({ quantity, ...avocado })
    setQuantity(1)
  }

  return (
    <>
      <InputGroup className="mb-3 mt-3 pl-3">
        <input
          type="number"
          placeholder="1"
          value={quantity}
          onChange={handleChange}
        />
        <Button variant="outline-success" onClick={handleClick}>
          Add to card
        </Button>
      </InputGroup>
    </>
  )
}

export default ProductAddForm
