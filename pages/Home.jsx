import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <div className="home">
      <div className="hero">
        <h1>Welcome to MyShop</h1>
        <p>Discover amazing products at great prices</p>
        <Link to="/products" className="cta-button">
          Shop Now
        </Link>
      </div>
      
      <div className="features">
        <div className="feature">
          <i className="fas fa-truck"></i>
          <h3>Fast Delivery</h3>
          <p>Get your items delivered quickly</p>
        </div>
        <div className="feature">
          <i className="fas fa-shield-alt"></i>
          <h3>Secure Payment</h3>
          <p>Safe and secure payment options</p>
        </div>
        <div className="feature">
          <i className="fas fa-headset"></i>
          <h3>24/7 Support</h3>
          <p>We're here to help anytime</p>
        </div>
      </div>
    </div>
  )
}

export default Home