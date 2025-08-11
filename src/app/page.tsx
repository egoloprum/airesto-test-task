import { redirect } from 'next/navigation'

import {
  BookingData,
  BookingDay4thOfApril,
  BookingDay5thOfApril,
  BookingDay6thOfApril,
  BookingDay7thOfApril,
  BookingDay8thOfApril
} from '@/entities/booking'
import {
  DateSegmentControl,
  ZoneSegmentControl
} from '@/features/segmentControls'
import { TimeTable } from '@/widgets/timetable'

interface SearchParams {
  date: string
  zone: string
}

export default async function Home({
  searchParams
}: {
  searchParams: Promise<SearchParams>
}) {
  const resolvedSearchParams = await searchParams
  const date = resolvedSearchParams?.date || ''
  const zone = resolvedSearchParams?.zone || ''

  const filteredZones = zone.split(',').filter(zone => zone.length !== 0)

  if (!date) {
    redirect('/?date=2025-04-04')
  }

  let bookingData: BookingData

  switch (date) {
    case '2025-04-04':
      bookingData = BookingDay4thOfApril
      break
    case '2025-04-05':
      bookingData = BookingDay5thOfApril
      break
    case '2025-04-06':
      bookingData = BookingDay6thOfApril
      break
    case '2025-04-07':
      bookingData = BookingDay7thOfApril
      break
    case '2025-04-08':
      bookingData = BookingDay8thOfApril
      break
    default:
      bookingData = BookingDay4thOfApril
      break
  }

  return (
    <main className="px-8 py-16">
      <h1 className="text-white text-2xl">Бронирования</h1>
      <DateSegmentControl />
      <ZoneSegmentControl />
      <TimeTable zone={filteredZones} bookingData={bookingData} />
    </main>
  )
}
