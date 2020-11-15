import React, { useState, useEffect, createContext, useContext } from 'react'

export const CartContext = createContext()

export const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([])

  return <CartContext.Provider value={{ cartItems, setCartItems }} {...props} />
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart de estar dentro del proveedor CardContext')
  }
  return context
}
