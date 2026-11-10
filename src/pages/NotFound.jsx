import { Button } from '../components/ui'
import LeafPattern from '../components/LeafPattern'

export default function NotFound() {
  return (
    <section className="relative grid min-h-[80vh] place-items-center overflow-hidden px-5 pt-32 pb-20 text-center">
      <LeafPattern className="absolute h-[480px] w-[480px] text-forest/[0.04]" />
      <div className="relative">
        <p className="font-display text-8xl text-emerald">404</p>
        <p className="mt-4 font-display text-3xl text-forest">This page could not be found.</p>
        <div className="mt-8">
          <Button to="/">Back to home</Button>
        </div>
      </div>
    </section>
  )
}
