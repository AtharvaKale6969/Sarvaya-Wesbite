import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import TypeSetter from './components/TypeSetter'
import { pageThemes } from './data/pageThemes'
import Home from './pages/Home'
import About from './pages/About'
import Businesses from './pages/Businesses'
import Sustainability from './pages/Sustainability'
import Investors from './pages/Investors'
import Media from './pages/Media'
import Careers from './pages/Careers'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'instant' })
      return
    }
    // The target may live on a page that is still fading in, so wait until it is mounted.
    let tries = 0
    let timer
    const seek = () => {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        timer = setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 120)
      } else if (tries++ < 40) {
        timer = setTimeout(seek, 50)
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' })
    seek()
    return () => clearTimeout(timer)
  }, [pathname, hash])
  return null
}

export default function App() {
  const location = useLocation()
  return (
    <>
      <ScrollToTop />
      <TypeSetter />
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          style={pageThemes[location.pathname]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/businesses" element={<Businesses />} />
            <Route path="/sustainability" element={<Sustainability />} />
            <Route path="/investors" element={<Investors />} />
            <Route path="/media" element={<Media />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </motion.main>
      </AnimatePresence>
      <Footer theme={pageThemes[location.pathname]} />
    </>
  )
}
