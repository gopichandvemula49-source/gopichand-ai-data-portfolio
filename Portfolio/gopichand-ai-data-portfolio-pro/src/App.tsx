import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import Hero from './components/Hero'
import Impact from './components/Impact'
import Work from './components/Work'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.05, smoothWheel: true })
    let raf = 0
    const loop = (time: number) => {
      lenis.raf(time)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => {
      cancelAnimationFrame(raf)
      lenis.destroy()
    }
  }, [])

  return (
    <main>
      <Hero />
      <Impact />
      <Work />
      <Experience />
      <Skills />
      <Education />
      <Contact />
    </main>
  )
}
