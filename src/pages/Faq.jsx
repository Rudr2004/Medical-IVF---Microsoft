import React, { useState } from 'react';

export default function Faq() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [openItem, setOpenItem] = useState(null);

  const categories = ['All', 'General', 'Eligibility', 'The Procedure', 'Outcomes', 'Cost & Logistics', 'Afterwards'];

  const faqData = [
    // General
    {
      id: "g1",
      cat: "General",
      q: "What is MicroSort?",
      a: "MicroSort is a sperm-sorting technology that separates X-bearing and Y-bearing sperm using flow cytometry, improving the chances of conceiving a child of the preferred sex. Learn more on our How It Works page."
    },
    {
      id: "g2",
      cat: "General",
      q: "Is MicroSort legal in my country?",
      a: "Regulations vary by country. MicroSort laboratories operate only in jurisdictions where the technology is permitted. Contact the laboratory in your region to confirm current regulations."
    },
    {
      id: "g3",
      cat: "General",
      q: "How long has MicroSort been available?",
      a: "MicroSort has been in clinical use for several decades and has been the subject of peer-reviewed publications since the 1990s."
    },
    {
      id: "g4",
      cat: "General",
      q: "How is MicroSort different from other sperm-sorting methods?",
      a: "Most alternative methods rely on behavioural differences between sperm. MicroSort uses flow cytometry to measure a physical DNA-content difference — a measurable, documented distinction."
    },
    // Eligibility
    {
      id: "e1",
      cat: "Eligibility",
      q: "Do I have to have a child already to qualify?",
      a: "For family balancing, most MicroSort laboratories require at least one existing child of the non-preferred sex. For medical indications (X-linked conditions), this requirement may not apply."
    },
    {
      id: "e2",
      cat: "Eligibility",
      q: "What if I'm a known X-linked carrier?",
      a: "Known carriers of X-linked conditions typically qualify regardless of existing children. A genetic counsellor referral is strongly recommended before proceeding."
    },
    {
      id: "e3",
      cat: "Eligibility",
      q: "Can same-sex couples or single parents use MicroSort?",
      a: "Eligibility depends on the regulations of the country where the laboratory is located. Contact your nearest MicroSort laboratory for guidance on your specific situation."
    },
    {
      id: "e4",
      cat: "Eligibility",
      q: "What if my fertility profile is borderline?",
      a: "A preliminary semen analysis helps determine whether your profile meets minimum thresholds. Our patient coordinators can discuss options even if results are borderline."
    },
    // The Procedure
    {
      id: "p1",
      cat: "The Procedure",
      q: "How long does the sort take?",
      a: "A full sorting procedure typically takes 6–7 hours per sample, performed at the laboratory on the day of treatment."
    },
    {
      id: "p2",
      cat: "The Procedure",
      q: "Do both partners need to travel?",
      a: "For IUI, both partners typically need to be present. For IVF, the sorted sample can sometimes be cryopreserved and shipped to your local clinic — subject to local regulations."
    },
    {
      id: "p3",
      cat: "The Procedure",
      q: "Can the sample be cryopreserved or shipped?",
      a: "Cryopreservation is available and, where regulations permit, international shipment to a partner clinic is possible. Your coordinator will confirm what applies to your situation."
    },
    {
      id: "p4",
      cat: "The Procedure",
      q: "Can MicroSort be combined with PGT?",
      a: "Yes. Many patients combine MicroSort with IVF and Preimplantation Genetic Testing (PGT) for an additional layer of chromosomal confirmation."
    },
    // Outcomes
    {
      id: "o1",
      cat: "Outcomes",
      q: "How accurate is MicroSort?",
      a: "Reported accuracy rates vary by chromosome and are documented based on published sort outcomes. Specific figures are available on our Results & Evidence page."
    },
    {
      id: "o2",
      cat: "Outcomes",
      q: "Does MicroSort guarantee the sex?",
      a: "No technology can guarantee the sex of a baby. MicroSort meaningfully improves the probability of conceiving a child of the preferred sex — it does not guarantee a specific outcome."
    },
    {
      id: "o3",
      cat: "Outcomes",
      q: "What pregnancy rates should I expect?",
      a: "Pregnancy rates depend on many factors — age, fertility status, and procedure type. Pregnancy outcomes should be discussed with your fertility physician."
    },
    // Cost & Logistics
    {
      id: "c1",
      cat: "Cost & Logistics",
      q: "How much does MicroSort cost?",
      a: "Costs vary by laboratory and procedure type. Contact your nearest MicroSort laboratory for a full breakdown. MicroSort fees are separate from your fertility clinic's fees."
    },
    {
      id: "c2",
      cat: "Cost & Logistics",
      q: "What's included in the quoted cost?",
      a: "The MicroSort fee typically covers the sorting procedure and sample analysis. IUI, IVF, medications, and physician fees are charged separately by your clinic."
    },
    {
      id: "c3",
      cat: "Cost & Logistics",
      q: "What happens if my procedure is cancelled?",
      a: "A 40% cancellation fee applies per cancelled procedure if cancellation occurs on the procedure day due to insufficient sperm. Your coordinator will review this policy with you before you travel."
    },
    {
      id: "c4",
      cat: "Cost & Logistics",
      q: "Does insurance cover MicroSort?",
      a: "In most countries, MicroSort is not covered by standard health insurance. Some medical-indication cases may qualify for partial coverage — check with your insurer and patient coordinator."
    },
    // Afterwards
    {
      id: "a1",
      cat: "Afterwards",
      q: "How do I verify my sort?",
      a: "Every procedure generates a unique verification code. Visit our Verify Your Sort page and enter your code to view your sort record."
    },
    {
      id: "a2",
      cat: "Afterwards",
      q: "What if my pregnancy doesn't result in the expected sex?",
      a: "Because MicroSort improves but does not guarantee chromosomal outcome, a small percentage of pregnancies may not result in the preferred sex. This is why all MicroSort communications use the language 'increases the chance of' rather than 'guarantees.'"
    }
  ];

  const filteredFaqs = activeCategory === 'All' 
    ? faqData 
    : faqData.filter(item => item.cat === activeCategory);

  const toggleItem = (id) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div className="faq-page">
      {/* Page Hero */}
      <section className="section">
        <div className="container">
          <span className="section__label reveal">SUPPORT</span>
          <h1 className="section__title reveal">Frequently asked questions</h1>
          <p className="section__sub reveal">The questions families ask us most often.</p>
        </div>
      </section>

      {/* Category Filter Pills */}
      <section className="section section--alt" style={{ padding: '2rem 0' }}>
        <div className="container">
          <div className="reveal" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                className="btn btn--sm"
                onClick={() => {
                  setActiveCategory(cat);
                  setOpenItem(null); // Close any open items when category changes
                }}
                style={{
                  borderRadius: '100px',
                  background: activeCategory === cat ? 'var(--white)' : 'var(--teal-dim)',
                  color: activeCategory === cat ? '#fff' : 'var(--teal)',
                  border: activeCategory === cat ? '1px solid var(--white)' : '1px solid var(--border-teal)'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Accordion List */}
      <section className="section">
        <div className="container">
          <div className="faq-grid reveal">
            {filteredFaqs.map((faq) => (
              <div key={faq.id} className={`faq-item ${openItem === faq.id ? 'faq-item--open' : ''}`}>
                <button className="faq-item__q" onClick={() => toggleItem(faq.id)}>
                  <span>{faq.q}</span>
                  <span className={`faq-item__chevron ${openItem === faq.id ? 'faq-item__chevron--open' : ''}`}>▼</span>
                </button>
                {openItem === faq.id && (
                  <div className="faq-item__a">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
