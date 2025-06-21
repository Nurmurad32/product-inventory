'use client'

type Props = {
  sortKey: string
  sortOrder: 'asc' | 'desc'
  onSortChange: (key: string) => void
  onOrderToggle: () => void
}

export default function SortControls({
  sortKey,
  sortOrder,
  onSortChange,
  onOrderToggle,
}: Props) {
  return (
    <div className="flex justify-center gap-4 mb-4">
      <select
        value={sortKey}
        onChange={(e) => onSortChange(e.target.value)}
        className="px-3 py-2 border border-[#FE5001] rounded"
      >
        <option value="title">Sort by Title</option>
        <option value="price">Sort by Price</option>
      </select>
      <button
        onClick={onOrderToggle}
        className="px-3 py-2 bg-[#FE5001] text-white rounded"
      >
        Order: {sortOrder === 'asc' ? 'Asc' : 'Des'}
      </button>
    </div>
  )
}
