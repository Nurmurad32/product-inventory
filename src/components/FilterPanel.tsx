'use client'
import { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

type Props = {
  categories: string[]
  selectedCategories: string[]
  onCategoryChange: (categories: string[]) => void
  selectedRanges: string[]
  onRangeChange: (ranges: string[]) => void
}

const priceRanges = [
  { label: '$0–50', min: 0, max: 50 },
  { label: '$50–100', min: 50, max: 100 },
  { label: '$100–200', min: 100, max: 200 },
  { label: '$200+', min: 200, max: Infinity },
]

export default function FilterPanel({
  categories,
  selectedCategories,
  onCategoryChange,
  selectedRanges,
  onRangeChange,
}: Props) {
  const [open, setOpen] = useState(false)

  const toggle = (arr: string[], value: string, callback: (val: string[]) => void) => {
    const newArr = arr.includes(value)
      ? arr.filter((v) => v !== value)
      : [...arr, value]
    callback(newArr)
  }

  return (
    <div className="border border-[#fe5001] rounded p-4 lg:block">
      <div className="flex justify-between items-center lg:hidden lg:mb-4">
        <h3 className="text-lg font-semibold">Filters</h3>
        <button
          className="text-[#fe5001]"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </div>

      <div className={`${open ? 'block' : 'hidden'} lg:block`}>
        <div className="mb-4">
          <h4 className="text-md font-semibold mb-2 border-b border-b-[#fe5001] pb-1">Category</h4>
          <div className="flex flex-col gap-1">
            {categories.map((cat) => (
              <label key={cat} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(cat)}
                  onChange={() => toggle(selectedCategories, cat, onCategoryChange)}
                  className='accent-[#FE5001]'
                />
                {cat}
              </label>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-md font-semibold mb-2 border-b border-b-[#fe5001] pb-1">Price Range</h4>
          <div className="flex flex-col gap-1">
            {priceRanges.map((range) => (
              <label key={range.label} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectedRanges.includes(range.label)}
                  onChange={() => toggle(selectedRanges, range.label, onRangeChange)}
                  className='accent-[#FE5001]'
                />
                {range.label}
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
