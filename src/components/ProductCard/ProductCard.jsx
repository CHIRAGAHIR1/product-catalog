import { Link } from 'react-router-dom'
import './ProductCard.css'

function ProductCard({ product }) {
  return (
    <Link to={`/products/${product.id}`} className="product-card">
      <div className="product-card-image">
        <img src={product.image} alt={product.title} loading="lazy" />
      </div>
      <div className="product-card-body">
        <span className="product-card-category">{product.category}</span>
        <h3 className="product-card-title">{product.title}</h3>
        <span className="product-card-price">${product.price.toFixed(2)}</span>
      </div>
    </Link>
  )
}

export default ProductCard
