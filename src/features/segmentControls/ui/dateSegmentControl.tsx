'use client'

import { motion } from 'framer-motion'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

const dates = [
  {
    date: '2025-04-04',
    content: '4 апреля',
    addContent: 'сегодня'
  },
  {
    date: '2025-04-05',
    content: '5 апреля',
    addContent: 'завтра'
  },
  {
    date: '2025-04-06',
    content: '6 апреля',
    addContent: 'воскресенье'
  },
  {
    date: '2025-04-07',
    content: '7 апреля',
    addContent: 'понедельник'
  },
  {
    date: '2025-04-08',
    content: '8 апреля',
    addContent: 'вторник'
  }
]

export const DateSegmentControl = ({}) => {
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()

  const currentDate = searchParams.get('date')

  const clickHandler = (date: string) => {
    const params = new URLSearchParams(searchParams.toString())

    if (currentDate !== date) {
      params.set('date', date)
    }

    router.push(`${pathname}?${params.toString()}`)
  }

  const isActive = (date: string) => currentDate === date

  return (
    <div className="mt-8 flex flex-col gap-2">
      <p className="text-stone-400">Дата</p>
      <div className="flex gap-4">
        {dates.map(item => (
          <motion.button
            key={item.date}
            className={`px-4 py-2 rounded-md flex flex-col items-start cursor-pointer transition-colors text-white ${
              isActive(item.date)
                ? 'bg-blue-500 hover:bg-blue-600 active:bg-blue-700'
                : 'bg-stone-800 hover:bg-stone-700 active:bg-stone-600'
            }`}
            onClick={() => clickHandler(item.date)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}>
            <span className="font-medium">{item.content}</span>
            <span>{item.addContent}</span>
          </motion.button>
        ))}
      </div>
    </div>
  )
}
