import React from 'react'
import fetch from 'isomorphic-unfetch'
import Layout from '@components/Layout/Layout'
import KawaiHeader from '@components/KawaiHeader/KawaiHeader'
import ProductList from '@components/ProductList/ProductList'

const Home = ({ products } : { products: TProduct[]}) => {
  return (
    <Layout>
      <KawaiHeader />
      <ProductList products={products}/>
    </Layout>
  )
}

export const getServerSideProps = async () => {
  const response = await fetch('https://jgrisalescode-nextjs-avocados.vercel.app/api/avocados')
  const {data}: TAPIAvoResponse = await response.json()

  return {
    props: {
      products: data
    }
  }
}

export default Home
