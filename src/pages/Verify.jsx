import React, { useState } from 'react';

export default function Verify() {
  const [code, setCode] = useState('');
  const [result, setResult] = useState(null);

  const handleVerify = (e) => {
    e.preventDefault();
    if (!code.trim()) {
      alert("Please enter a verification code.");
      return;
    }
    
    // Simulating sorting verification lookup
    setResult({
      date: "05/12/2026",
      chromosome: "X (Female Enriched)",
      laboratory: "MicroSort Mexico City Lab",
      methodology: "Flow cytometry — fluorescent cell sorting"
    });
  };

  const handleHelp = (e) => {
    e.preventDefault();
    alert("For verification assistance, please email verification@microsort.com or call your laboratory coordinator.");
  };

  return (
    <div style={{ maxWidth: '480px', margin: '0 auto', padding: '6rem 1.5rem' }}>
      <span className="section__label" style={{ textAlign: 'center', display: 'block' }}>EXISTING PATIENTS</span>
      <h1 className="section__title" style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '1rem' }}>
        Verify your sort
      </h1>
      <p className="section__sub" style={{ textAlign: 'center', fontSize: '0.95rem', marginBottom: '2.5rem' }}>
        Every MicroSort procedure produces a verification code you can use to confirm the sort details on file.
      </p>

      <div className="card" style={{ padding: '2.5rem', marginBottom: '2rem' }}>
        <form onSubmit={handleVerify}>
          <div className="form-group" style={{ marginBottom: '1.5rem' }}>
            <label htmlFor="verify-code">Verification code</label>
            <input 
              id="verify-code"
              type="text" 
              placeholder="Enter your code..." 
              value={code}
              onChange={(e) => setCode(e.target.value)}
              style={{ padding: '0.85rem', fontSize: '1rem' }}
            />
          </div>
          <button type="submit" className="btn btn--primary btn--full">
            Verify →
          </button>
        </form>

        {result && (
          <div className="card" style={{ 
            marginTop: '2rem', 
            background: 'var(--teal-dim)', 
            borderColor: 'var(--border-teal)', 
            padding: '1.5rem',
            borderRadius: '12px'
          }}>
            <h3 style={{ 
              color: 'var(--teal)', 
              fontWeight: '700', 
              fontSize: '1.1rem', 
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              Sort verified ✓
            </h3>
            <ul style={{ 
              listStyle: 'none', 
              padding: 0, 
              margin: 0, 
              fontSize: '0.88rem', 
              color: 'var(--white-70)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem'
            }}>
              <li><strong>Date of sort:</strong> {result.date}</li>
              <li><strong>Chromosome enriched:</strong> {result.chromosome}</li>
              <li><strong>Laboratory:</strong> {result.laboratory}</li>
              <li><strong>Methodology:</strong> {result.methodology}</li>
            </ul>
            <p style={{ 
              fontSize: '0.75rem', 
              color: 'var(--white-40)', 
              marginTop: '1.25rem',
              lineHeight: '1.4'
            }}>
              * Note: For privacy, no patient names are displayed. Contact your laboratory if details appear incorrect.
            </p>
          </div>
        )}
      </div>

      <div style={{ textAlign: 'center' }}>
        <p style={{ fontSize: '0.85rem', color: 'var(--white-70)', lineHeight: '1.5', marginBottom: '1rem' }}>
          Your verification code was provided by your MicroSort laboratory after your procedure. 
          If you cannot find it, please contact your laboratory directly.
        </p>
        <a 
          href="#" 
          onClick={handleHelp} 
          style={{ 
            fontFamily: 'var(--font-accent)', 
            fontSize: '0.85rem', 
            fontWeight: '600', 
            color: 'var(--teal)', 
            textDecoration: 'none' 
          }}
        >
          Help →
        </a>
      </div>
    </div>
  );
}
