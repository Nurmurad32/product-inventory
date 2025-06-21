'use client'
import Link from 'next/link'
import { Product } from '@/types/product'
import Loading from '@/app/loading'

export default function ProductTable({ products }: { products: Product[] }) {

  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full border border-[#fe5001] rounded-md">
        <thead className="bg-[#fe5001] text-white border border-[#fe5001] rounded-md">
          <tr className='rounded-md'>
            <th className="text-left px-4 py-2">Image</th>
            <th className="text-left px-4 py-2">Title</th>
            <th className="text-left px-4 py-2">Price</th>
            <th className="text-left px-4 py-2">Category</th>
          </tr>
        </thead>
        <tbody className='border border-[#FE5001]'>
          {!products ? <Loading />
            : products.map((product, index) => (
              <tr key={product.id} className={index % 2 === 0 ? 'bg-white' : 'bg-[#fe500117] rounded-md'}>
                <td className="px-4 py-2">
                  <img src={product.images?.[0]} alt={product.title} width={35} height={35} />
                </td>

                <td className="p-2 lg:px-4 lg:py-2 ">
                  <Link href={`/product/${product.id}`} className="text-[11px] lg:text-[16px] hover:text-[#1a0e1c8a]">
                    {product.title}
                  </Link>
                </td>
                <td className="px-4 py-2">${product.price}</td>
                <td className="px-4 py-2"><span className='text-[12px] bg-[#FE5001] p-1 rounded-md text-white'>{product.category.name}</span></td>
              </tr>
            ))}
        </tbody>
      </table>

    </div>
  )
}
