'use client'
import { useEffect, useState } from 'react'
import { fetchProducts } from '@/lib/api'
import { Product } from '@/types/product'
import ProductTable from '@/components/ProductTable'
import SearchBar from '@/components/SearchBar'
import SortControls from '@/components/SortControls'
import Pagination from '@/components/Pagination'
import FilterPanel from '@/components/FilterPanel'
import Loading from './loading'

const ITEMS_PER_PAGE = 10

export default function ProductInventory() {
  const [products, setProducts] = useState<Product[]>([])
  const [filtered, setFiltered] = useState<Product[]>([])
  const [search, setSearch] = useState('')
  const [sortKey, setSortKey] = useState('title')
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedRanges, setSelectedRanges] = useState<string[]>([])

  useEffect(() => {
    fetchProducts({ offset: 0, limit: 100 })
      .then(setProducts)
      .catch((err) => console.error(err))
  }, [])

  const allCategories = Array.from(new Set(products.map(p => p.category.name)))

  useEffect(() => {
    let result = [...products]

    // Filter by category
    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category.name))
    }

    // Filter by price range
    if (selectedRanges.length > 0) {
      result = result.filter((p) =>
        selectedRanges.some((range) => {
          if (range === '$0–50') return p.price >= 0 && p.price <= 50
          if (range === '$50–100') return p.price > 50 && p.price <= 100
          if (range === '$100–200') return p.price > 100 && p.price <= 200
          if (range === '$200+') return p.price > 200
          return true
        })
      )
    }

    // Filter by search
    if (search.trim()) {
      const q = search.toLowerCase()
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      )
    }

    // Sort
    result.sort((a, b) => {
      const valA = a[sortKey as keyof Product]
      const valB = b[sortKey as keyof Product]

      if (typeof valA === 'string' && typeof valB === 'string') {
        return sortOrder === 'asc'
          ? valA.localeCompare(valB)
          : valB.localeCompare(valA)
      }

      if (typeof valA === 'number' && typeof valB === 'number') {
        return sortOrder === 'asc' ? valA - valB : valB - valA
      }

      return 0
    })

    setCurrentPage(1)
    setFiltered(result)
  }, [products, selectedCategories, selectedRanges, search, sortKey, sortOrder])

  // Pagination
  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE)
  const start = (currentPage - 1) * ITEMS_PER_PAGE
  const paginatedProducts = filtered.slice(start, start + ITEMS_PER_PAGE)

  if(!products) return <Loading />

  return (
    <main className="p-3 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center bg-[#FE5001] p-1 rounded-md text-[#1A0E1C]">Product Inventory</h1>

      {/* Top bar: search + sort */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">
        <SortControls
          sortKey={sortKey}
          sortOrder={sortOrder}
          onSortChange={setSortKey}
          onOrderToggle={() =>
            setSortOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'))
          }
        />
        <SearchBar value={search} onChange={setSearch} />
      </div>

      {/* Main layout: sidebar + product table */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Filters (left sidebar) */}
        <div className="lg:w-1/4">
          <FilterPanel
            categories={allCategories}
            selectedCategories={selectedCategories}
            onCategoryChange={setSelectedCategories}
            selectedRanges={selectedRanges}
            onRangeChange={setSelectedRanges}
          />
        </div>

        {/* Table + Pagination */}
        <div className="lg:w-3/4 mb-5">
          <ProductTable products={paginatedProducts} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </main>
  )
}
