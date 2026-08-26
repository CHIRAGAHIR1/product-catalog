import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getProductById } from '../../services/productService'
import Loader from '../../components/Loader/Loader'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import './ProductDetail.css'

function ProductDetail() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    loadProduct()
  }, [id])

  async function loadProduct() {
    try {
      setLoading(true)
      setError(false)
      const data = await getProductById(id)
      setProduct(data)
    } catch (err) {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return <Loader label="Loading product..." />
  }

  if (error) {
    return (
      <ErrorMessage
        message="We couldn't find this product. It may not exist or was removed."
        onRetry={loadProduct}
      />
    )
  }

  return (
    <div className="product-detail-page">
      <Link to="/" className="back-link">
        &larr; Back to Products
      </Link>

      <div className="product-detail">
        <div className="product-detail-image">
          <img src={product.image} alt={product.title} />
        </div>

        <div className="product-detail-info">
          <span className="product-detail-category">{product.category}</span>
          <h1 className="product-detail-title">{product.title}</h1>
          <span className="product-detail-price">${product.price.toFixed(2)}</span>
          <p className="product-detail-description">{product.description}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
