'use client'

import { motion } from 'framer-motion'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

const zones = ['1 этаж', '2 этаж', 'Банкетный зал']

export const ZoneSegmentControl = ({}) => {
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()

  const currentZones = searchParams.get('zone')?.split(',') || []

  const clickHandler = (zone: string) => {
    const params = new URLSearchParams(searchParams.toString())

    let updatedZones = [...currentZones]

    if (updatedZones.includes(zone)) {
      updatedZones = updatedZones.filter(z => z !== zone)
    } else {
      updatedZones.push(zone)
    }

    if (updatedZones.length === 0) {
      params.delete('zone')
    } else {
      params.set('zone', updatedZones.join(','))
    }

    router.push(`${pathname}?${params.toString()}`)
  }

  const isActive = (zone: string) => currentZones.includes(zone)

  return (
    <div className="mt-4 flex flex-col gap-2">
      <p className="text-stone-500 dark:text-stone-">Отображаемые зоны</p>
      <div className="flex gap-4">
        {zones.map(zone => (
          <motion.button
            key={zone}
            className={`px-4 py-2 rounded-md cursor-pointer transition-colors border border-stone-200 dark:border-stone-700 dark:text-white ${
              isActive(zone)
                ? 'bg-blue-200 hover:bg-blue-300 active:bg-blue-400 dark:bg-blue-500 dark:hover:bg-blue-600 dark:active:bg-blue-700'
                : 'bg-yellow-50 hover:bg-yellow-100 active:bg-yellow-200 dark:bg-stone-800 dark:hover:bg-stone-700 dark:active:bg-stone-600'
            }`}
            onClick={() => clickHandler(zone)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}>
            <span>{zone}</span>
          </motion.button>
        ))}
      </div>
    </div>
  )
}
