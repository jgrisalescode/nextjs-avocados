import { useState, useEffect } from 'react'
import { useRouter } from "next/router"

const ProductItem = () => {
    const [product, setProduct] = useState<TProduct>()
    
    const { query: {
        productId
    } } = useRouter()

    useEffect(() => {
        if (productId) {
            window
                .fetch(`/api/avocados/${productId}`)
                .then(response => response.json())
                .then(data => setProduct(data))
        }
    }, [productId])

    return (
        <div>
            <p>Page of the product: {product?.name}</p>
        </div>
    )
}

export default ProductItem
