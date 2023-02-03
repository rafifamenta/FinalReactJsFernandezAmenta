import { useState, useEffect } from 'react'
import Item from './Item'
import { getProductsByCategory, getProducts } from '../../services/firebase'

import Flex from '../Flex/Flex'
import { useParams } from 'react-router-dom'
import Loader from '../Loader/Loader'

function ItemListContainer() {
  const [listproducts, setListProducts] = useState([])

  const { categoryid } = useParams()

  useEffect(() => {
    if (!categoryid) {
      getProducts()
        .then((respuesta) => {
          setListProducts(respuesta)
        })
        .catch((error) => alert(error))
    } else {
      getProductsByCategory(categoryid).then((respuesta) => {
        setListProducts(respuesta)
      })
    }
  }, [categoryid])

  return (
    <>
      {listproducts.length === 0
        ? (
          <h3><Loader /></h3>
        )
        : (
          <Flex>
            {listproducts.map((iteratedItem) => {
              return <Item key={iteratedItem.id} item={iteratedItem} />
            })}
          </Flex>
        )}
    </>
  )
}

export default ItemListContainer