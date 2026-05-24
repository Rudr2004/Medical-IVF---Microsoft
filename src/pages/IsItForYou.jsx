import React, { useState } from 'react';

export default function IsItForYou({ setPage }) {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    hasChild: null,
    isCarrier: null,
    location: ''
  });

  const navigateTo = (page) => {
    setPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAnswer = (key, val, nextStep) => {
    setAnswers(prev => ({ ...prev, [key]: val }));
    setStep(nextStep);
  };

  const resetWizard = () => {
    setStep(1);
    setAnswers({ hasChild: null, isCarrier: null, location: '' });
  };

  // Determine eligibility result
  const checkEligibility = () => {
    if (answers.isCarrier === 'Yes') {
      return 'qualified';
    }
    if (answers.hasChild === 'Yes') {
      return 'qualified';
    }
    return 'unclear';
  };

  const resultType = checkEligibility();

  return (
    <div className="eligibility-page">
      {/* Page Hero */}
      <section className="section">
        <div className="container">
          <span className="section__label reveal">ELIGIBILITY</span>
          <h1 className="section__title reveal">Is MicroSort for you?</h1>
          <p className="section__sub reveal">
            MicroSort is available to families with a clear medical or family-balancing reason. 
            Here's how to know whether you qualify.
          </p>
        </div>
      </section>

      {/* Two Qualifying Paths */}
      <section className="section section--alt">
        <div className="container">
          <h2 className="section__title--sm reveal">Two ways to qualify</h2>
          <div className="card-grid reveal" style={{ marginBottom: '1.5rem' }}>
            <div className="card" style={{ background: 'rgba(251,247,242,0.9)' }}>
              <h3 className="card__title">Path A — Family balancing</h3>
              <p className="card__body">
                <strong>You qualify if:</strong> you have at least one child, and you are using MicroSort to increase 
                the chances of conceiving a child of the underrepresented sex in your family. 
                <br /><br />
                <em>Example:</em> a family with two boys wishing to increase the chance of conceiving a girl.
              </p>
            </div>
            <div className="card" style={{ background: 'rgba(238,247,251,0.9)' }}>
              <h3 className="card__title">Path B — Genetic risk</h3>
              <p className="card__body">
                <strong>You qualify if:</strong> you are a known carrier of an X-linked or X-limited genetic disorder. 
                <br /><br />
                <em>Example:</em> a couple where the female partner carries a gene for hemophilia or Duchenne muscular dystrophy.
              </p>
            </div>
          </div>
          <div className="reveal" style={{ borderLeft: '3px solid var(--teal)', padding: '0.8rem 1.25rem', background: 'var(--teal-dim)', borderRadius: '8px', fontSize: '0.88rem', color: 'var(--white-70)' }}>
            * Note: Eligibility rules also depend on local regulations in the country of the chosen MicroSort laboratory. 
            Your patient coordinator will confirm requirements specific to your situation.
          </div>
        </div>
      </section>

      {/* Tables and Requirements */}
      <section className="section">
        <div className="container">
          <div className="card-grid">
            {/* Health Screen */}
            <div className="reveal">
              <h3 className="section__title--sm">Health screening requirements</h3>
              <p className="card__body" style={{ marginBottom: '1rem' }}>
                Both partners must undergo standard infectious disease screenings within 6 months of the procedure date:
              </p>
              <ul className="checklist" style={{ marginBottom: '1rem' }}>
                <li className="checklist__item">HIV I and II</li>
                <li className="checklist__item">Hepatitis B surface antigen and Hepatitis C antibody</li>
                <li className="checklist__item">VDRL (syphilis screen)</li>
              </ul>
              <p style={{ fontSize: '0.85rem', color: 'var(--white-40)' }}>
                Tests must be performed at any certified laboratory prior to treatment.
              </p>
            </div>

            {/* Sperm Sample Quality */}
            <div className="reveal">
              <h3 className="section__title--sm">Sample quality requirements</h3>
              <div className="spec-table-wrap">
                <table className="spec-table">
                  <thead>
                    <tr>
                      <th>Procedure</th>
                      <th>Min Motile Sperm</th>
                      <th>Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>IUI</td>
                      <td>140 million</td>
                      <td>Both partners must travel; no shipping</td>
                    </tr>
                    <tr>
                      <td>IVF</td>
                      <td>70 million</td>
                      <td>Cryopreservation & shipping possible</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p style={{ fontSize: '0.82rem', color: 'var(--white-70)', fontStyle: 'italic' }}>
                * Note: A 40% cancellation fee applies per cancelled procedure if cancellation occurs on the day due to insufficient sperm.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Wizard */}
      <section className="section section--alt">
        <div className="container">
          <div className="card reveal" style={{ maxWidth: '640px', margin: '0 auto', border: '1px solid var(--border-teal)' }}>
            <span className="section__label" style={{ textAlign: 'center' }}>FIND OUT IF YOU QUALIFY</span>
            
            {step === 1 && (
              <div>
                <h3 className="card__title" style={{ textAlign: 'center', marginBottom: '1.5rem', fontSize: '1.2rem' }}>
                  Do you already have at least one child?
                </h3>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                  <button className="btn btn--outline" onClick={() => handleAnswer('hasChild', 'Yes', 2)}>Yes</button>
                  <button className="btn btn--outline" onClick={() => handleAnswer('hasChild', 'No', 2)}>No</button>
                </div>
                <div style={{ textAlign: 'center', marginTop: '2rem', fontSize: '0.8rem', color: 'var(--white-40)' }}>Step 1 of 3</div>
              </div>
            )}

            {step === 2 && (
              <div>
                <h3 className="card__title" style={{ textAlign: 'center', marginBottom: '1.5rem', fontSize: '1.2rem' }}>
                  Are you a known carrier of an X-linked condition?
                </h3>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                  <button className="btn btn--outline" onClick={() => handleAnswer('isCarrier', 'Yes', 3)}>Yes</button>
                  <button className="btn btn--outline" onClick={() => handleAnswer('isCarrier', 'No', 3)}>No</button>
                  <button className="btn btn--outline" onClick={() => handleAnswer('isCarrier', 'Unsure', 3)}>Unsure</button>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2rem' }}>
                  <button className="btn btn--sm" style={{ padding: 0, textDecoration: 'underline' }} onClick={() => setStep(1)}>← Back</button>
                  <span style={{ fontSize: '0.8rem', color: 'var(--white-40)' }}>Step 2 of 3</span>
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <h3 className="card__title" style={{ textAlign: 'center', marginBottom: '1.5rem', fontSize: '1.2rem' }}>
                  Where are you located?
                </h3>
                <div className="form-group" style={{ maxWidth: '300px', margin: '0 auto 1.5rem auto' }}>
                  <select 
                    value={answers.location}
                    onChange={(e) => setAnswers(prev => ({ ...prev, location: e.target.value }))}
                  >
                    <option value="">-- Select Region --</option>
                    <option value="North America">North America</option>
                    <option value="Europe">Europe</option>
                    <option value="Middle East">Middle East</option>
                    <option value="Asia">Asia</option>
                    <option value="Africa">Africa</option>
                    <option value="Australia/Pacific">Australia / Pacific</option>
                    <option value="Not sure yet">Not sure yet</option>
                  </select>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <button 
                    className="btn btn--primary" 
                    disabled={!answers.location}
                    onClick={() => setStep('result')}
                  >
                    Get Results
                  </button>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2rem' }}>
                  <button className="btn btn--sm" style={{ padding: 0, textDecoration: 'underline' }} onClick={() => setStep(2)}>← Back</button>
                  <span style={{ fontSize: '0.8rem', color: 'var(--white-40)' }}>Step 3 of 3</span>
                </div>
              </div>
            )}

            {step === 'result' && (
              <div>
                {resultType === 'qualified' ? (
                  <div style={{ border: '1px solid var(--teal)', borderRadius: '12px', padding: '1.5rem', background: 'var(--teal-dim)', textAlign: 'center' }}>
                    <h3 className="card__title" style={{ color: 'var(--teal)' }}>Qualified ✓</h3>
                    <p className="card__body" style={{ marginBottom: '1.5rem' }}>
                      Based on your answers, you may qualify for MicroSort.
                    </p>
                    <button className="btn btn--primary" onClick={() => navigateTo('contact')}>
                      Contact a laboratory →
                    </button>
                  </div>
                ) : (
                  <div style={{ border: '1px solid rgba(15,42,61,0.2)', borderRadius: '12px', padding: '1.5rem', textAlign: 'center' }}>
                    <h3 className="card__title">May not qualify yet</h3>
                    <p className="card__body" style={{ marginBottom: '1.5rem' }}>
                      You may not yet meet standard eligibility requirements — but please contact us. 
                      Many situations have options we can discuss.
                    </p>
                    <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                      <button className="btn btn--outline btn--sm" onClick={() => navigateTo('faq')}>Browse FAQs →</button>
                      <button className="btn btn--primary btn--sm" onClick={() => navigateTo('contact')}>Contact us anyway →</button>
                    </div>
                  </div>
                )}
                <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
                  <button className="btn btn--sm" style={{ textDecoration: 'underline' }} onClick={resetWizard}>Restart Questionnaire ↺</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="final-cta">
        <div className="final-cta__orb"></div>
        <div className="final-cta__content reveal">
          <h2 className="final-cta__title">Ready to speak with a laboratory?</h2>
          <p className="final-cta__sub">Connect directly to a coordinator for a free and confidential assessment.</p>
          <button className="btn btn--primary btn--lg" onClick={() => navigateTo('contact')}>
            Speak with a laboratory →
          </button>
        </div>
      </section>
    </div>
  );
}
