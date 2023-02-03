import React, { useState } from 'react'
import './itemCount.css'

const ItemCount = ({ onAddToCart, stock }) => {
  const [count, setCount] = useState(1)

  const incrementCount = () => {
    if (count < stock)
      setCount(count + 1)
  }

  const decrementCount = () => {
    setCount(count - 1)
  }

  return (
    <div className='item-count'>
      <button className='item-count-button' disabled={count === 0} onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button className='item-count-button' onClick={incrementCount}>+</button>
      <button className='item-count-button' onClick={() => onAddToCart(count)} disabled={count === 0}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount
