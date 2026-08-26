import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="header-logo" aria-label="Product Catalog home">
          <span className="header-logo-mark">PC</span>
          <span>Product Catalog</span>
        </Link>
      </div>
    </header>
  )
}

export default Header
