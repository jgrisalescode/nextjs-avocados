import { useState, useEffect } from 'react'
import Layout from '@components/Layout/Layout'
import KawaiHeader from '@components/KawaiHeader/KawaiHeader'
import ProductList from '@components/ProductList/ProductList'

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
    <Layout>
      <KawaiHeader />
      <ProductList products={productsList}/>
    </Layout>
  )
}

export default Home
