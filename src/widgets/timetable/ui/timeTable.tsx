import { Phone } from 'lucide-react'

import { BookingData } from '@/entities/booking'

import {
  CalculateEventHeight,
  CalculateEventPosition,
  CELL_HEIGHT,
  CELL_WIDTH,
  FormatISOTimeToHHMM,
  GenerateTimeSlots,
  HEADER_HEIGHT,
  HEADER_WIDTH,
  OFFSET_MARGIN_LEFT,
  OFFSET_Z_INDEX,
  StatusBadges
} from '../helpers/utils'

interface TimeTableProps {
  zone: string[]
  bookingData: BookingData
}

export const TimeTable = ({ zone, bookingData }: TimeTableProps) => {
  if (!zone.length) {
    return <div>select zone</div>
  }

  const timeSlots = GenerateTimeSlots(bookingData.restaurant)
  const tablesInSelectedZones = zone.flatMap(eachZone =>
    bookingData.tables.filter(table => table.zone === eachZone)
  )

  const positionedEvents = tablesInSelectedZones.flatMap(
    (table, tableIndex) => {
      const events: {
        id: string
        x: number
        y: number
        start: string
        end: string
        height: number
        offsetTop: number
        isOrder: boolean
        isReservation: boolean
        status:
          | 'New'
          | 'Bill'
          | 'Closed'
          | 'Banquet'
          | 'Живая очередь'
          | 'Новая'
          | 'Заявка'
          | 'Открыт'
          | 'Закрыт'
        reservationId: number
        reservationName: string
        reservationPhoneNumber: string
        reservationPeopleNumber: number
        orderLabel: string
      }[] = []

      table.orders.forEach(order => {
        const { slotIndex: yIndex, offsetTop } = CalculateEventPosition(
          order.start_time,
          bookingData.restaurant.opening_time
        )
        const height = CalculateEventHeight(order.start_time, order.end_time)

        if (yIndex !== -1) {
          events.push({
            id: `order-${order.id}`,
            x: tableIndex,
            y: yIndex,
            offsetTop,
            start: FormatISOTimeToHHMM(order.start_time),
            end: FormatISOTimeToHHMM(order.end_time),
            height,
            isOrder: true,
            isReservation: false,
            status: order.status,
            orderLabel: order.status === 'Banquet' ? 'Банкет' : 'Заказ',
            reservationId: 0,
            reservationName: '',
            reservationPhoneNumber: '',
            reservationPeopleNumber: 0
          })
        }
      })

      table.reservations.forEach(res => {
        const { slotIndex: yIndex, offsetTop } = CalculateEventPosition(
          res.seating_time,
          bookingData.restaurant.opening_time
        )
        const height = CalculateEventHeight(res.seating_time, res.end_time)

        if (yIndex !== -1) {
          events.push({
            id: `reservation-${res.id}`,
            x: tableIndex,
            y: yIndex,
            offsetTop,
            start: FormatISOTimeToHHMM(res.seating_time),
            end: FormatISOTimeToHHMM(res.end_time),
            height,
            isOrder: false,
            isReservation: true,
            status: res.status,
            orderLabel: '',
            reservationId: res.id,
            reservationName: res.name_for_reservation,
            reservationPhoneNumber: res.phone_number,
            reservationPeopleNumber: res.num_people
          })
        }
      })

      return events
    }
  )

  const stackedEvents = positionedEvents.map(ev => {
    const overlappingEvents = positionedEvents.filter(
      e =>
        e.x === ev.x &&
        ev.y * CELL_HEIGHT + ev.offsetTop <
          e.y * CELL_HEIGHT + e.offsetTop + e.height &&
        ev.y * CELL_HEIGHT + ev.offsetTop + ev.height >
          e.y * CELL_HEIGHT + e.offsetTop
    )

    overlappingEvents.sort((a, b) => {
      const aStart = a.y * CELL_HEIGHT + a.offsetTop
      const bStart = b.y * CELL_HEIGHT + b.offsetTop
      return aStart - bStart
    })

    const indexInOverlap = overlappingEvents.findIndex(e => e.id === ev.id)

    return {
      ...ev,
      offsetX: indexInOverlap > 0 ? indexInOverlap * OFFSET_MARGIN_LEFT : 0,
      zIndex: indexInOverlap > 0 ? indexInOverlap * OFFSET_Z_INDEX : 0,
      width:
        indexInOverlap > 0
          ? CELL_WIDTH - indexInOverlap * OFFSET_MARGIN_LEFT
          : CELL_WIDTH
    }
  })

  return (
    <div className={`mt-8 w-full scrollbar`}>
      <div className="text-white inline-block relative">
        {/* Header row */}
        <div className="flex sticky top-0 z-20">
          <div className="h-10 w-8"></div>
          {tablesInSelectedZones.map(table => (
            <div
              key={table.id}
              className={`h-[${CELL_HEIGHT}px] w-[${CELL_WIDTH}px] flex flex-col items-center justify-center text-xs text-stone-400`}>
              <p className="flex gap-1">
                <span>
                  #<b className="text-white">{table.number}</b>
                </span>
                <span>{table.capacity} чел</span>
              </p>
              <p className="truncate max-w-12">{table.zone}</p>
            </div>
          ))}
        </div>

        {/* Body rows */}
        <div className={`h-[${timeSlots.length * CELL_HEIGHT}px]`}>
          {/* Time labels */}
          {timeSlots.map((slot, index) => (
            <div
              key={slot.time}
              className="text-xs text-stone-400 w-fit"
              style={{
                top: `${(index + 1) * CELL_HEIGHT}px`,
                height: `${CELL_HEIGHT}px`
              }}>
              <span>{slot.time}</span>
            </div>
          ))}

          {/* Grid cells */}
          {tablesInSelectedZones.map((table, tableIndex) => (
            <div
              key={table.id}
              className="absolute top-0 border-r border-stone-800"
              style={{
                left: `${HEADER_WIDTH + tableIndex * CELL_WIDTH}px`,
                width: `${CELL_WIDTH}px`,
                height: `${timeSlots.length * CELL_HEIGHT}px`
              }}>
              {timeSlots.map((_, index) => (
                <div
                  key={index}
                  className="absolute border-b border-stone-800"
                  style={{
                    top: `${index * CELL_HEIGHT}px`,
                    height: `${CELL_HEIGHT}px`,
                    width: '100%'
                  }}
                />
              ))}
            </div>
          ))}

          {/* Events */}
          {stackedEvents.map(ev => {
            const badge = StatusBadges.find(b => b.status === ev.status)
            if (!badge) return null

            if (ev.isOrder) {
              return (
                <div
                  key={ev.id}
                  className={`absolute text-[11px] border-l-2 rounded-sm truncate p-1 pl-2`}
                  style={{
                    backgroundColor: badge.bgColor,
                    borderColor: badge.borderColor,
                    top: HEADER_HEIGHT + ev.y * CELL_HEIGHT + ev.offsetTop,
                    left: HEADER_WIDTH + ev.x * CELL_WIDTH + ev.offsetX,
                    width: `${ev.width}px`,
                    height: `${ev.height}px`,
                    zIndex: ev.zIndex
                  }}>
                  <p className="font-medium">{ev.orderLabel}</p>
                  {ev.status !== 'Banquet' && (
                    <div
                      className="flex text-[8px] rounded-[4px] w-fit p-[2px]"
                      style={{
                        color: badge.badgeTextColor,
                        backgroundColor: badge.badgeBgColor
                      }}>
                      <span>{badge.content}</span>
                    </div>
                  )}
                  <p className="text-[10px] text-stone-300">
                    {ev.start} - {ev.end}
                  </p>
                </div>
              )
            }

            if (ev.isReservation) {
              return (
                <div
                  key={ev.id}
                  className={
                    'absolute text-[11px] border-l-2 rounded-sm truncate p-1 pl-2'
                  }
                  style={{
                    backgroundColor: badge.bgColor,
                    borderColor: badge.borderColor,
                    top: HEADER_HEIGHT + ev.y * CELL_HEIGHT + ev.offsetTop,
                    left: HEADER_WIDTH + ev.x * CELL_WIDTH + ev.offsetX,
                    width: `${ev.width}px`,
                    height: `${ev.height}px`,
                    zIndex: ev.zIndex
                  }}>
                  <p className="text-[10px] text-stone-300">
                    #{ev.reservationId}
                  </p>
                  <p className="flex gap-1 items-center">
                    <b className="truncate">{ev.reservationName}</b>
                    <span className="text-[10px]">
                      {ev.reservationPeopleNumber} чел
                    </span>
                  </p>
                  <div
                    className="flex text-[8px] rounded-[4px] w-fit p-[2px]"
                    style={{
                      color: badge.badgeTextColor,
                      backgroundColor: badge.badgeBgColor
                    }}>
                    <span className="truncate max-w-14">{badge.content}</span>
                  </div>
                  <div className="flex gap-1 items-center">
                    <Phone className="w-3 h-3" />
                    <span className="text-[10px] truncate max-w-10">
                      {ev.reservationPhoneNumber}
                    </span>
                  </div>
                  <p className="text-[10px] text-stone-300">
                    {ev.start} - {ev.end}
                  </p>
                </div>
              )
            }

            return null
          })}
        </div>
      </div>
    </div>
  )
}
