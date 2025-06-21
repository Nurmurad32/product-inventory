'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Product } from '@/types/product'
import { IoMdArrowRoundBack } from 'react-icons/io'

export default function ProductDetailsContent({ product }: { product: Product }) {
    const [mainImage, setMainImage] = useState(product.images?.[0])

    return (
        <main className="p-6 max-w-7xl mx-auto">
            <div
                className="text-md mb-6 bg-[#FE5001] p-1 px-2 rounded-md text-[#1A0E1C] cursor-pointer text-right flex items-center justify-end hover:text-[#1a0e1c8a]"
                onClick={() => history.back()}
            >
                <p><IoMdArrowRoundBack className='text-[14px] mr-1' /></p>
                <p>  Go Back</p>
            </div>

            <nav className="text-gray-600 text-sm mb-4">
                <span>Home</span> /{' '}
                <span className="capitalize">{product.category.name}</span> /{' '}
                <span>{product.title}</span>
            </nav>

            <div className="lg:flex gap-8">
                {/* Image Gallery */}
                <div className="lg:w-1/2">
                    <img
                        src={mainImage}
                        alt={product.title}
                        className="w-full h-auto rounded-lg mb-4 border"
                    />

                    <div className="flex gap-2">
                        {product.images.slice(0, 4).map((img, idx) => (
                            <img
                                key={idx}
                                src={img}
                                alt={`${product.title} ${idx + 1}`}
                                onClick={() => setMainImage(img)}
                                className={`w-20 h-20 object-cover rounded border cursor-pointer transition hover:scale-105 ${img === mainImage ? 'ring-2 ring-[#FE5001]' : ''
                                    }`}
                            />
                        ))}
                    </div>
                </div>

                {/* Product Info */}
                <div className="lg:w-1/2">
                    <h1 className="text-3xl font-bold mb-2 mt-6 lg:mt-0">{product.title}</h1>
                    <p className="text-xl text-[#FE5001] font-semibold mb-4">${product.price}</p>
                    <p className="mb-4 text-gray-700">{product.description}</p>

                    <div className="mt-6">
                        <Link
                            href={`/product/${product.id}/preview`}
                            target="_blank"
                            className="text-[#FE5001] border border-[#FE5001] px-6 py-2 rounded-lg hover:bg-[#FE5001] hover:text-white transition"
                        >
                            Preview (SEO version)
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
}
