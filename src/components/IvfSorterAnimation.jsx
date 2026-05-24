import React from 'react';

export default function IvfSorterAnimation() {
  return (
    <div className="ivf-dashboard-card card night reveal-on-scroll" style={{ padding: '2.5rem', marginTop: '3rem', position: 'relative', overflow: 'hidden' }}>
      {/* Soft Background Orbs */}
      <div className="glow-orb" style={{ position: 'absolute', top: '-10%', left: '-10%', width: '300px', height: '300px', background: 'rgba(59, 199, 194, 0.05)', filter: 'blur(60px)', pointerEvents: 'none' }}></div>
      <div className="glow-orb" style={{ position: 'absolute', bottom: '-10%', right: '-10%', width: '300px', height: '300px', background: 'rgba(47, 176, 171, 0.05)', filter: 'blur(60px)', pointerEvents: 'none' }}></div>

      <div style={{ textAlign: 'left', marginBottom: '2rem', zIndex: 2, position: 'relative' }}>
        <span className="section-eyebrow" style={{ color: 'var(--teal)' }}>Scientific Visualization</span>
        <h3 style={{ color: '#fff', fontSize: '1.6rem', margin: '0.25rem 0 0.5rem 0' }}>Clinical Flow Cytometry & IVF Interface</h3>
        <p style={{ color: 'rgba(255, 255, 255, 0.65)', fontSize: '0.9375rem', maxWidth: '800px', margin: 0 }}>
          MicroSort separates sperm cells by measuring their relative DNA content (X-bearing sperm absorb more dye and fluoresce 2.8% brighter). 
          The telemetry below shows real-time cytometric peak separation and clinical oocyte insemination coordination.
        </p>
      </div>

      {/* Grid Dashboard */}
      <div className="dashboard-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem', position: 'relative', zIndex: 2 }}>
        
        {/* Left Column: Cytometer Histogram Analysis */}
        <div className="dashboard-panel" style={{ background: 'rgba(10, 31, 45, 0.5)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '18px', padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '0.75rem' }}>
            <span style={{ color: '#fff', fontWeight: '700', fontSize: '0.875rem', letterSpacing: '0.05em', fontFamily: 'var(--font-mono)' }}>[01] CYTOMETRIC SPECTRUM</span>
            <span className="pulse-indicator" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', color: 'var(--teal)', fontWeight: 'bold' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--teal)', display: 'inline-block', boxShadow: '0 0 8px var(--teal)' }}></span>
              LIVE ANALYSIS
            </span>
          </div>

          <div style={{ position: 'relative', width: '100%', height: '180px', background: 'rgba(5, 15, 23, 0.6)', borderRadius: '10px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.03)' }}>
            {/* SVG Histogram */}
            <svg viewBox="0 0 350 180" width="100%" height="100%">
              <defs>
                <linearGradient id="channelLaserGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="rgba(59, 199, 194, 0)" />
                  <stop offset="50%" stopColor="rgba(59, 199, 194, 0.8)" />
                  <stop offset="100%" stopColor="rgba(59, 199, 194, 0)" />
                </linearGradient>
              </defs>
              
              {/* Technical Grid Lines */}
              <line x1="0" y1="150" x2="350" y2="150" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
              <line x1="50" y1="0" x2="50" y2="180" stroke="rgba(255,255,255,0.03)" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="175" y1="0" x2="175" y2="180" stroke="rgba(255,255,255,0.03)" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="300" y1="0" x2="300" y2="180" stroke="rgba(255,255,255,0.03)" strokeWidth="1" strokeDasharray="3 3" />

              {/* Glassmorphic Channels */}
              {/* Main channel */}
              <path d="M 175,20 L 175,70" fill="none" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="12" strokeLinecap="round" />
              <path d="M 175,20 L 175,70" fill="none" stroke="rgba(10, 31, 45, 0.8)" strokeWidth="8" strokeLinecap="round" />
              {/* Left X Channel */}
              <path d="M 175,70 Q 175,90 130,120 L 90,150" fill="none" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="12" strokeLinecap="round" />
              <path d="M 175,70 Q 175,90 130,120 L 90,150" fill="none" stroke="rgba(10, 31, 45, 0.8)" strokeWidth="8" strokeLinecap="round" />
              {/* Right Y Channel */}
              <path d="M 175,70 Q 175,90 220,120 L 260,150" fill="none" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="12" strokeLinecap="round" />
              <path d="M 175,70 Q 175,90 220,120 L 260,150" fill="none" stroke="rgba(10, 31, 45, 0.8)" strokeWidth="8" strokeLinecap="round" />

              {/* Laser Beam Spot */}
              <line x1="50" y1="75" x2="300" y2="75" stroke="url(#channelLaserGrad)" strokeWidth="4" />
              <circle cx="175" cy="75" r="5" fill="var(--teal-light)" style={{ filter: 'drop-shadow(0 0 6px var(--teal-light))' }}>
                <animate attributeName="r" values="4;8;4" dur="0.8s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.5;1;0.5" dur="0.8s" repeatCount="indefinite" />
              </circle>

              {/* ================= FLOWING CELL PARTICLES ================= */}
              {/* X Cell 1 (Cyan) */}
              <circle r="3" fill="var(--teal-light)" style={{ filter: 'drop-shadow(0 0 4px var(--teal-light))' }}>
                <animateMotion dur="2.4s" repeatCount="indefinite" path="M 175,20 L 175,75 Q 175,90 130,120 L 90,150" />
              </circle>
              {/* X Cell 2 */}
              <circle r="3" fill="var(--teal-light)" style={{ filter: 'drop-shadow(0 0 4px var(--teal-light))' }}>
                <animateMotion dur="2.4s" begin="1.2s" repeatCount="indefinite" path="M 175,20 L 175,75 Q 175,90 130,120 L 90,150" />
              </circle>

              {/* Y Cell 1 (Dim White/Blue) */}
              <circle r="2.5" fill="rgba(255,255,255,0.4)">
                <animateMotion dur="2.4s" begin="0.6s" repeatCount="indefinite" path="M 175,20 L 175,75 Q 175,90 220,120 L 260,150" />
              </circle>
              {/* Y Cell 2 */}
              <circle r="2.5" fill="rgba(255,255,255,0.4)">
                <animateMotion dur="2.4s" begin="1.8s" repeatCount="indefinite" path="M 175,20 L 175,75 Q 175,90 220,120 L 260,150" />
              </circle>

              {/* Labels inside graph */}
              <text x="75" y="135" fill="rgba(255,255,255,0.4)" fontSize="9" fontFamily="var(--font-mono)">X-Sort (Cyan)</text>
              <text x="275" y="135" fill="rgba(255,255,255,0.4)" fontSize="9" fontFamily="var(--font-mono)" textAnchor="end">Y-Sort (Dim)</text>
            </svg>
          </div>

          {/* Telemetry Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginTop: '1.25rem' }}>
            <div style={{ background: 'rgba(255,255,255,0.02)', padding: '0.75rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.04)', textAlign: 'left' }}>
              <div style={{ fontSize: '0.6875rem', color: 'rgba(255, 255, 255, 0.45)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase' }}>Divergence Metric</div>
              <div style={{ fontSize: '1.1rem', color: '#fff', fontWeight: 'bold', fontFamily: 'var(--font-display)', marginTop: '0.15rem' }}>+2.8% DNA</div>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.02)', padding: '0.75rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.04)', textAlign: 'left' }}>
              <div style={{ fontSize: '0.6875rem', color: 'rgba(255, 255, 255, 0.45)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase' }}>Purity Target</div>
              <div style={{ fontSize: '1.1rem', color: 'var(--teal-light)', fontWeight: 'bold', fontFamily: 'var(--font-display)', marginTop: '0.15rem' }}>~93.0% X</div>
            </div>
          </div>
        </div>

        {/* Right Column: IVF Oocyte Micromanipulation (ICSI) */}
        <div className="dashboard-panel" style={{ background: 'rgba(10, 31, 45, 0.5)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '18px', padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '0.75rem' }}>
            <span style={{ color: '#fff', fontWeight: '700', fontSize: '0.875rem', letterSpacing: '0.05em', fontFamily: 'var(--font-mono)' }}>[02] IVF / ICSI CHAMBER</span>
            <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-mono)' }}>STAGE: FERTILIZATION</span>
          </div>

          <div style={{ position: 'relative', width: '100%', height: '180px', background: 'rgba(5, 15, 23, 0.6)', borderRadius: '10px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.03)' }}>
            {/* SVG Oocyte Insemination */}
            <svg viewBox="0 0 350 180" width="100%" height="100%">
              <defs>
                <radialGradient id="oocyteGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="rgba(255, 255, 255, 0.95)" />
                  <stop offset="50%" stopColor="rgba(240, 248, 255, 0.7)" />
                  <stop offset="85%" stopColor="rgba(59, 199, 194, 0.2)" />
                  <stop offset="100%" stopColor="rgba(59, 199, 194, 0.5)" />
                </radialGradient>
                <radialGradient id="zonaPellucidaGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="70%" stopColor="rgba(59, 199, 194, 0)" />
                  <stop offset="90%" stopColor="rgba(59, 199, 194, 0.3)" />
                  <stop offset="100%" stopColor="rgba(59, 199, 194, 0.6)" />
                </radialGradient>
                <radialGradient id="fertFlashDynamic" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="rgba(59, 199, 194, 0.95)" />
                  <stop offset="50%" stopColor="rgba(59, 199, 194, 0.4)" />
                  <stop offset="100%" stopColor="rgba(59, 199, 194, 0)" />
                </radialGradient>

                {/* Sperm Shape Definition */}
                <g id="sperm-shape-tiny">
                  <ellipse cx="0" cy="0" rx="3.5" ry="2.2" fill="rgba(255, 255, 255, 0.7)" />
                  <path d="M -3.5,0 Q -8,-2 -12,0 T -20,0" fill="none" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="0.8">
                    <animate attributeName="d" 
                      values="M -3.5,0 Q -8,-2 -12,0 T -20,0;
                              M -3.5,0 Q -8,2 -12,0 T -20,0;
                              M -3.5,0 Q -8,-2 -12,0 T -20,0" 
                      dur="0.12s" 
                      repeatCount="indefinite" 
                    />
                  </path>
                </g>
              </defs>

              {/* Grid Overlay */}
              <circle cx="190" cy="90" r="75" fill="none" stroke="rgba(255,255,255,0.02)" strokeWidth="1" strokeDasharray="5 5" />
              <line x1="190" y1="0" x2="190" y2="180" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />
              <line x1="0" y1="90" x2="350" y2="90" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />

              {/* IVF Holding Pipette (Right side) - Stays stationary holding oocyte */}
              <path d="M 350,90 L 270,90" stroke="rgba(255, 255, 255, 0.12)" strokeWidth="20" strokeLinecap="round" />
              <path d="M 350,90 L 270,90" stroke="rgba(5, 15, 23, 0.9)" strokeWidth="14" strokeLinecap="round" />
              <path d="M 270,90 L 262,90" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="10" strokeLinecap="round" />

              {/* Oocyte (Egg) Cell body with reaction animation */}
              <g style={{ transformOrigin: '190px 90px', animation: 'oocyteReact 8s infinite ease-in-out' }}>
                {/* Zona Pellucida */}
                <circle cx="190" cy="90" r="46" fill="url(#zonaPellucidaGlow)" />
                <circle cx="190" cy="90" r="45" fill="none" stroke="var(--teal)" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
                {/* Ooplasm (Inner body) */}
                <circle cx="190" cy="90" r="38" fill="url(#oocyteGlow)" style={{ filter: 'drop-shadow(0 0 8px rgba(59,199,194,0.15))' }} />
                {/* Polar body */}
                <circle cx="205" cy="76" r="7" fill="rgba(59,199,194,0.2)" stroke="var(--teal)" strokeWidth="1" opacity="0.6" />
                <circle cx="203" cy="74" r="2.5" fill="var(--teal)" opacity="0.4" />
                
                {/* Fertilization Wave Flash Overlay */}
                <circle cx="190" cy="90" r="50" fill="url(#fertFlashDynamic)" style={{ transformOrigin: '190px 90px', animation: 'fertWave 8s infinite ease-in-out', pointerEvents: 'none' }} />
              </g>

              {/* Swimming Sperm A (wiggles outside, then scatters/fades out at fertilization) */}
              <g style={{ transformOrigin: '120px 55px', animation: 'swimAway 8s infinite ease-in-out, wiggle 0.12s infinite alternate' }}>
                <g transform="translate(120, 55) rotate(15)">
                  <use href="#sperm-shape-tiny" />
                </g>
              </g>

              {/* Swimming Sperm B */}
              <g style={{ transformOrigin: '105px 125px', animation: 'swimAway 8s infinite ease-in-out, wiggle 0.1s infinite alternate' }}>
                <g transform="translate(105, 125) rotate(-20)">
                  <use href="#sperm-shape-tiny" />
                </g>
              </g>

              {/* Swimming Sperm C */}
              <g style={{ transformOrigin: '130px 95px', animation: 'swimAway 8s infinite ease-in-out, wiggle 0.15s infinite alternate' }}>
                <g transform="translate(130, 95) rotate(-5)">
                  <use href="#sperm-shape-tiny" />
                </g>
              </g>

              {/* ICSI Microinjection Needle (Left side, introducing sorted sperm) */}
              <g style={{ animation: 'needleInject 8s infinite ease-in-out' }}>
                {/* Glass Micro-needle */}
                <path d="M 0,90 L 125,90 L 150,90" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="5" strokeLinecap="round" />
                <path d="M 125,90 L 150,90" stroke="rgba(59, 199, 194, 0.8)" strokeWidth="2.5" strokeLinecap="round" style={{ filter: 'drop-shadow(0 0 3px var(--teal))' }} />
                <path d="M 0,90 L 115,90" stroke="rgba(5, 15, 23, 0.9)" strokeWidth="2" />
              </g>

              {/* Selected Injecting Sperm Cell */}
              <g style={{ transformOrigin: '120px 90px', animation: 'spermDeposit 8s infinite ease-in-out' }}>
                <ellipse cx="120" cy="90" rx="3.5" ry="2.2" fill="#fff" />
                <path d="M 116.5,90 C 111,88 108,92 100,90" fill="none" stroke="#fff" strokeWidth="0.8" />
              </g>

              {/* Needle insertion point contact glow */}
              <circle cx="164" cy="90" r="4" fill="var(--teal-light)" style={{ filter: 'drop-shadow(0 0 4px var(--teal-light))', opacity: 0.8 }} />
            </svg>
          </div>

          {/* Telemetry Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginTop: '1.25rem' }}>
            <div style={{ background: 'rgba(255,255,255,0.02)', padding: '0.75rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.04)', textAlign: 'left' }}>
              <div style={{ fontSize: '0.6875rem', color: 'rgba(255, 255, 255, 0.45)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase' }}>Oocyte Status</div>
              <div style={{ fontSize: '1.1rem', color: '#fff', fontWeight: 'bold', fontFamily: 'var(--font-display)', marginTop: '0.15rem' }}>Active Sort</div>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.02)', padding: '0.75rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.04)', textAlign: 'left' }}>
              <div style={{ fontSize: '0.6875rem', color: 'rgba(255, 255, 255, 0.45)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase' }}>Insemination</div>
              <div style={{ fontSize: '1.1rem', color: 'var(--teal-light)', fontWeight: 'bold', fontFamily: 'var(--font-display)', marginTop: '0.15rem' }}>In Progress</div>
            </div>
          </div>
        </div>

      </div>

      {/* Styled Embed Styles */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes needleInject {
          0%, 15% { transform: translateX(0); }
          30%, 45% { transform: translateX(35px); }
          60%, 100% { transform: translateX(0); }
        }
        @keyframes spermDeposit {
          0% { transform: translate(0, 0); opacity: 1; }
          15% { transform: translate(15px, 0); opacity: 1; }
          30% { transform: translate(50px, 0); opacity: 1; }
          38%, 85% { transform: translate(70px, 0) scale(1.15); opacity: 1; filter: drop-shadow(0 0 5px var(--teal-light)); }
          90%, 100% { transform: translate(70px, 0) scale(0.5); opacity: 0; }
        }
        @keyframes oocyteReact {
          0%, 20% { transform: translateX(0) scale(1); }
          30%, 45% { transform: translateX(5px) scale(0.97, 1); }
          55%, 100% { transform: translateX(0) scale(1); }
        }
        @keyframes fertWave {
          0%, 35% { opacity: 0; transform: scale(0.3); }
          45%, 55% { opacity: 0.9; transform: scale(1.15); }
          75%, 100% { opacity: 0; transform: scale(1.4); }
        }
        @keyframes swimAway {
          0%, 35% { opacity: 0.6; transform: translate(0, 0); }
          45%, 55% { opacity: 0; transform: translate(-40px, -20px); }
          55%, 100% { opacity: 0; }
        }
        @keyframes wiggle {
          0% { transform: rotate(-3deg); }
          100% { transform: rotate(3deg); }
        }
        .ivf-dashboard-card {
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: linear-gradient(135deg, rgba(10, 31, 45, 0.95) 0%, rgba(6, 21, 31, 0.98) 100%) !important;
        }
      `}} />
    </div>
  );
}
