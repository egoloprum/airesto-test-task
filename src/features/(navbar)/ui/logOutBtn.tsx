'use client'

import { motion } from 'framer-motion'
import { LogOut } from 'lucide-react'

export const LogOutBtn = ({}) => {
  return (
    <motion.button className="rounded-md p-2 px-4 bg-stone-700 hover:bg-stone-600 active:bg-stone-500 flex items-center gap-2 cursor-pointer h-8 text-white">
      <LogOut className="w-5 h-5" />
      <span>Выйти</span>
    </motion.button>
  )
}
