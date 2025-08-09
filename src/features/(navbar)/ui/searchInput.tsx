'use client'

import { Search } from 'lucide-react'

import { Input } from '@/shared/components'

export const SearchInput = ({}) => {
  return (
    <div className="relative w-72 text-white border-2 border-stone-700 rounded-md">
      <Search className="absolute top-1/2 -translate-y-1/2 left-2 w-4 h-4 text-gray-400" />
      <Input
        className="border-none w-full bg-stone-900 rounded-md pl-8 h-8"
        placeholder="⌘+Л поиск по имени"
      />
    </div>
  )
}
