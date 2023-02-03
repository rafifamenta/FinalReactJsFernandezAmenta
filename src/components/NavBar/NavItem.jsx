import { Link } from 'react-router-dom'

const NavItem = ({ to, children }) => {
  return (
    <Link to={to}>
      {children}
    </Link>
  )
}

export default NavItem
