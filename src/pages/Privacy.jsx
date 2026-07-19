import React from 'react';

export default function Privacy({ setCurrentPage }) {
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
            <span>Privacy Policy</span>
          </div>
          <h1>
            Privacy <span className="gradient-text">Policy</span>
          </h1>
          <p>
            Your privacy is important to us. Learn how we handle, collect, and protect your information when you work with SkyparzInnovation.
          </p>
        </div>
      </section>

      {/* ========== LEGAL CONTENT ========== */}
      <section className="legal-section">
        <div className="container">
          <div className="legal-content">
            <span className="last-updated">Last Updated: July 16, 2026</span>

            <div className="legal-block">
              <h2>1. Introduction</h2>
              <p>
                Welcome to SkyparzInnovation. We are committed to protecting your personal information and your right to
                privacy. If you have any questions or concerns about our policy, or our practices with regards to your
                personal information, please contact us at skyparzinnovation@gmail.com.
              </p>
              <p>
                When you visit our website and use our services, you trust us with your personal information. We take
                your privacy very seriously. In this privacy notice, we describe our privacy policy. We seek to explain
                to you in the clearest way possible what information we collect, how we use it, and what rights you have
                in relation to it.
              </p>
            </div>

            <div className="legal-block">
              <h2>2. Information We Collect</h2>
              <p>
                We collect personal information that you voluntarily provide to us when expressing an interest in
                obtaining information about us or our products and services, when participating in activities on the
                website, or otherwise contacting us.
              </p>
              <p>
                The personal information that we collect depends on the context of your interactions with us and the
                website, the choices you make, and the products and features you use. The personal information we
                collect can include the following:
              </p>
              <ul>
                <li>
                  <strong>Name and Contact Data:</strong> We collect your first and last name, email address, phone
                  number, and other similar contact data.
                </li>
                <li>
                  <strong>Credentials:</strong> We collect passwords, password hints, and similar security information
                  used for authentication and account access if applicable.
                </li>
                <li>
                  <strong>Project Information:</strong> Details regarding your marketing budgets, business goals, and
                  creative design requirements.
                </li>
              </ul>
            </div>

            <div className="legal-block">
              <h2>3. How We Use Your Information</h2>
              <p>
                We use personal information collected via our website for a variety of business purposes described
                below. We process your personal information for these purposes in reliance on our legitimate business
                interests, in order to enter into or perform a contract with you, with your consent, and/or for
                compliance with our legal obligations.
              </p>
              <p>We use the information we collect or receive:</p>
              <ul>
                <li>To send administrative information to you for business purposes.</li>
                <li>To deliver services and manage client accounts.</li>
                <li>To respond to user inquiries and offer support.</li>
                <li>To request feedback and contact you about your use of our website.</li>
                <li>To send you marketing and promotional communications (you can opt-out at any time).</li>
              </ul>
            </div>

            <div className="legal-block">
              <h2>4. Sharing Your Information</h2>
              <p>
                We only share information with your consent, to comply with laws, to provide you with services, to protect
                your rights, or to fulfill business obligations. We do not sell, rent, or trade your personal information
                with third parties for promotional purposes.
              </p>
            </div>

            <div className="legal-block">
              <h2>5. Cookies and Tracking Technologies</h2>
              <p>
                We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store
                information. Specific information about how we use such technologies and how you can refuse certain
                cookies is set out in our Cookie Policy.
              </p>
            </div>

            <div className="legal-block">
              <h2>6. Data Security</h2>
              <p>
                We have implemented appropriate technical and organizational security measures designed to protect the
                security of any personal information we process. However, please also remember that we cannot guarantee
                that the internet itself is 100% secure. Although we will do our best to protect your personal
                information, transmission of personal information to and from our website is at your own risk.
              </p>
            </div>

            <div className="legal-block">
              <h2>7. Contact Us</h2>
              <p>
                If you have questions or comments about this policy, you may email us at skyparzinnovation@gmail.com or
                contact us via our website form.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
