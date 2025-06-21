import { fetchProductById } from '@/lib/api'
import ProductDetailsContent from './ProductDetailsContent'
import { notFound } from 'next/navigation'

export default async function ProductPage({
  params,
}: {
  params: { id: string }
}) {
  const product = await fetchProductById(params.id)

  if (!product?.id) return notFound()

  return (
    <main className="p-6 max-w-5xl mx-auto">
      <ProductDetailsContent product={product} />
    </main>
  )
}
