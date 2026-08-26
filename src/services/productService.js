const BASE_URL = 'https://fakestoreapi.com'

// Fetches the full product list
export async function getProducts() {
  const response = await fetch(`${BASE_URL}/products`)

  if (!response.ok) {
    throw new Error('Failed to fetch products')
  }

  return response.json()
}

// Fetches a single product by its ID
export async function getProductById(id) {
  const response = await fetch(`${BASE_URL}/products/${id}`)

  if (!response.ok) {
    throw new Error('Failed to fetch product')
  }

  const data = await response.json()

  // The Fake Store API returns null (with a 200 status) for an unknown ID
  if (!data) {
    throw new Error('Product not found')
  }

  return data
}
