import { LogOutBtn, SearchInput, ThemeTogglerBtn } from '@/features/(navbar)'
import { Logo } from '@/shared/images'

export const Navbar = ({}) => {
  return (
    <header className="p-4 sm:px-8 border-b border-stone-200 dark:border-stone-700 bg-amber-50 dark:bg-stone-800 flex flex-wrap gap-4 justify-between">
      <Logo className="w-40 md:w-30 fill-black dark:fill-white" />
      <div className="flex flex-wrap gap-4 items-center">
        <SearchInput />
        <ThemeTogglerBtn />
        <LogOutBtn />
      </div>
    </header>
  )
}
