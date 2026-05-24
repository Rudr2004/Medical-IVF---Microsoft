import React from 'react';

export default function Footer({ setPage }) {
  const navigateTo = (page) => {
    setPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleClinicPartnership = (e) => {
    e.preventDefault();
    alert("Partnership Program — Client to integrate application portal for fertility clinics.");
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          {/* Logo and Tagline Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div className="navbar__logo" onClick={() => navigateTo('home')}>
              <div className="navbar__logo-mark" style={{ background: '#3bc7c2', color: '#0f2a3d' }}>M</div>
              <span className="navbar__logo-name" style={{ color: '#fff' }}>MicroSort®</span>
            </div>
            <p style={{ fontSize: '0.95rem', color: 'rgba(238, 247, 251, 0.7)', fontStyle: 'italic' }}>
              The science of family planning.
            </p>
            <p style={{ fontSize: '0.8rem', color: 'rgba(238, 247, 251, 0.45)', lineHeight: '1.5' }}>
              Supporting intended parents worldwide with certified reproductive technologies.
            </p>
          </div>

          {/* Nav Links columns */}
          <div className="footer__links">
            <div>
              <h4 className="footer__col-title">Company</h4>
              <button className="footer__link" onClick={() => navigateTo('home')}>About</button>
              <button className="footer__link" onClick={() => navigateTo('home')}>Mission</button>
              <button className="footer__link" onClick={() => navigateTo('home')}>Leadership</button>
              <button className="footer__link" onClick={() => navigateTo('faq')}>FAQ</button>
            </div>
            <div>
              <h4 className="footer__col-title">Technology</h4>
              <button className="footer__link" onClick={() => navigateTo('how-it-works')}>How It Works</button>
              <button className="footer__link" onClick={() => navigateTo('is-it-for-you')}>Is It For You</button>
              <button className="footer__link" onClick={() => navigateTo('planning')}>Planning</button>
              <button className="footer__link" onClick={() => navigateTo('results')}>Results</button>
              <button className="footer__link" onClick={() => navigateTo('stories')}>Stories</button>
            </div>
            <div>
              <h4 className="footer__col-title">Locations</h4>
              <button className="footer__link" onClick={() => navigateTo('locations')}>Mexico</button>
              <button className="footer__link" onClick={() => navigateTo('locations')}>North Cyprus</button>
              <button className="footer__link" onClick={() => navigateTo('locations')}>Switzerland</button>
              <button className="footer__link" onClick={() => navigateTo('verify')}>Verify</button>
              <button className="footer__link" onClick={() => navigateTo('contact')}>Contact</button>
            </div>
          </div>
        </div>

        {/* Bottom copyright & disclaimer */}
        <div className="footer__bottom">
          <p className="footer__disclaimer">
            <strong>MicroSort®</strong> is a sperm-sorting technology available exclusively at licensed laboratories. 
            MicroSort increases the chance of conceiving a child of the desired sex but does not guarantee a specific 
            outcome. Availability and regulatory requirements vary by country. Please consult a licensed MicroSort 
            laboratory for information specific to your situation.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
            <span>© 2025 MicroSort. All rights reserved.</span>
            <a href="#" className="footer__link" onClick={handleClinicPartnership} style={{ margin: 0, fontWeight: 'bold' }}>
              Are you a fertility clinic? Learn about partnership →
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
