import { Hero } from '@/components/home/hero'
import {
  AboutPreview,
  Highlights,
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
      <RegisterCta />
      <ContactPreview />
    </>
  )
}
