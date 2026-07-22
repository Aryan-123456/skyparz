import React from 'react';
import AnimatedCounter from '../components/AnimatedCounter';

export default function Home({ setCurrentPage }) {
  const handleNavClick = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* ========== HERO SECTION ========== */}
      <section className="hero" id="hero">
        <div className="container">
          <div className="hero-content">
            <h1>
              We Turn <span className="highlight">Brands</span> Into <span className="highlight">Movements</span>
            </h1>
            <p className="hero-desc">
              From strategy to execution, we deliver data-driven digital marketing, stunning design, and cutting-edge
              development that drives real business growth.
            </p>
            <div className="hero-buttons">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('contact');
                }}
                className="btn btn-primary btn-lg"
              >
                Get a Free Consultation <i className="bi bi-arrow-right"></i>
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('work');
                }}
                className="btn btn-outline btn-lg"
              >
                See Our Work <i className="bi bi-play-circle"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Background Grid Pattern */}
        <div className="hero-visual" aria-hidden="true">
          <div className="hero-grid-pattern"></div>
        </div>
      </section>

      {/* ========== TRUSTED BY ========== */}
      <section className="trusted-section" aria-label="Trusted by leading brands">
        <div className="container">
          <p className="trusted-label">Trusted by 100+ brands worldwide</p>
        </div>
        <div className="trusted-marquee">
          <div className="trusted-logo"><i className="bi bi-building"></i> TajSkyline</div>
          <div className="trusted-logo"><i class="bi bi-rocket-takeoff"></i> SwastikInternational</div>
          <div className="trusted-logo"><i className="bi bi-lightning"></i> GreatIndianWaffle</div>
          <div className="trusted-logo"><i className="bi bi-gem"></i> FusionBeautySalon</div>
          <div className="trusted-logo"><i className="bi bi-globe2"></i> ArjunKart</div>
          <div className="trusted-logo"><i className="bi bi-stars"></i> KottyamCarKerala</div>
          <div className="trusted-logo"><i className="bi bi-cpu"></i> SME IPO Blueprint</div>
          <div className="trusted-logo"><i className="bi bi-shield-check"></i> PatelSimplified</div>
          <div className="trusted-logo"><i className="bi bi-graph-up-arrow"></i> AJ&Co</div>
          <div className="trusted-logo"><i className="bi bi-hexagon"></i> RbcTransporting</div>
          {/* Double content for seamless looping */}
          <div className="trusted-logo"><i className="bi bi-building"></i> TajSkyline</div>
          <div className="trusted-logo"><i class="bi bi-rocket-takeoff"></i> SwastikInternational</div>
          <div className="trusted-logo"><i className="bi bi-lightning"></i> GreatIndianWaffle</div>
          <div className="trusted-logo"><i className="bi bi-gem"></i> FusionBeautySalon</div>
          <div className="trusted-logo"><i className="bi bi-globe2"></i> ArjunKart</div>
          <div className="trusted-logo"><i className="bi bi-stars"></i> KottyamCarKerala</div>
          <div className="trusted-logo"><i className="bi bi-cpu"></i> SME IPO Blueprint</div>
          <div className="trusted-logo"><i className="bi bi-shield-check"></i> PatelSimplified</div>
          <div className="trusted-logo"><i className="bi bi-graph-up-arrow"></i> AJ&Co</div>
          <div className="trusted-logo"><i className="bi bi-hexagon"></i> RbcTransporting</div>
        </div>
      </section>

      {/* ========== SERVICES OVERVIEW ========== */}
      <section className="services-section section" id="services">
        <div className="container">
          <div className="section-header">
            <span className="section-label"><i className="bi bi-grid-3x3-gap"></i> What We Do</span>
            <h2 className="section-title">
              Services That <span className="gradient-text">Drive Results</span>
            </h2>
            <p className="section-subtitle">
              We offer a comprehensive suite of digital services designed to elevate your brand,
              engage your audience, and accelerate your growth.
            </p>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon"><i className="bi bi-megaphone"></i></div>
              <h3>Social Media Marketing</h3>
              <p>
                Build a powerful social presence with strategic content, community management, and targeted campaigns that
                convert followers into loyal customers.
              </p>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('services');
                }}
                className="service-link"
              >
                Learn More <i className="bi bi-arrow-right"></i>
              </a>
            </div>

            <div className="service-card">
              <div className="service-icon"><i className="bi bi-bar-chart-line"></i></div>
              <h3>Digital Marketing</h3>
              <p>
                Maximize your ROI with data-driven SEO, PPC advertising, email marketing, and comprehensive analytics that
                put you ahead of the competition.
              </p>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('services');
                }}
                className="service-link"
              >
                Learn More <i className="bi bi-arrow-right"></i>
              </a>
            </div>

            <div className="service-card">
              <div className="service-icon"><i className="bi bi-palette"></i></div>
              <h3>Graphic Design</h3>
              <p>
                From brand identity to marketing collateral, our designers craft visuals that tell your story, captivate
                your audience, and set you apart.
              </p>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('services');
                }}
                className="service-link"
              >
                Learn More <i className="bi bi-arrow-right"></i>
              </a>
            </div>

            <div className="service-card">
              <div className="service-icon"><i className="bi bi-camera-video"></i></div>
              <h3>Videography</h3>
              <p>
                Engage your audience with cinematic videos — from corporate storytelling and product showcases to dynamic
                event coverage and motion graphics.
              </p>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('services');
                }}
                className="service-link"
              >
                Learn More <i className="bi bi-arrow-right"></i>
              </a>
            </div>

            <div className="service-card">
              <div className="service-icon"><i className="bi bi-code-slash"></i></div>
              <h3>Web Development</h3>
              <p>
                High-performance, responsive websites and web applications built with modern technologies — designed to
                convert visitors into customers.
              </p>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('services');
                }}
                className="service-link"
              >
                Learn More <i className="bi bi-arrow-right"></i>
              </a>
            </div>

            <div className="service-card">
              <div className="service-icon"><i className="bi bi-pencil-square"></i></div>
              <h3>Content Creation</h3>
              <p>
                Compelling copywriting, engaging blog articles, impactful scripts, and brand storytelling that resonates
                with your audience and drives action.
              </p>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('services');
                }}
                className="service-link"
              >
                Learn More <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========== STATS ========== */}
      <section className="stats-section section" id="stats">
        <div className="container">
          <div className="stats-grid">
            <div class="stat-item">
              <div className="stat-number">
                <AnimatedCounter target={75} suffix="+" />
              </div>
              <div className="stat-label">Projects Delivered</div>
            </div>
            <div class="stat-item">
              <div className="stat-number">
                <AnimatedCounter target={100} suffix="+" />
              </div>
              <div className="stat-label">Happy Clients</div>
            </div>
            <div class="stat-item">
              <div className="stat-number">
                <AnimatedCounter target={2} suffix="+" />
              </div>
              <div className="stat-label">Years of Experience</div>
            </div>
            <div class="stat-item">
              <div className="stat-number">
                <AnimatedCounter target={6} suffix="+" />
              </div>
              <div className="stat-label">Team Members</div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== WHY CHOOSE US ========== */}
      <section className="why-section section" id="why-us">
        <div className="container">
          <div className="section-header">
            <span className="section-label"><i className="bi bi-trophy"></i> Why Choose Us</span>
            <h2 className="section-title">
              What Makes Us <span className="gradient-text">Different</span>
            </h2>
            <p className="section-subtitle">
              We don't just deliver services — we build partnerships. Here's why brands trust us with their growth.
            </p>
          </div>

          <div className="why-grid">
            <div className="why-card">
              <div className="why-icon"><i className="bi bi-graph-up"></i></div>
              <div>
                <h3>Data-Driven Strategy</h3>
                <p>
                  Every decision is backed by analytics and market research. We use real-time data to optimize campaigns
                  and maximize your ROI.
                </p>
              </div>
            </div>

            <div className="why-card">
              <div className="why-icon"><i className="bi bi-brush"></i></div>
              <div>
                <h3>Creative Excellence</h3>
                <p>
                  Our creative team delivers designs and content that don't just look stunning — they tell your brand's
                  story and drive action.
                </p>
              </div>
            </div>

            <div className="why-card">
              <div className="why-icon"><i className="bi bi-clipboard-data"></i></div>
              <div>
                <h3>Transparent Reporting</h3>
                <p>
                  Monthly performance reports, real-time dashboards, and clear KPIs. You always know exactly where your
                  investment is going and what it's delivering.
                </p>
              </div>
            </div>

            <div className="why-card">
              <div className="why-icon"><i className="bi bi-headset"></i></div>
              <div>
                <h3>Dedicated Support</h3>
                <p>
                  Get a dedicated account manager, priority support, and a team that genuinely cares about your success.
                  We're your partners, not just vendors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== TESTIMONIALS ========== */}
      <section className="testimonials-section section" id="testimonials">
        <div className="container">
          <div className="section-header">
            <span className="section-label"><i className="bi bi-chat-quote"></i> Testimonials</span>
            <h2 className="section-title">
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
            <p className="section-subtitle">
              Don't just take our word for it. Here's what our clients have to say about working with SkyparzInnovation.
            </p>
          </div>

          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-stars">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </div>
              <p className="testimonial-text">
                "SkyparzInnovation completely transformed our digital presence. Our social media engagement increased
                by 340% in just 3 months. Their team truly understands what it takes to grow a brand online."
              </p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">RK</div>
                <div className="testimonial-info">
                  <h4>Rajesh Kumar</h4>
                  <p>CEO, TechCorp India</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-stars">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </div>
              <p className="testimonial-text">
                "The website they built for us exceeded every expectation. Clean, fast, and beautifully designed — our
                conversion rate doubled within weeks. I can't recommend them enough!"
              </p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">SP</div>
                <div className="testimonial-info">
                  <h4>Sneha Patel</h4>
                  <p>Founder, Luxebrands</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-stars">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </div>
              <p className="testimonial-text">
                "Their video production quality is outstanding. From concept to final cut, the team was professional,
                creative, and delivered on time. Our product launch video went viral with 2M+ views."
              </p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">AM</div>
                <div className="testimonial-info">
                  <h4>Arjun Mehta</h4>
                  <p>Marketing Head, GrowthStack</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CTA BANNER ========== */}
      <section className="cta-banner">
        <div className="container">
          <div className="cta-banner-inner">
            <h2>Ready to Elevate Your Brand?</h2>
            <p>Let's discuss how we can help you achieve your business goals. Book a free consultation today.</p>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('contact');
              }}
              className="btn btn-lg"
            >
              Start Your Project <i className="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
