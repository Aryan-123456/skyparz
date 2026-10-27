import React, { useState, useEffect } from 'react';
import { blogs } from '../data/blogData';

export default function BlogDetail({ slug, setCurrentPage, setSelectedBlogSlug }) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copied, setCopied] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [mobileTocOpen, setMobileTocOpen] = useState(false);

  const blog = blogs.find((b) => b.slug === slug) || blogs[0];

  // Calculate reading scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleNavClick = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReadRelated = (relatedSlug) => {
    setSelectedBlogSlug(relatedSlug);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    setMobileTocOpen(false);
    const el = document.getElementById(sectionId);
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const relatedBlogs = blogs.filter((b) => b.slug !== blog.slug);

  return (
    <div className="blog-detail-page">
      {/* Scroll Progress Bar */}
      <div
        className="reading-progress-bar"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      {/* Header Container */}
      <header className="blog-detail-header section">
        <div className="container">
          {/* Breadcrumb Navigation */}
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('home');
              }}
            >
              Home
            </a>
            <i className="bi bi-chevron-right"></i>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('blog');
              }}
            >
              Blog
            </a>
            <i className="bi bi-chevron-right"></i>
            <span className="breadcrumb-current">{blog.title}</span>
          </nav>

          <div className="blog-detail-header-inner">
            <div className="blog-detail-badge-row">
              <span className="blog-cat-tag">{blog.category}</span>
              <span className="blog-dot-divider">•</span>
              <span className="blog-meta-item">
                <i className="bi bi-clock"></i> {blog.readTime}
              </span>
              <span className="blog-dot-divider">•</span>
              <span className="blog-meta-item">
                <i className="bi bi-calendar3"></i> {blog.date}
              </span>
            </div>

            <h1 className="blog-detail-title">{blog.title}</h1>
            <p className="blog-detail-subtitle">{blog.subtitle}</p>

            {/* Author Bar & Social Sharing */}
            <div className="blog-detail-author-share-bar">
              <div className="blog-author-block">
                <img
                  src={blog.author.avatar}
                  alt={blog.author.name}
                  className="blog-author-avatar"
                />
                <div>
                  <strong className="blog-author-name">{blog.author.name}</strong>
                  <span className="blog-author-role">{blog.author.role}</span>
                </div>
              </div>

              <div className="blog-share-tools">
                <span className="blog-share-label">Share:</span>
                <button
                  className="blog-share-btn"
                  onClick={handleCopyLink}
                  title="Copy link to clipboard"
                  aria-label="Copy link"
                >
                  <i className={`bi ${copied ? 'bi-check-lg' : 'bi-link-45deg'}`}></i>
                  <span>{copied ? 'Copied!' : 'Copy'}</span>
                </button>
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                    blog.title
                  )}&url=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="blog-share-btn"
                  aria-label="Share on X (Twitter)"
                >
                  <i className="bi bi-twitter-x"></i>
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                    window.location.href
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="blog-share-btn"
                  aria-label="Share on LinkedIn"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
                <a
                  href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                    blog.title + ' ' + window.location.href
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="blog-share-btn"
                  aria-label="Share on WhatsApp"
                >
                  <i className="bi bi-whatsapp"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Featured Cover Image */}
      <div className="blog-detail-cover-wrap container">
        <img src={blog.coverImage} alt={blog.title} className="blog-detail-cover-img" />
      </div>

      {/* Main Body Content & Sidebar */}
      <section className="blog-detail-body-section section">
        <div className="container">
          <div className="blog-detail-layout">
            {/* Sidebar with Table of Contents (Desktop) */}
            <aside className="blog-detail-sidebar">
              <div className="blog-sidebar-sticky">
                <div className="blog-sidebar-card">
                  <h4 className="blog-toc-heading">
                    <i className="bi bi-list-nested"></i> In This Article
                  </h4>
                  <ul className="blog-toc-list">
                    {blog.sections.map((section, idx) => {
                      const sectionId = `section-${idx}`;
                      return (
                        <li key={idx}>
                          <a
                            href={`#${sectionId}`}
                            onClick={(e) => {
                              e.preventDefault();
                              scrollToSection(sectionId);
                            }}
                          >
                            {section.heading}
                          </a>
                        </li>
                      );
                    })}
                    {blog.faqs && blog.faqs.length > 0 && (
                      <li>
                        <a
                          href="#faqs-section"
                          onClick={(e) => {
                            e.preventDefault();
                            scrollToSection('faqs-section');
                          }}
                        >
                          Frequently Asked Questions
                        </a>
                      </li>
                    )}
                  </ul>
                </div>

                <div className="blog-sidebar-cta-card">
                  <i className="bi bi-lightbulb-fill cta-card-icon"></i>
                  <h4>Need help executing this?</h4>
                  <p>
                    Skyparz Innovations builds custom digital marketing & design strategies that generate actual ROI.
                  </p>
                  <button
                    className="btn btn-primary btn-sm"
                    style={{ width: '100%', justifyContent: 'center' }}
                    onClick={() => handleNavClick('contact')}
                  >
                    Get Free Audit <i className="bi bi-arrow-right"></i>
                  </button>
                </div>
              </div>
            </aside>

            {/* Article Content Stream */}
            <main className="blog-detail-content-area">
              {/* Mobile Table of Contents Collapsible Button */}
              <div className="blog-mobile-toc-container">
                <button
                  className="blog-mobile-toc-btn"
                  onClick={() => setMobileTocOpen(!mobileTocOpen)}
                  aria-expanded={mobileTocOpen}
                  aria-label="Toggle Table of Contents"
                >
                  <span className="blog-mobile-toc-btn-left">
                    <i className="bi bi-list-nested"></i>
                    <span>Quick Navigation ({blog.sections.length} sections)</span>
                  </span>
                  <i className={`bi ${mobileTocOpen ? 'bi-chevron-up' : 'bi-chevron-down'}`}></i>
                </button>
                {mobileTocOpen && (
                  <div className="blog-mobile-toc-dropdown">
                    <ul className="blog-mobile-toc-list">
                      {blog.sections.map((section, idx) => {
                        const sectionId = `section-${idx}`;
                        return (
                          <li key={idx}>
                            <a
                              href={`#${sectionId}`}
                              onClick={(e) => {
                                e.preventDefault();
                                scrollToSection(sectionId);
                              }}
                            >
                              <i className="bi bi-chevron-right"></i> {section.heading}
                            </a>
                          </li>
                        );
                      })}
                      {blog.faqs && blog.faqs.length > 0 && (
                        <li>
                          <a
                            href="#faqs-section"
                            onClick={(e) => {
                              e.preventDefault();
                              scrollToSection('faqs-section');
                            }}
                          >
                            <i className="bi bi-chevron-right"></i> Frequently Asked Questions
                          </a>
                        </li>
                      )}
                    </ul>
                  </div>
                )}
              </div>

              {/* Key Takeaways Box */}
              {blog.keyTakeaways && blog.keyTakeaways.length > 0 && (
                <div className="blog-takeaways-box">
                  <div className="blog-takeaways-header">
                    <i className="bi bi-bookmark-star-fill"></i>
                    <h3>Key Strategic Takeaways</h3>
                  </div>
                  <ul className="blog-takeaways-list">
                    {blog.keyTakeaways.map((takeaway, i) => (
                      <li key={i}>
                        <i className="bi bi-check2-circle"></i>
                        <span>{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Sections */}
              {blog.sections.map((section, idx) => (
                <div key={idx} id={`section-${idx}`} className="blog-article-section">
                  <h2 className="blog-section-title">{section.heading}</h2>

                  {section.paragraphs &&
                    section.paragraphs.map((p, pIdx) => (
                      <p key={pIdx} className="blog-paragraph">
                        {p}
                      </p>
                    ))}

                  {/* Bullet points if any */}
                  {section.bulletPoints && (
                    <ul className="blog-bullet-list">
                      {section.bulletPoints.map((point, bIdx) => (
                        <li key={bIdx}>
                          <i className="bi bi-arrow-right-short"></i>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Subsections if any */}
                  {section.subsections && (
                    <div className="blog-subsections-grid">
                      {section.subsections.map((sub, sIdx) => (
                        <div key={sIdx} className="blog-subsection-card">
                          <h4>
                            <i className="bi bi-chevron-double-right"></i> {sub.title}
                          </h4>
                          <p>{sub.text}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Table if any */}
                  {section.table && (
                    <div className="blog-table-container">
                      <div className="blog-table-mobile-hint">
                        <i className="bi bi-arrows"></i> Scroll horizontally to view full table &rarr;
                      </div>
                      <div className="blog-table-wrapper">
                        <table className="blog-content-table">
                          <thead>
                            <tr>
                              {section.table.headers.map((h, hIdx) => (
                                <th key={hIdx}>{h}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {section.table.rows.map((row, rIdx) => (
                              <tr key={rIdx}>
                                {row.map((cell, cIdx) => (
                                  <td key={cIdx}>
                                    {cIdx === 0 ? <strong>{cell}</strong> : cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {/* Highlight note if any */}
                  {section.note && (
                    <div className="blog-callout-note">
                      <i className="bi bi-info-circle-fill"></i>
                      <p>{section.note}</p>
                    </div>
                  )}
                </div>
              ))}

              {/* FAQs Accordion */}
              {blog.faqs && blog.faqs.length > 0 && (
                <div id="faqs-section" className="blog-faqs-container">
                  <h2 className="blog-section-title">
                    <i className="bi bi-question-circle"></i> Frequently Asked Questions
                  </h2>
                  <p className="blog-paragraph" style={{ marginBottom: '1.5rem' }}>
                    Quick answers to the most common questions regarding this strategy:
                  </p>

                  <div className="blog-accordion">
                    {blog.faqs.map((faq, fIdx) => (
                      <div
                        key={fIdx}
                        className={`blog-accordion-item ${openFaqIndex === fIdx ? 'open' : ''}`}
                      >
                        <button
                          className="blog-accordion-trigger"
                          onClick={() => toggleFaq(fIdx)}
                          aria-expanded={openFaqIndex === fIdx}
                        >
                          <span>{faq.question}</span>
                          <i
                            className={`bi ${
                              openFaqIndex === fIdx ? 'bi-chevron-up' : 'bi-chevron-down'
                            }`}
                          ></i>
                        </button>
                        {openFaqIndex === fIdx && (
                          <div className="blog-accordion-content">
                            <p>{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Article Footer & Author Bio */}
              <div className="blog-author-bio-box">
                <img
                  src={blog.author.avatar}
                  alt={blog.author.name}
                  className="blog-bio-avatar"
                />
                <div className="blog-bio-info">
                  <h3>About {blog.author.name}</h3>
                  <p>
                    Published by the strategy and creative minds at <strong>Skyparz Innovations</strong>. We partner
                    with growth-focused brands worldwide to create unforgettable identities, powerful organic search
                    rankings, and revenue-generating digital campaigns.
                  </p>
                  <div className="blog-bio-actions">
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() => handleNavClick('contact')}
                    >
                      Connect with Skyparz <i className="bi bi-arrow-right"></i>
                    </button>
                    <button
                      className="btn btn-outline btn-sm"
                      onClick={() => handleNavClick('blog')}
                    >
                      <i className="bi bi-arrow-left"></i> All Articles
                    </button>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>

      {/* ========== RELATED ARTICLES SECTION ========== */}
      {relatedBlogs.length > 0 && (
        <section className="blog-related-section section">
          <div className="container">
            <div className="section-header">
              <span className="section-label">
                <i className="bi bi-compass"></i> Continue Reading
              </span>
              <h2 className="section-title">
                Explore More <span className="gradient-text">Insights</span>
              </h2>
            </div>

            <div className="blog-cards-grid">
              {relatedBlogs.map((rel) => (
                <article
                  key={rel.id}
                  className="blog-card"
                  onClick={() => handleReadRelated(rel.slug)}
                >
                  <div className="blog-card-media">
                    <img src={rel.coverImage} alt={rel.title} className="blog-card-img" loading="lazy" />
                    <span className="blog-card-category-badge">{rel.category}</span>
                  </div>

                  <div className="blog-card-content">
                    <div className="blog-card-meta">
                      <span>
                        <i className="bi bi-calendar-event"></i> {rel.date}
                      </span>
                      <span>
                        <i className="bi bi-clock"></i> {rel.readTime}
                      </span>
                    </div>

                    <h3 className="blog-card-title">{rel.title}</h3>
                    <p className="blog-card-excerpt">{rel.excerpt}</p>

                    <div className="blog-card-footer">
                      <div className="blog-card-author">
                        <img src={rel.author.avatar} alt={rel.author.name} className="blog-card-avatar" />
                        <span>{rel.author.name}</span>
                      </div>

                      <span className="blog-card-arrow">
                        Read <i className="bi bi-arrow-right"></i>
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
