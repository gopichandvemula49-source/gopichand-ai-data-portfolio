import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'

const nav = [
  ['ABOUT', '#about'], ['WORK', '#work'], ['EXPERIENCE', '#experience'],
  ['SKILLS', '#skills'], ['EDUCATION', '#education'], ['CONTACT', '#contact']
]

const tech = ['Python', 'SQL', 'PySpark', 'Databricks', 'Snowflake', 'Azure']

export default function Hero() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, .24], [0, 80])
  const scale = useTransform(scrollYProgress, [0, .24], [1, 1.035])
  const rotate = useTransform(scrollYProgress, [0, .24], [0, -0.6])
  const [cursor, setCursor] = useState({ x: -100, y: -100 })
  const [hover, setHover] = useState(false)

  useEffect(() => {
    const move = (e: MouseEvent) => setCursor({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <section className="hero" id="home">
      <motion.div className="cursor-orb" animate={{ x: cursor.x - (hover ? 25 : 5), y: cursor.y - (hover ? 25 : 5), width: hover ? 50 : 10, height: hover ? 50 : 10 }} />
      <div className="hero-grid" />
      <div className="hero-noise" />
      <motion.div className="hero-photo" style={{ y, scale, rotate }} aria-label="Vemula Gopichand professional portrait">
        <motion.div className="portrait-frame" initial={{ opacity: 0, x: 80, scale: .96 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ duration: 1.15, ease: [0.22,1,0.36,1] }}>
          <motion.img
            src="./assets/gopichand-portrait.png"
            alt="Vemula Gopichand professional portrait"
            animate={{ y: [0, -8, 0], scale: [1, 1.012, 1] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="portrait-light-sweep" />
          <div className="portrait-edge-glow" />
        </motion.div>
        <div className="hero-photo-vignette" />
      </motion.div>
      <div className="hero-left-fade" />

      <header className="topbar">
        <a className="brand" href="#home" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
          <span className="brand-mark">VG</span>
          <span><b>VEMULA GOPICHAND</b><small>AI DATA ENGINEER</small></span>
        </a>
        <nav className="nav-links">
          {nav.map(([label, href]) => <a key={href} href={href} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>{label}</a>)}
        </nav>
        <a className="outline-button" href="./docs/Gopichand_Vemula_AI_Data_Engineer_Resume.pdf" target="_blank" rel="noreferrer" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>RESUME <span>↗</span></a>
      </header>

      <div className="hero-content">
        <motion.div className="eyebrow" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .15, duration: .8 }}>AI DATA ENGINEER <span /></motion.div>
        <motion.h1 initial={{ opacity: 0, y: 25, filter: 'blur(8px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ delay: .22, duration: 1 }}>
          BUILDING SCALABLE<br />
          <span>DATA SYSTEMS.</span><br />
          <em>DRIVING REAL IMPACT.</em>
        </motion.h1>
        <motion.p className="hero-copy" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .42, duration: .85 }}>
          I engineer production data pipelines, lakehouse architectures and AI-ready data foundations that turn complex enterprise data into trusted analytics and GenAI experiences.
        </motion.p>
        <motion.div className="tech-strip" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .58, duration: .8 }}>
          {tech.map((x, i) => <span key={x}><i>{['◉','⌘','✦','◆','❄','▲'][i]}</i>{x}</span>)}
        </motion.div>
        <motion.div className="hero-actions" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .72, duration: .8 }}>
          <a className="gold-button" href="#work" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>VIEW MY WORK <span>→</span></a>
          <a className="outline-button big" href="mailto:gopichandvemula49@gmail.com" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>GET IN TOUCH <span>↗</span></a>
        </motion.div>
      </div>

      <div className="hero-proof">
        <div><strong>1 TB</strong><span>DAILY DATA SCALE</span></div>
        <div><strong>20+</strong><span>PRODUCTION PIPELINES</span></div>
        <div><strong>60+</strong><span>CURATED SNOWFLAKE TABLES</span></div>
        <div><strong>40%</strong><span>PIPELINE SPEEDUP</span></div>
      </div>
      <div className="scroll-cue"><span>SCROLL TO EXPLORE</span><i /></div>
    </section>
  )
}
