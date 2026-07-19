import React, { useState } from 'react';

export default function Contact({ setCurrentPage }) {
  const [activeTab, setActiveTab] = useState('message'); // 'message' or 'booking'
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'

  // FAQ state: tracks which accordion item is expanded (index 0 is open by default)
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? -1 : index);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      return;
    }

    setStatus('loading');
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: '2c8158cb-102c-43b2-8bab-9ef35bc66fed',
          name,
          email,
          service,
          message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setName('');
        setEmail('');
        setService('');
        setMessage('');
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
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
            <span>Contact</span>
          </div>
          <h1>
            Let's Build Something <span className="gradient-text">Great Together</span>
          </h1>
          <p>
            Have a project in mind? We'd love to hear about it. Fill out the form below or reach out directly — we respond within 24 hours.
          </p>
        </div>
      </section>

      {/* ========== CONTACT SECTION ========== */}
      <section className="contact-section section" id="contact">
        <div className="container">
          <div className="contact-grid">

            {/* Left Column: Contact & Booking Container */}
            <div className="contact-form-card">

              {/* Tab Headers */}
              <div className="contact-tabs">
                <button
                  type="button"
                  className={`tab-btn ${activeTab === 'message' ? 'active' : ''}`}
                  onClick={() => setActiveTab('message')}
                >
                  Send Message
                </button>
                <button
                  type="button"
                  className={`tab-btn ${activeTab === 'booking' ? 'active' : ''}`}
                  onClick={() => setActiveTab('booking')}
                >
                  Book a Call
                </button>
              </div>

              {/* Tab Pane 1: Send Message Form */}
              {activeTab === 'message' && (
                <div className="tab-pane active" id="message-pane">
                  {status === 'success' ? (
                    <div className="form-success" style={{ display: 'flex' }}>
                      <i className="bi bi-check-circle-fill" style={{ fontSize: '3rem', color: 'var(--color-success)', marginBottom: '16px' }}></i>
                      <h3>Message Sent Successfully!</h3>
                      <p>Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                      <button
                        onClick={() => setStatus('idle')}
                        className="btn btn-outline btn-sm"
                        style={{ marginTop: '20px' }}
                      >
                        Send Another Message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} id="contactForm" noValidate>
                      <div className="form-content">
                        <h3>Send Us a Message</h3>

                        <div className="form-row">
                          <div className="form-group">
                            <label htmlFor="name">
                              Full Name <span className="required">*</span>
                            </label>
                            <input
                              type="text"
                              id="name"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              placeholder="John Doe"
                              required
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="email">
                              Email Address <span className="required">*</span>
                            </label>
                            <input
                              type="email"
                              id="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              placeholder="john@example.com"
                              required
                            />
                          </div>
                        </div>

                        <div className="form-group">
                          <label htmlFor="service">Service Interested In</label>
                          <select
                            id="service"
                            value={service}
                            onChange={(e) => setService(e.target.value)}
                          >
                            <option value="" disabled selected>
                              Select a service
                            </option>
                            <option value="social-media-marketing">Social Media Marketing</option>
                            <option value="digital-marketing">Digital Marketing</option>
                            <option value="graphic-design">Graphic Design</option>
                            <option value="videography">Videography</option>
                            <option value="web-development">Web Development</option>
                            <option value="content-creation">Content Creation</option>
                            <option value="multiple">Multiple Services</option>
                            <option value="not-sure">Not Sure Yet</option>
                          </select>
                        </div>

                        <div className="form-group">
                          <label htmlFor="message">
                            Your Message <span className="required">*</span>
                          </label>
                          <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Tell us about your project, goals, and timeline..."
                            required
                          ></textarea>
                        </div>

                        {status === 'error' && (
                          <p style={{ color: 'var(--color-error)', marginBottom: '16px' }}>
                            Oops! Something went wrong. Please try again.
                          </p>
                        )}

                        <div className="form-submit">
                          <button
                            type="submit"
                            className="btn btn-primary btn-lg"
                            disabled={status === 'loading'}
                          >
                            {status === 'loading' ? (
                              <span>Sending... <i className="bi bi-hourglass-split"></i></span>
                            ) : (
                              <span>Send Message <i className="bi bi-send"></i></span>
                            )}
                          </button>
                        </div>
                      </div>
                    </form>
                  )}
                </div>
              )}

              {/* Tab Pane 2: Booking Scheduler Redirect */}
              {activeTab === 'booking' && (
                <div className="tab-pane active" id="booking-pane">
                  <div className="booking-redirect-card">
                    <i className="bi bi-calendar2-check-fill"></i>
                    <h3>Schedule a Consultation Call</h3>
                    <p>
                      Pick a date and time for a free 30-minute video session with our team. We'll discuss your project,
                      goals, and provide actionable advice.
                    </p>
                    <a
                      href="https://cal.com/skyparz-innovation-g3i5zp/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      Book Google Meet Call <i className="bi bi-box-arrow-up-right" style={{ marginLeft: '8px' }}></i>
                    </a>
                    <span className="redirect-note">
                      <i className="bi bi-shield-check" style={{ marginRight: '6px' }}></i> Securely scheduled & synced to calendar
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Contact Info & Business Hours */}
            <div className="contact-info">
              <div className="contact-info-card">
                <div className="contact-info-icon">
                  <i className="bi bi-envelope-at"></i>
                </div>
                <div className="contact-info-details">
                  <h4>Email Us</h4>
                  <p>
                    <a href="mailto:skyparzinnovation@gmail.com">skyparzinnovation@gmail.com</a>
                  </p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="business-hours">
                <h4>
                  <i className="bi bi-clock"></i> Business Hours
                </h4>
                <ul className="hours-list">
                  <li>
                    <span className="day">Monday – Sunday</span>
                    <span className="time" style={{ color: 'var(--color-success)', fontWeight: '600' }}>
                      Open 24/7
                    </span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========== FAQ SECTION ========== */}
      <section className="faq-section section" id="faq">
        <div className="container">
          <div className="section-header">
            <span className="section-label">
              <i className="bi bi-question-circle"></i> FAQ
            </span>
            <h2 className="section-title">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="section-subtitle">
              Got questions? We've got answers. Here are the most common things clients ask us.
            </p>
          </div>

          <div className="faq-list">
            {/* FAQ 1 */}
            <div className={`faq-item ${openFaq === 0 ? 'open' : ''}`}>
              <button
                type="button"
                className="faq-question"
                onClick={() => toggleFaq(0)}
                aria-expanded={openFaq === 0 ? 'true' : 'false'}
              >
                What services does SkyparzInnovation offer?
                <i className="bi bi-chevron-down"></i>
              </button>
              <div className="faq-answer">
                <div className="faq-answer-inner">
                  We offer a comprehensive suite of digital services including Social Media Marketing, Digital Marketing
                  (SEO, PPC, Email), Graphic Design, Videography & Video Production, Web Development, and Content Creation.
                  Whether you need a single service or a full integrated strategy, we've got you covered.
                </div>
              </div>
            </div>

            {/* FAQ 2 */}
            <div className={`faq-item ${openFaq === 1 ? 'open' : ''}`}>
              <button
                type="button"
                className="faq-question"
                onClick={() => toggleFaq(1)}
                aria-expanded={openFaq === 1 ? 'true' : 'false'}
              >
                How long does a typical project take?
                <i className="bi bi-chevron-down"></i>
              </button>
              <div className="faq-answer">
                <div className="faq-answer-inner">
                  Project timelines vary based on scope and complexity. A website typically takes 4–8 weeks, a brand
                  identity 2–4 weeks, and marketing campaigns can be launched within 1–2 weeks. During our initial
                  consultation, we'll provide a detailed timeline specific to your project.
                </div>
              </div>
            </div>

            {/* FAQ 3 */}
            <div className={`faq-item ${openFaq === 2 ? 'open' : ''}`}>
              <button
                type="button"
                className="faq-question"
                onClick={() => toggleFaq(2)}
                aria-expanded={openFaq === 2 ? 'true' : 'false'}
              >
                What is your pricing structure?
                <i className="bi bi-chevron-down"></i>
              </button>
              <div className="faq-answer">
                <div className="faq-answer-inner">
                  We offer flexible pricing tailored to each project's requirements. We work with project-based fees,
                  monthly retainers, and custom packages. There are no hidden costs — everything is transparent from day
                  one. Contact us for a custom quote that fits your budget and goals.
                </div>
              </div>
            </div>

            {/* FAQ 4 */}
            <div className={`faq-item ${openFaq === 3 ? 'open' : ''}`}>
              <button
                type="button"
                className="faq-question"
                onClick={() => toggleFaq(3)}
                aria-expanded={openFaq === 3 ? 'true' : 'false'}
              >
                Do you offer ongoing support after project delivery?
                <i className="bi bi-chevron-down"></i>
              </button>
              <div className="faq-answer">
                <div className="faq-answer-inner">
                  Absolutely! We believe in long-term partnerships. All projects include a support period post-delivery. For
                  websites, we offer maintenance packages. For marketing campaigns, we provide ongoing optimization and
                  monthly performance reports to ensure continued growth.
                </div>
              </div>
            </div>

            {/* FAQ 5 */}
            <div className={`faq-item ${openFaq === 4 ? 'open' : ''}`}>
              <button
                type="button"
                className="faq-question"
                onClick={() => toggleFaq(4)}
                aria-expanded={openFaq === 4 ? 'true' : 'false'}
              >
                How do you measure the success of campaigns?
                <i className="bi bi-chevron-down"></i>
              </button>
              <div className="faq-answer">
                <div className="faq-answer-inner">
                  We track key performance indicators (KPIs) aligned with your business goals — such as website traffic,
                  conversion rates, social engagement, lead generation, and ROI. You'll receive detailed monthly reports
                  with actionable insights, plus access to real-time dashboards to track progress.
                </div>
              </div>
            </div>

            {/* FAQ 6 */}
            <div className={`faq-item ${openFaq === 5 ? 'open' : ''}`}>
              <button
                type="button"
                className="faq-question"
                onClick={() => toggleFaq(5)}
                aria-expanded={openFaq === 5 ? 'true' : 'false'}
              >
                Can I see examples of your past work?
                <i className="bi bi-chevron-down"></i>
              </button>
              <div className="faq-answer">
                <div className="faq-answer-inner">
                  Of course! We'd be happy to share relevant case studies and portfolio samples during our consultation.
                  We'll show you work specific to your industry so you can see exactly what results we've achieved for
                  similar businesses. Just reach out and we'll set up a walkthrough.
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
            <h2>Ready to Start Your Project?</h2>
            <p>Book a free 30-minute consultation call. No commitments, just honest advice on how to grow your brand.</p>
            <a
              href="https://cal.com/skyparz-innovation-g3i5zp/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-lg"
            >
              Book a Free Call <i className="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
