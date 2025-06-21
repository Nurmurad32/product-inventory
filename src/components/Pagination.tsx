'use client'

type Props = {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export default function Pagination({ currentPage, totalPages, onPageChange }: Props) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <div className="flex justify-center mt-6 gap-2 flex-wrap ">
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="px-3 py-1 border border-[#FE5001] rounded disabled:opacity-50 cursor-pointer hover:bg-[#fe5001] hover:text-white"
      >
        Prev
      </button>

      {pages.map((p) => (
        <button
          key={p}
          onClick={() => onPageChange(p)}
          className={`px-3 py-1 rounded cursor-pointer ${
            p === currentPage ? 'bg-[#fe5001] text-white' : 'border border-[#FE5001] hover:bg-[#fe5001] hover:text-white'
          }`}
        >
          {p}
        </button>
      ))}

      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="px-3 py-1 border border-[#FE5001] rounded disabled:opacity-50 cursor-pointer hover:bg-[#fe5001] hover:text-white"
      >
        Next
      </button>
    </div>
  )
}
