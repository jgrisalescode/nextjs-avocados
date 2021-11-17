import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar/Navbar'

const Home = () => {
  const [productsList, setProductsList] = useState<TProduct[]>([])

  useEffect(() => {
    window
      .fetch('/api/avocados')
      .then(response => response.json())
      .then(({ data, length }) => {
        setProductsList(data)
      })
  }, [])

  return (
    <div>
      <Navbar />
      <h1>Hallo Welt</h1>
      {productsList.map(product => (
        <div key={product.id}> {product.name}</div>
      ))}
    </div>
  )
}

export default Home
