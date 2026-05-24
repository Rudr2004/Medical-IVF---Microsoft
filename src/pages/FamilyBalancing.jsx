import React, { useState } from 'react';

export default function FamilyBalancing({ setPage }) {
  const [openFaq, setOpenFaq] = useState(null);

  const navigateTo = (page) => {
    setPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "Do I need a specific number of children to qualify?",
      a: "Most MicroSort laboratories require at least one existing child of the non-preferred sex for family balancing. Your patient coordinator will confirm the specific requirements for your chosen laboratory's jurisdiction."
    },
    {
      q: "Does family balancing work with IUI?",
      a: "Yes. IUI is the most common assisted reproductive procedure for family balancing patients. It is less invasive and lower cost than IVF, and is suitable for couples with no known fertility issues."
    },
    {
      q: "How soon can I start?",
      a: "Most families begin the eligibility process within 1–2 weeks of first contact. Pre-procedure health testing typically takes 2–4 weeks and can overlap with the eligibility review."
    },
    {
      q: "Is family balancing available in my country?",
      a: "Availability depends on the regulations of the country where your MicroSort laboratory is located. Contact your nearest laboratory to confirm what is permitted in your situation."
    }
  ];

  return (
    <div className="family-balancing-page" style={{ background: 'rgba(251,247,242,0.5)', minHeight: '100vh' }}>
      {/* Hero Section */}
      <section className="section">
        <div className="container">
          <span className="section__label reveal">FOR FAMILIES</span>
          <h1 className="section__title reveal">Family balancing with MicroSort</h1>
          <p className="section__sub reveal">
            For parents who want to bring more gender variety to their growing family — a clinically supported, 
            internationally available option.
          </p>

          <div className="reveal" style={{
            height: '320px',
            background: 'linear-gradient(135deg, rgba(251,247,242,1), rgba(232,244,248,0.8))',
            borderRadius: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid var(--border)',
            boxShadow: 'inset 0 0 40px rgba(0,0,0,0.02)'
          }}>
            <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--teal)', fontSize: '0.85rem' }}>
              📷 Family scene — natural light, mixed-age children
            </span>
          </div>
        </div>
      </section>

      {/* What is Family Balancing */}
      <section className="section section--alt" style={{ background: 'rgba(255, 255, 255, 0.4)' }}>
        <div className="container">
          <h2 className="section__title--sm reveal">What is family balancing?</h2>
          <p className="card__body reveal" style={{ maxWidth: '850px', fontSize: '1.05rem', lineHeight: '1.6' }}>
            Family balancing is the use of reproductive technology to influence the sex of a future child when a family 
            already has one or more children of one sex. It is a deeply personal decision, often made for reasons of 
            family experience, cultural tradition, or simply the wish to raise both a daughter and a son. MicroSort is one of 
            the only sperm-sorting technologies available worldwide for family balancing. By increasing the proportion of 
            sperm carrying the chosen chromosome before fertilisation, MicroSort science improves the chance 
            of conceiving a child of your preferred sex.
          </p>
        </div>
      </section>

      {/* Who Chooses & How It Works */}
      <section className="section">
        <div className="container">
          <div className="card-grid">
            <div className="reveal">
              <h3 className="section__title--sm">Who chooses family balancing?</h3>
              <ul className="checklist" style={{ marginBottom: '1.5rem' }}>
                <li className="checklist__item">Two or more children of the same sex</li>
                <li className="checklist__item">A clear preference for the underrepresented sex in their family</li>
                <li className="checklist__item">Made the decision together as parents</li>
                <li className="checklist__item">Reviewed the science and ethical considerations with their physician</li>
              </ul>
              <div style={{ borderLeft: '3px solid var(--teal)', padding: '0.75rem 1rem', background: 'var(--teal-dim)', borderRadius: '8px', fontSize: '0.85rem', color: 'var(--white-70)' }}>
                * Note: We do not work with families pursuing first-child sex selection or non-medical selection that conflicts with eligibility criteria.
              </div>
            </div>

            <div className="reveal">
              <h3 className="section__title--sm">How it works</h3>
              <div className="heritage__timeline" style={{ gap: '1.5rem', marginBottom: '1.5rem' }}>
                <div className="heritage__step">
                  <div className="heritage__step-num" style={{ fontSize: '1.2rem' }}>01</div>
                  <p className="card__body" style={{ fontSize: '0.9rem' }}><strong>Consultation:</strong> Speak with a licensed MicroSort laboratory to confirm eligibility.</p>
                </div>
                <div className="heritage__step">
                  <div className="heritage__step-num" style={{ fontSize: '1.2rem' }}>02</div>
                  <p className="card__body" style={{ fontSize: '0.9rem' }}><strong>Sorting:</strong> Semen sample is stained with marker and flow sorted (6-7 hrs).</p>
                </div>
                <div className="heritage__step">
                  <div className="heritage__step-num" style={{ fontSize: '1.2rem' }}>03</div>
                  <p className="card__body" style={{ fontSize: '0.9rem' }}><strong>Conception:</strong> Enriched sample is used by your fertility doctor via IUI or IVF.</p>
                </div>
              </div>
              <button className="btn btn--outline btn--sm" onClick={() => navigateTo('how-it-works')}>
                See the full process →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Combining with PGT-A */}
      <section className="section section--alt" style={{ background: 'rgba(255, 255, 255, 0.4)' }}>
        <div className="container">
          <h2 className="section__title--sm reveal">Combining MicroSort with PGT-A</h2>
          <p className="card__body reveal" style={{ marginBottom: '1.5rem', maxWidth: '800px' }}>
            Many family-balancing patients combine MicroSort with IVF and Preimplantation Genetic Testing for Aneuploidy (PGT-A). 
            PGT-A allows the embryologist to verify the chromosomal sex of each embryo prior to transfer — providing an 
            additional layer of confirmation on top of the sorting procedure.
          </p>
          <div className="card reveal" style={{ background: 'var(--teal-dim)', borderColor: 'var(--border-teal)', maxWidth: '600px' }}>
            <p className="card__body" style={{ fontWeight: '600' }}>
              🔬 PGT-A confirms chromosomal sex with greater than 99% accuracy at the embryo level.
            </p>
          </div>
        </div>
      </section>

      {/* Typical Timeline */}
      <section className="section">
        <div className="container">
          <h2 className="section__title--sm reveal" style={{ marginBottom: '2.5rem' }}>What to expect — typical timeline</h2>
          
          <div className="timeline reveal" style={{ maxWidth: '800px' }}>
            <div className="timeline__item">
              <div className="timeline__week">Week 1–2</div>
              <h4 className="timeline__step">Initial inquiry & eligibility review</h4>
              <p className="timeline__desc">Contact a MicroSort laboratory. A patient coordinator reviews your situation and confirms eligibility.</p>
            </div>
            <div className="timeline__item">
              <div className="timeline__week">Week 2–6</div>
              <h4 className="timeline__step">Pre-procedure testing</h4>
              <p className="timeline__desc">Complete required health screening tests at any certified laboratory near you.</p>
            </div>
            <div className="timeline__item">
              <div className="timeline__week">Procedure Day</div>
              <h4 className="timeline__step">On-site visit</h4>
              <p className="timeline__desc">Typically 1–3 days at a licensed MicroSort laboratory. The sort takes 6–7 hours on the procedure day.</p>
            </div>
            <div className="timeline__item">
              <div className="timeline__week">Ongoing</div>
              <h4 className="timeline__step">Fertility procedure & outcome</h4>
              <p className="timeline__desc">IUI or IVF performed. Outcome timeline depends on procedure type and individual fertility factors.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Common FAQ Block */}
      <section className="section section--alt" style={{ background: 'rgba(255, 255, 255, 0.4)' }}>
        <div className="container">
          <h2 className="section__title--sm reveal" style={{ marginBottom: '2.5rem' }}>Common questions about family balancing</h2>
          
          <div className="faq-grid reveal" style={{ gridTemplateColumns: '1fr' }}>
            {faqs.map((faq, idx) => (
              <div key={idx} className={`faq-item ${openFaq === idx ? 'faq-item--open' : ''}`}>
                <button className="faq-item__q" onClick={() => toggleFaq(idx)}>
                  <span>{faq.q}</span>
                  <span className={`faq-item__chevron ${openFaq === idx ? 'faq-item__chevron--open' : ''}`}>▼</span>
                </button>
                {openFaq === idx && (
                  <div className="faq-item__a">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="final-cta">
        <div className="final-cta__orb"></div>
        <div className="final-cta__content reveal">
          <h2 className="final-cta__title">Speak with a MicroSort laboratory</h2>
          <p className="final-cta__sub">Connect directly to a coordinator for a free and confidential family balancing assessment.</p>
          <button className="btn btn--primary btn--lg" onClick={() => navigateTo('contact')}>
            Speak with a laboratory →
          </button>
        </div>
      </section>
    </div>
  );
}
