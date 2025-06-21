import { Product } from "@/types/product";

const BASE_URL = "https://api.escuelajs.co/api/v1/products"

export async function fetchProducts({
    offset = 0,
    limit = 10,
}: {
    offset?: number
    limit?: number
}): Promise<Product[]> {
    const res = await fetch(`${BASE_URL}?offset=${offset}&limit=${limit}`)

    if (!res.ok) throw new Error('Failed to fetch products')

    return res.json()
}

export async function fetchProductById(id: string): Promise<Product> {
    const res = await fetch(`${BASE_URL}/${id}`)
    if (!res.ok) throw new Error("Failed to fetch product")
    return res.json()
}