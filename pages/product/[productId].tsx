
import {GetStaticProps} from 'next'

import Layout from '@components/Layout/Layout'
import ProductSummary from '@components/ProductSummary/ProductSummary'

// This is a dynamic page, so the id should be generated
// build time -- nextjs -- shoud knos before wich id it needs using getStaticPaths

export const getStaticPaths = async () => {
  const response = await fetch('https://jgrisalescode-nextjs-avocados.vercel.app/api/avocados')
  const { data: products }: TAPIAvoResponse = await response.json()

  // Transform the response to this object, exactly this
  const paths = products.map((product) => ({
    params: {
      productId: product.id
    }
  }))
  
  return {
    paths,
    // incremental static generation
    // If the page is not present will be 404
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => { // Only in pages
  const productId = params?.productId as string
  const response = await fetch(`https://jgrisalescode-nextjs-avocados.vercel.app/api/avocados/${productId}`)
  const product: TProduct = await response.json()

  return {
    props: {
      product
    }
  }
}

const ProductPage = ({ product }: { product: TProduct }) => {
  return (
    <Layout>
      {product == null ? null : <ProductSummary product={product} />}
    </Layout>
  )
}

export default ProductPage
