import { createContext, useContext, useState } from 'react'
import { useDeepCopy } from '../hooks/useDeepCopy'

export const cartContext = createContext({ cart: [] })

export function CartProvider(props) {
  const [cart, setCart] = useState([])
  const newCart = useDeepCopy(cart);

  const test = () => console.log('test')

  function addToCart(item) {
    const isInCart = cart.findIndex((itemInCart) => itemInCart.id === item.id)
    let newCart = useDeepCopy(cart)

    if (isInCart !== -1) {
      alert('Este item ya fue agregado')
    } else {
      newCart.push(item)
      setCart(newCart)
    }
  }

  function addItem(itemid) {
    const itemIndex = cart.findIndex((itemInCart) => itemInCart.id === itemid)
    newCart[itemIndex].count = newCart[itemIndex].count + 1
    setCart(newCart)
  }

  function removeItem(itemid) {
    const itemIndex = cart.findIndex((itemInCart) => itemInCart.id === itemid)
    if (newCart[itemIndex].count === 0) return
    newCart[itemIndex].count = newCart[itemIndex].count - 1
    setCart(newCart)
  }

  function clear(itemid) {
    const itemIndex = cart.findIndex((itemInCart) => itemInCart.id === itemid)
    delete newCart[itemIndex]
    setCart(newCart)
  }

  function getTotalItemsInCart() {
    let count = 0
    cart.forEach((itemInCart) => { count = count + itemInCart.count })
    return count
  }

  function getTotalPriceInCart() {
    let totalPrice = 0
    cart.forEach((itemInCart) => { totalPrice = totalPrice + itemInCart.price * itemInCart.count })
    return totalPrice
  }

  function clearCart() {
    this.setState({ items: [] });
  }

  return (
    <cartContext.Provider
      value={{
        cart,
        test,
        addItem,
        clear,
        addToCart,
        getTotalItemsInCart,
        getTotalPriceInCart,
        removeItem,
        clearCart
      }}
    >
      {props.children}
    </cartContext.Provider>
  )
}

export function useCartContext() {
  return useContext(cartContext);
}
