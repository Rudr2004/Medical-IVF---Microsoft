import React from 'react';

export default function HowItWorks({ setPage }) {
  const navigateTo = (page) => {
    setPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="how-it-works-page">
      {/* Page Hero */}
      <section className="section">
        <div className="container">
          <span className="section__label reveal">THE SCIENCE</span>
          <h1 className="section__title reveal">How MicroSort works</h1>
          <p className="section__sub reveal">
            A plain-language explanation of the sperm-sorting technology behind every MicroSort procedure 
            — what happens, why it works, and what it can and cannot do.
          </p>
        </div>
      </section>

      {/* Core Idea */}
      <section className="section section--alt">
        <div className="container">
          <h2 className="section__title--sm reveal">The core idea, in 60 seconds</h2>
          <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '800px' }}>
            <p className="card__body" style={{ fontSize: '1.05rem', lineHeight: '1.6' }}>
              A human male produces sperm in roughly equal amounts of two types: sperm carrying an X chromosome 
              (which produce a girl) and sperm carrying a Y chromosome (which produce a boy). X-bearing sperm carry 
              approximately 2.8% more DNA than Y-bearing sperm — a small but measurable difference. MicroSort uses 
              that difference to separate the two types of sperm and create an enriched sample that contains a 
              much higher proportion of the sex you've chosen.
            </p>
            <div style={{
              borderLeft: '3px solid var(--teal)',
              padding: '1rem 1.25rem',
              background: 'var(--teal-dim)',
              borderRadius: '8px',
              fontStyle: 'italic',
              fontSize: '0.88rem',
              color: 'var(--white-70)'
            }}>
              "MicroSort does not guarantee a specific clinical outcome. Reported sort accuracy is based on published 
              methodology and may vary by individual case."
            </div>
          </div>
        </div>
      </section>

      {/* 5-Step Process */}
      <section className="section">
        <div className="container">
          <h2 className="section__title--sm reveal" style={{ marginBottom: '2.5rem' }}>
            What actually happens during a MicroSort procedure
          </h2>
          
          <div className="heritage__timeline reveal" style={{ maxWidth: '850px' }}>
            <div className="heritage__step">
              <div className="heritage__step-num">01</div>
              <div>
                <h4 className="heritage__step-phase">Sample preparation</h4>
                <p className="card__body">The semen sample is washed in a buffered solution to remove seminal fluid and non-motile cells, leaving a clean population of motile sperm.</p>
              </div>
            </div>
            <div className="heritage__step">
              <div className="heritage__step-num">02</div>
              <div>
                <h4 className="heritage__step-phase">Fluorescent staining</h4>
                <p className="card__body">The cleaned sample is gently stained with a fluorescent dye that binds to DNA. X-bearing sperm contain more DNA and take up slightly more stain.</p>
              </div>
            </div>
            <div className="heritage__step">
              <div className="heritage__step-num">03</div>
              <div>
                <h4 className="heritage__step-phase">Flow cytometry analysis</h4>
                <p className="card__body">The stained sperm pass single-file through a flow cytometer. A laser excites the dye and an optical sensor measures the fluorescence of each individual sperm cell.</p>
              </div>
            </div>
            <div className="heritage__step">
              <div className="heritage__step-num">04</div>
              <div>
                <h4 className="heritage__step-phase">Separation</h4>
                <p className="card__body">Software identifies sperm carrying the chosen chromosome based on fluorescence signature. Those sperm are separated, producing an enriched sample.</p>
              </div>
            </div>
            <div className="heritage__step">
              <div className="heritage__step-num">05</div>
              <div>
                <h4 className="heritage__step-phase">Use in your fertility procedure</h4>
                <p className="card__body">The enriched sample is delivered to your physician for use in IUI, IVF, or IVF with ICSI. The sample can also be cryopreserved for later use or shipment.</p>
              </div>
            </div>
          </div>

          <div className="reveal" style={{ fontFamily: 'var(--font-mono)', color: 'var(--teal)', fontSize: '0.85rem', letterSpacing: '0.05em' }}>
            * Note: A full sorting procedure typically takes 6–7 hours per sample.
          </div>
        </div>
      </section>

      {/* Why MicroSort is Different */}
      <section className="section section--alt">
        <div className="container">
          <h2 className="section__title--sm reveal">Why MicroSort isn't the same as other sperm-sorting claims</h2>
          <p className="card__body reveal" style={{ marginBottom: '2.5rem', maxWidth: '750px' }}>
            Unlike alternative home kits or simple centrifugation methods that rely on physical density or swimming speeds, 
            MicroSort operates on direct biological properties.
          </p>

          <div className="card-grid card-grid--3 reveal">
            <div className="card">
              <div className="card__icon">🧬</div>
              <h3 className="card__title">Based on DNA difference</h3>
              <p className="card__body">
                Not motility tricks or behavioural differences. MicroSort measures a real physical property of each sperm cell.
              </p>
            </div>
            <div className="card">
              <div className="card__icon">📅</div>
              <h3 className="card__title">Decades of development</h3>
              <p className="card__body">
                MicroSort's methodology has been continuously refined across licensed clinical sites since the 1990s.
              </p>
            </div>
            <div className="card">
              <div className="card__icon">🔬</div>
              <h3 className="card__title">Licensed laboratories</h3>
              <p className="card__body">
                Performed exclusively at laboratories using validated flow-cytometry equipment, not at unlicensed or unregulated facilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Does and Doesn't */}
      <section className="section">
        <div className="container">
          <h2 className="section__title--sm reveal" style={{ marginBottom: '2.5rem' }}>
            What MicroSort does — and doesn't — do
          </h2>

          <div className="card-grid reveal">
            {/* Left Card: Does */}
            <div className="card" style={{ borderLeft: '4px solid var(--teal)' }}>
              <h4 style={{ color: 'var(--teal)', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.2rem', marginBottom: '1.5rem' }}>
                ✓ What it does
              </h4>
              <ul className="checklist">
                <li className="checklist__item">Improves the chance of conceiving a child of the chosen sex when used with IUI or IVF</li>
                <li className="checklist__item">Can be combined with Preimplantation Genetic Diagnosis (PGD/PGT) for additional confirmation</li>
                <li className="checklist__item">Can be cryopreserved and, where regulations allow, shipped internationally</li>
              </ul>
            </div>

            {/* Right Card: Doesn't */}
            <div className="card" style={{ borderLeft: '4px solid rgba(180,50,50,0.4)' }}>
              <h4 style={{ color: 'var(--white-70)', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.2rem', marginBottom: '1.5rem' }}>
                ✗ What it does not do
              </h4>
              <ul className="checklist">
                <li className="checklist__item">Guarantee a specific outcome — pregnancy and sex determination remain probabilistic</li>
                <li className="checklist__item">Replace IVF or IUI — MicroSort prepares the sample, your physician performs the procedure</li>
                <li className="checklist__item">Treat infertility — MicroSort is a sex-selection technology, not a fertility treatment</li>
                <li className="checklist__item">Make decisions for you — review the science, ethics, and personal fit with your physician</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="final-cta">
        <div className="final-cta__orb"></div>
        <div className="final-cta__content reveal">
          <h2 className="final-cta__title">Ready to take the next step?</h2>
          <p className="final-cta__sub">See if you are eligible to proceed with a MicroSort sorting cycle.</p>
          <button className="btn btn--primary btn--lg" onClick={() => navigateTo('is-it-for-you')}>
            See if MicroSort is right for you →
          </button>
        </div>
      </section>
    </div>
  );
}
