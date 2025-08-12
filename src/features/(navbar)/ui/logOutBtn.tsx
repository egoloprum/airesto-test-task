'use client'

import { motion } from 'framer-motion'
import { LogOut } from 'lucide-react'

export const LogOutBtn = ({}) => {
  return (
    <motion.button className="rounded-md p-2 px-4 border border-stone-200 dark:border-stone-700 bg-yellow-50 hover:bg-yellow-100 active:bg-yellow-200 dark:bg-stone-700 dark:hover:bg-stone-600 dark:active:bg-stone-500 text-black dark:text-white flex items-center gap-2 cursor-pointer h-8">
      <LogOut className="w-5 h-5" />
      <span>Выйти</span>
    </motion.button>
  )
}
