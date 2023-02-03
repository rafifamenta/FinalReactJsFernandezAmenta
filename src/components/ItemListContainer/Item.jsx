import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import './card.css'

function Item(props) {
  const { title, img, price, category, id, discount } = props.item

  return (
    <div className='item-card'>
      <div className='item-card_header'>
        <h2>{title}</h2>
      </div>
      <div className='item-card_img'>
        <img src={img} alt={title} />
      </div>
      <div className='item-card_price'>
        <h3 className='item-card_price'>$ {price}</h3>
        {
          discount
            ? <h5>Descuento: {discount}%</h5>
            : ''
        }
      </div>
      <div className='item-card_category'>
        <h3 className='item-card_category'>{category}</h3>
      </div>
      <Link to={`/detail/${id}`}>
        <Button padding='10px'>
          Comprar
        </Button>
      </Link>
      <br />
    </div>
  )
}

export default Item
