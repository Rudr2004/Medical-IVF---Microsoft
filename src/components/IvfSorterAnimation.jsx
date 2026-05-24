import React, { useState, useEffect } from 'react';

export default function IvfSorterAnimation() {
  const [phase, setPhase] = useState(0); // 0 = Securing, 1 = Injecting, 2 = Fertilized, 3 = Complete

  // Sync React telemetry text state with the 8-second CSS animation loop (2s per phase)
  useEffect(() => {
    const interval = setInterval(() => {
      setPhase((prev) => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Determine dynamic stats values
  const getOocyteStatus = () => {
    switch (phase) {
      case 0: return { text: 'Secured', color: 'var(--teal-light)' };
      case 1: return { text: 'Penetrating', color: '#ffb03b' };
      case 2: return { text: 'Fertilized', color: '#3bc7c2' };
      case 3: return { text: 'Receptive', color: 'rgba(255,255,255,0.7)' };
      default: return { text: 'Secured', color: 'var(--teal-light)' };
    }
  };

  const getInseminationStatus = () => {
    switch (phase) {
      case 0: return { text: 'Aligning', color: 'rgba(255,255,255,0.7)' };
      case 1: return { text: 'In Progress', color: '#ffb03b' };
      case 2: return { text: 'Successful', color: '#3bc7c2' };
      case 3: return { text: 'Complete', color: 'var(--teal-light)' };
      default: return { text: 'Aligning', color: 'rgba(255,255,255,0.7)' };
    }
  };

  const oocyteStatus = getOocyteStatus();
  const inseminationStatus = getInseminationStatus();

  return (
    <div className="ivf-dashboard-card card night reveal-on-scroll" style={{ padding: '2.5rem', marginTop: '3rem', position: 'relative', overflow: 'hidden' }}>
      {/* Soft Background Orbs */}
      <div className="glow-orb" style={{ position: 'absolute', top: '-10%', left: '-10%', width: '300px', height: '300px', background: 'rgba(59, 199, 194, 0.05)', filter: 'blur(60px)', pointerEvents: 'none' }}></div>
      <div className="glow-orb" style={{ position: 'absolute', bottom: '-10%', right: '-10%', width: '300px', height: '300px', background: 'rgba(47, 176, 171, 0.05)', filter: 'blur(60px)', pointerEvents: 'none' }}></div>

      <div style={{ textAlign: 'left', marginBottom: '2rem', zIndex: 2, position: 'relative' }}>
        <span className="section-eyebrow" style={{ color: 'var(--teal)' }}>Scientific Diagram</span>
        <h3 style={{ color: '#fff', fontSize: '1.6rem', margin: '0.25rem 0 0.5rem 0' }}>Clinical Flow Cytometry & IVF Interface</h3>
        <p style={{ color: 'rgba(255, 255, 255, 0.65)', fontSize: '0.9375rem', maxWidth: '800px', margin: 0 }}>
          MicroSort separates sperm cells by measuring their relative DNA content (X-bearing sperm absorb more dye and fluoresce 2.8% brighter). The telemetry below shows cytometric peak separation and clinical oocyte insemination coordination.
        </p>
      </div>

      {/* Grid Dashboard */}
      <div className="dashboard-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem', position: 'relative', zIndex: 2 }}>
        
        {/* Left Column: Cytometer Histogram Analysis */}
        <div className="dashboard-panel" style={{ background: 'rgba(10, 31, 45, 0.5)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '18px', padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '0.75rem' }}>
            <span style={{ color: '#fff', fontWeight: '700', fontSize: '0.875rem', letterSpacing: '0.05em', fontFamily: 'var(--font-mono)' }}>[01] CYTOMETRIC SPECTRUM</span>
            <span className="pulse-indicator" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', color: 'var(--teal)', fontWeight: 'bold' }}>
              <span className="pulse-dot" style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--teal)', display: 'inline-block', boxShadow: '0 0 8px var(--teal)' }}></span>
              ACTIVE SORT
            </span>
          </div>

          <div style={{ position: 'relative', width: '100%', height: '180px', background: 'rgba(5, 15, 23, 0.6)', borderRadius: '10px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.03)' }}>
            {/* SVG Histogram */}
            <svg viewBox="0 0 350 180" width="100%" height="100%">
              <defs>
                <linearGradient id="laserSweepGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="rgba(59, 199, 194, 0)" />
                  <stop offset="50%" stopColor="rgba(59, 199, 194, 0.4)" />
                  <stop offset="100%" stopColor="rgba(59, 199, 194, 0)" />
                </linearGradient>
                
                {/* Sperm Template for Sorter */}
                <g id="sperm-shape-sorter">
                  <ellipse cx="0" cy="0" rx="3.2" ry="1.8" />
                  <path d="M -3.2,0 Q -6,-1.5 -9,0 T -15,0" fill="none" strokeWidth="0.7">
                    <animate attributeName="d" 
                      values="M -3.2,0 Q -6,-1.5 -9,0 T -15,0;
                              M -3.2,0 Q -6,1.5 -9,0 T -15,0;
                              M -3.2,0 Q -6,-1.5 -9,0 T -15,0" 
                      dur="0.1s" 
                      repeatCount="indefinite" 
                    />
                  </path>
                </g>
              </defs>
              
              {/* Coordinate Grid Overlay */}
              <line x1="0" y1="145" x2="350" y2="145" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
              <line x1="50" y1="10" x2="50" y2="145" stroke="rgba(255,255,255,0.03)" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="135" y1="10" x2="135" y2="145" stroke="rgba(255,255,255,0.03)" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="215" y1="10" x2="215" y2="145" stroke="rgba(255,255,255,0.03)" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="300" y1="10" x2="300" y2="145" stroke="rgba(255,255,255,0.03)" strokeWidth="1" strokeDasharray="3 3" />
              
              {/* Y-Peak Curve (Grey/Muted) */}
              <path d="M 50,145 Q 120,145 135,80 T 220,145" fill="rgba(255, 255, 255, 0.02)" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="1.5" />
              
              {/* X-Peak Curve (Cyan Target - Glows) */}
              <path d="M 130,145 Q 200,145 215,50 T 300,145" fill="rgba(59, 199, 194, 0.08)" stroke="var(--teal)" strokeWidth="2.5" style={{ filter: 'drop-shadow(0 0 5px rgba(59,199,194,0.3))' }} />

              {/* Labels inside graph */}
              <text x="135" y="98" fill="rgba(255,255,255,0.4)" fontSize="8.5" fontFamily="var(--font-mono)" textAnchor="middle">Y-Peak</text>
              <text x="215" y="68" fill="var(--teal-light)" fontSize="8.5" fontFamily="var(--font-mono)" textAnchor="middle" fontWeight="bold">X-Peak (Target)</text>
              <text x="340" y="156" fill="rgba(255,255,255,0.3)" fontSize="8" fontFamily="var(--font-mono)" textAnchor="end">Fluorescence Intensity →</text>

              {/* Laser Measurement Threshold Line */}
              <line x1="215" y1="20" x2="215" y2="145" stroke="var(--teal-light)" strokeWidth="1" strokeDasharray="2 2" opacity="0.6" />
              <circle cx="215" cy="50" r="4.5" fill="var(--teal-light)" style={{ filter: 'drop-shadow(0 0 6px var(--teal-light))', animation: 'pulseDot 1.5s infinite alternate' }} />

              {/* Sweeping Laser Detector Bar */}
              <g style={{ animation: 'laserSweep 6s infinite ease-in-out' }}>
                <line x1="0" y1="10" x2="0" y2="145" stroke="url(#laserSweepGrad)" strokeWidth="12" />
                <line x1="0" y1="10" x2="0" y2="145" stroke="rgba(59, 199, 194, 0.6)" strokeWidth="1" />
              </g>

              {/* ================= FLOW AND SORT ANIMATION ================= */}
              {/* Flow Channel Tube at Bottom */}
              <rect x="25" y="159" width="300" height="12" rx="6" fill="rgba(10, 31, 45, 0.8)" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" />
              
              {/* Intersecting Detection Laser Beam (Red) */}
              <line x1="175" y1="156" x2="175" y2="173" stroke="rgba(255, 80, 80, 0.8)" strokeWidth="2.5" style={{ filter: 'drop-shadow(0 0 3px rgba(255, 80, 80, 0.6))' }} />

              {/* Flowing Sperm Cell X (Cyan) - Deflects Upward to sorted path */}
              <g fill="var(--teal-light)" stroke="var(--teal-light)" style={{ animation: 'spermFlowX 4s infinite linear' }}>
                <use href="#sperm-shape-sorter" />
              </g>
              {/* Flowing Sperm Cell Y (Muted/White) - Deflects Downward to waste path */}
              <g fill="rgba(255,255,255,0.4)" stroke="rgba(255,255,255,0.3)" style={{ animation: 'spermFlowY 4s infinite linear', animationDelay: '2s' }}>
                <use href="#sperm-shape-sorter" />
              </g>

              {/* Signal Sparks rising to graph peaks on laser hit */}
              <circle cx="0" cy="0" r="3" fill="var(--teal-light)" style={{ filter: 'drop-shadow(0 0 4px var(--teal))', animation: 'sparkX 4s infinite ease-out' }} />
              <circle cx="0" cy="0" r="3.5" fill="rgba(255,255,255,0.8)" style={{ filter: 'drop-shadow(0 0 3px #fff)', animation: 'sparkY 4s infinite ease-out', animationDelay: '2s' }} />
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
            <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-mono)', letterSpacing: '0.05em' }}>STAGE: FERTILIZATION</span>
          </div>

          <div style={{ position: 'relative', width: '100%', height: '180px', background: 'rgba(5, 15, 23, 0.6)', borderRadius: '10px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.03)' }}>
            {/* SVG Oocyte Insemination */}
            <svg viewBox="0 0 350 180" width="100%" height="100%">
              <defs>
                <radialGradient id="oocyteGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="rgba(255, 255, 255, 0.95)" />
                  <stop offset="50%" stopColor="rgba(240, 248, 255, 0.75)" />
                  <stop offset="85%" stopColor="rgba(59, 199, 194, 0.15)" />
                  <stop offset="100%" stopColor="rgba(59, 199, 194, 0.45)" />
                </radialGradient>
                <radialGradient id="zonaPellucidaGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="72%" stopColor="rgba(59, 199, 194, 0)" />
                  <stop offset="90%" stopColor="rgba(59, 199, 194, 0.25)" />
                  <stop offset="100%" stopColor="rgba(59, 199, 194, 0.55)" />
                </radialGradient>
                <radialGradient id="fertFlashDynamic" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="rgba(59, 199, 194, 0.95)" />
                  <stop offset="45%" stopColor="rgba(59, 199, 194, 0.35)" />
                  <stop offset="100%" stopColor="rgba(59, 199, 194, 0)" />
                </radialGradient>

                {/* Sperm Shape Definition */}
                <g id="sperm-shape-tiny">
                  <ellipse cx="0" cy="0" rx="3.5" ry="2.2" fill="rgba(255, 255, 255, 0.75)" />
                  <path d="M -3.5,0 Q -8,-2 -12,0 T -20,0" fill="none" stroke="rgba(255, 255, 255, 0.65)" strokeWidth="0.8">
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

              {/* Grid Overlay / Aiming Reticle */}
              <circle cx="190" cy="90" r="75" fill="none" stroke="rgba(255,255,255,0.02)" strokeWidth="1" strokeDasharray="5 5" />
              <line x1="190" y1="0" x2="190" y2="180" stroke="rgba(255,255,255,0.015)" strokeWidth="1" />
              <line x1="0" y1="90" x2="350" y2="90" stroke="rgba(255,255,255,0.015)" strokeWidth="1" />

              {/* IVF Holding Suction Pipette (Right side) - Stays stationary holding oocyte */}
              <path d="M 350,90 L 270,90" stroke="rgba(255, 255, 255, 0.12)" strokeWidth="20" strokeLinecap="round" />
              <path d="M 350,90 L 270,90" stroke="rgba(5, 15, 23, 0.9)" strokeWidth="14" strokeLinecap="round" />
              <path d="M 270,90 L 262,90" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="10" strokeLinecap="round" />

              {/* Oocyte (Egg) Cell body with elastic reaction/deformation animation */}
              <g style={{ transformOrigin: '190px 90px', animation: 'oocyteDeform 8s infinite ease-in-out' }}>
                {/* Zona Pellucida */}
                <circle cx="190" cy="90" r="46" fill="url(#zonaPellucidaGlow)" />
                <circle cx="190" cy="90" r="45" fill="none" stroke="var(--teal)" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.6" />
                
                {/* Ooplasm (Inner cytoplasm) */}
                <circle cx="190" cy="90" r="38" fill="url(#oocyteGlow)" style={{ filter: 'drop-shadow(0 0 10px rgba(59,199,194,0.2))' }} />
                
                {/* Polar body */}
                <circle cx="205" cy="74" r="7" fill="rgba(59,199,194,0.2)" stroke="var(--teal)" strokeWidth="1.2" opacity="0.7" />
                <circle cx="203" cy="72" r="2.5" fill="var(--teal-light)" opacity="0.5" />
                
                {/* Egg Nucleus */}
                <circle cx="180" cy="96" r="8" fill="none" stroke="var(--teal-light)" strokeWidth="1" strokeDasharray="2 2" opacity="0.6" />
                <circle cx="180" cy="96" r="4" fill="var(--teal-light)" opacity="0.7" style={{ animation: 'pulseDot 2s infinite alternate' }} />
                
                {/* Fertilization Wave Flash Overlay (explodes from center when sperm enters) */}
                <circle cx="190" cy="90" r="50" fill="url(#fertFlashDynamic)" style={{ transformOrigin: '190px 90px', animation: 'fertWave 8s infinite ease-in-out', pointerEvents: 'none' }} />
              </g>

              {/* Swimming Sperm A (Wiggles outside, then scatters/fades when egg is fertilized) */}
              <g style={{ transformOrigin: '120px 50px', animation: 'swimAway 8s infinite ease-in-out' }}>
                <g transform="translate(120, 50) rotate(15)">
                  <use href="#sperm-shape-tiny" />
                </g>
              </g>

              {/* Swimming Sperm B */}
              <g style={{ transformOrigin: '105px 130px', animation: 'swimAway 8s infinite ease-in-out' }}>
                <g transform="translate(105, 130) rotate(-22)">
                  <use href="#sperm-shape-tiny" />
                </g>
              </g>

              {/* Swimming Sperm C */}
              <g style={{ transformOrigin: '135px 95px', animation: 'swimAway 8s infinite ease-in-out' }}>
                <g transform="translate(135, 95) rotate(-5)">
                  <use href="#sperm-shape-tiny" />
                </g>
              </g>

              {/* ICSI Microinjection Needle (Left side, introducing sorted sperm) */}
              <g style={{ animation: 'needleInject 8s infinite ease-in-out' }}>
                {/* Glass Micro-needle body */}
                <path d="M -50,90 L 120,90 L 150,90" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="4.5" strokeLinecap="round" />
                <path d="M 120,90 L 150,90" stroke="var(--teal)" strokeWidth="2.2" strokeLinecap="round" style={{ filter: 'drop-shadow(0 0 3px var(--teal))' }} />
                <path d="M -50,90 L 115,90" stroke="rgba(5, 15, 23, 0.9)" strokeWidth="1.8" />
                
                {/* Contact Point Glow ring on needle tip contact */}
                <circle cx="150" cy="90" r="3" fill="var(--teal-light)" style={{ filter: 'drop-shadow(0 0 4px var(--teal-light))', animation: 'pulseDot 0.8s infinite alternate' }} />
              </g>

              {/* Selected Sorted Sperm Cell inside needle, getting deposited */}
              <g style={{ transformOrigin: '120px 90px', animation: 'spermDeposit 8s infinite ease-in-out' }}>
                <ellipse cx="120" cy="90" rx="3.5" ry="2.2" fill="#fff" style={{ filter: 'drop-shadow(0 0 4px var(--teal-light))' }} />
                <path d="M 116.5,90 C 111,88 108,92 100,90" fill="none" stroke="#fff" strokeWidth="0.8">
                  <animate attributeName="d" 
                    values="M 116.5,90 C 111,88 108,92 100,90;
                            M 116.5,90 C 111,92 108,88 100,90;
                            M 116.5,90 C 111,88 108,92 100,90" 
                    dur="0.12s" 
                    repeatCount="indefinite" 
                  />
                </path>
              </g>
            </svg>
          </div>

          {/* Telemetry Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginTop: '1.25rem' }}>
            <div style={{ background: 'rgba(255,255,255,0.02)', padding: '0.75rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.04)', textAlign: 'left' }}>
              <div style={{ fontSize: '0.6875rem', color: 'rgba(255, 255, 255, 0.45)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase' }}>Oocyte Status</div>
              <div style={{ fontSize: '1.1rem', color: oocyteStatus.color, fontWeight: 'bold', fontFamily: 'var(--font-display)', marginTop: '0.15rem', transition: 'color 0.4s ease' }}>
                {oocyteStatus.text}
              </div>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.02)', padding: '0.75rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.04)', textAlign: 'left' }}>
              <div style={{ fontSize: '0.6875rem', color: 'rgba(255, 255, 255, 0.45)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase' }}>Insemination</div>
              <div style={{ fontSize: '1.1rem', color: inseminationStatus.color, fontWeight: 'bold', fontFamily: 'var(--font-display)', marginTop: '0.15rem', transition: 'color 0.4s ease' }}>
                {inseminationStatus.text}
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Embedded High-Fidelity SVG & Keyframe Styles */}
      <style dangerouslySetInnerHTML={{__html: `
        /* Pulse dot scaling effect */
        @keyframes pulseDot {
          0% { transform: scale(0.9); opacity: 0.7; }
          100% { transform: scale(1.1); opacity: 1; }
        }

        /* Cytometer Laser Sweep */
        @keyframes laserSweep {
          0%, 100% { transform: translateX(50px); }
          50% { transform: translateX(290px); }
        }

        /* Flowing Sperm Cell X (Cyan) in Cytometer */
        @keyframes spermFlowX {
          0% { transform: translate(-30px, 165px) rotate(0deg); opacity: 0; }
          5% { transform: translate(15px, 165px) rotate(0deg); opacity: 0.9; }
          40% { transform: translate(155px, 165px) rotate(0deg); opacity: 1; }
          43%, 47% { transform: translate(175px, 165px) rotate(0deg); opacity: 1; filter: brightness(2) drop-shadow(0 0 8px var(--teal-light)); }
          50% { transform: translate(195px, 164px) rotate(-18deg); opacity: 1; }
          90% { transform: translate(320px, 140px) rotate(-35deg); opacity: 0.9; }
          95%, 100% { transform: translate(340px, 135px) rotate(-35deg); opacity: 0; }
        }

        /* Flowing Sperm Cell Y (Muted) in Cytometer (Delayed by 2s offset) */
        @keyframes spermFlowY {
          0% { transform: translate(-30px, 165px) rotate(0deg); opacity: 0; }
          5% { transform: translate(15px, 165px) rotate(0deg); opacity: 0.8; }
          40% { transform: translate(155px, 165px) rotate(0deg); opacity: 0.9; }
          43%, 47% { transform: translate(175px, 165px) rotate(0deg); opacity: 1; filter: brightness(1.8) drop-shadow(0 0 6px rgba(255,255,255,0.7)); }
          50% { transform: translate(195px, 166px) rotate(18deg); opacity: 0.9; }
          90% { transform: translate(320px, 180px) rotate(35deg); opacity: 0.8; }
          95%, 100% { transform: translate(340px, 185px) rotate(35deg); opacity: 0; }
        }

        /* Spark Rising to X Curve Peak */
        @keyframes sparkX {
          0%, 42% { transform: translate(175px, 165px) scale(0.1); opacity: 0; }
          45% { transform: translate(175px, 165px) scale(1); opacity: 1; }
          65% { transform: translate(215px, 50px) scale(1.4); opacity: 1; }
          75%, 100% { transform: translate(215px, 50px) scale(2.2); opacity: 0; }
        }

        /* Spark Rising to Y Curve Peak */
        @keyframes sparkY {
          0%, 42% { transform: translate(175px, 165px) scale(0.1); opacity: 0; }
          45% { transform: translate(175px, 165px) scale(1); opacity: 0.9; }
          65% { transform: translate(135px, 80px) scale(1.2); opacity: 0.9; }
          75%, 100% { transform: translate(135px, 80px) scale(1.8); opacity: 0; }
        }

        /* ICSI Needle Horizontal Insertion Motion */
        @keyframes needleInject {
          0%, 15% { transform: translateX(-15px); }
          28%, 32% { transform: translateX(12px); } /* Contact & press membrane */
          44%, 48% { transform: translateX(38px); } /* Pierce deep & inject */
          60%, 75% { transform: translateX(0px); }  /* Retract */
          85%, 100% { transform: translateX(-15px); }
        }

        /* Selected Injecting Sperm Movement through needle into Oocyte */
        @keyframes spermDeposit {
          0%, 15% { transform: translate(-15px, 0) scale(1); opacity: 1; }
          28%, 32% { transform: translate(12px, 0) scale(1); opacity: 1; }
          42% { transform: translate(38px, 0) scale(1); opacity: 1; }
          46% { transform: translate(72px, 0) scale(1.1); opacity: 1; filter: drop-shadow(0 0 5px var(--teal-light)); } /* Exits needle */
          48%, 70% { transform: translate(70px, 0) scale(1.2); opacity: 1; filter: drop-shadow(0 0 8px var(--teal-light)); } /* Inside oocyte center */
          80% { transform: translate(70px, 0) scale(0.8); opacity: 0.4; } /* Merging with nucleus */
          88%, 100% { transform: translate(70px, 0) scale(0.3); opacity: 0; }
        }

        /* Oocyte Membrane Elastic Compression on Pierce */
        @keyframes oocyteDeform {
          0%, 18% { transform: translateX(0) scale(1); }
          28%, 32% { transform: translateX(4px) scale(0.95, 1); } /* Compression on push */
          42%, 46% { transform: translateX(6px) scale(0.92, 1); } /* Deep pierce indentation */
          58%, 68% { transform: translateX(1px) scale(0.98, 1); } /* Retracting needle pull */
          75%, 100% { transform: translateX(0) scale(1); }
        }

        /* Radial Fertilization Wave Ripple */
        @keyframes fertWave {
          0%, 43% { opacity: 0; transform: scale(0.2); }
          46% { opacity: 0.95; transform: scale(0.7); }
          60% { opacity: 0.8; transform: scale(1.15); }
          75%, 100% { opacity: 0; transform: scale(1.5); }
        }

        /* Outer Sperm Cells scatter & swim away when wave hits */
        @keyframes swimAway {
          0%, 42% { opacity: 0.65; transform: translate(0, 0); }
          46% { opacity: 0.8; transform: translate(-8px, -4px) scale(1.05); }
          58%, 70% { opacity: 0; transform: translate(-65px, -35px) scale(0.9); }
          85%, 100% { opacity: 0.65; transform: translate(0, 0); }
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

