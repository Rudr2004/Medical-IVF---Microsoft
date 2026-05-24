import React from 'react';

export default function Planning({ setPage }) {
  const navigateTo = (page) => {
    setPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="planning-page">
      {/* Page Hero */}
      <section className="section">
        <div className="container">
          <span className="section__label reveal">PLANNING</span>
          <h1 className="section__title reveal">Planning your MicroSort procedure</h1>
          <p className="section__sub reveal">
            MicroSort works hand-in-hand with your fertility physician. Here's how the technique fits 
            with each of the major assisted reproductive procedures.
          </p>
        </div>
      </section>

      {/* Choosing your procedure */}
      <section className="section section--alt">
        <div className="container">
          <h2 className="section__title--sm reveal">Choosing your fertility procedure</h2>
          <p className="card__body reveal" style={{ maxWidth: '850px', fontSize: '1.05rem', lineHeight: '1.6' }}>
            MicroSort prepares the sperm sample by sorting and enriching it. The actual conception procedure 
            — intrauterine insemination (IUI) or in vitro fertilization (IVF) — is performed by your gynaecologist 
            or reproductive endocrinologist. The right choice depends on your fertility profile, age, and family planning goals.
          </p>
        </div>
      </section>

      {/* Three Options Grid */}
      <section className="section">
        <div className="container">
          <h2 className="section__title--sm reveal" style={{ marginBottom: '2.5rem' }}>Three procedure options</h2>
          
          <div className="applications__grid reveal">
            {/* Card 1 */}
            <div className="application-card">
              <span className="application-card__tag">OPTION 01</span>
              <h3 className="application-card__title">IUI with MicroSort</h3>
              <p className="application-card__body">
                Sorted sperm are placed directly into the uterus on ovulation day. Best for couples with no known 
                fertility issues — a non-invasive, lower-cost path. 
                <br /><br />
                <strong>Requirements:</strong> Requires 140 million motile sperm. Both partners must travel to the laboratory. 
                Cannot be cryopreserved or shipped.
              </p>
            </div>

            {/* Card 2 */}
            <div className="application-card">
              <span className="application-card__tag">OPTION 02</span>
              <h3 className="application-card__title">IVF with MicroSort</h3>
              <p className="application-card__body">
                Sorted sperm are used to fertilise retrieved eggs in the laboratory. Best for couples already needing IVF, 
                those seeking higher per-cycle rates, or anyone below IUI thresholds. 
                <br /><br />
                <strong>Requirements:</strong> Minimum 70 million motile sperm. Allows cryopreservation and (where regulations 
                permit) international shipment. Can combine with ICSI.
              </p>
            </div>

            {/* Card 3 */}
            <div className="application-card">
              <span className="application-card__tag">OPTION 03</span>
              <h3 className="application-card__title">MicroSort + IVF + PGT</h3>
              <p className="application-card__body">
                MicroSort enriches the sample, IVF produces embryos, and PGT confirms chromosomal sex and health of each embryo 
                before transfer. Best for family balancing with highest certainty, X-linked risk reduction, and elevated 
                genetic screening needs. 
                <br /><br />
                <strong>Confidence:</strong> PGT confirms sex with greater than 99% accuracy at the embryo level.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Working with physician */}
      <section className="section section--alt">
        <div className="container">
          <h2 className="section__title--sm reveal">Working with your local physician</h2>
          <div className="reveal" style={{ maxWidth: '850px' }}>
            <p className="card__body" style={{ fontSize: '1.05rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              Many MicroSort patients begin and continue their care with a local fertility physician — only travelling 
              to a licensed MicroSort laboratory for the sort itself, or shipping a sample where allowed. Our patient 
              coordinators routinely coordinate with international clinics to sync sorting and cycles.
            </p>
            <div className="card" style={{ background: 'var(--teal-dim)', borderColor: 'var(--border-teal)' }}>
              <p className="card__body" style={{ fontWeight: '600' }}>
                📍 You don't necessarily need to choose your fertility clinic before contacting MicroSort. 
                Our coordinators can help you identify a suitable clinic in your region.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="final-cta">
        <div className="final-cta__orb"></div>
        <div className="final-cta__content reveal">
          <h2 className="final-cta__title">Find a MicroSort laboratory</h2>
          <p className="final-cta__sub">See which licensed site best fits your travel and medical needs.</p>
          <button className="btn btn--primary btn--lg" onClick={() => navigateTo('locations')}>
            Find a laboratory near you →
          </button>
        </div>
      </section>
    </div>
  );
}
