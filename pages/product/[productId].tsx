import { useRouter } from "next/router"

const ProductItem = () => {
    const { query: {
        productId
    } } = useRouter()
    return (
        <div>
            <p>Page of the product: {productId}</p>
        </div>
    )
}

export default ProductItem
