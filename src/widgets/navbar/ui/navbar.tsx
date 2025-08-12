import Image from 'next/image'

import { LogOutBtn, SearchInput, ThemeTogglerBtn } from '@/features/(navbar)'

export const Navbar = ({}) => {
  return (
    <header className="p-4 px-8 border-b border-stone-200 dark:border-stone-700 dark:bg-stone-800 flex gap-4 justify-between">
      <Image src="/logo.svg" height={120} width={120} alt="logo.svg" />
      <div className="flex gap-4 items-center">
        <SearchInput />
        <ThemeTogglerBtn />
        <LogOutBtn />
      </div>
    </header>
  )
}
