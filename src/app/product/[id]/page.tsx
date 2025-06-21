import { fetchProductById } from '@/lib/api'
import ProductDetailsContent from './ProductDetailsContent'
import { notFound } from 'next/navigation'

type Props = {
  params: {
    id: string
  }
}

export default async function ProductPage({ params }: Props) {
  const { id } = await Promise.resolve(params)

  const product = await fetchProductById(id)

  if (!product?.id) return notFound()

  return (
    <main className="p-6 max-w-5xl mx-auto">
      <ProductDetailsContent product={product} />
    </main>
  )
}
