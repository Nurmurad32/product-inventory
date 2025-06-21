import { fetchProductById } from '@/lib/api'
import ProductDetailsContent from './ProductDetailsContent'
import { notFound } from 'next/navigation'

export default async function ProductPage({ params }: {params: Promise<{ id: string }>}) {
    const { id } = await params
  const product = await fetchProductById(id)

  if (!product?.id) return notFound()

  return (
    <main className="p-3 max-w-7xl mx-auto">
      <ProductDetailsContent product={product} />
    </main>
  )
}
