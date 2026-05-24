import React from 'react';

export default function GeneticConditions({ setPage }) {
  const navigateTo = (page) => {
    setPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const conditions = [
    { name: "Hemophilia A and B", desc: "Inherited bleeding disorders where blood doesn't clot normally, putting boys at severe risk." },
    { name: "Duchenne and Becker muscular dystrophy", desc: "Progressive muscle degeneration and weakness that almost exclusively affects males." },
    { name: "X-linked adrenoleukodystrophy", desc: "Affects the brain myelin and adrenal glands, causing progressive neurological deterioration in boys." },
    { name: "Fragile X syndrome", desc: "A genetic condition causing developmental and intellectual disabilities, often more severe in boys." },
    { name: "X-linked SCID", desc: "A rare inherited disorder causing severe immune system failure, also known as 'bubble baby' disease." },
    { name: "Other X-linked or X-limited disorders", desc: "Various other conditions such as Hunter syndrome or Fabry disease reviewed on a case-by-case basis." }
  ];

  return (
    <div className="genetic-conditions-page">
      {/* Page Hero */}
      <section className="section">
        <div className="container">
          <span className="section__label reveal">FOR CARRIERS OF X-LINKED OR X-LIMITED CONDITIONS</span>
          <h1 className="section__title reveal">Reducing the risk of X-linked genetic conditions</h1>
          <p className="section__sub reveal">
            For couples who are known carriers of sex-linked genetic disorders, choosing the unaffected sex 
            is one of the most reliable ways to reduce the chance of having an affected child.
          </p>
        </div>
      </section>

      {/* Understanding X-linked inheritance */}
      <section className="section section--alt">
        <div className="container">
          <h2 className="section__title--sm reveal">Understanding X-linked inheritance</h2>
          <div className="reveal" style={{ maxWidth: '850px', marginBottom: '2rem' }}>
            <p className="card__body" style={{ fontSize: '1.05rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              X-linked disorders are genetic conditions caused by mutations on the X chromosome. Because males have only 
              one X chromosome (XY) and females have two (XX), the inheritance pattern is asymmetric. If a female carrier has children:
            </p>
            <ul className="checklist" style={{ marginBottom: '1.5rem' }}>
              <li className="checklist__item">A male child of a female carrier has a 50% chance of inheriting and being affected by the condition.</li>
              <li className="checklist__item">A female child of a female carrier has a 50% chance of being a carrier herself, but is typically unaffected.</li>
            </ul>
            <p className="card__body" style={{ fontSize: '1.05rem', lineHeight: '1.6' }}>
              For many families carrying these mutations, choosing to conceive a daughter is the most effective and reliable way 
              to reduce the risk of giving birth to an affected child.
            </p>
          </div>
        </div>
      </section>

      {/* Conditions list */}
      <section className="section">
        <div className="container">
          <h2 className="section__title--sm reveal" style={{ marginBottom: '2.5rem' }}>Conditions MicroSort has been used for</h2>
          
          <div className="card-grid card-grid--3 reveal">
            {conditions.map((cond, idx) => (
              <div key={idx} className="card card--sm">
                <div className="card__icon" style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>🧬</div>
                <h4 className="card__title" style={{ fontSize: '1.05rem', marginBottom: '0.5rem' }}>{cond.name}</h4>
                <p className="card__body" style={{ fontSize: '0.88rem', lineHeight: '1.4' }}>{cond.desc}</p>
              </div>
            ))}
          </div>

          <p className="reveal" style={{ fontSize: '0.85rem', color: 'var(--white-40)', marginTop: '2rem', fontStyle: 'italic', textAlign: 'center' }}>
            * Note: Every case is reviewed with a genetic counsellor and the patient's physician.
          </p>
        </div>
      </section>

      {/* How MicroSort reduces risk */}
      <section className="section section--alt">
        <div className="container">
          <h2 className="section__title--sm reveal" style={{ marginBottom: '2.5rem' }}>
            How MicroSort is used to reduce X-linked risk
          </h2>

          <div className="heritage__timeline reveal" style={{ maxWidth: '800px' }}>
            <div className="heritage__step">
              <div className="heritage__step-num">01</div>
              <div>
                <h4 className="heritage__step-phase">Sperm sorting</h4>
                <p className="card__body">The sperm sample is sorted to enrich for X-bearing (female-producing) sperm before fertilization.</p>
              </div>
            </div>
            <div className="heritage__step">
              <div className="heritage__step-num">02</div>
              <div>
                <h4 className="heritage__step-phase">IVF</h4>
                <p className="card__body">In vitro fertilization (IVF) is performed using the enriched sample to fertilize the harvested eggs.</p>
              </div>
            </div>
            <div className="heritage__step">
              <div className="heritage__step-num">03</div>
              <div>
                <h4 className="heritage__step-phase">PGD biopsy</h4>
                <p className="card__body">Preimplantation Genetic Diagnosis (PGD) confirms the chromosomal sex and, where applicable, screens embryos for the specific condition.</p>
              </div>
            </div>
            <div className="heritage__step">
              <div className="heritage__step-num">04</div>
              <div>
                <h4 className="heritage__step-phase">Embryo selection</h4>
                <p className="card__body">Unaffected embryos of the chosen sex are selected by the embryologist for transfer to the uterus.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Role of Genetic Counselling */}
      <section className="section">
        <div className="container">
          <div className="card reveal" style={{ background: 'var(--teal-dim)', borderLeft: '4px solid var(--teal)', maxWidth: '850px', margin: '0 auto' }}>
            <h3 className="card__title" style={{ fontSize: '1.2rem' }}>The role of genetic counselling</h3>
            <p className="card__body" style={{ lineHeight: '1.6' }}>
              Before any procedure, we strongly recommend a session with a certified genetic counsellor. 
              A counsellor will help you understand the inheritance pattern of your specific condition, your reproductive 
              options, and the limits of what any technology can and cannot do.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="final-cta">
        <div className="final-cta__orb"></div>
        <div className="final-cta__content reveal">
          <h2 className="final-cta__title">Speak with a MicroSort laboratory</h2>
          <p className="final-cta__sub">Contact us for a confidential review of your genetic risk reduction options.</p>
          <button className="btn btn--primary btn--lg" onClick={() => navigateTo('contact')}>
            Speak with a laboratory →
          </button>
        </div>
      </section>
    </div>
  );
}
