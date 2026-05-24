import React, { useState } from 'react';

export default function Contact({ setPage }) {
  const [selectedLab, setSelectedLab] = useState('Not sure yet');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    phone: '',
    reason: 'Not sure yet',
    hasClinic: 'No',
    message: '',
    methods: [],
    consent: false
  });

  const labs = [
    "Mexico", "North Cyprus", "Japan", "Malaysia", "Cambodia", 
    "Thailand", "Nigeria", "Switzerland", "Not sure yet"
  ];

  const countries = ["United States", "Canada", "United Kingdom", "Australia", "Mexico", "Switzerland", "Japan", "Malaysia", "Thailand", "Nigeria", "Other"];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      if (name === 'consent') {
        setFormData(prev => ({ ...prev, consent: checked }));
      } else {
        // preferred contact methods
        let updatedMethods = [...formData.methods];
        if (checked) {
          updatedMethods.push(value);
        } else {
          updatedMethods = updatedMethods.filter(m => m !== value);
        }
        setFormData(prev => ({ ...prev, methods: updatedMethods }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleQuickLink = (e, page) => {
    e.preventDefault();
    setPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.country || !formData.consent) {
      alert("Please fill in all required fields and accept the contact consent.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="contact-page">
      {/* Page Hero */}
      <section className="section">
        <div className="container">
          <span className="section__label reveal">GET IN TOUCH</span>
          <h1 className="section__title reveal">Speak with a MicroSort laboratory</h1>
          <p className="section__sub reveal">
            Every initial conversation is free and confidential. Choose a laboratory below, 
            or fill in the form and we'll connect you to the most relevant location.
          </p>
        </div>
      </section>

      {/* Main Layout */}
      <section className="section section--alt" style={{ padding: '3.5rem 0' }}>
        <div className="container">
          <div className="contact__layout reveal">
            {/* Left side: Form or Success */}
            {submitted ? (
              <div className="contact__success">
                <div className="success-icon">✓</div>
                <h2>Thank you — we'll be in touch.</h2>
                <p className="card__body" style={{ marginTop: '1rem', fontSize: '1.05rem', lineHeight: '1.6' }}>
                  A patient coordinator from <strong>{selectedLab === 'Not sure yet' ? 'our general team' : `our ${selectedLab} laboratory`}</strong> will 
                  be in touch within 1 business day. If you don't hear from us, please check your spam folder or call +1 (800) 555-0199.
                </p>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit}>
                {/* Location Picker */}
                <div style={{ marginBottom: '2rem' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--white-70)', marginBottom: '0.75rem', fontFamily: 'var(--font-accent)' }}>
                    Select laboratory destination
                  </label>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {labs.map((lab) => (
                      <button
                        key={lab}
                        type="button"
                        onClick={() => setSelectedLab(lab)}
                        style={{
                          padding: '0.5rem 1rem',
                          borderRadius: '100px',
                          fontSize: '0.8rem',
                          fontWeight: '600',
                          cursor: 'pointer',
                          transition: 'var(--transition)',
                          background: selectedLab === lab ? 'var(--teal)' : 'var(--teal-dim)',
                          color: selectedLab === lab ? '#fff' : 'var(--teal)',
                          border: selectedLab === lab ? '1px solid var(--teal)' : '1px solid var(--border-teal)'
                        }}
                      >
                        {lab}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Form Fields */}
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First name *</label>
                    <input type="text" id="firstName" name="firstName" required value={formData.firstName} onChange={handleInputChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last name *</label>
                    <input type="text" id="lastName" name="lastName" required value={formData.lastName} onChange={handleInputChange} />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input type="email" id="email" name="email" required value={formData.email} onChange={handleInputChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone (optional)</label>
                    <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="country">Country of residence *</label>
                  <select id="country" name="country" required value={formData.country} onChange={handleInputChange}>
                    <option value="">-- Choose Country --</option>
                    {countries.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>

                {/* Reason for inquiry */}
                <div className="form-group">
                  <label>Reason for inquiry</label>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {["Family balancing", "Genetic condition", "Both", "Not sure yet"].map(r => (
                      <button
                        key={r}
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, reason: r }))}
                        style={{
                          padding: '0.5rem 1rem',
                          borderRadius: '8px',
                          fontSize: '0.82rem',
                          fontWeight: '600',
                          border: '1px solid var(--border)',
                          background: formData.reason === r ? 'var(--white)' : 'rgba(255,255,255,0.4)',
                          color: formData.reason === r ? '#fff' : 'var(--white)',
                          cursor: 'pointer',
                          transition: 'var(--transition)'
                        }}
                      >
                        {r}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Clinic check */}
                <div className="form-group">
                  <label>Do you already have a fertility clinic?</label>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    {["Yes", "No"].map(val => (
                      <button
                        key={val}
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, hasClinic: val }))}
                        style={{
                          padding: '0.5rem 1rem',
                          borderRadius: '8px',
                          fontSize: '0.82rem',
                          fontWeight: '600',
                          border: '1px solid var(--border)',
                          background: formData.hasClinic === val ? 'var(--white)' : 'rgba(255,255,255,0.4)',
                          color: formData.hasClinic === val ? '#fff' : 'var(--white)',
                          cursor: 'pointer',
                          transition: 'var(--transition)'
                        }}
                      >
                        {val}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message & Character Count */}
                <div className="form-group">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <label htmlFor="message">Anything you'd like us to know before we call?</label>
                    <span style={{ fontSize: '0.75rem', color: formData.message.length > 450 ? 'red' : 'var(--white-40)' }}>
                      {formData.message.length}/500
                    </span>
                  </div>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="4" 
                    maxLength="500"
                    placeholder="Enter any medical history or travel preference details..."
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                </div>

                {/* Preferred Contact method checkboxes */}
                <div className="form-group">
                  <label>Preferred contact method</label>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    {["Email", "Phone", "WhatsApp"].map(m => {
                      const isChecked = formData.methods.includes(m);
                      return (
                        <label 
                          key={m}
                          style={{
                            padding: '0.5rem 1rem',
                            borderRadius: '8px',
                            fontSize: '0.82rem',
                            fontWeight: '600',
                            border: '1px solid var(--border)',
                            background: isChecked ? 'var(--white)' : 'rgba(255,255,255,0.4)',
                            color: isChecked ? '#fff' : 'var(--white)',
                            cursor: 'pointer',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                          }}
                        >
                          <input 
                            type="checkbox" 
                            value={m} 
                            checked={isChecked} 
                            onChange={handleInputChange} 
                            style={{ display: 'none' }} 
                          />
                          {m}
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* Consent */}
                <div style={{ margin: '1.5rem 0', display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                  <input 
                    type="checkbox" 
                    id="consent" 
                    name="consent" 
                    required 
                    checked={formData.consent} 
                    onChange={handleInputChange} 
                    style={{ marginTop: '3px', cursor: 'pointer' }}
                  />
                  <label htmlFor="consent" style={{ fontSize: '0.8rem', color: 'var(--white-70)', lineHeight: '1.4', cursor: 'pointer' }}>
                    I agree to be contacted by a MicroSort patient coordinator. We protect your privacy as outlined in our Policy guidelines. *
                  </label>
                </div>

                <button type="submit" className="btn btn--primary btn--lg btn--full">
                  Send my inquiry →
                </button>
              </form>
            )}

            {/* Right sidebar */}
            <div className="contact__sidebar">
              <div className="sidebar-card">
                <h3 style={{ fontSize: '1.1rem', color: 'var(--white)', marginBottom: '0.75rem' }}>Prefer to talk now?</h3>
                <a href="tel:+18005550199" style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--teal)', textDecoration: 'none' }}>
                  📞 +1 (800) 555-0199
                </a>
                <p style={{ fontSize: '0.8rem', color: 'var(--white-70)', marginTop: '0.5rem' }}>
                  Business Hours: Mon-Fri 9:00am - 5:00pm EST
                </p>
              </div>

              <div className="sidebar-card">
                <h3 style={{ fontSize: '1.1rem', color: 'var(--white)', marginBottom: '0.75rem' }}>Quick links</h3>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem' }}>
                  <li><a href="#" className="footer__link" onClick={(e) => handleQuickLink(e, 'how-it-works')} style={{ margin: 0 }}>Science: How it works</a></li>
                  <li><a href="#" className="footer__link" onClick={(e) => handleQuickLink(e, 'is-it-for-you')} style={{ margin: 0 }}>Checks: Is it for you?</a></li>
                  <li><a href="#" className="footer__link" onClick={(e) => handleQuickLink(e, 'faq')} style={{ margin: 0 }}>Support: Read FAQs</a></li>
                </ul>
              </div>

              <div className="sidebar-card">
                <h3 style={{ fontSize: '1.1rem', color: 'var(--white)', marginBottom: '0.25rem' }}>Email us</h3>
                <p style={{ fontSize: '0.9rem' }}>
                  <a href="mailto:info@microsort.com" style={{ color: 'var(--teal)', textDecoration: 'none', fontWeight: '600' }}>
                    info@microsort.com
                  </a>
                </p>
              </div>

              <p className="sidebar-disclaimer">
                ℹ All inquiries are strictly confidential. MicroSort does not share your information with any third party without your explicit consent.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
