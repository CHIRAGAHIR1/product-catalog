import { useEffect, useState } from 'react'
import { getProducts } from '../../services/productService'
import ProductCard from '../../components/ProductCard/ProductCard'
import Loader from '../../components/Loader/Loader'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import './ProductList.css'

function ProductList() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  useEffect(() => {
    loadProducts()
  }, [])

  async function loadProducts() {
    try {
      setLoading(true)
      setError(false)
      const data = await getProducts()
      setProducts(data)
    } catch (err) {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  // Category options are derived from the fetched products
  const categories = ['all', ...new Set(products.map((product) => product.category))]

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  if (loading) {
    return <Loader label="Loading products..." />
  }

  if (error) {
    return (
      <ErrorMessage
        message="Unable to load products. Please try again."
        onRetry={loadProducts}
      />
    )
  }

  return (
    <div className="product-list-page">

      <div className="product-list-controls">
        <input
          type="text"
          className="product-search"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-label="Search products"
        />
        <select
          className="product-category-select"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          aria-label="Filter by category"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category === 'all' ? 'All categories' : category}
            </option>
          ))}
        </select>
      </div>

      {filteredProducts.length === 0 ? (
        <p className="product-list-empty">No products match your search.</p>
      ) : (
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}

export default ProductList
