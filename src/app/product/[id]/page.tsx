import { fetchProductById } from '@/lib/api'
import ProductDetailsContent from './ProductDetailsContent'
import { notFound } from 'next/navigation'
import Loading from './loading'

type Props = {
    params: {
        id: string
    }
}

export default async function ProductPage({ params }: Props) {
    const product = await fetchProductById(params.id)

    if (!product) return <Loading />
    if (!product?.id) return notFound()

    return (
        <main className="p-6 max-w-5xl mx-auto">
            <ProductDetailsContent product={product} />
        </main>
    )
}
