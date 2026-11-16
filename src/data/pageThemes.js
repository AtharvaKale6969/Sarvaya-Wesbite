/*
  Signature colour theme for each page. These override the shared colour variables inside <main>,
  so every Tailwind colour utility on that page (bg-forest, text-emerald, text-lime, bg-cream, ...)
  picks up the page's own palette. The footer receives the same theme; the navigation keeps the group's charcoal and gold.

  forest / 900 / 950 : the page's deep signature colour (dark sections, buttons, hero overlay)
  emerald            : emphasis colour on light backgrounds (italic highlights, pills)
  lime               : emphasis colour on dark backgrounds
  saffron            : small accent dots and rules
  cream / sand       : light section tints
*/
const theme = (forest, f900, f950, emerald, lime, saffron, cream, sand) => ({
  '--color-forest': forest,
  '--color-forest-900': f900,
  '--color-forest-950': f950,
  '--color-emerald': emerald,
  '--color-lime': lime,
  '--color-saffron': saffron,
  '--color-cream': cream,
  '--color-sand': sand,
})

export const pageThemes = {
  // Home keeps the group's charcoal and gold.
  // About: identity and heritage. Deep indigo with warm saffron.
  '/about': theme('#1f2a44', '#182237', '#111829', '#9a5b2e', '#e3a35b', '#d98e3f', '#f4f1ec', '#e9e3d8'),
  // Our Businesses: industry and enterprise. Gunmetal graphite with champagne.
  '/businesses': theme('#23282e', '#1b1f24', '#121519', '#8a6a3a', '#e2c48e', '#c9a86a', '#f2f2f0', '#e5e4e0'),
  // Sustainability: environment and community. Deep teal with soft coral.
  '/sustainability': theme('#0f3b3e', '#0b2f31', '#072224', '#2f6f6a', '#f2a88e', '#e8907a', '#eef3f1', '#dde8e4'),
  // Media & News: editorial. Deep burgundy, Cameo (#DAAB9D) for emphasis text on dark, and
  // Lilac Luster (#A791A6) with white as the secondary colours: white sections, lilac for accent
  // rules, pills and soft card tints (sand = lilac, used at low opacity).
  '/media': theme('#3a1e2a', '#2e1721', '#221017', '#8e3b4f', '#DAAB9D', '#A791A6', '#ffffff', '#A791A6'),
  // Careers: people and ambition. Deep plum with amber.
  '/careers': theme('#2e2347', '#251c3a', '#1a142a', '#6b4fa0', '#f0b65a', '#e9a23b', '#f4f2f7', '#e6e1ee'),
  // Investors: confidence and governance. Navy with gold.
  '/investors': theme('#0f2440', '#0b1c33', '#081426', '#8a6a2a', '#d4b062', '#c9a24d', '#f2f4f7', '#e3e8ef'),
  // Contact: openness and conversation. Slate blue with sky.
  '/contact': theme('#1e3346', '#172838', '#101d29', '#2f6e8f', '#8ec5e0', '#6fb3d6', '#f1f5f8', '#e1eaf0'),
}
