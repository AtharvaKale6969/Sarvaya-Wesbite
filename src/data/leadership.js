/*
  Leadership data for About > Leadership.
  Names, photos and biographies are placeholders until real details are supplied. To add a portrait,
  give a person a `photo` URL; to add a biography, give them a `bio` array of paragraphs.
  Groups render as tabs; `company` links a business head to its company slug.
*/

export const founder = {
  name: 'Kapil Jangale',
  title: 'Founder, Sarvaya Holdings Private Limited',
  message:
    'We set out to build a group where every business can stand on its own, and still be stronger together. Our measure of success is simple: the trust we earn and the difference we make.',
  bio: [
    'As Founder, Kapil Jangale established Sarvaya Holdings and guides the vision and direction of the group and its businesses.',
    'A full biography covering experience, achievements and areas of focus will appear here.',
  ],
}

const PLACEHOLDER = 'Full name'

export const leadershipGroups = [
  {
    key: 'board',
    label: 'Board of Directors',
    people: [
      { name: PLACEHOLDER, title: 'Director' },
      { name: PLACEHOLDER, title: 'Director' },
      { name: PLACEHOLDER, title: 'Independent Director' },
      { name: PLACEHOLDER, title: 'Independent Director' },
    ],
  },
  {
    key: 'group',
    label: 'Group Leadership',
    people: [
      { name: PLACEHOLDER, title: 'Chief Financial Officer' },
      { name: PLACEHOLDER, title: 'Head of Strategy' },
      { name: PLACEHOLDER, title: 'Head of Operations' },
      { name: PLACEHOLDER, title: 'Head of People' },
    ],
  },
  {
    key: 'business',
    label: 'Business Heads',
    people: [
      { name: PLACEHOLDER, title: 'Business Head', company: 'plastroots' },
      { name: PLACEHOLDER, title: 'Business Head', company: 'shetahit' },
      { name: PLACEHOLDER, title: 'Business Head', company: 'geoclaim' },
      { name: PLACEHOLDER, title: 'Business Head', company: 'flowup' },
    ],
  },
]

// Default biography until a real one is supplied.
export const defaultBio = (p) => [
  `${p.title}${p.companyName ? `, ${p.companyName}` : ', Sarvaya Holdings Private Limited'}.`,
  'A short professional biography, key experience and areas of responsibility will appear here.',
]

// Initials for a portrait frame, or null for an unnamed placeholder.
export const initials = (p) =>
  p.name === PLACEHOLDER ? null : p.name.split(' ').map((w) => w[0]).slice(0, 2).join('').toUpperCase()
