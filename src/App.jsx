import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import ProductList from './pages/ProductList/ProductList'
import ProductDetail from './pages/ProductDetail/ProductDetail'
import NotFound from './pages/NotFound/NotFound'

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  )
}

export default App
