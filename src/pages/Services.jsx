import React from 'react';

export default function Services({ setCurrentPage }) {
  const handleGetStartedClick = (e) => {
    e.preventDefault();
    setCurrentPage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* ========== PAGE HERO ========== */}
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setCurrentPage('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              Home
            </a>
            <i className="bi bi-chevron-right"></i>
            <span>Services</span>
          </div>
          <h1>
            Our <span className="gradient-text">Services</span>
          </h1>
          <p>
            We deliver end-to-end digital solutions that drive measurable results. From strategy to execution, every
            service is tailored to your unique business goals.
          </p>
        </div>
      </section>

      {/* ========== SERVICE DETAILS ========== */}
      <section className="services-detail-section" id="services-detail">
        <div className="container">
          {/* 1. Social Media Marketing */}
          <div className="service-detail" id="social-media">
            <div className="service-detail-visual">
              <img src="/image1.png" alt="Social Media Marketing" className="service-detail-img" />
            </div>
            <div className="service-detail-content">
              <div className="service-number">Service 01</div>
              <h2>Social Media Marketing</h2>
              <p>
                Build a powerful social presence that transforms followers into brand advocates. We create scroll-stopping
                content and data-driven campaigns across all major platforms.
              </p>
              <div className="service-deliverables">
                <div className="deliverable-item"><i className="bi bi-check-circle-fill"></i> Social Media Strategy</div>
                <div className="deliverable-item"><i class="bi bi-check-circle-fill"></i> Content Calendars</div>
                <div className="deliverable-item"><i className="bi bi-check-circle-fill"></i> Community Management</div>
                <div className="deliverable-item"><i className="bi bi-check-circle-fill"></i> Paid Social Advertising</div>
                <div className="deliverable-item"><i className="bi bi-check-circle-fill"></i> Influencer Partnerships</div>
                <div className="deliverable-item"><i className="bi bi-check-circle-fill"></i> Performance Analytics</div>
              </div>
              <a href="#" onClick={handleGetStartedClick} className="btn btn-primary btn-sm">
                Get Started <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>

          {/* 2. Digital Marketing */}
          <div className="service-detail reverse" id="digital-marketing">
            <div className="service-detail-visual">
              <img src="/image2.png" alt="Digital Marketing" className="service-detail-img" />
            </div>
            <div className="service-detail-content">
              <div className="service-number">Service 02</div>
              <h2>Digital Marketing</h2>
              <p>
                Maximize your online visibility and ROI with comprehensive digital marketing strategies. We use
                cutting-edge tools and techniques to put your brand in front of the right audience.
              </p>
              <div className="service-deliverables">
                <div className="deliverable-item"><i className="bi bi-check-circle-fill"></i> Search Engine Optimization</div>
                <div className="deliverable-item"><i className="bi bi-check-circle-fill"></i> Pay-Per-Click Advertising</div>
                <div className="deliverable-item"><i className="bi bi-check-circle-fill"></i> Email Marketing Campaigns</div>
                <div className="deliverable-item"><i className="bi bi-check-circle-fill"></i> Marketing Automation</div>
                <div className="deliverable-item"><i className="bi bi-check-circle-fill"></i> Conversion Rate Optimization</div>
                <div className="deliverable-item"><i className="bi bi-check-circle-fill"></i> Analytics & Reporting</div>
              </div>
              <a href="#" onClick={handleGetStartedClick} className="btn btn-primary btn-sm">
                Get Started <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>

          {/* 3. Graphic Design */}
          <div className="service-detail" id="graphic-design">
            <div className="service-detail-visual">
              <img src="/image3.png" alt="Graphic Design" className="service-detail-img" />
            </div>
            <div className="service-detail-content">
              <div className="service-number">Service 03</div>
              <h2>Graphic Design</h2>
              <p>
                Visuals that speak louder than words. Our design team creates stunning brand identities, marketing
                materials, and digital assets that make your brand unforgettable.
              </p>
              <div className="service-deliverables">
                <div className="deliverable-item"><i className="bi bi-check-circle-fill"></i> Brand Identity Design</div>
                <div className="deliverable-item"><i className="bi bi-check-circle-fill"></i> UI/UX Design</div>
                <div className="deliverable-item"><i className="bi bi-check-circle-fill"></i> Print & Packaging</div>
                <div className="deliverable-item"><i className="bi bi-check-circle-fill"></i> Social Media Graphics</div>
                <div className="deliverable-item"><i className="bi bi-check-circle-fill"></i> Presentation Design</div>
                <div className="deliverable-item"><i className="bi bi-check-circle-fill"></i> Infographics & Data Viz</div>
              </div>
              <a href="#" onClick={handleGetStartedClick} className="btn btn-primary btn-sm">
                Get Started <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>

          {/* 4. Videography */}
          <div className="service-detail reverse" id="videography">
            <div className="service-detail-visual">
              <img src="/image4.png" alt="Videography" className="service-detail-img" />
            </div>
            <div className="service-detail-content">
              <div className="service-number">Service 04</div>
              <h2>Videography</h2>
              <p>
                Cinematic storytelling that captivates your audience. From concept to final cut, we produce high-quality
                video content that drives engagement and delivers your brand message with impact.
              </p>
              <div className="service-deliverables">
                <div className="deliverable-item"><i className="bi bi-check-circle-fill"></i> Corporate Videos</div>
                <div className="deliverable-item"><i className="bi bi-check-circle-fill"></i> Product Showcases</div>
                <div className="deliverable-item"><i className="bi bi-check-circle-fill"></i> Event Coverage</div>
                <div className="deliverable-item"><i className="bi bi-check-circle-fill"></i> Motion Graphics</div>
                <div className="deliverable-item"><i className="bi bi-check-circle-fill"></i> Social Media Reels</div>
                <div className="deliverable-item"><i className="bi bi-check-circle-fill"></i> Testimonial Videos</div>
              </div>
              <a href="#" onClick={handleGetStartedClick} className="btn btn-primary btn-sm">
                Get Started <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>

          {/* 5. Web Development */}
          <div className="service-detail" id="web-development">
            <div className="service-detail-visual">
              <img src="/image5.png" alt="Web Development" className="service-detail-img" />
            </div>
            <div className="service-detail-content">
              <div className="service-number">Service 05</div>
              <h2>Web Development</h2>
              <p>
                High-performance websites and web applications built with cutting-edge technologies. We create digital
                experiences that look beautiful, load fast, and convert visitors into customers.
              </p>
              <div className="service-deliverables">
                <div className="deliverable-item"><i className="bi bi-check-circle-fill"></i> Responsive Websites</div>
                <div className="deliverable-item"><i className="bi bi-check-circle-fill"></i> E-Commerce Solutions</div>
                <div className="deliverable-item"><i className="bi bi-check-circle-fill"></i> Custom Web Applications</div>
                <div className="deliverable-item"><i className="bi bi-check-circle-fill"></i> CMS Development</div>
                <div className="deliverable-item"><i className="bi bi-check-circle-fill"></i> Performance Optimization</div>
                <div className="deliverable-item"><i className="bi bi-check-circle-fill"></i> Maintenance & Support</div>
              </div>
              <a href="#" onClick={handleGetStartedClick} className="btn btn-primary btn-sm">
                Get Started <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>

          {/* 6. Content Creation */}
          <div className="service-detail reverse" id="content-creation">
            <div className="service-detail-visual">
              <img src="/image6.png" alt="Content Creation" className="service-detail-img" />
            </div>
            <div className="service-detail-content">
              <div className="service-number">Service 06</div>
              <h2>Content Creation</h2>
              <p>
                Words that move people. Our content team creates compelling narratives across every format — from blog
                posts and website copy to scripts and brand stories that resonate with your audience.
              </p>
              <div className="service-deliverables">
                <div className="deliverable-item"><i className="bi bi-check-circle-fill"></i> SEO Blog Articles</div>
                <div className="deliverable-item"><i className="bi bi-check-circle-fill"></i> Website Copywriting</div>
                <div className="deliverable-item"><i className="bi bi-check-circle-fill"></i> Video Scripts</div>
                <div className="deliverable-item"><i className="bi bi-check-circle-fill"></i> Brand Storytelling</div>
                <div className="deliverable-item"><i className="bi bi-check-circle-fill"></i> Email Newsletters</div>
                <div className="deliverable-item"><i className="bi bi-check-circle-fill"></i> Case Studies & Whitepapers</div>
              </div>
              <a href="#" onClick={handleGetStartedClick} className="btn btn-primary btn-sm">
                Get Started <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========== OUR PROCESS ========== */}
      <section className="process-section section" id="process">
        <div className="container">
          <div className="section-header">
            <span className="section-label"><i className="bi bi-gear"></i> Our Process</span>
            <h2 className="section-title">
              How We <span className="gradient-text">Work</span>
            </h2>
            <p className="section-subtitle">
              A proven 4-step process that turns your vision into reality — with full transparency at every stage.
            </p>
          </div>

          <div className="process-grid">
            <div className="process-step">
              <div className="process-number">01</div>
              <h3>Discovery</h3>
              <p>We dive deep into your brand, audience, competitors, and goals to build a solid foundation for strategy.</p>
            </div>

            <div className="process-step">
              <div className="process-number">02</div>
              <h3>Strategy</h3>
              <p>We craft a customized roadmap with clear milestones, KPIs, and a tactical plan aligned with your objectives.</p>
            </div>

            <div className="process-step">
              <div className="process-number">03</div>
              <h3>Execute</h3>
              <p>Our specialist teams bring the strategy to life with creative campaigns, compelling content, and technical excellence.</p>
            </div>

            <div className="process-step">
              <div className="process-number">04</div>
              <h3>Optimize</h3>
              <p>We continuously monitor, test, and refine campaigns to maximize efficiency, scale success, and boost your bottom line.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
