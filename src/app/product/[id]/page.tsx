import { fetchProductById } from '@/lib/api'
import { notFound } from 'next/navigation'
import ProductDetailsContent from './ProductDetailsContent'
import Loading from './loading'

type Props = {
  params: { id: string }
}

export default async function ProductDetailsPage({ params }: Props) {
    const { id } = params
    const product = await fetchProductById(id)
    if (!product) return <Loading />
    if (!product?.id) return notFound()

    return (
        <ProductDetailsContent product={product} />
    )
}
