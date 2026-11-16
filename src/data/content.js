import { img } from './images'

export const brand = {
  name: 'Sarvaya Holdings',
  legalName: 'Sarvaya Holdings Private Limited',
  promise: 'One Vision. Many Businesses. Infinite Possibilities.',
  address: ['Plot no 12A, 1st Floor, Smruti Nagar Rd,', 'Koradi, Bokara, Nagpur 441111'],
  phone: '+91 73785 58447',
  phoneHref: 'tel:+917378558447',
  email: '[Corporate email address]',
  mapsHref:
    'https://www.google.com/maps/search/?api=1&query=' +
    encodeURIComponent('Plot no 12A, Smruti Nagar Rd, Koradi, Bokara, Nagpur 441111'),
  mapsEmbed:
    'https://maps.google.com/maps?output=embed&z=15&q=' +
    encodeURIComponent('Plot no 12A, Smruti Nagar Rd, Koradi, Bokara, Nagpur 441111'),
  closingLine: [
    'Trust in every relationship.',
    'Leadership in every direction.',
    'Human values at the centre.',
    'Innovation in every opportunity.',
    'Growth for all.',
  ],
}

export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/businesses', label: 'Our Businesses' },
  { to: '/sustainability', label: 'Sustainability' },
  { to: '/media', label: 'Media & News' },
  { to: '/careers', label: 'Careers' },
  { to: '/investors', label: 'Investors' },
  { to: '/contact', label: 'Contact' },
]

export const values = [
  {
    key: 'trust',
    title: 'Trust & Transparency',
    short: 'Trust',
    color: '#06452F',
    text: 'Building dependable relationships through openness, responsibility and clear communication.',
    long: 'We aim to build relationships through reliability, consistency and integrity, and we value honest communication, clarity and accountability in the way we work.',
    image: img.highFive,
  },
  {
    key: 'leadership',
    title: 'Leadership',
    short: 'Leadership',
    color: '#08734A',
    text: 'Providing direction, taking responsibility and encouraging people to move forward.',
    long: 'We believe in taking responsibility, setting direction and enabling others to grow.',
    image: img.presenter,
  },
  {
    key: 'human',
    title: 'Human Values',
    short: 'Human Values',
    color: '#F28A18',
    text: 'Keeping people, communities, dignity and shared well-being at the centre.',
    long: 'We respect people and recognise the importance of positive social and environmental outcomes.',
    image: img.kids,
  },
  {
    key: 'innovation',
    title: 'Innovation',
    short: 'Innovation',
    color: '#159FC4',
    text: 'Welcoming ideas, learning and practical solutions that help businesses evolve.',
    long: 'We remain open to ideas, new approaches and continuous improvement.',
    image: img.solar,
  },
  {
    key: 'growth',
    title: 'Growth',
    short: 'Growth',
    color: '#8CCB45',
    text: 'Creating opportunities for businesses, employees, partners and communities to progress.',
    long: 'We seek progress that creates opportunities across our businesses and stakeholder relationships.',
    image: img.seedlings,
  },
]

export const businesses = [
  {
    slug: 'plastroots',
    sectorLine: 'Where responsible resource management begins.',
    name: 'Plastroots Waste Management & Solutions Private Limited',
    short: 'Plastroots',
    sector: 'Waste Management',
    tagline: 'Working towards more responsible resource management.',
    description:
      'Focuses on waste management, recycling, circular supply chain operations, EPR compliance and related government services.',
    focus: ['Waste management', 'Recycling', 'Circular supply chain', 'EPR compliance', 'Government services'],
    url: 'https://www.plastroots.com/',
    image: img.plastroots,
    accent: '#2FB36B',
    theme: { accent: '#3CCB7F', ink: '#14874A', panel: '#0A1F3D', onAccent: '#04142a', muted: '#9DB0C9', heading: '#0A1F3D' },
    // Muted signature palette for this company's sections on Our Businesses: navy with recycling sage.
    palette: { deep: '#16263b', f900: '#111e2f', ink: '#2f6b55', light: '#9fd4b5', dot: '#4f9a78', tint: '#eef3f1', sand: '#dfe8e4' },
  },
  {
    slug: 'shetahit',
    sectorLine: 'Supporting the farmers and the land that feed us.',
    name: 'Shetahit Farm Solutions Private Limited',
    short: 'Shetahit',
    sector: 'Agriculture',
    tagline: 'Supporting agriculture through products and solutions.',
    description:
      'Focuses on agricultural solutions, fertilizer trading, farm-related products and agricultural support activities.',
    focus: ['Agricultural solutions', 'Fertilizer trading', 'Farm products', 'Agricultural support'],
    url: 'https://shetahit.com/',
    image: img.shetahit,
    accent: '#F28A18',
    theme: { accent: '#F28A18', ink: '#C96A05', panel: '#05301F', onAccent: '#1d1102', muted: 'rgba(255,255,255,0.55)', heading: '#05301F' },
    // Field green with harvest wheat.
    palette: { deep: '#173323', f900: '#11281b', ink: '#8a6418', light: '#e6c47a', dot: '#c99a3d', tint: '#f6f2e7', sand: '#ebe3cf' },
  },
  {
    slug: 'geoclaim',
    sectorLine: 'Cleaner energy from the sun, the wind and the land.',
    name: 'Geoclaim Energy Private Limited',
    short: 'Geoclaim Energy',
    sector: 'Waste to Energy & Machinery',
    tagline: 'Transforming waste into clean fuels and renewable energy.',
    description:
      'Works in biomass fuel supply, Refuse Derived Fuel (RDF) processing and supply, biogas plant establishment, and plant machinery supply and consulting.',
    focus: ['Biomass fuel supply', 'RDF processing & supply', 'Biogas plants', 'Plant machinery & consulting'],
    url: 'https://www.geoclaimenergy.com/',
    image: img.windHills,
    accent: '#1FB5D6',
    theme: { accent: '#1FB5D6', ink: '#0E8FB0', panel: '#20282D', onAccent: '#061a20', muted: '#9AA6AD', heading: '#20282D' },
    // Charcoal with ember.
    palette: { deep: '#26292c', f900: '#1d2022', ink: '#a24f22', light: '#eba27a', dot: '#d07a45', tint: '#f4f1ee', sand: '#e8e1da' },
  },
  {
    slug: 'flowup',
    sectorLine: 'Pure, safe drinking water for every day.',
    name: 'Aayuneer Enterprises | Flowup Drinks',
    short: 'Flowup Drinks',
    sector: 'Packaged Foods & Beverages',
    tagline: 'Pure, safe and refreshing packaged drinking water.',
    description:
      'Operates in the beverage segment through its consumer brand, Flowup Drinks, a packaged drinking water brand represented through its dedicated product website.',
    focus: ['Beverages', 'Consumer brand', 'Flowup Drinks'],
    url: 'https://flow-up-website-2vgm.vercel.app/',
    image: img.waterBottle,
    accent: '#C9A45C',
    theme: { accent: '#D4AF61', ink: '#9A7631', panel: '#0B0B0C', onAccent: '#0B0B0C', muted: 'rgba(255,255,255,0.6)', heading: '#111111', surface: '#FFFFFF', surfaceAlt: '#F6F3EC' },
    // Deep marine with clear aqua.
    palette: { deep: '#0e2f40', f900: '#0a2432', ink: '#1f7184', light: '#94d3e0', dot: '#3fa3b8', tint: '#eef5f7', sand: '#dceaee' },
  },
]

// Company logos (from each company's own website, trimmed to the artwork), in public/logos.
export const companyLogos = {
  plastroots: '/logos/plastroots.png',
  shetahit: '/logos/shetahit.png',
  geoclaim: '/logos/geoclaim.png',
  flowup: '/logos/flowup.png',
}

// Plastroots Foundation: an independent Section 8 non-profit, shown as its own chapter, not as a business.
export const foundation = {
  slug: 'philanthropy',
  sector: 'Sustainability & Social Impact',
  name: 'Plastroots Foundation',
  logo: '/logos/plastroots-foundation.png',
  short: 'Plastroots Foundation',
  tagline: 'Building a greener, cleaner and sustainable future.',
  url: 'https://plastrootsfoundation.org/',
  kicker: 'Philanthropy · Sustainability & Social Impact',
  aboutLabel: 'About the Foundation',
  bridgeLabel: 'Our philanthropic work',
  badge: 'Independently registered Section 8 non-profit',
  theme: { accent: '#F2A88E', ink: '#B5543A', panel: '#0C3A3F', onAccent: '#2A0F08', muted: '#9DBDBF', heading: '#0C3A3F' },
}
