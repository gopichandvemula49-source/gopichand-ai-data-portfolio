import { motion } from 'framer-motion'

const cards = [
  { n: '35–40%', t: 'runtime reduction', d: 'PySpark tuning, partition redesign and incremental loading.' },
  { n: '15–20%', t: 'compute savings', d: 'Lower selected Databricks and Snowflake compute costs.' },
  { n: '6–8 hrs', t: 'saved every week', d: 'Automated critical data quality and validation workflows.' },
  { n: '500 GB–1 TB', t: 'processed daily', d: 'Production pipelines spanning 10+ source systems.' },
]

export default function Impact() {
  return <section className="section impact" id="about">
    <div className="section-kicker">01 — IMPACT</div>
    <div className="split-heading"><h2>DATA ENGINEERING<br/><span>BUILT FOR OUTCOMES.</span></h2><p>I focus on the part hiring teams actually care about: reliable systems, measurable performance improvements and data products people can trust.</p></div>
    <div className="impact-grid">{cards.map((c, i) => <motion.article key={c.t} className="impact-card" initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, margin:'-80px' }} transition={{ delay:i*.08, duration:.65 }}><strong>{c.n}</strong><h3>{c.t}</h3><p>{c.d}</p></motion.article>)}</div>
  </section>
}
