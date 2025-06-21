/* eslint-disable @next/next/no-img-element */


import { fetchProductById } from '@/lib/api'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Link from 'next/link'
import { IoMdArrowRoundBack } from 'react-icons/io'

type Props = {
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await Promise.resolve(params)

  const product = await fetchProductById(id)

  return {
    title: `${product.title} - Product Details`,
    description: product.description,
  }
}

// ✅ Page Component
export default async function ProductPreviewPage({ params }: Props) {
  const { id } = await Promise.resolve(params)

  const product = await fetchProductById(id)

  if (!product?.id) return notFound()

  return (
    <main className="p-6 max-w-7xl mx-auto">
      <Link href={"/"}>
        <div
          className="text-md mb-6 bg-[#FE5001] p-1 px-2 rounded-md text-[#1A0E1C] cursor-pointer text-right flex items-center justify-end hover:text-[#1a0e1c8a]"
        >
          <p><IoMdArrowRoundBack className='text-[14px] mr-1' /></p>
          <p>Go Back</p>
        </div>
      </Link>

      <div className="lg:flex gap-8">
        {/* Image */}
        <div className="lg:w-1/2 mb-6 lg:mb-0">
          <img
            src={product.images?.[0]}
            alt={product.title}
            className="w-full h-auto rounded border"
          />
        </div>

        {/* Product Info */}
        <div className="lg:w-1/2">
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-xl text-[#fe5001] font-semibold mb-4">${product.price}</p>
          <p className="mb-6 text-gray-700">{product.description}</p>
          <p className="text-sm text-gray-500">Category: {product.category.name}</p>
        </div>
      </div>
    </main>
  )
}
