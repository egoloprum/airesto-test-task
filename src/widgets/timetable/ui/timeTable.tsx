import { BookingData } from '@/entities/booking'

export const TimeTable = ({
  zone,
  bookingData
}: {
  zone: string[]
  bookingData: BookingData
}) => {
  return <div className="text-white mt-8">{zone}</div>
}
