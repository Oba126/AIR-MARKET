import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="navbar-logo">MyShop</Link>
      </div>
      <div className="navbar-menu">
        <Link to="/" className="navbar-item">Home</Link>
        <Link to="/products" className="navbar-item">Products</Link>
        <Link to="/cart" className="navbar-item">
          Cart ({cartCount})
        </Link>
      </div>
    </nav>
  )
}

export default Navbar