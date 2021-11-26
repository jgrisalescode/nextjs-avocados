import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import Layout from '@components/Layout/Layout'
import ProductSummary from '@components/ProductSummary/ProductSummary'

const ProductPage = () => {
  const { query } = useRouter()
  const [product, setProduct] = useState<TProduct | null>(null)

  useEffect(() => {
    if (query) {
      window
        .fetch(`/api/avocados/${query.productId}`)
        .then((response) => response.json())
        .then((data: TProduct) => {
          setProduct(data)
        })
    }
  }, [query.productId])

  return (
    <Layout>
      {product == null ? null : <ProductSummary product={product} />}
    </Layout>
  )
}

export default ProductPage
