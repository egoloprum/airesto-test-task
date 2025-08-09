'use client'

import { motion } from 'framer-motion'

export const DateSegmentControl = ({}) => {
  return (
    <div className="mt-8 flex flex-col gap-2">
      <p className="text-stone-400">Дата</p>
      <div className="flex gap-4">
        <motion.button className="text-white px-4 py-2 rounded-md bg-stone-800 hover:bg-stone-900 active:bg-stone-950 flex flex-col items-start cursor-pointer">
          <span className="font-medium">4 апреля</span>
          <span>сегодня</span>
        </motion.button>
        <motion.button className="text-white px-4 py-2 rounded-md bg-stone-800 hover:bg-stone-900 active:bg-stone-950 flex flex-col items-start cursor-pointer">
          <span className="font-medium">5 апреля</span>
          <span>завтра</span>
        </motion.button>
        <motion.button className="text-white px-4 py-2 rounded-md bg-stone-800 hover:bg-stone-900 active:bg-stone-950 flex flex-col items-start cursor-pointer">
          <span className="font-medium">6 апреля</span>
          <span>воскресенье</span>
        </motion.button>
        <motion.button className="text-white px-4 py-2 rounded-md bg-stone-800 hover:bg-stone-900 active:bg-stone-950 flex flex-col items-start cursor-pointer">
          <span className="font-medium">7 апреля</span>
          <span>понедельник</span>
        </motion.button>
        <motion.button className="text-white px-4 py-2 rounded-md bg-stone-800 hover:bg-stone-900 active:bg-stone-950 flex flex-col items-start cursor-pointer">
          <span className="font-medium">8 апреля</span>
          <span>вторник</span>
        </motion.button>
      </div>
    </div>
  )
}
