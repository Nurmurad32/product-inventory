// src/app/product/[id]/page.tsx

import { fetchProductById } from '@/lib/api'
import ProductDetailsContent from './ProductDetailsContent'
import { notFound } from 'next/navigation'

type ProductPageProps = {
  params: {
    id: string | number
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
    const { id } = await params
  const product = await fetchProductById(id)

  if (!product?.id) return notFound()

  return (
    <main className="p-6 max-w-5xl mx-auto">
      <ProductDetailsContent product={product} />
    </main>
  )
}
