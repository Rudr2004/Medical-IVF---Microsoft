import React from 'react';

export default function Stories() {
  const handleShareStory = () => {
    alert("Story submission form — client to implement with consent flow");
  };

  const gridStories = [
    {
      quote: "Our gorgeous little girl. Millions and trillions of thank-yous.",
      author: "Shelley and Paul F.",
      location: "United Kingdom",
      active: true
    },
    {
      quote: "Everyone was so nice and accommodating. I appreciate that more than I can say.",
      author: "Jeff B.",
      location: "United States",
      active: true
    },
    {
      quote: "Thank you for going above and beyond all normal limits to help me with my situation.",
      author: "Elizabeth L.",
      location: "Canada",
      active: true
    },
    {
      quote: "[Story coming soon — share yours below]",
      author: "",
      location: "",
      active: false
    },
    {
      quote: "[Story coming soon — share yours below]",
      author: "",
      location: "",
      active: false
    },
    {
      quote: "[Story coming soon — share yours below]",
      author: "",
      location: "",
      active: false
    }
  ];

  return (
    <div className="stories-page">
      {/* Page Hero */}
      <section className="section">
        <div className="container">
          <span className="section__label reveal">FAMILY STORIES</span>
          <h1 className="section__title reveal">The families behind the science</h1>
          <p className="section__sub reveal">
            Real parents on what the MicroSort journey was like — what surprised them, what helped, 
            and what they'd tell another family considering the same path.
          </p>
        </div>
      </section>

      {/* Featured Story */}
      <section className="section section--alt" style={{ padding: '4rem 0' }}>
        <div className="container">
          <div className="card reveal" style={{ background: 'rgba(251,247,242,0.95)', padding: '3.5rem' }}>
            <span style={{
              fontSize: '8rem',
              fontFamily: 'var(--font-display)',
              color: 'var(--teal)',
              opacity: 0.15,
              lineHeight: 0.2,
              display: 'block',
              marginBottom: '-2rem'
            }}>“</span>
            
            <p className="card__body" style={{
              fontSize: '1.15rem',
              lineHeight: '1.75',
              fontStyle: 'italic',
              color: 'var(--white)',
              marginBottom: '2rem'
            }}>
              When we first started looking into options for adding to our family, we felt overwhelmed by the information 
              available online — much of it contradictory, some of it frankly misleading. What we found with MicroSort was 
              different. The team was straightforward about what the technology could and could not do. They never promised 
              us anything except a higher likelihood. That honesty was what made us trust the process. 
              The coordinates, tests, and steps were clear, and today we look at our balanced family with so much gratitude.
            </p>
            
            <div style={{ fontFamily: 'var(--font-mono)', color: 'var(--teal)', fontSize: '0.88rem', letterSpacing: '0.05em' }}>
              — [Family name], [Country]
            </div>
          </div>
        </div>
      </section>

      {/* Story Grid */}
      <section className="section">
        <div className="container">
          <div className="card-grid card-grid--3 reveal">
            {gridStories.map((story, idx) => (
              <div key={idx} className="card" style={{ display: 'flex', flexDirection: 'column', minHeight: '220px' }}>
                <span style={{
                  fontSize: '4rem',
                  fontFamily: 'var(--font-display)',
                  color: 'var(--teal)',
                  opacity: story.active ? 0.3 : 0.1,
                  lineHeight: 0.8,
                  display: 'block'
                }}>“</span>
                
                <p className="card__body" style={{ 
                  fontStyle: 'italic', 
                  color: story.active ? 'var(--white-70)' : 'var(--white-40)',
                  flexGrow: 1
                }}>
                  {story.quote}
                </p>

                {story.active && (
                  <div style={{ 
                    fontFamily: 'var(--font-mono)', 
                    fontSize: '0.75rem', 
                    color: 'var(--teal)', 
                    letterSpacing: '0.1em', 
                    marginTop: '1.5rem' 
                  }}>
                    — {story.author.toUpperCase()}, {story.location.toUpperCase()}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Share Your Story */}
      <section className="section section--alt">
        <div className="container">
          <div className="card reveal" style={{ textAlign: 'center', padding: '3rem 2rem', maxWidth: '800px', margin: '0 auto' }}>
            <h2 className="section__title--sm">Share your story</h2>
            <p className="card__body" style={{ marginBottom: '2rem', fontSize: '1.05rem', lineHeight: '1.6' }}>
              If MicroSort played a role in your family's story and you'd like to share it with others considering the journey, 
              we'd love to hear from you.
            </p>
            <button className="btn btn--primary" onClick={handleShareStory}>
              Share your story →
            </button>
            <p style={{ fontSize: '0.8rem', color: 'var(--white-70)', marginTop: '1.5rem' }}>
              * Note: All stories are published only with explicit, opt-in consent. You choose your level of detail, 
              attribution, and whether to include a photo.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
