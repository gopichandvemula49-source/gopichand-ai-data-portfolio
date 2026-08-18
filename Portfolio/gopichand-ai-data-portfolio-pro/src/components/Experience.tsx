import { motion } from 'framer-motion'

const roles = [
  {
    dates:'FEB 2025 — PRESENT', company:'DELOITTE USA', role:'AI Data Engineer / Consultant',
    bullets:['20+ production ETL/ELT pipelines processing 500 GB–1 TB daily.','35–40% pipeline runtime reduction and 15–20% selected compute-cost reduction.','Enterprise RAG data foundation using Azure AI Search and Azure OpenAI.','Automated validation eliminating 6–8 hours of weekly manual work.','Dimensional and bronze/silver/gold medallion models in Databricks and Snowflake.']
  },
  {
    dates:'JAN 2021 — OCT 2023', company:'HEXAWARE TECHNOLOGIES INDIA', role:'Data Engineer',
    bullets:['15–20 ETL/ELT pipelines across SQL Server, REST APIs, SFTP, ADLS and Snowflake.','Reduced a critical batch pipeline from ~5 hours to ~3 hours.','Automated row-count, null, duplicate and source-to-target reconciliation checks.','Supported legacy ETL modernization to Azure Data Factory and Databricks.','Improved production reliability with standardized logging and data-quality controls.']
  }
]

export default function Experience(){return <section className="section experience" id="experience"><div className="section-kicker">03 — EXPERIENCE</div><div className="split-heading"><h2>PRODUCTION<br/><span>PROVEN AT SCALE.</span></h2><p>Enterprise consulting experience across financial services and healthcare insurance environments, with an emphasis on reliability, performance and clear downstream contracts.</p></div><div className="timeline">{roles.map((r,i)=><motion.article key={r.company} className="role-card" initial={{opacity:0,x:i%2?30:-30}} whileInView={{opacity:1,x:0}} viewport={{once:true,margin:'-100px'}} transition={{duration:.7}}><div className="role-date">{r.dates}</div><div><h3>{r.company}</h3><h4>{r.role}</h4><ul>{r.bullets.map(b=><li key={b}>{b}</li>)}</ul></div></motion.article>)}</div></section>}
