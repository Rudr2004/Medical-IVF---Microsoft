import React, { useState, useEffect } from 'react';

export default function Navbar({ currentPage, setPage }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (page) => {
    setPage(page);
    setMobileMenuOpen(false);
    setDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isActive = (pages) => {
    return pages.includes(currentPage) ? 'navbar__link--active' : '';
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        {/* Logo */}
        <div className="navbar__logo" onClick={() => navigateTo('home')}>
          <div className="navbar__logo-mark">M</div>
          <span className="navbar__logo-name">MicroSort®</span>
        </div>

        {/* Desktop Links */}
        <div className="navbar__links">
          {/* How It Works with Dropdown */}
          <div 
            style={{ position: 'relative' }}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button 
              className={`navbar__link ${isActive(['how-it-works', 'family-balancing', 'genetic-conditions'])}`}
              onClick={() => navigateTo('how-it-works')}
            >
              How It Works
            </button>
            {dropdownOpen && (
              <div className="dropdown-menu">
                <button className="dropdown-item" onClick={() => navigateTo('how-it-works')}>
                  The Science
                </button>
                <button className="dropdown-item" onClick={() => navigateTo('family-balancing')}>
                  Family Balancing
                </button>
                <button className="dropdown-item" onClick={() => navigateTo('genetic-conditions')}>
                  Genetic Conditions
                </button>
              </div>
            )}
          </div>

          <button 
            className={`navbar__link ${isActive(['is-it-for-you'])}`}
            onClick={() => navigateTo('is-it-for-you')}
          >
            Is It For You?
          </button>

          <button 
            className={`navbar__link ${isActive(['locations'])}`}
            onClick={() => navigateTo('locations')}
          >
            Locations
          </button>

          <button 
            className={`navbar__link ${isActive(['stories'])}`}
            onClick={() => navigateTo('stories')}
          >
            Stories
          </button>

          <button 
            className={`navbar__link ${isActive(['contact'])}`}
            onClick={() => navigateTo('contact')}
          >
            Contact
          </button>
        </div>

        {/* Right side CTAs */}
        <div className="navbar__links" style={{ gap: '1rem' }}>
          <button 
            className="btn btn--outline btn--sm" 
            onClick={() => navigateTo('verify')}
          >
            Verify Your Sort →
          </button>
          <a 
            href="tel:+18005550199" 
            className="navbar__link" 
            style={{ fontSize: '0.85rem', whiteSpace: 'nowrap' }}
          >
            📞 +1 (800) 555-0199
          </a>
        </div>

        {/* Mobile Burger */}
        <button 
          className="navbar__burger" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="navbar__mobile" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <button className={`navbar__link ${isActive(['how-it-works'])}`} onClick={() => navigateTo('how-it-works')}>
            How It Works (The Science)
          </button>
          <button className={`navbar__link ${isActive(['family-balancing'])}`} onClick={() => navigateTo('family-balancing')} style={{ paddingLeft: '1.5rem', fontSize: '0.85rem' }}>
            └ Family Balancing
          </button>
          <button className={`navbar__link ${isActive(['genetic-conditions'])}`} onClick={() => navigateTo('genetic-conditions')} style={{ paddingLeft: '1.5rem', fontSize: '0.85rem' }}>
            └ Genetic Conditions
          </button>
          <button className={`navbar__link ${isActive(['is-it-for-you'])}`} onClick={() => navigateTo('is-it-for-you')}>
            Is It For You?
          </button>
          <button className={`navbar__link ${isActive(['locations'])}`} onClick={() => navigateTo('locations')}>
            Locations
          </button>
          <button className={`navbar__link ${isActive(['stories'])}`} onClick={() => navigateTo('stories')}>
            Stories
          </button>
          <button className={`navbar__link ${isActive(['contact'])}`} onClick={() => navigateTo('contact')}>
            Contact
          </button>
          <hr style={{ borderColor: 'var(--border)', margin: '0.5rem 0' }} />
          <button className="btn btn--outline btn--full" onClick={() => navigateTo('verify')}>
            Verify Your Sort →
          </button>
          <a 
            href="tel:+18005550199" 
            className="btn btn--primary btn--full"
            style={{ textDecoration: 'none' }}
          >
            Call Us: +1 (800) 555-0199
          </a>
        </div>
      )}
    </nav>
  );
}
