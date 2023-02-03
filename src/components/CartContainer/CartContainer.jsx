import React from 'react';
import { createOrder } from '../../services/firebase';
import { useCartContext } from '../../storage/cartContext';
import './cart.css';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import FormCheckout from '../FormCheckout/FormCheckout';

function CartContainer() {
  const [orderId, setOrderId] = useState()

  const {
    cart,
    addItem,
    clear,
    getTotalItemsInCart,
    getTotalPriceInCart,
    removeItem
  } = useCartContext();

  const navigateTo = useNavigate();

  const handleCheckout = () => {
    const items = cart.map(({ id, title, price, count }) => ({ id, title, price, count }))
    const order = {
      buyer: {
        name: "Rafaella",
        email: "rafi@gmail.com",
        phone: 3814631663,
        country: "Argentina",
        province: "Tucumán",
        adress: "Córdoba 797",
      },
      items: items,
      total: getTotalPriceInCart(),
      date: new Date()
    };

    createOrder(order).then((id) => {
      Swal.fire({
        title: '¡Tu compra fue realizada con éxito!',
        text: `Esta es tu orden de compra: ${id}`,
        icon: 'success',
        confirmButtonText: 'ok'
      })
      navigateTo(`/thank-you/${id}`);
    });

    async function sendOrder() {
      let id = await createOrder(order)
      setOrderId(id);
    }
    sendOrder();
  }

  if (orderId)
    return (
      <div>
        <h3>Gracias por tu compra</h3>
        <p> El id de tu compra es {orderId} </p>
      </div>

    )


  return (
    <>
      <h1 className='cart_title'>Tu carrito de compras</h1>

      <table className='cartList'>
        <thead className='cartList_head'>
          <tr className='cartList_row'>
            <th>Miniatura</th>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Remover</th>
            <th>Añadir</th>
            <th>Borrar producto</th>
          </tr>
        </thead>
        <tbody>


          {cart.map((item) => (
            <tr key={item.id} className='cartList_row'>
              <td>
                <img height={50} src={item.img} alt={item.title} />
              </td>
              <td>{item.title}</td>
              <td>$ {item.price}</td>
              <td>
                {item.count}
              </td>
              <td>
                <button className='btn_cart' onClick={() => removeItem(item.id)}>
                  -
                </button>
              </td>
              <td>
                <button className='btn_cart' onClick={() => addItem(item.id)}>
                  +
                </button>
              </td>
              <td>
                <button className='btn_cart' onClick={() => clear(item.id)}>
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className='cartList_title'>
        <h4>El total de tu compra es de <span className='total_price'> $ {getTotalPriceInCart()}</span></h4>
        <h4>por la compra de {getTotalItemsInCart()} articulos.</h4>
      </div>

      <FormCheckout onCheckout={handleCheckout} />
      <button className='btn_finish' onClick={() => handleCheckout()}>Finalizar compra</button>
    </>
  )
}

export default CartContainer;