import React from 'react';

export default function Terms({ setCurrentPage }) {
  return (
    <>
      {/* ========== PAGE HERO ========== */}
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
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
            <span>Terms of Service</span>
          </nav>
          <h1>
            Terms of <span className="gradient-text">Service</span>
          </h1>
          <p>Please read these Terms of Service carefully before using our website or hiring our creative services.</p>
        </div>
      </section>

      {/* ========== LEGAL CONTENT ========== */}
      <section className="legal-section">
        <div className="container">
          <div className="legal-content">
            <span className="last-updated">Last Updated: July 16, 2026</span>

            <div className="legal-block">
              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this
                agreement. In addition, when using these particular services, you shall be subject to any posted
                guidelines or rules applicable to such services.
              </p>
              <p>
                Any participation in this service will constitute acceptance of this agreement. If you do not agree to
                abide by the above, please do not use this service.
              </p>
            </div>

            <div className="legal-block">
              <h2>2. Services Provided</h2>
              <p>
                SkyparzInnovation provides full-fledged digital marketing, branding, graphic design, content creation,
                videography, and web development services. The specific scope of work, deliverables, timelines, and
                costs for any service will be detailed in a separate signed Statement of Work (SOW) or project agreement.
              </p>
            </div>

            <div className="legal-block">
              <h2>3. Intellectual Property Rights</h2>
              <p>
                Unless otherwise agreed in writing, all source files, custom web layouts, original graphics, and raw
                footage developed for a client will be transferred to the client upon receipt of final payment.
                SkyparzInnovation retains the right to display the completed project and design assets in its marketing
                portfolio, case studies, and promotional channels.
              </p>
            </div>

            <div className="legal-block">
              <h2>4. Client Responsibilities</h2>
              <p>
                Clients agree to provide timely feedback, required visual assets, copywriting inputs, and credentials
                necessary for project execution. SkyparzInnovation is not responsible for project delays caused by a
                client's failure to provide required assets or approvals.
              </p>
            </div>

            <div className="legal-block">
              <h2>5. Payment Terms</h2>
              <p>
                Detailed payment schedules (e.g. milestones, retainers, upfront deposits) will be specified in individual
                project SOWs. Late payments may result in suspension of services or project delays. All payments are
                non-refundable unless specified otherwise in writing.
              </p>
            </div>

            <div className="legal-block">
              <h2>6. Limitation of Liability</h2>
              <p>
                Under no circumstances shall SkyparzInnovation be liable for any direct, indirect, incidental, special, or
                consequential damages resulting from the use or the inability to use our services, including but not
                limited to loss of profits, service interruptions, or data errors.
              </p>
            </div>

            <div className="legal-block">
              <h2>7. Contact Info</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at skyparzinnovation@gmail.com.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
