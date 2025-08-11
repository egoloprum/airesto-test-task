import { NextResponse } from 'next/server'

import {
  BookingDay4thOfApril,
  BookingDay5thOfApril,
  BookingDay6thOfApril,
  BookingDay7thOfApril,
  BookingDay8thOfApril
} from '@/entities/booking'
import { BookingData } from '@/entities/booking'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const date = searchParams.get('date')
  const zone = searchParams.get('zone')

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

  // Filter tables by zone if zone parameter is provided
  if (zone) {
    const zones = zone.split(',')
    bookingData = {
      ...bookingData,
      tables: bookingData.tables.filter(table => zones.includes(table.zone))
    }
  }

  return NextResponse.json(bookingData)
}
