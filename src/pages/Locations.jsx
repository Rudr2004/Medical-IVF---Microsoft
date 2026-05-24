import React, { useState } from 'react';

export default function Locations({ setPage }) {
  const [hoveredPin, setHoveredPin] = useState(null);

  const pins = [
    { name: "Mexico City", country: "Mexico", flag: "🇲🇽", cx: 220, cy: 210, procedures: ["IUI", "IVF", "IVF+PGT"] },
    { name: "Nicosia", country: "North Cyprus", flag: "🇨🇾", cx: 510, cy: 175, procedures: ["IUI", "IVF", "IVF+PGT"] },
    { name: "Tokyo", country: "Japan", flag: "🇯🇵", cx: 750, cy: 185, procedures: ["IVF", "IVF+PGT"] },
    { name: "Kuala Lumpur", country: "Malaysia", flag: "🇲🇾", cx: 690, cy: 248, procedures: ["IUI", "IVF"] },
    { name: "Phnom Penh", country: "Cambodia", flag: "🇰🇭", cx: 700, cy: 245, procedures: ["IVF", "IVF+PGT"] },
    { name: "Bangkok", country: "Thailand", flag: "🇹🇭", cx: 673, cy: 237, procedures: ["IUI", "IVF", "IVF+PGT"] },
    { name: "Abuja", country: "Nigeria", flag: "🇳🇬", cx: 475, cy: 237, procedures: ["IUI", "IVF"] },
    { name: "Geneva", country: "Switzerland", flag: "🇨🇭", cx: 498, cy: 165, procedures: ["IVF", "IVF+PGT"] }
  ];

  const navigateTo = (page) => {
    setPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleViewLocation = (country) => {
    alert(`Country subpage — client to provide full details for ${country}.`);
  };

  return (
    <div className="locations-page">
      {/* Page Hero */}
      <section className="section">
        <div className="container">
          <span className="section__label reveal">LICENSED LABORATORIES</span>
          <h1 className="section__title reveal">Licensed MicroSort laboratories</h1>
          <p className="section__sub reveal">
            MicroSort is performed exclusively at licensed laboratories. Use the map or list to find the closest location.
          </p>
        </div>
      </section>

      {/* SVG Interactive Map */}
      <section className="section section--alt" style={{ padding: '3rem 0', position: 'relative' }}>
        <div className="container">
          <div className="reveal" style={{ position: 'relative', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '24px', padding: '1.5rem', overflow: 'hidden' }}>
            <svg viewBox="0 0 900 450" style={{ width: '100%', height: 'auto', display: 'block' }}>
              <rect x="0" y="0" width="900" height="450" fill="none" />
              {/* Land outline vectors in var(--border) fill */}
              <path d="M80 120 L230 110 L250 170 L290 230 L260 290 L200 310 L140 240 Z" fill="var(--border)" opacity="0.3" />
              <path d="M400 100 L560 90 L580 180 L520 280 L440 220 Z" fill="var(--border)" opacity="0.3" />
              <path d="M590 120 L760 110 L800 240 L700 320 Z" fill="var(--border)" opacity="0.3" />
              
              {/* Pins */}
              {pins.map((pin, idx) => (
                <g
                  key={idx}
                  onMouseEnter={() => setHoveredPin(pin)}
                  onMouseLeave={() => setHoveredPin(null)}
                  style={{ cursor: 'pointer' }}
                >
                  <circle cx={pin.cx} cy={pin.cy} r="14" fill="rgba(59,199,194,0.2)">
                    <animate attributeName="r" values="8;15;8" dur="3s" repeatCount="indefinite" />
                  </circle>
                  <circle cx={pin.cx} cy={pin.cy} r="7" fill="var(--teal)" />
                </g>
              ))}
            </svg>

            {/* Absolute Tooltip */}
            {hoveredPin && (
              <div className="card" style={{
                position: 'absolute',
                bottom: '1.5rem',
                left: '50%',
                transform: 'translateX(-50%)',
                padding: '0.8rem 1.5rem',
                zIndex: 10,
                pointerEvents: 'none',
                boxShadow: '0 8px 24px rgba(15,42,61,0.1)',
                border: '1px solid var(--border-teal)'
              }}>
                <div style={{ fontWeight: 'bold', fontSize: '1rem', color: 'var(--white)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span>{hoveredPin.flag}</span>
                  <span>{hoveredPin.name}, {hoveredPin.country}</span>
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--teal)', marginTop: '0.25rem', fontFamily: 'var(--font-mono)' }}>
                  Procedures: {hoveredPin.procedures.join(' · ')}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Location Cards Grid */}
      <section className="section">
        <div className="container">
          <div className="card-grid card-grid--4 reveal">
            {pins.map((pin, idx) => (
              <div key={idx} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{
                  height: '120px',
                  background: 'linear-gradient(135deg, var(--bg-secondary) 0%, rgba(59,199,194,0.08) 100%)',
                  borderRadius: '8px',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '3rem'
                }}>
                  {pin.flag}
                </div>
                <h3 className="card__title">{pin.country}</h3>
                <div style={{ fontFamily: 'var(--font-mono)', color: 'var(--teal)', fontSize: '0.75rem', marginBottom: '1rem' }}>
                  {pin.name}
                </div>
                
                {/* Procedures list */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                  {pin.procedures.map((p, pIdx) => (
                    <span 
                      key={pIdx}
                      style={{
                        background: 'var(--teal-dim)',
                        color: 'var(--teal)',
                        fontSize: '0.65rem',
                        fontWeight: '700',
                        padding: '0.2rem 0.6rem',
                        borderRadius: '100px'
                      }}
                    >
                      {p}
                    </span>
                  ))}
                </div>

                <button 
                  className="btn btn--outline btn--sm" 
                  style={{ marginTop: 'auto', width: '100%' }}
                  onClick={() => handleViewLocation(pin.country)}
                >
                  View location →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shipment and Clinic Coordination */}
      <section className="section section--alt" style={{ padding: '4rem 0' }}>
        <div className="container">
          <div className="card reveal" style={{ background: 'var(--teal-dim)', borderColor: 'var(--border-teal)', textAlign: 'center', padding: '3rem 2rem' }}>
            <h2 className="section__title--sm">Not near any of these locations?</h2>
            <p className="card__body" style={{ maxWidth: '700px', margin: '0 auto 2rem auto', fontSize: '1.05rem', lineHeight: '1.6' }}>
              Many patients access MicroSort through their local fertility clinic, which ships samples to a licensed 
              laboratory. Contact us to learn whether your local clinic can coordinate a MicroSort cycle for you.
            </p>
            <button className="btn btn--primary" onClick={() => navigateTo('contact')}>
              Contact us →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
