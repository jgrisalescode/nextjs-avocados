import { useRouter } from "next/router"

const ProductItem = () => {
    const { query: {
        productId
    }} = useRouter()
    return (
        <div>
            Page of the product: {productId}
        </div>
    )
}

export default ProductItem
