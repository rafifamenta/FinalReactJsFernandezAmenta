import './card.css'
import ItemCount from '../Itemcount/ItemCount'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'

function ItemDetail({ title, img, price, detail, onAddToCart, isInCart, stockUpdated }) {
  return (
    <div className='detail_container'>
      <div className='item-card'>
        <div className='item-card_header'>
          <h2>{title}</h2>
        </div>
        <div className='item-card_img'>
          <img src={img} alt={title} />
        </div>
        <div className='item-card_price'>
          <h3 className='item-card_price'>$ {price}</h3>
        </div>
        <div className='item-card_detail'>
          <h3 className='item-card_detail'>{detail}</h3>
        </div>
        {isInCart
          ? (
            <Link to='/cart'> <Button>Ir al carrito</Button></Link>
          )
          : (
            <ItemCount stock={stockUpdated} onAddToCart={onAddToCart} />
          )}
      </div>
    </div>
  )
}

export default ItemDetail
