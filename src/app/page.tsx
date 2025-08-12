import axios from 'axios'
import { redirect } from 'next/navigation'

import { BookingData, BookingDay4thOfApril } from '@/entities/booking'
import {
  DateSegmentControl,
  ZoneSegmentControl
} from '@/features/segmentControls'
import { TimeTable } from '@/widgets/timetable'

interface SearchParams {
  date: string
  zone: string
}

async function fetchBookingData(
  date: string,
  zone: string
): Promise<BookingData> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
    const response = await axios.get(
      `${baseUrl}/api/booking/get?date=${date}${zone ? `&zone=${zone}` : ''}`
    )
    return response.data
  } catch {
    return BookingDay4thOfApril
  }
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

  const bookingData = await fetchBookingData(date, zone)

  return (
    <main className="px-4 sm:px-8 py-16">
      <h1 className="dark:text-white text-2xl font-semibold">Бронирования</h1>
      <DateSegmentControl />
      <ZoneSegmentControl />
      <TimeTable zone={filteredZones} bookingData={bookingData} />
    </main>
  )
}
