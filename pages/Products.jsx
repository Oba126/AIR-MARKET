import { useState } from 'react'
import './Products.css'

function Products({ addToCart }) {
  const [products] = useState([
    {
      id: 1,
      name: 'Wireless Headphones',
      price: 99.99,
      image: 'https://via.placeholder.com/200',
      description: 'High-quality wireless headphones with noise cancellation'
    },
    {
      id: 2,
      name: 'Smartwatch',
      price: 199.99,
      image: 'https://via.placeholder.com/200',
      description: 'Feature-rich smartwatch with health tracking'
    },
    {
      id: 3,
      name: 'Laptop Backpack',
      price: 49.99,
      image: 'https://via.placeholder.com/200',
      description: 'Durable laptop backpack with multiple compartments'
    },
    {
      id: 4,
      name: 'Bluetooth Speaker',
      price: 79.99,
      image: 'https://via.placeholder.com/200',
      description: 'Portable bluetooth speaker with amazing sound quality'
    }
  ])

  return (
    <div className="products">
      <h2>Our Products</h2>
      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="description">{product.description}</p>
            <p className="price">${product.price}</p>
            <button
              className="add-to-cart"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products