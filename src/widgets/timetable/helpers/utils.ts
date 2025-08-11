import { Restaurant } from '@/entities/booking'

export const CELL_WIDTH = 80
export const CELL_HEIGHT = 40
export const HEADER_HEIGHT = 40
export const HEADER_WIDTH = 32
export const OFFSET_MARGIN_LEFT = 4
export const OFFSET_Z_INDEX = 1
export const MINUTES_ITERATION = 30

export const StatusBadges = [
  {
    status: 'New',
    content: 'Новый',
    bgColor: 'rgba(127, 215, 204, 0.16)',
    borderColor: 'rgba(127, 215, 204, 1)',
    badgeTextColor: 'rgba(255, 255, 255, 1)',
    badgeBgColor: 'rgba(255, 255, 255, 0.12)'
  },
  {
    status: 'Bill',
    content: 'Пречек',
    bgColor: 'rgba(127, 215, 204, 0.16)',
    borderColor: 'rgba(127, 215, 204, 1)',
    badgeTextColor: 'rgba(255, 255, 255, 1)',
    badgeBgColor: 'rgba(74, 201, 155, 0.32)'
  },
  {
    status: 'Closed',
    content: 'Закрытый',
    bgColor: 'rgba(127, 215, 204, 0.16)',
    borderColor: 'rgba(127, 215, 204, 1)',
    badgeTextColor: 'rgba(255, 255, 255, 1)',
    badgeBgColor: 'rgba(255, 255, 255, 0.12)'
  },
  {
    status: 'Banquet',
    content: 'Банкет',
    bgColor: 'rgba(179, 72, 247, 0.16)',
    borderColor: 'rgba(123, 67, 158, 1)',
    badgeTextColor: 'rgba(255, 255, 255, 1)',
    badgeBgColor: 'rgba(179, 72, 247, 0.32)'
  },
  {
    status: 'Живая очередь',
    content: 'Живая очередь',
    bgColor: 'rgba(0, 151, 253, 0.16)',
    borderColor: 'rgba(0, 122, 255, 1)',
    badgeTextColor: 'rgba(255, 255, 255, 1)',
    badgeBgColor: 'rgba(255, 255, 255, 0.12)'
  },
  {
    status: 'Новая',
    content: 'Ожидает подтверждения',
    bgColor: 'rgba(255, 112, 67, 0.16)',
    borderColor: 'rgba(255, 112, 67, 1)',
    badgeTextColor: 'rgba(255, 255, 255, 1)',
    badgeBgColor: 'rgba(0, 122, 255, 1)'
  },
  {
    status: 'Заявка',
    content: 'Ожидаем',
    bgColor: 'rgba(255, 112, 67, 0.16)',
    borderColor: 'rgba(255, 112, 67, 1)',
    badgeTextColor: 'rgba(0, 151, 253, 1)',
    badgeBgColor: 'rgba(0, 151, 253, 0.1)'
  },
  {
    status: 'Открыт',
    content: 'В зале',
    bgColor: 'rgba(255, 112, 67, 0.16)',
    borderColor: 'rgba(255, 112, 67, 1)',
    badgeTextColor: 'rgba(255, 255, 255, 1)',
    badgeBgColor: 'rgba(74, 201, 155, 0.32)'
  },
  {
    status: 'Закрыт',
    content: 'Отменен',
    bgColor: 'rgba(255, 112, 67, 0.16)',
    borderColor: 'rgba(255, 112, 67, 1)',
    badgeTextColor: 'rgba(255, 255, 255, 1)',
    badgeBgColor: 'rgba(255, 255, 255, 0.12)'
  }
]

export const FormatISOTimeToHHMM = (isoString: string): string => {
  const timeMatch = isoString.match(/T(\d{2}):(\d{2})/)
  if (!timeMatch) throw new Error('Invalid ISO date string format')
  return `${timeMatch[1]}:${timeMatch[2]}`
}

export const CalculateEventHeight = (startTime: string, endTime: string) => {
  const start = TimeToMinutes(FormatISOTimeToHHMM(startTime))
  const end = TimeToMinutes(FormatISOTimeToHHMM(endTime))
  const durationMinutes = end - start
  return Math.max(
    CELL_HEIGHT,
    (durationMinutes / MINUTES_ITERATION) * CELL_HEIGHT
  )
}

export const TimeToMinutes = (time: string) => {
  const [hours, minutes] = time.split(':').map(Number)
  return hours * 60 + minutes
}

export const CalculateEventPosition = (
  isoTime: string,
  restaurantOpeningTime: string
) => {
  const eventTime = TimeToMinutes(FormatISOTimeToHHMM(isoTime))
  const openingTime = TimeToMinutes(restaurantOpeningTime)

  const slotIndex = Math.floor((eventTime - openingTime) / MINUTES_ITERATION)
  const slotStartMinutes = openingTime + slotIndex * MINUTES_ITERATION

  const offsetMinutes = eventTime - slotStartMinutes
  const offsetTop = (offsetMinutes / MINUTES_ITERATION) * CELL_HEIGHT

  return {
    slotIndex: Math.max(0, slotIndex),
    offsetTop
  }
}

export const GenerateTimeSlots = (restaurant: Restaurant) => {
  const { opening_time, closing_time } = restaurant

  const [startHour, startMin] = opening_time.split(':').map(Number)
  let [closeHour, closeMin] = closing_time.split(':').map(Number)

  if (closeMin > MINUTES_ITERATION) {
    closeHour += 1
    closeMin = 0
  } else if (closeMin > 0) {
    closeMin = MINUTES_ITERATION
  }
  if (closeHour >= 24) closeHour -= 24

  const result: { position: number; time: string }[] = []
  let pos = 1
  let h = startHour
  let m = startMin

  while (true) {
    result.push({
      position: pos++,
      time: `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`
    })

    if (h === closeHour && m === closeMin) break

    m += MINUTES_ITERATION
    if (m >= 60) {
      m -= 60
      h += 1
    }
    if (h >= 24) h = 0
  }
  return result
}
