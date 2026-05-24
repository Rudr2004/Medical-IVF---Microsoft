import { useState } from 'react';
import { LOCATIONS_DATA } from '../data/locations';
import worldMapImg from '../assets/world_map_vector.png';

export default function LocationsPage({ navigateTo }) {
  const [hoveredLocation, setHoveredLocation] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProcedure, setSelectedProcedure] = useState('All');
  const [activeCardId, setActiveCardId] = useState(null);

  const filteredLocations = LOCATIONS_DATA.filter((loc) => {
    const matchesSearch = 
      loc.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      loc.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
      loc.name.toLowerCase().includes(searchQuery.toLowerCase());
      
    const matchesProcedure = 
      selectedProcedure === 'All' ||
      loc.procedures.some(p => p.includes(selectedProcedure));
      
    return matchesSearch && matchesProcedure;
  });

  return (
    <section className="section-padding">
      <div className="container">
        <div className="section-title-wrapper reveal-on-scroll" style={{ margin: '0 auto 3rem auto', textAlign: 'center' }}>
          <span className="section-eyebrow">Global Locations</span>
          <h1>Licensed MicroSort Laboratories</h1>
          <p style={{ maxWidth: '720px', margin: '1rem auto 0 auto' }}>
            MicroSort sorting procedures are performed in controlled clinical environments. 
            Choose a location pin on the map or review the laboratory listings below.
          </p>
        </div>

        {/* World Map Container */}
        <div 
          className="map-container reveal-on-scroll"
          onMouseLeave={() => setHoveredLocation(null)}
          style={{ maxWidth: '800px', margin: '0 auto 3.5rem auto' }}
        >
          {/* Simple Vector Schematic World Map */}
          <svg viewBox="0 0 1000 480" className="world-map-svg">
            <defs>
              <pattern id="locations-grid" width="30" height="30" patternUnits="userSpaceOnUse">
                <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(15, 61, 92, 0.04)" stroke-width="1" />
              </pattern>
            </defs>
            {/* Modern Vector Map Background Image */}
            <image 
              href={worldMapImg} 
              width="1000" 
              height="480" 
              opacity="0.9"
            />

            {/* Technical Grid Overlay */}
            <rect width="1000" height="480" fill="url(#locations-grid)" rx="8" pointerEvents="none" />

            {/* Pins */}
            {LOCATIONS_DATA.map((loc) => (
              <g 
                key={loc.id} 
                className="map-marker"
                onMouseEnter={() => setHoveredLocation(loc)}
                onMouseLeave={() => setHoveredLocation(null)}
                onClick={() => {
                  setSearchQuery('');
                  setSelectedProcedure('All');
                  setTimeout(() => {
                    const cardElement = document.getElementById(`card-${loc.id}`);
                    if (cardElement) {
                      cardElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                      setActiveCardId(loc.id);
                      setTimeout(() => setActiveCardId(null), 3000);
                    }
                  }, 100);
                }}
              >
                {/* Animating ripple rings (staggered double pulses) */}
                <circle cx={loc.coords.x} cy={loc.coords.y} r="7" className="marker-ripple ripple-1" />
                <circle cx={loc.coords.x} cy={loc.coords.y} r="7" className="marker-ripple ripple-2" />
                {/* Solid core pin */}
                <circle cx={loc.coords.x} cy={loc.coords.y} r="7" className="marker-core" />
                {/* Large invisible interactive shield to prevent hover flicker */}
                <circle cx={loc.coords.x} cy={loc.coords.y} r="25" fill="transparent" style={{ cursor: 'pointer' }} />
              </g>
            ))}

            {/* Dynamic Tooltip inside SVG Coordinate Space */}
            {hoveredLocation && (
              <foreignObject 
                x={hoveredLocation.coords.x - 120} 
                y={hoveredLocation.coords.y - 170} 
                width="240" 
                height="160" 
                style={{ pointerEvents: 'none' }}
              >
                <div 
                  className="map-tooltip"
                  style={{ 
                    position: 'static',
                    opacity: 1,
                    transform: 'none',
                    width: '100%',
                    boxSizing: 'border-box',
                    pointerEvents: 'none'
                  }}
                >
                  <div className="map-tooltip-city">{hoveredLocation.city}</div>
                  <div className="map-tooltip-country">{hoveredLocation.country}</div>
                  <div className="map-tooltip-text" style={{ fontSize: '0.8rem', marginTop: '0.25rem' }}>
                    Procedures: {hoveredLocation.procedures.join(', ')}<br />
                    Languages: {hoveredLocation.languages.join(', ')}
                  </div>
                  <div style={{ fontSize: '0.72rem', marginTop: '0.5rem', color: 'var(--teal)', fontWeight: 'bold' }}>
                    Click to view details ↓
                  </div>
                </div>
              </foreignObject>
            )}
          </svg>
        </div>

        {/* Filter Bar */}
        <div className="filter-bar reveal-on-scroll" style={{ padding: '1.25rem 2rem', marginBottom: '2.5rem', display: 'flex', flexWrap: 'wrap', gap: '1.5rem', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(10, 31, 45, 0.4)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '18px' }}>
          {/* Search Box */}
          <div style={{ position: 'relative', flex: '1 1 280px' }}>
            <input 
              type="text" 
              placeholder="Search by city, country or lab..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem 1rem 0.75rem 2.5rem',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                background: 'rgba(5, 15, 23, 0.5)',
                color: '#fff',
                fontFamily: 'var(--font-body)',
                fontSize: '0.9rem',
                outline: 'none',
                transition: 'all 0.3s'
              }}
              className="search-input"
            />
            <span style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', opacity: 0.5, fontSize: '0.85rem' }}>🔍</span>
          </div>

          {/* Procedure Filter Pills */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginRight: '0.5rem', fontFamily: 'var(--font-mono)' }}>PROCEDURES:</span>
            {['All', 'IVF', 'IUI', 'IVF + PGT', 'Coordination'].map((proc) => (
              <button
                key={proc}
                onClick={() => setSelectedProcedure(proc)}
                style={{
                  padding: '0.45rem 0.95rem',
                  borderRadius: '20px',
                  border: '1.5px solid ' + (selectedProcedure === proc ? 'var(--teal)' : 'rgba(255, 255, 255, 0.08)'),
                  background: selectedProcedure === proc ? 'var(--teal)' : 'rgba(10, 31, 45, 0.6)',
                  color: selectedProcedure === proc ? '#fff' : 'rgba(255,255,255,0.7)',
                  cursor: 'pointer',
                  fontSize: '0.78rem',
                  fontWeight: '600',
                  transition: 'all 0.3s'
                }}
              >
                {proc === 'Coordination' ? 'Shipment Only' : proc}
              </button>
            ))}
          </div>
        </div>

        {/* Directory Listing */}
        {filteredLocations.length === 0 ? (
          <div className="reveal-on-scroll" style={{ textAlign: 'center', padding: '4rem 2rem', background: 'rgba(10, 31, 45, 0.3)', borderRadius: '24px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
            <span style={{ fontSize: '2.5rem' }}>🔍</span>
            <h4 style={{ margin: '1rem 0 0.5rem 0', color: '#fff', fontSize: '1.25rem' }}>No clinical sites match your filters</h4>
            <p style={{ color: 'var(--text-muted)', margin: 0, fontSize: '0.9375rem' }}>Try refining your keywords or selected procedure criteria.</p>
            <button 
              onClick={() => { setSearchQuery(''); setSelectedProcedure('All'); }} 
              className="btn btn-secondary" 
              style={{ marginTop: '1.5rem' }}
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <div className="locations-grid">
            {filteredLocations.map((loc, idx) => (
              <div 
                key={loc.id} 
                id={`card-${loc.id}`}
                className={`location-card reveal-on-scroll ${activeCardId === loc.id ? 'active-highlight' : ''}`}
                style={{ transition: 'all 0.4s ease' }}
              >
                <div className="location-img-wrapper">
                  <div className="location-img-overlay">
                    <div className="location-badge-circle">
                      {loc.city.substring(0, 2).toUpperCase()}
                    </div>
                  </div>
                </div>
                <div className="location-info" style={{ textAlign: 'left', display: 'flex', flexDirection: 'column' }}>
                  <span className="location-country">{loc.country}</span>
                  <h3 className="location-city">{loc.city}</h3>
                  
                  <div className="location-specs" style={{ flexGrow: 1 }}>
                    <span><strong>Lab:</strong> {loc.name}</span>
                    <span><strong>Languages:</strong> {loc.languages.join(', ')}</span>
                    <span><strong>Hours:</strong> {loc.hours}</span>
                    <span><strong>Tel:</strong> {loc.phone}</span>
                  </div>

                  <div className="location-badges" style={{ marginTop: '1.25rem', marginBottom: '1.25rem' }}>
                    {loc.procedures.map((p, idx) => (
                      <span key={idx} className="procedure-badge">{p}</span>
                    ))}
                  </div>

                  <button 
                    onClick={() => navigateTo('/contact')} 
                    className="btn btn-ghost" 
                    style={{ padding: '0.6rem 1rem', fontSize: '0.85rem', width: '100%', borderColor: 'rgba(255, 255, 255, 0.15)', color: 'rgba(255, 255, 255, 0.9)' }}
                  >
                    Contact laboratory <span className="btn-arrow">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Shipment Callout */}
        <div className="locations-callout reveal-on-scroll card" style={{ padding: '2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '4rem', flexWrap: 'wrap', gap: '2rem' }}>
          <div className="locations-callout-text" style={{ flex: '1 1 500px', textAlign: 'left' }}>
            <h3>Not located near a MicroSort laboratory?</h3>
            <p style={{ margin: 0 }}>
              Many couples complete ovarian tracking at their local fertility clinic, which coordinate sample prep 
              and cryopreserved shipping directly with a licensed laboratory. 
              Contact our international team to confirm coordinates for shipping.
            </p>
          </div>
          <div>
            <button onClick={() => navigateTo('/contact')} className="btn btn-primary">
              Learn about shipping options <span className="btn-arrow">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
