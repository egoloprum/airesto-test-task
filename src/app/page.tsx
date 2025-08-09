import {
  DateSegmentControl,
  ZoneSegmentControl
} from '@/features/segmentControls'

export default function Home() {
  return (
    <main className="px-8 py-16">
      <h1 className="text-white text-2xl">Бронирования</h1>
      <DateSegmentControl />
      <ZoneSegmentControl />
    </main>
  )
}
