'use client'

import { motion } from 'framer-motion'
import { Sun } from 'lucide-react'

export const ThemeTogglerBtn = ({}) => {
  return (
    <motion.button className="rounded-md bg-stone-700 hover:bg-stone-600 active:bg-stone-500 cursor-pointer p-2 h-8 aspect-square flex justify-center items-center text-white">
      <Sun className="w-5 h-5" />
    </motion.button>
  )
}
