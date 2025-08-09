'use client'

import { motion } from 'framer-motion'

export const ZoneSegmentControl = ({}) => {
  return (
    <div className="mt-4 flex flex-col gap-2">
      <p className="text-stone-400">Отображаемые зоны</p>
      <div className="flex gap-4">
        <motion.button className="text-white px-4 py-2 rounded-md bg-stone-800 hover:bg-stone-900 active:bg-stone-950 cursor-pointer">
          <span>1 этаж</span>
        </motion.button>
        <motion.button className="text-white px-4 py-2 rounded-md bg-stone-800 hover:bg-stone-900 active:bg-stone-950 cursor-pointer">
          <span>2 этаж</span>
        </motion.button>
        <motion.button className="text-white px-4 py-2 rounded-md bg-stone-800 hover:bg-stone-900 active:bg-stone-950 cursor-pointer">
          <span>Банкетный зал</span>
        </motion.button>
      </div>
    </div>
  )
}
