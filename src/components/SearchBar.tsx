'use client'
import React from 'react'

type Props = {
  value: string
  onChange: (val: string) => void
}

export default function SearchBar({ value, onChange }: Props) {
  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search by title or description..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-2 border border-[#FE5001] focus:ring-[#FE5001] focus:border-[#FE5001] rounded"
      />
    </div>
  )
}
