import React from 'react'
import { useNavigate } from 'react-router-dom'
import './pagenotfound.css'

function PageNotFound() {
  const navigate = useNavigate()

  setTimeout(
    () => {
      navigate('/')
    }, 2700
  )

  return (
    <div className='than_you'>
      <h2>¡Gracias por tu compra!</h2>
      <h3>¡Te enviaremos un email con los datos de tu orden!</h3>
      <small className='redirection'>Serás redirigido a la homepage</small>
    </div >
  )
}

export default PageNotFound
