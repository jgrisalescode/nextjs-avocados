import React from 'react'
import fetch from 'isomorphic-unfetch'
import Layout from '@components/Layout/Layout'
import KawaiHeader from '@components/KawaiHeader/KawaiHeader'
import ProductList from '@components/ProductList/ProductList'

export const getStaticProps = async () => { // Only in pages
  const response = await fetch('https://jgrisalescode-nextjs-avocados.vercel.app/api/avocados')
  const {data: products}: TAPIAvoResponse = await response.json()

  return {
    props: {
      products
    }
  }
}

const Home = ({ products } : { products: TProduct[]}) => {
  return (
    <Layout>
      <KawaiHeader />
      <ProductList products={products}/>
    </Layout>
  )
}

export default Home
