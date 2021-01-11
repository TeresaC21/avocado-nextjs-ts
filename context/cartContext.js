import React, { useState, createContext, useContext, useEffect } from 'react'

export const CartContext = createContext()

export const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]) //, init()
  const [quantity, setQuantity] = useState(0)

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
  }, [cartItems])

  const addItem = (item) => {
    // setCartItems([...cartItems, item])
    // Suma la nueva cantidad que se agrega desde el form a la cantidad que tenga en ese momento nuestro state queantity
    setQuantity(quantity + item.quantity)

    const isEqualThatItem = (element) => element.id === item.id
    const indexItem = cartItems.findIndex(isEqualThatItem)
    // Si se encontró el item, se modifica la cantidad y actualiza el state del carrito
    if (indexItem != -1) {
      let newItems = cartItems
      newItems[indexItem].quantity =
        newItems[indexItem].quantity + item.quantity

      setCartItems(newItems)
      return
    }
    // Si no se encuentra ninguna coincidencia, se agrega un nuevo item a nuestro state del carrito
    setCartItems([...cartItems, item])
  }

  const removeItem = (avocado) => {
    setQuantity(quantity - avocado.quantity)
    let itemsAvo = cartItems
    itemsAvo = itemsAvo.filter((item) => item.id !== avocado.id)
    setCartItems(itemsAvo)
  }

  return (
    <CartContext.Provider
      value={{ cartItems, addItem, quantity, removeItem }}
      {...props}
    />
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart de estar dentro del proveedor CardContext')
  }
  return context
}

// const init = () => {
//   return JSON.parse(localStorage.getItem('cartItems')) || [];
// };
