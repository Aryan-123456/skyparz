import React, { useEffect, useState } from 'react';

const projects = [
  { title: 'Logofolio', category: 'Branding', image: '/portfolio/page-02.jpg', description: 'Logo and identity concepts created across fitness, fashion, interiors, food, salon and steel brands.' },
  { title: 'Social Media Creatives', category: 'Social Media', image: '/portfolio/page-03.jpg', description: 'Campaign posters for interiors, real estate, webinars and heavy-equipment businesses.' },
  { title: 'Celora Fashion — Brand Story', category: 'Fashion', image: '/portfolio/page-04.jpg', description: 'A cohesive fashion presentation covering brand story, collection, timeline and creative process.' },
  { title: 'Celora Fashion — Brand Experience', category: 'Fashion', image: '/portfolio/page-05.jpg', description: 'Boutique, online shop, press, contact and brand-presentation layouts for a consistent visual identity.' },
  { title: 'Product Advertising', category: 'Advertising', image: '/portfolio/page-06.jpg', description: 'Promotional banners for accessories and fashion products designed around offers and clear calls to action.' },
  { title: 'Product Ad Posters I', category: 'Advertising', image: '/portfolio/page-07.jpg', description: 'Square product creatives spanning home accessories, lighting, bags and décor.' },
  { title: 'Product Ad Posters II', category: 'Advertising', image: '/portfolio/page-08.jpg', description: 'Fashion campaign creatives for sweaters, shirts, dresses, suits and denim.' },
  { title: 'Restaurant & Café Menus', category: 'Hospitality', image: '/portfolio/page-09.jpg', description: 'Menu concepts for drinks, coffee, restaurants and casual food brands.' },
  { title: 'Food Menu Design', category: 'Hospitality', image: '/portfolio/page-10.jpg', description: 'Full-format menu layouts balancing product variety, hierarchy and visual appeal.' },
  { title: 'Hotel & Resort Campaigns', category: 'Hospitality', image: '/portfolio/page-11.jpg', description: 'Hospitality promotional creatives designed to showcase stays, amenities and resort experiences.' },
  { title: 'Wedding Invitations I', category: 'Wedding', image: '/portfolio/page-12.jpg', description: 'Elegant wedding and save-the-date designs combining photography, illustration and typography.' },
  { title: 'Wedding Invitations II', category: 'Wedding', image: '/portfolio/page-13.jpg', description: 'Photo-led wedding announcements with soft botanical styling and personalized layouts.' },
  { title: 'Wedding Editorials', category: 'Wedding', image: '/portfolio/page-14.jpg', description: 'Wedding poster and editorial concepts ranging from traditional celebrations to minimal monochrome layouts.' },
];

const filters = ['All', 'Branding', 'Social Media', 'Fashion', 'Advertising', 'Hospitality', 'Wedding'];

export default function Work({ setCurrentPage }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selected, setSelected] = useState(null);
  const visible = activeFilter === 'All' ? projects : projects.filter((project) => project.category === activeFilter);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setSelected(null);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const goToContact = () => {
    setCurrentPage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <section className="work-showcase section">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Home</a>
            <i className="bi bi-chevron-right"></i>
            <span>Our Work</span>
          </nav>
          <div className="section-header work-heading">
            <span className="section-label"><i className="bi bi-grid-1x2"></i> Selected Work</span>
            <h2 className="section-title">Creative Work Across <span className="gradient-text">Industries</span></h2>
            <p className="section-subtitle">Browse the categories below. Every visual shown here comes directly from the Skyparz Innovations portfolio.</p>
          </div>

          <div className="work-filters" aria-label="Portfolio filters">
            {filters.map((filter) => <button key={filter} className={`work-filter ${activeFilter === filter ? 'active' : ''}`} onClick={() => setActiveFilter(filter)}>{filter}</button>)}
          </div>

          <div className="work-grid portfolio-image-grid">
            {visible.map((project) => (
              <article className="work-card portfolio-card" key={project.title} onClick={() => setSelected(project)}>
                <div className="portfolio-image-wrap">
                  <img src={project.image} alt={`${project.title} by Skyparz Innovations`} loading="lazy" />
                  <div className="portfolio-view"><i className="bi bi-arrows-fullscreen"></i> View Work</div>
                </div>
                <div className="work-card-body">
                  <span className="work-category">{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="work-cta-section section">
        <div className="container"><div className="work-cta-card"><div><span className="section-label"><i className="bi bi-lightning-charge"></i> Let's Create</span><h2>Want work like this for your brand?</h2><p>From a single campaign creative to a complete visual identity, tell us what you need and we'll build around your goals.</p></div><button className="btn btn-primary btn-lg" onClick={goToContact}>Start a Project <i className="bi bi-arrow-right"></i></button></div></div>
      </section>

      {selected && <div className="portfolio-lightbox" role="dialog" aria-modal="true" onClick={() => setSelected(null)}><button className="portfolio-lightbox-close" aria-label="Close" onClick={() => setSelected(null)}><i className="bi bi-x-lg"></i></button><div className="portfolio-lightbox-inner" onClick={(e) => e.stopPropagation()}><img src={selected.image} alt={selected.title} /><div className="portfolio-lightbox-caption"><span>{selected.category}</span><h3>{selected.title}</h3></div></div></div>}
    </>
  );
}
