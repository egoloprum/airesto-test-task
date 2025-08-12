'use client'

import { motion } from 'framer-motion'
import { Sun } from 'lucide-react'
import { useTheme } from '../helpers/themeContext'

export const ThemeTogglerBtn = ({}) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.button
      className="rounded-md border border-stone-200 dark:border-stone-700 bg-yellow-50 hover:bg-yellow-100 active:bg-yellow-200 dark:bg-stone-700 dark:hover:bg-stone-600 dark:active:bg-stone-500 cursor-pointer p-2 h-8 aspect-square flex justify-center items-center text-white"
      onClick={toggleTheme}>
      <Sun className="w-5 h-5 text-black dark:text-white" />
    </motion.button>
  )
}
