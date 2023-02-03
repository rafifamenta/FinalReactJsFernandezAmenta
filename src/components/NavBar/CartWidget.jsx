import React, { useContext } from 'react'
import { cartContext } from '../../storage/cartContext'

function CartWidget() {
  const context = useContext(cartContext)
  return (
    <>
      <div><i className='fas fa-shopping-cart' /></div>
      {context.getTotalItemsInCart() !== 0 ?
        <div>{context.getTotalItemsInCart()}</div>
        : null}
    </>
  )
}

export default CartWidget
