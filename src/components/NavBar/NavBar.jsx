import NavItem from './NavItem'
import CartWidget from './CartWidget'
import './navbar.css'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'

function NavBar(props) {
  function handleSubmit(evt) {
    evt.preventDefault()
    const user = evt.target.elements[0].value
    props.onLogIn(user)
  }

  return (
    <header>
      <nav>
        <ul className='nav-menu'>
          <NavItem to='/'><img className='imgLogo' src={'/imgs/logo.png'} alt='Logo Geek Sheep' /></NavItem>
          <Link to='/category/Conjuntos'>Conjuntos</Link>
          <Link to='/category/Remerones'>Remerones</Link>
          <Link to='/category/Pants'>Pants animados</Link>
          <form className='login' onSubmit={handleSubmit}>
            Iniciar sesión <></>
            <input name='user' />
          </form>
          <Button onClick={props.onLogOut}>Log Out</Button>
          <Link to='cart'><CartWidget /></Link>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar
