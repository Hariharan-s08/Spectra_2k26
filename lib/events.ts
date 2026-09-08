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

export const PRIZES = [
  {
    position: '1st Prize',
    amount: '₹5,000',
  },
  {
    position: '2nd Prize',
    amount: '₹3,000',
  },
  {
    position: '3rd Prize',
    amount: '₹1,000',
  },
]

export const events: Event[] = [
  {
    id: 'idea-ignite-offline',
    title: 'Idea Ignite',
    tagline: 'Paper Presentation',
    date: '15 October 2026',
    time: 'Afternoon (AN)',
    mode: 'Offline',
    teamSize: '2–3 Members',
    fee: '₹100 per head',
    prizePool: '₹9,000',
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
    time: 'Afternoon (AN)',
    mode: 'Offline',
    teamSize: '2–3 Members',
    fee: '₹100 per head',
    prizePool: '₹9,000',
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
    tagline: 'A surprise activity designed for fun, excitement, and entertainment.',
    date: '15 October 2026',
    time: 'Forenoon (FN)',
    mode: 'Offline',
    teamSize: '2–3 Members',
    fee: 'Free',
    description:
      'Take a break from the technical challenges and enjoy an entertaining non-technical event filled with fun and excitement.',
    href: '/events/fun-fusion',
  },
  {
    id: 'idea-ignite-online',
    title: 'Idea Ignite',
    tagline: 'Online Paper Presentation',
    date: '14 October 2026',
    time: 'Online',
    mode: 'Online',
    teamSize: '2–3 Members',
    fee: 'Free',
    description:
      'Present your innovative ideas and research online in emerging areas of electronics, communication, embedded systems, 6G, OFC, SDGs, and more.',
    href: '/events/idea-ignite-online',
  },
]

export const CONTACT = {
  email: 'spectra@egspec.org',

  convenor: {
    name: 'Dr. M. Malathi',
    role: 'Prof / ECE',
  },

  facultyCoordinators: [
    {
      name: 'Dr. C. Madhuvanesan',
      role: 'ASP / ECE',
    },
    {
      name: 'Mrs. M. Kavitha',
      role: 'AP / ECE',
    },
  ],

  studentCoordinators: [
    {
      name: 'Ms. Mohana S',
      role: 'President',
      phone: '7825080914',
    },
    {
      name: 'Mr. Keerthivasan R',
      role: 'Vice President',
      phone: '9597245927',
    },
  ],
}

export const SOCIALS = {
  instagram:
    'https://www.instagram.com/_spectra_2k26?igsi=cjRuaXNtOXVnYjE5',
}