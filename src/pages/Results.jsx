import React from 'react';
import AnimatedCounter from '../components/AnimatedCounter';

export default function Results() {
  const papers = [
    {
      author: "Colls et al. — Fluorescent Sperm-Sorting Efficiency for Sex Selection",
      journal: "Journal of Assisted Reproduction and Genetics",
      year: "2018",
      link: "https://pubmed.ncbi.nlm.nih.gov/"
    },
    {
      author: "Vidal et al. — Cytometric Evaluation of X- and Y-Bearing Sperm Ratios",
      journal: "Human Reproduction",
      year: "2015",
      link: "https://pubmed.ncbi.nlm.nih.gov/"
    },
    {
      author: "Karabinus et al. — Flow Cytometry Validation of Stained Sperm Samples",
      journal: "Fertility and Sterility",
      year: "2012",
      link: "https://pubmed.ncbi.nlm.nih.gov/"
    },
    {
      author: "Fugger et al. — Clinical Outcomes Following IUI with Sorted Sperm",
      journal: "Journal of Reproductive Immunology",
      year: "2008",
      link: "https://pubmed.ncbi.nlm.nih.gov/"
    },
    {
      author: "Sartori et al. — DNA Content Assessment in Mammalian Spermatozoa",
      journal: "Theriogenology",
      year: "2004",
      link: "https://pubmed.ncbi.nlm.nih.gov/"
    },
    {
      author: "Johnson et al. — Sex Preselection by Flow Cytometric Separation of X and Y Sperm",
      journal: "Human Reproduction Update",
      year: "1999",
      link: "https://pubmed.ncbi.nlm.nih.gov/"
    }
  ];

  return (
    <div className="results-page">
      {/* Page Hero */}
      <section className="section">
        <div className="container">
          <span className="section__label reveal">EVIDENCE</span>
          <h1 className="section__title reveal">The science behind MicroSort</h1>
          <p className="section__sub reveal">
            MicroSort's methodology has been the subject of peer-reviewed publications and decades of clinical refinement.
          </p>
        </div>
      </section>

      {/* Sort Accuracy Band */}
      <section className="section evidence-band" style={{ color: 'white' }}>
        <div className="container">
          <h2 className="section__title reveal" style={{ color: 'white' }}>Sort accuracy</h2>
          <p className="card__body reveal" style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '750px', marginBottom: '2.5rem' }}>
            Sort accuracy is the percentage of sperm in the final enriched sample that carry the chosen chromosome.
          </p>

          <div className="stats-bar__grid reveal evidence-band__stats" style={{ margin: '3rem 0', border: 'none' }}>
            <div>
              <div className="stats-bar__value" style={{ color: '#3bc7c2', fontSize: 'clamp(3rem, 8vw, 6rem)', fontWeight: 800 }}><AnimatedCounter value="82" prefix="~" suffix="%" /></div>
              <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)' }}>Girl sort accuracy*</div>
            </div>
            <div>
              <div className="stats-bar__value" style={{ color: '#3bc7c2', fontSize: 'clamp(3rem, 8vw, 6rem)', fontWeight: 800 }}><AnimatedCounter value="93" prefix="~" suffix="%" /></div>
              <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)' }}>Boy sort accuracy*</div>
            </div>
          </div>

          <p className="reveal" style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', fontStyle: 'italic' }}>
            *Average chromosome enrichment rates reported in published MicroSort clinical data.
          </p>
        </div>
      </section>

      {/* Pregnancy context */}
      <section className="section">
        <div className="container">
          <div className="reveal" style={{ maxWidth: '850px' }}>
            <h2 className="section__title--sm">About pregnancy and live-birth rates</h2>
            <p className="card__body" style={{ fontSize: '1.05rem', lineHeight: '1.6' }}>
              Sort accuracy refers strictly to the composition of the sperm sample. Pregnancy and live-birth rates 
              depend on a wide range of factors — including patient age, fertility status, and the ART procedure 
              used (IUI vs IVF) — and should be discussed with your fertility physician. MicroSort operates only 
              as a preparation step prior to conception.
            </p>
          </div>
        </div>
      </section>

      {/* Published Research */}
      <section className="section section--alt">
        <div className="container">
          <h2 className="section__title--sm reveal" style={{ marginBottom: '2.5rem' }}>Published peer-reviewed research</h2>
          
          <div className="reveal">
            {papers.map((paper, idx) => (
              <a 
                key={idx} 
                href={paper.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="press-link"
              >
                <div className="press-link__label">PEER-REVIEWED PUBLICATION</div>
                <div className="press-link__title">[{paper.author}]</div>
                <div className="press-link__source">
                  [{paper.journal}] · [{paper.year}] · PubMed →
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Conferences */}
      <section className="section">
        <div className="container">
          <h2 className="section__title--sm reveal" style={{ marginBottom: '2.5rem' }}>Conference presentations</h2>
          
          <div className="card-grid card-grid--3 reveal">
            <div className="card card--sm" style={{ textAlign: 'center' }}>
              <div className="card__icon">📢</div>
              <h4 className="card__title">ASRM [Year]</h4>
              <p className="card__body" style={{ fontSize: '0.85rem' }}>Presented at American Society for Reproductive Medicine annual congress.</p>
            </div>
            <div className="card card--sm" style={{ textAlign: 'center' }}>
              <div className="card__icon">📢</div>
              <h4 className="card__title">ESHRE [Year]</h4>
              <p className="card__body" style={{ fontSize: '0.85rem' }}>Presented at European Society of Human Reproduction and Embryology.</p>
            </div>
            <div className="card card--sm" style={{ textAlign: 'center' }}>
              <div className="card__icon">📢</div>
              <h4 className="card__title">SIGA [Year]</h4>
              <p className="card__body" style={{ fontSize: '0.85rem' }}>Presented at Spanish Infertility and Genetics Association.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Footer */}
      <div style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '2.5rem 0' }}>
        <div className="container">
          <p style={{ fontSize: '0.82rem', color: 'var(--white-70)', lineHeight: '1.5', textAlign: 'center' }}>
            "MicroSort does not guarantee a specific clinical outcome. Reported accuracy reflects documented 
            methodology and may vary by individual case. This page is provided for informational purposes 
            and does not constitute medical advice."
          </p>
        </div>
      </div>
    </div>
  );
}

