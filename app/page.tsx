import { Hero } from '@/components/home/hero'
import {
  AboutPreview,
  Highlights,
  PrizeHighlight,
  EventsPreview,
  RegisterCta,
  ContactPreview,
} from '@/components/home/sections'

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <Highlights />
      <EventsPreview />
      <PrizeHighlight />
      <RegisterCta />
      <ContactPreview />
    </>
  )
}
