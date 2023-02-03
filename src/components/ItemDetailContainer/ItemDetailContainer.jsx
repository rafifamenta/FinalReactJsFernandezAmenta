import React, { useState, useEffect, useContext } from 'react'
import { getProduct } from '../../services/firebase'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { cartContext } from '../../storage/cartContext'

function ItemDetailContainer() {
  const [itemDetail, setItemDetail] = useState([])
  const [isInCart, setIsInCart] = useState(false)

  const { itemid } = useParams()

  const { cart, addToCart } = useContext(cartContext)

  function handleAddToCart(count) {
    setIsInCart(true)
    const itemDetailAndCount = { ...itemDetail, count }
    addToCart(itemDetailAndCount)
  }

  function checkStock() {
    let itemInCart = cart.find(item => item.id === itemDetail.id);
    let stockUpdated = itemDetail.stock;
    if (itemInCart) {
      stockUpdated = itemDetail.stock - itemInCart.count;
    }
    return stockUpdated;
  }

  useEffect(() => {
    getProduct(itemid).then((respuesta) => {
      setItemDetail(respuesta)
    })
  }, [])

  return (
    <ItemDetail
      isInCart={isInCart}
      onAddToCart={handleAddToCart}
      title={itemDetail.title}
      img={itemDetail.img}
      price={itemDetail.price}
      detail={itemDetail.detail}
      category={itemDetail.category}
      stockUpdated={checkStock()}
    />
  )
}

export default ItemDetailContainer
