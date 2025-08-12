'use client'

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
  OFFSET_Z_INDEX,
  StatusBadges,
  TimeToMinutes
} from '../helpers/utils'

interface TimeTableProps {
  zone: string[]
  bookingData: BookingData
}

export const TimeTable = ({ zone, bookingData }: TimeTableProps) => {
  if (!zone.length) {
    return (
      <div className="text-amber-500 dark:text-yellow-500 mt-8">
        Выбирай какой-то зон чтобы посмотреть таблицу
      </div>
    )
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
        Math.abs(TimeToMinutes(e.start) - TimeToMinutes(ev.start)) <= 30 &&
        ev.y * CELL_HEIGHT + ev.offsetTop <
          e.y * CELL_HEIGHT + e.offsetTop + e.height &&
        ev.y * CELL_HEIGHT + ev.offsetTop + ev.height >
          e.y * CELL_HEIGHT + e.offsetTop
    )

    overlappingEvents.sort((a, b) => {
      return TimeToMinutes(b.start) - TimeToMinutes(a.start)
    })

    const indexInOverlap = overlappingEvents.findIndex(e => e.id === ev.id)
    const totalOverlapping = overlappingEvents.length

    let width, offsetX
    if (totalOverlapping > 1) {
      width = CELL_WIDTH / totalOverlapping
      offsetX = indexInOverlap * width
    } else {
      width = CELL_WIDTH
      offsetX = 0
    }

    return {
      ...ev,
      offsetX,
      zIndex: indexInOverlap * OFFSET_Z_INDEX,
      width,
      originalWidth: CELL_WIDTH,
      totalOverlapping,
      indexInOverlap,
      hasDividedWidth: totalOverlapping > 1
    }
  })

  return (
    <div className={`mt-8 w-full scrollbar`}>
      <div className="text-black dark:text-white inline-block relative">
        {/* Header row */}
        <div className="flex sticky top-0 z-20">
          <div className="h-10 w-8"></div>
          {tablesInSelectedZones.map(table => (
            <div
              key={table.id}
              className="flex flex-col items-center justify-center text-xs text-stone-500 dark:text-stone-400"
              style={{
                height: `${CELL_HEIGHT}px`,
                width: `${CELL_WIDTH}px`
              }}>
              <p className="flex gap-1">
                <span>
                  #<b className="text-black dark:text-white">{table.number}</b>
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
              className="text-xs text-stone-500 dark:text-stone-400 w-fit"
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
              className="absolute top-0 border-r border-stone-200 dark:border-stone-800"
              style={{
                top: `${HEADER_HEIGHT}px`,
                left: `${HEADER_WIDTH + tableIndex * CELL_WIDTH}px`,
                width: `${CELL_WIDTH}px`,
                height: `${timeSlots.length * CELL_HEIGHT}px`
              }}>
              {timeSlots.map((_, index) => (
                <div
                  key={index}
                  className="absolute border-b border-stone-200 dark:border-stone-800"
                  style={{
                    top: `${(index - 1) * CELL_HEIGHT}px`,
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

            const eventStyle = {
              backgroundColor: badge.bgColor,
              borderColor: badge.borderColor,
              top: HEADER_HEIGHT + ev.y * CELL_HEIGHT + ev.offsetTop,
              left: HEADER_WIDTH + ev.x * CELL_WIDTH + ev.offsetX,
              width: `${ev.width}px`,
              height: `${ev.height}px`,
              zIndex: ev.zIndex,
              transition: 'all 0.3s ease-in-out'
            }

            const hoverStyle = {
              ...eventStyle,
              width: `${ev.originalWidth}px`,
              left: `${HEADER_WIDTH + ev.x * CELL_WIDTH + ev.offsetX}px`,
              height: `${ev.height <= CELL_HEIGHT * 2 && '100px'}`,
              zIndex: stackedEvents.length * OFFSET_Z_INDEX + 1
            }

            if (ev.isOrder) {
              return (
                <div
                  key={ev.id}
                  className="absolute text-[11px] border-l-2 rounded-sm truncate p-1 pl-2 cursor-pointer hover:backdrop-filter hover:backdrop-blur-sm hover:bg-opacity-10"
                  style={eventStyle}
                  onMouseEnter={e => {
                    Object.assign(e.currentTarget.style, hoverStyle)
                  }}
                  onMouseLeave={e => {
                    Object.assign(e.currentTarget.style, eventStyle)
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
                  <p className="text-[10px] text-stone-400 dark:text-stone-300">
                    {ev.start} - {ev.end}
                  </p>
                </div>
              )
            }

            if (ev.isReservation) {
              return (
                <div
                  key={ev.id}
                  className="absolute text-[11px] border-l-2 rounded-sm truncate p-1 pl-2 cursor-pointer hover:backdrop-filter hover:backdrop-blur-sm hover:bg-opacity-10"
                  style={eventStyle}
                  onMouseEnter={e => {
                    Object.assign(e.currentTarget.style, hoverStyle)
                  }}
                  onMouseLeave={e => {
                    Object.assign(e.currentTarget.style, eventStyle)
                  }}>
                  <p className="text-[10px] text-stone-400 dark:text-stone-300">
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
                  <p className="text-[10px] text-stone-400 dark:text-stone-300">
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
