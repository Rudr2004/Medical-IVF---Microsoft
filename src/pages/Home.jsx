import React, { useState } from 'react';
import AnimatedCounter from '../components/AnimatedCounter';

export default function Home({ setPage }) {
  const [hoveredPin, setHoveredPin] = useState(null);

  const pins = [
    { name: "Mexico City, Mexico", cx: 270, cy: 210 },
    { name: "Nicosia, North Cyprus", cx: 510, cy: 175 },
    { name: "Tokyo, Japan", cx: 740, cy: 185 },
    { name: "Kuala Lumpur, Malaysia", cx: 680, cy: 240 },
    { name: "Phnom Penh, Cambodia", cx: 690, cy: 250 },
    { name: "Bangkok, Thailand", cx: 665, cy: 235 },
    { name: "Abuja, Nigeria", cx: 475, cy: 235 },
    { name: "Geneva, Switzerland", cx: 498, cy: 168 }
  ];

  const navigateTo = (page) => {
    setPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero__grid-overlay"></div>
        <div className="hero__orb hero__orb--1"></div>
        <div className="hero__orb hero__orb--2"></div>
        <div className="hero__orb hero__orb--3"></div>
        <div className="hero__cell hero__cell--1"></div>
        <div className="hero__cell hero__cell--2"></div>

        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div className="hero__content reveal">
            <div className="hero__badge">THE SCIENCE OF FAMILY PLANNING</div>
            <h1 className="hero__heading">
              Increase the chances of having the <span style={{ color: '#3bc7c2' }}>daughter or son</span> you've been hoping for.
            </h1>
            <p className="hero__sub">
              MicroSort® is a sperm-sorting technology used by licensed fertility laboratories around the world. 
              It's how thousands of families have improved their odds of conceiving a child of their preferred sex for family balancing or to reduce the risk of sex-linked genetic conditions.
            </p>
            <div className="hero__ctas">
              <button className="btn btn--primary btn--lg" onClick={() => navigateTo('is-it-for-you')}>
                See if MicroSort is right for you →
              </button>
              <button className="btn btn--outline btn--lg" onClick={() => navigateTo('how-it-works')}>
                How the science works
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="stats-bar reveal">
        <div className="container">
          <div className="stats-bar__grid">
            <div>
              <div className="stats-bar__value"><AnimatedCounter value="30" suffix="+" /></div>
              <div className="stats-bar__label">Years of clinical research</div>
            </div>
            <div>
              <div className="stats-bar__value"><AnimatedCounter value="12,000" suffix="+" /></div>
              <div className="stats-bar__label">Families served worldwide</div>
            </div>
            <div>
              <div className="stats-bar__value"><AnimatedCounter value="8" /></div>
              <div className="stats-bar__label">Licensed laboratories</div>
            </div>
            <div>
              <div className="stats-bar__value"><AnimatedCounter value="6" /></div>
              <div className="stats-bar__label">Peer-reviewed publications</div>
            </div>
          </div>
        </div>
      </section>

      {/* Two Paths Section */}
      <section className="section">
        <div className="container">
          <span className="section__label reveal">WHY FAMILIES CHOOSE MICROSORT</span>
          <h2 className="section__title reveal">Two reasons families come to MicroSort</h2>
          
          <div className="card-grid reveal">
            {/* Card 1: Family Balancing */}
            <div className="card" style={{ background: 'rgba(251,247,242,0.9)', borderColor: 'rgba(201,123,91,0.2)' }}>
              <div className="card__icon">🧬</div>
              <h3 className="card__title">Bring more gender variety to your family.</h3>
              <p className="card__body" style={{ marginBottom: '1.5rem' }}>
                If you already have a child or children of one sex, MicroSort can help shift the odds for your next pregnancy. 
                Many families use MicroSort to balance the gender mix of their growing family.
              </p>
              <button 
                onClick={() => navigateTo('family-balancing')} 
                style={{ background: 'none', border: 'none', color: '#3bc7c2', fontWeight: 'bold', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.25rem' }}
              >
                Learn about family balancing →
              </button>
            </div>

            {/* Card 2: Genetic Conditions */}
            <div className="card">
              <div className="card__icon">🔬</div>
              <h3 className="card__title">Reduce the risk of passing on an X-linked disorder.</h3>
              <p className="card__body" style={{ marginBottom: '1.5rem' }}>
                For couples who are known carriers of X-linked or X-limited genetic conditions, choosing the unaffected sex 
                of the baby is one of the most reliable ways to reduce inheritance risk. MicroSort makes this possible before conception.
              </p>
              <button 
                onClick={() => navigateTo('genetic-conditions')} 
                style={{ background: 'none', border: 'none', color: '#3bc7c2', fontWeight: 'bold', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.25rem' }}
              >
                Learn about MicroSort for genetic conditions →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Preview */}
      <section className="section section--alt">
        <div className="container">
          <span className="section__label reveal">THE PROCESS</span>
          <h2 className="section__title reveal">How MicroSort works, in plain language</h2>
          <p className="section__sub reveal">
            MicroSort separates sperm based on a measurable difference in DNA content between X-bearing (girl) and Y-bearing (boy) sperm. 
            The result is an enriched sperm sample that's used in IUI or IVF — performed by your fertility physician.
          </p>
          
          <div className="heritage__timeline reveal">
            <div className="heritage__step">
              <div className="heritage__step-num">01</div>
              <div>
                <h4 className="heritage__step-phase">Initial consultation</h4>
                <p className="card__body">You speak with one of our licensed MicroSort laboratories to confirm eligibility, review the process, and plan timing.</p>
              </div>
            </div>
            <div className="heritage__step">
              <div className="heritage__step-num">02</div>
              <div>
                <h4 className="heritage__step-phase">Sample analysis & sorting</h4>
                <p className="card__body">A semen sample is washed, stained with a DNA-binding fluorescent marker, and analysed cell-by-cell by a flow cytometer.</p>
              </div>
            </div>
            <div className="heritage__step">
              <div className="heritage__step-num">03</div>
              <div>
                <h4 className="heritage__step-phase">Sort + ART procedure</h4>
                <p className="card__body">The enriched sample is used in your fertility treatment — IUI or IVF/ICSI — performed by your physician on the same day.</p>
              </div>
            </div>
          </div>

          <button className="btn btn--outline reveal" onClick={() => navigateTo('how-it-works')}>
            See the full process →
          </button>
        </div>
      </section>

      {/* Results Band */}
      <section className="section evidence-band" style={{ color: 'white' }}>
        <div className="container">
          <span className="section__label reveal" style={{ color: 'rgba(255,255,255,0.6)' }}>EVIDENCE</span>
          <h2 className="section__title reveal" style={{ color: '#fff' }}>A technology backed by published research</h2>
          
          <div className="stats-bar__grid reveal evidence-band__stats" style={{ margin: '3rem 0', border: 'none' }}>
            <div>
              <div className="stats-bar__value" style={{ color: '#3bc7c2', fontSize: 'clamp(3rem, 8vw, 5rem)' }}><AnimatedCounter value="82" prefix="~" suffix="%" /></div>
              <div className="stats-bar__label" style={{ color: 'rgba(255,255,255,0.7)' }}>Girl sort accuracy*</div>
            </div>
            <div>
              <div className="stats-bar__value" style={{ color: '#3bc7c2', fontSize: 'clamp(3rem, 8vw, 5rem)' }}><AnimatedCounter value="93" prefix="~" suffix="%" /></div>
              <div className="stats-bar__label" style={{ color: 'rgba(255,255,255,0.7)' }}>Boy sort accuracy*</div>
            </div>
          </div>

          <p className="card__body reveal" style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '800px', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
            MicroSort's methodology has been the subject of peer-reviewed publications and decades of clinical refinement. 
            Reported accuracy rates are based on documented sort outcomes from licensed MicroSort laboratories.
          </p>
          <p className="reveal" style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', fontStyle: 'italic', marginBottom: '2.5rem' }}>
            *Average chromosome enrichment rates reported in published MicroSort clinical data.</p>
          <button className="btn btn--outline reveal" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.3)' }} onClick={() => navigateTo('results')}>
            See the published evidence →
          </button>
        </div>
      </section>

      {/* Locations Preview */}
      <section className="section">
        <div className="container">
          <span className="section__label reveal">LOCATIONS</span>
          <h2 className="section__title reveal">Licensed MicroSort laboratories around the world</h2>

          {/* SVG Map Container */}
          <div className="reveal" style={{ position: 'relative', background: 'var(--bg-secondary)', borderRadius: '20px', padding: '1.5rem', marginBottom: '2rem', overflow: 'hidden' }}>
            <svg viewBox="0 0 900 450" style={{ width: '100%', height: 'auto', display: 'block' }}>
              {/* Simplified background map outline */}
              <rect x="0" y="0" width="900" height="450" fill="none" />
              {/* Simplified custom path representation of landmasses */}
              <path d="M100 120 L230 120 L250 180 L290 240 L260 300 L200 320 L150 250 Z" fill="rgba(15, 42, 61, 0.05)" />
              <path d="M420 100 L560 90 L580 180 L520 280 L440 220 Z" fill="rgba(15, 42, 61, 0.05)" />
              <path d="M590 120 L760 110 L800 240 L700 320 Z" fill="rgba(15, 42, 61, 0.05)" />

              {/* Location Pins */}
              {pins.map((pin, idx) => (
                <g
                  key={idx}
                  onMouseEnter={() => setHoveredPin(pin.name)}
                  onMouseLeave={() => setHoveredPin(null)}
                  style={{ cursor: 'pointer' }}
                >
                  <circle cx={pin.cx} cy={pin.cy} r="14" fill="rgba(59,199,194,0.18)">
                    <animate attributeName="r" values="8;16;8" dur="3s" repeatCount="indefinite" />
                  </circle>
                  <circle cx={pin.cx} cy={pin.cy} r="6" fill="#3bc7c2" />
                </g>
              ))}
            </svg>

            {/* Hover Tooltip */}
            {hoveredPin && (
              <div style={{
                position: 'absolute',
                bottom: '1rem',
                left: '50%',
                transform: 'translateX(-50%)',
                background: 'var(--white)',
                color: '#fff',
                padding: '0.6rem 1.2rem',
                borderRadius: '8px',
                fontSize: '0.85rem',
                fontWeight: 'bold',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                pointerEvents: 'none'
              }}>
                {hoveredPin}
              </div>
            )}
          </div>

          <p className="card__body reveal" style={{ marginBottom: '2rem' }}>
            MicroSort is available only through licensed laboratories. Many patients also access MicroSort through 
            their local fertility clinic, which ships samples to a licensed lab.
          </p>
          <button className="btn btn--primary reveal" onClick={() => navigateTo('locations')}>
            Find a location near you →
          </button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section section--alt">
        <div className="container">
          <span className="section__label reveal">STORIES</span>
          <h2 className="section__title reveal">Families who chose MicroSort</h2>
          <p className="section__sub reveal">Real parents on what the journey was like.</p>

          <div className="card-grid card-grid--3 reveal">
            <div className="card">
              <span style={{ fontSize: '4rem', fontFamily: 'var(--font-display)', color: 'var(--teal)', opacity: 0.3, lineHeight: 0.8, display: 'block' }}>“</span>
              <p className="card__body" style={{ fontStyle: 'italic' }}>
                "Our gorgeous little girl. Millions and trillions of thank-yous."
              </p>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--teal)', letterSpacing: '0.1em', marginTop: '1.5rem' }}>
                — SHELLEY AND PAUL F.
              </div>
            </div>

            <div className="card">
              <span style={{ fontSize: '4rem', fontFamily: 'var(--font-display)', color: 'var(--teal)', opacity: 0.3, lineHeight: 0.8, display: 'block' }}>“</span>
              <p className="card__body" style={{ fontStyle: 'italic' }}>
                "Everyone was so nice and accommodating. I appreciate that more than I can say."
              </p>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--teal)', letterSpacing: '0.1em', marginTop: '1.5rem' }}>
                — JEFF B.
              </div>
            </div>

            <div className="card">
              <span style={{ fontSize: '4rem', fontFamily: 'var(--font-display)', color: 'var(--teal)', opacity: 0.3, lineHeight: 0.8, display: 'block' }}>“</span>
              <p className="card__body" style={{ fontStyle: 'italic' }}>
                "Thank you for going above and beyond all normal limits to help me with my situation."
              </p>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--teal)', letterSpacing: '0.1em', marginTop: '1.5rem' }}>
                — ELIZABETH L.
              </div>
            </div>
          </div>

          <button className="btn btn--outline reveal" style={{ marginTop: '2.5rem' }} onClick={() => navigateTo('stories')}>
            Read more family stories →
          </button>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta">
        <div className="final-cta__orb"></div>
        <div className="final-cta__content reveal">
          <h2 className="final-cta__title">Ready to take the next step?</h2>
          <p className="final-cta__sub">
            Talk to a MicroSort laboratory directly — every conversation is confidential and there's no obligation.
          </p>
          <div className="hero__ctas" style={{ justifyContent: 'center' }}>
            <button className="btn btn--primary btn--lg" onClick={() => navigateTo('contact')}>
              Contact a laboratory →
            </button>
            <button className="btn btn--outline btn--lg" onClick={() => navigateTo('faq')}>
              Browse FAQs →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}


