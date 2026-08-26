import { Link } from 'react-router-dom'
import './NotFound.css'

function NotFound() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>This page doesn't exist.</p>
      <Link to="/" className="not-found-link">
        Back to Products
      </Link>
    </div>
  )
}

export default NotFound
