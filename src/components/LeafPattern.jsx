// Decorative motif derived from the Sarvaya logo: rising leaves, a sun and a cupped hand.
export default function LeafPattern({ className = '', style }) {
  return (
    <svg viewBox="0 0 400 400" fill="none" className={className} style={style} aria-hidden="true">
      <path
        d="M200 330c-10-60-60-90-58-160 2-58 42-104 58-120 16 16 56 62 58 120 2 70-48 100-58 160z"
        fill="currentColor"
      />
      <path d="M200 330c-40-30-120-40-150-110 60 0 120 30 150 110z" fill="currentColor" />
      <path d="M200 330c40-30 120-40 150-110-60 0-120 30-150 110z" fill="currentColor" />
      <circle cx="300" cy="120" r="34" fill="currentColor" />
      <path
        d="M40 330c40 30 110 50 170 40 60-10 110-40 150-80-30 10-70 30-110 34-40 4-80-10-110-10-40 0-70 10-100 16z"
        fill="currentColor"
      />
    </svg>
  )
}

export function Sprout({ className = '' }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <path d="M24 44V22" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M24 26c0-9 6-15 16-15 0 10-6 15-16 15z" fill="currentColor" opacity=".85" />
      <path d="M24 30c0-8-5-13-14-13 0 9 5 13 14 13z" fill="currentColor" opacity=".55" />
    </svg>
  )
}
