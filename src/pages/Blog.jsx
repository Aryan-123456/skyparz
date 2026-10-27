import React, { useState, useMemo } from 'react';
import { blogs } from '../data/blogData';

const categories = ['All', 'Social Media', 'SEO & Search', 'Digital Strategy & AI'];

export default function Blog({ setCurrentPage, setSelectedBlogSlug }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) => {
      const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;

      const matchesSearch =
        blog.title.toLowerCase().includes(query) ||
        blog.excerpt.toLowerCase().includes(query) ||
        blog.tags.some((tag) => tag.toLowerCase().includes(query)) ||
        blog.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const featuredPost = blogs.find((b) => b.featured) || blogs[0];

  const handleReadArticle = (slug) => {
    setSelectedBlogSlug(slug);
    setCurrentPage('blog-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="blog-page">
      {/* ========== HERO SECTION ========== */}
      <section className="blog-hero section">
        <div className="container">
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
            <span>Blog & Insights</span>
          </nav>

          <div className="blog-hero-content">
            <span className="section-label">
              <i className="bi bi-journal-text"></i> Knowledge Hub & Insights
            </span>
            <h1 className="blog-hero-title">
              Insights That Power <span className="gradient-text">Digital Growth</span>
            </h1>
            <p className="blog-hero-subtitle">
              Deep dives, actionable growth playbooks, and strategic analysis from the digital marketing and technology
              specialists at Skyparz Innovations.
            </p>

            {/* Live Search and Filter Bar */}
            <div className="blog-search-bar-wrap">
              <div className="blog-search-input-box">
                <i className="bi bi-search"></i>
                <input
                  type="text"
                  placeholder="Search articles, strategies, SEO, Reels, AI..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="blog-search-input"
                  aria-label="Search articles"
                />
                {searchQuery && (
                  <button
                    className="blog-search-clear-btn"
                    onClick={() => setSearchQuery('')}
                    aria-label="Clear search"
                  >
                    <i className="bi bi-x-circle-fill"></i>
                  </button>
                )}
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="blog-filter-pills" role="tablist">
              {categories.map((cat) => (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={selectedCategory === cat}
                  className={`blog-filter-pill ${selectedCategory === cat ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== FEATURED ARTICLE SHOWCASE (Shown when no search/All) ========== */}
      {!searchQuery && selectedCategory === 'All' && featuredPost && (
        <section className="blog-featured-section">
          <div className="container">
            <div className="blog-featured-card" onClick={() => handleReadArticle(featuredPost.slug)}>
              <div className="blog-featured-image-col">
                <img
                  src={featuredPost.coverImage}
                  alt={featuredPost.title}
                  className="blog-featured-img"
                  loading="eager"
                />
                <span className="blog-featured-badge">
                  <i className="bi bi-star-fill"></i> Featured Guide
                </span>
              </div>
              <div className="blog-featured-body">
                <div className="blog-meta-top">
                  <span className="blog-cat-tag">{featuredPost.category}</span>
                  <span className="blog-dot-divider">•</span>
                  <span className="blog-meta-item">
                    <i className="bi bi-clock"></i> {featuredPost.readTime}
                  </span>
                  <span className="blog-dot-divider">•</span>
                  <span className="blog-meta-item">
                    <i className="bi bi-calendar3"></i> {featuredPost.date}
                  </span>
                </div>

                <h2 className="blog-featured-title">{featuredPost.title}</h2>
                <p className="blog-featured-excerpt">{featuredPost.excerpt}</p>

                <div className="blog-tags-row">
                  {featuredPost.tags.slice(0, 4).map((tag) => (
                    <span key={tag} className="blog-tag-badge">
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="blog-featured-footer">
                  <div className="blog-author-block">
                    <img
                      src={featuredPost.author.avatar}
                      alt={featuredPost.author.name}
                      className="blog-author-avatar"
                    />
                    <div>
                      <strong className="blog-author-name">{featuredPost.author.name}</strong>
                      <span className="blog-author-role">{featuredPost.author.role}</span>
                    </div>
                  </div>

                  <button
                    className="btn btn-primary btn-sm blog-read-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleReadArticle(featuredPost.slug);
                    }}
                  >
                    Read Guide <i className="bi bi-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ========== ARTICLES GRID ========== */}
      <section className="blog-grid-section section">
        <div className="container">
          <div className="blog-grid-header">
            <div>
              <h2 className="section-title" style={{ fontSize: '1.75rem', marginBottom: '0.25rem' }}>
                {searchQuery
                  ? `Search Results for "${searchQuery}"`
                  : selectedCategory === 'All'
                  ? 'Latest Articles & Guides'
                  : `${selectedCategory} Articles`}
              </h2>
              <p className="section-subtitle" style={{ margin: 0, textAlign: 'left' }}>
                Showing {filteredBlogs.length} {filteredBlogs.length === 1 ? 'article' : 'articles'}
              </p>
            </div>
          </div>

          {filteredBlogs.length === 0 ? (
            <div className="blog-empty-state">
              <i className="bi bi-search"></i>
              <h3>No articles found</h3>
              <p>We couldn't find any articles matching your search query. Try different keywords or reset filters.</p>
              <button
                className="btn btn-outline btn-sm"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="blog-cards-grid">
              {filteredBlogs.map((blog) => (
                <article
                  key={blog.id}
                  className="blog-card"
                  onClick={() => handleReadArticle(blog.slug)}
                >
                  <div className="blog-card-media">
                    <img src={blog.coverImage} alt={blog.title} className="blog-card-img" loading="lazy" />
                    <span className="blog-card-category-badge">{blog.category}</span>
                  </div>

                  <div className="blog-card-content">
                    <div className="blog-card-meta">
                      <span>
                        <i className="bi bi-calendar-event"></i> {blog.date}
                      </span>
                      <span>
                        <i className="bi bi-clock"></i> {blog.readTime}
                      </span>
                    </div>

                    <h3 className="blog-card-title">{blog.title}</h3>
                    <p className="blog-card-excerpt">{blog.excerpt}</p>

                    <div className="blog-card-tags">
                      {blog.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="blog-card-tag">
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <div className="blog-card-footer">
                      <div className="blog-card-author">
                        <img src={blog.author.avatar} alt={blog.author.name} className="blog-card-avatar" />
                        <span>{blog.author.name}</span>
                      </div>

                      <span className="blog-card-arrow">
                        Read <i className="bi bi-arrow-right"></i>
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ========== VALUE PROPOSITION / STATS BANNER ========== */}
      <section className="blog-stats-banner">
        <div className="container">
          <div className="blog-stats-card">
            <div className="blog-stat-item">
              <span className="blog-stat-number">3+</span>
              <span className="blog-stat-label">In-Depth Guides</span>
            </div>
            <div className="blog-stat-divider"></div>
            <div className="blog-stat-item">
              <span className="blog-stat-number">50+</span>
              <span className="blog-stat-label">Proven Strategies</span>
            </div>
            <div className="blog-stat-divider"></div>
            <div className="blog-stat-item">
              <span className="blog-stat-number">100%</span>
              <span className="blog-stat-label">Free Knowledge</span>
            </div>
            <div className="blog-stat-divider"></div>
            <div className="blog-stat-item">
              <span className="blog-stat-number">2026</span>
              <span className="blog-stat-label">Future-Ready Tactics</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CALL TO ACTION BANNER ========== */}
      <section className="blog-cta-section section">
        <div className="container">
          <div className="blog-cta-box">
            <div className="blog-cta-content">
              <span className="section-label">
                <i className="bi bi-rocket-takeoff"></i> Turn Strategy Into Growth
              </span>
              <h2>Ready to apply these strategies to your business?</h2>
              <p>
                From bespoke Instagram growth campaigns and search engine dominance to next-generation web design,
                Skyparz Innovations turns digital ambition into measurable market leadership.
              </p>
              <div className="blog-cta-buttons">
                <button
                  className="btn btn-primary btn-lg"
                  onClick={() => handleNavClick('contact')}
                >
                  Book a Free Consultation <i className="bi bi-arrow-right"></i>
                </button>
                <button
                  className="btn btn-outline btn-lg"
                  onClick={() => handleNavClick('services')}
                >
                  Explore All Services <i className="bi bi-grid"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
