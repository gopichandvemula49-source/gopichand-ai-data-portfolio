import { motion } from 'framer-motion'

const work = [
  {
    no:'01', title:'ENTERPRISE RAG DATA FOUNDATION',
    body:'Built ingestion, chunking and metadata-enrichment pipelines that transform internal documents, support tickets and policy content into vector embeddings indexed in Azure AI Search and consumed by Azure OpenAI.',
    tags:['Azure OpenAI','Azure AI Search','RAG','Embeddings','Python'],
    flow:['Enterprise content','Chunk + enrich','Vector embeddings','AI Search','Azure OpenAI']
  },
  {
    no:'02', title:'HIGH-SCALE CLOUD ETL PLATFORM',
    body:'Built and maintained 20+ production ETL/ELT pipelines processing 500 GB–1 TB daily from 10+ source systems and feeding 60+ curated Snowflake tables for analytics and ML use cases.',
    tags:['PySpark','Databricks','ADF','Airflow','Snowflake'],
    flow:['10+ sources','ADF / Airflow','Databricks','Snowflake','Analytics + ML']
  },
  {
    no:'03', title:'PIPELINE PERFORMANCE ENGINEERING',
    body:'Reduced end-to-end pipeline runtime by 35–40% through PySpark job tuning, partitioning redesign and incremental load patterns while cutting selected compute costs by 15–20%.',
    tags:['Spark tuning','Partitioning','Incremental loads','Cost optimization'],
    flow:['Profile bottlenecks','Tune joins','Repartition','Incremental load','35–40% faster']
  }
]

export default function Work() {
  return <section className="section work" id="work">
    <div className="section-kicker">02 — SELECTED ENGINEERING WORK</div>
    <h2 className="display-title">SYSTEMS WITH<br/><span>MEASURABLE IMPACT.</span></h2>
    <p className="section-note">These are representative production systems from my professional experience. Proprietary client code and data are intentionally not published.</p>
    <div className="work-stack">{work.map((w, idx) => <motion.article key={w.no} className="work-card" style={{ top: 92 + idx * 18 }} initial={{ opacity:0, y:32 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, margin:'-120px' }} transition={{ duration:.75 }}>
      <div className="work-copy"><div className="work-no">CASE {w.no}</div><h3>{w.title}</h3><p>{w.body}</p><div className="tag-row">{w.tags.map(t=><span key={t}>{t}</span>)}</div></div>
      <div className="architecture-card"><div className="arch-label">DATA FLOW</div>{w.flow.map((node, i)=><div className="flow-node" key={node}><span>{node}</span>{i < w.flow.length-1 && <i>↓</i>}</div>)}</div>
    </motion.article>)}</div>
  </section>
}
