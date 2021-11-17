type Url = string

type TproductId = string

type TProductAttributes = {
    description: string
    shape: string
    hardiness: string
    taste: string
}

type TProduct = {
    id: TproductId
    name: string
    sku: string
    price: number
    image: Url
    atributes: TProductAttributes
}