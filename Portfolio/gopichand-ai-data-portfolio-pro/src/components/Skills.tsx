const groups = [
  ['CORE ENGINEERING',['Python','SQL','PySpark','Spark SQL','Apache Spark','ETL / ELT','Batch + Incremental']],
  ['DATABRICKS + LAKEHOUSE',['Databricks','Azure Databricks','Delta Lake','Medallion Architecture','Dimensional Modeling','Parquet']],
  ['AZURE CLOUD',['Azure Data Factory','ADLS Gen2','Azure AI Search','Azure OpenAI','Azure DevOps']],
  ['WAREHOUSE + BI',['Snowflake','SQL Server','Query Optimization','Compute Optimization','Power BI Support']],
  ['GENAI / RAG',['RAG Pipelines','Vector Embeddings','Vector Search','Document Chunking','Metadata Enrichment','AI-Ready Datasets']],
  ['ORCHESTRATION + QUALITY',['Apache Airflow','Git','CI/CD','Data Validation','Reconciliation','Schema Management','Logging']]
]
export default function Skills(){return <section className="section skills" id="skills"><div className="section-kicker">04 — SKILLS</div><h2 className="display-title">A MODERN DATA STACK.<br/><span>USED IN PRODUCTION.</span></h2><div className="skills-grid">{groups.map(([name,items])=><article className="skill-card" key={name as string}><h3>{name}</h3><div>{(items as string[]).map(x=><span key={x}>{x}</span>)}</div></article>)}</div></section>}
