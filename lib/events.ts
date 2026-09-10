export const REGISTER_GFORM_URL =
  'https://forms.gle/gy6iy1nXrwoEgHfw9'

export type Event = {
  id: string
  title: string
  tagline: string
  date: string
  time: string
  mode: 'Offline' | 'Online'
  teamSize: string
  fee: string
  registrationDeadline?: string
  venue?: string
  registrationRequired?: boolean
  prizePool?: string
  description: string
  rounds?: string[]
  href: string
  featured?: boolean
}

export const DOMAINS = [
  'Embedded Systems',
  'Electronics',
  'Optical Fiber Communication (OFC)',
  '6G Technology',
  'Sustainable Development Goals (SDG)',
  'Open Innovation',
]

export const events: Event[] = [
  {
    id: 'idea-ignite-offline',
    title: 'Idea Ignite',
    tagline: 'Paper Presentation',
    date: '15 October 2026',
    time: 'Forenoon (FN)',
    mode: 'Offline',
    teamSize: '2–3 Members',
    fee: '₹100 per head',
    registrationDeadline: '11 October 2026',
    venue: 'SJB 105',
    registrationRequired: true,
    description:
      'Present your innovative ideas and research in emerging areas of electronics, communication, embedded systems, 6G, OFC, SDGs, and more.',
    href: '/events/idea-ignite-offline',
    featured: true,
  },

  {
    id: 'circuitrix',
    title: 'Circuitrix',
    tagline: 'Debug Event',
    date: '15 October 2026',
    time: 'Forenoon (FN)',
    mode: 'Offline',
    teamSize: '2–3 Members',
    fee: '₹100 per head',
    registrationDeadline: '14 October 2026',
    venue: 'SJB 102',
    registrationRequired: true,
    description:
      'Test your electronics and debugging skills through quizzes, circuit building, fault detection, and fixing challenges.',
    rounds: [
      'Round 1 — Quiz',
      'Round 2 — Puzzle & Build the Circuit',
      'Round 3 — Fault Detection & Fixing',
    ],
    href: '/events/circuitrix',
    featured: true,
  },

  {
    id: 'fun-fusion',
    title: 'Fun Fusion',
    tagline:
      'A surprise activity designed for fun, excitement, and entertainment.',
    date: '15 October 2026',
    time: 'Afternoon (AN)',
    mode: 'Offline',
    teamSize: '2–3 Members',
    fee: 'Free',
    venue: 'SJB 102',
    registrationRequired: false,
    description:
      'Take a break from the technical challenges and enjoy an entertaining non-technical event filled with fun and excitement.',
    href: '/events/fun-fusion',
  },

  {
    id: 'idea-ignite-online',
    title: 'Idea Ignite',
    tagline: 'Online Paper Presentation',
    date: '14 October 2026',
    time: 'Full Day',
    mode: 'Online',
    teamSize: '2–3 Members',
    fee: 'Free',
    registrationDeadline: '10 October 2026',
    venue: 'Online',
    registrationRequired: true,
    description:
      'Present your innovative ideas and research online in emerging areas of electronics, communication, embedded systems, 6G, OFC, SDGs, and more.',
    href: '/events/idea-ignite-online',
  },
]

export const CONTACT = {
  email: 'spectra@egspec.org',

  Convenor: {
    name: 'Dr. M. Malathi',
    role: 'Prof / ECE',
  },

Co_Convenors: [
  {
    name: 'Dr. S. Senthilkumar',
    role: 'ASP / ECE',
  },
  {
    name: 'Dr. M. Nuthal Srinivasan',
    role: 'ASP / ECE',
  },
],
  Faculty_Coordinators: [
    {
      name: 'Dr. C. Mathuvanesan',
      role: 'ASP / ECE',
    },
    {
      name: 'Mrs. M. Kavitha',
      role: 'AP / ECE',
    },
  ],

  Student_Coordinators: [
    {
      name: 'Mohana S',
      role: 'IV Year ECE',
      phone: '7825080914',
    },
    {
      name: 'Keerthivasan R',
      role: 'III Year ECE',
      phone: '9597245927',
    },
  ],
}

export const SOCIALS = {
  instagram:
    'https://www.instagram.com/_spectra_2k26?igsi=cjRuaXNtOXVnYjE5',
}
