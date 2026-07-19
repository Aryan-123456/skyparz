import React from 'react';
import AnimatedCounter from '../components/AnimatedCounter';

export default function About({ setCurrentPage }) {
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
            <span>About</span>
          </div>
          <h1>
            The Story Behind <span className="gradient-text">SkyparzInnovation</span>
          </h1>
          <p>
            We're more than an agency — we're your growth partners. Discover the passion, people, and purpose that drive
            everything we do.
          </p>
        </div>
      </section>

      {/* ========== OUR STORY ========== */}
      <section className="story-section section" id="story">
        <div className="container">
          <div className="story-grid">
            <div className="story-visual">
              <div className="story-image-container">
                <i className="bi bi-rocket-takeoff story-image-icon"></i>
              </div>
              <div className="story-float-card top-right">
                <div>
                  <div className="float-number">
                    <AnimatedCounter target={2} suffix="+" />
                  </div>
                  <div className="float-label">
                    Years of
                    <br />
                    Excellence
                  </div>
                </div>
              </div>
              <div className="story-float-card bottom-left">
                <div>
                  <div className="float-number">
                    <AnimatedCounter target={75} suffix="+" />
                  </div>
                  <div className="float-label">
                    Projects
                    <br />
                    Delivered
                  </div>
                </div>
              </div>
            </div>

            <div className="story-content">
              <span className="section-label"><i className="bi bi-book"></i> Our Story</span>
              <h2 className="section-title">
                Built on Passion, <span className="gradient-text">Driven by Results</span>
              </h2>

              <p className="story-text">
                SkyparzInnovation was born from a simple belief: every brand deserves a digital presence that truly
                represents its potential. What started as a small team of passionate marketers and designers has grown
                into a full-service digital agency trusted by over 200 brands across India and beyond.
              </p>

              <p className="story-text">
                We don't believe in cookie-cutter solutions. Every strategy we craft, every design we create, and every
                line of code we write is tailored to our clients' unique vision and goals. Our approach combines
                creative innovation with data-driven precision to deliver results that matter.
              </p>

              <p className="story-text">
                Today, our team of 30+ specialists covers every aspect of digital — from social media and SEO to web
                development and video production — ensuring our clients get a seamless, integrated experience that
                drives real business growth.
              </p>

              <div className="mission-vision">
                <div className="mv-card">
                  <h4><i className="bi bi-bullseye"></i> Our Mission</h4>
                  <p>
                    To empower businesses with innovative digital solutions that drive sustainable growth and meaningful
                    connections with their audience.
                  </p>
                </div>
                <div className="mv-card">
                  <h4><i className="bi bi-eye"></i> Our Vision</h4>
                  <p>
                    To be the most trusted digital partner for ambitious brands, known for creativity, transparency,
                    and measurable impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== OUR VALUES ========== */}
      <section className="values-section section" id="values">
        <div className="container">
          <div className="section-header">
            <span className="section-label"><i className="bi bi-heart"></i> Our Values</span>
            <h2 className="section-title">
              The Principles That <span className="gradient-text">Guide Us</span>
            </h2>
            <p className="section-subtitle">
              These core values shape our culture, inform our decisions, and define how we work with every client.
            </p>
          </div>

          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon"><i className="bi bi-lightbulb"></i></div>
              <h3>Innovation</h3>
              <p>
                We stay ahead of trends and embrace new technologies to deliver cutting-edge solutions that give our
                clients a competitive edge.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon"><i className="bi bi-shield-check"></i></div>
              <h3>Integrity</h3>
              <p>
                Honesty, transparency, and ethical practices are non-negotiable. We build trust through clear
                communication and honest reporting.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon"><i className="bi bi-rocket-takeoff"></i></div>
              <h3>Impact</h3>
              <p>
                We measure success by the tangible results we deliver. Every campaign, every design, and every strategy
                is built to make a real difference.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon"><i className="bi bi-people"></i></div>
              <h3>Collaboration</h3>
              <p>
                Great work happens together. We partner closely with our clients and work as integrated teams to achieve
                shared goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== OUR TEAM ========== */}
      <section className="team-section section" id="team">
        <div className="container">
          <div className="section-header">
            <span className="section-label"><i className="bi bi-people-fill"></i> Our Team</span>
            <h2 className="section-title">
              Meet the <span className="gradient-text">Experts</span>
            </h2>
            <p className="section-subtitle">
              A talented team of strategists, creatives, and technologists dedicated to making your brand shine.
            </p>
          </div>

          <div className="team-grid">
            <div className="team-card">
              <div className="team-avatar">AK</div>
              <h3>Aditya Kapoor</h3>
              <p className="team-role">Founder & CEO</p>
              <div className="team-social">
                <a href="#" aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a>
                <a href="#" aria-label="Twitter"><i className="bi bi-twitter-x"></i></a>
              </div>
            </div>

            <div className="team-card">
              <div className="team-avatar">PS</div>
              <h3>Priya Sharma</h3>
              <p className="team-role">Creative Director</p>
              <div className="team-social">
                <a href="#" aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a>
                <a href="#" aria-label="Dribbble"><i className="bi bi-dribbble"></i></a>
              </div>
            </div>

            <div className="team-card">
              <div className="team-avatar">VR</div>
              <h3>Vikram Rao</h3>
              <p className="team-role">Head of Marketing</p>
              <div className="team-social">
                <a href="#" aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a>
                <a href="#" aria-label="Twitter"><i className="bi bi-twitter-x"></i></a>
              </div>
            </div>

            <div className="team-card">
              <div className="team-avatar">NJ</div>
              <h3>Neha Joshi</h3>
              <p className="team-role">Lead Developer</p>
              <div className="team-social">
                <a href="#" aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a>
                <a href="#" aria-label="GitHub"><i className="bi bi-github"></i></a>
              </div>
            </div>

            <div className="team-card">
              <div className="team-avatar">RD</div>
              <h3>Rohan Desai</h3>
              <p className="team-role">Video Producer</p>
              <div className="team-social">
                <a href="#" aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a>
                <a href="#" aria-label="YouTube"><i className="bi bi-youtube"></i></a>
              </div>
            </div>

            <div className="team-card">
              <div className="team-avatar">AS</div>
              <h3>Ananya Singh</h3>
              <p className="team-role">Content Strategist</p>
              <div className="team-social">
                <a href="#" aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a>
                <a href="#" aria-label="Twitter"><i className="bi bi-twitter-x"></i></a>
              </div>
            </div>

            <div className="team-card">
              <div className="team-avatar">KM</div>
              <h3>Karan Malhotra</h3>
              <p className="team-role">SEO Specialist</p>
              <div className="team-social">
                <a href="#" aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a>
                <a href="#" aria-label="Twitter"><i className="bi bi-twitter-x"></i></a>
              </div>
            </div>

            <div className="team-card">
              <div className="team-avatar">IS</div>
              <h3>Ishita Saxena</h3>
              <p className="team-role">UI/UX Designer</p>
              <div className="team-social">
                <a href="#" aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a>
                <a href="#" aria-label="Behance"><i className="bi bi-behance"></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== MILESTONES TIMELINE ========== */}
      <section className="timeline-section section" id="milestones">
        <div className="container">
          <div className="section-header">
            <span className="section-label"><i className="bi bi-flag"></i> Our Journey</span>
            <h2 className="section-title">
              Milestones of <span className="gradient-text">Our Journey</span>
            </h2>
            <p className="section-subtitle">From one vision, to one team, to limitless possibilities.</p>
          </div>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-year">2024</div>
                <h3>The Beginning</h3>
                <p>
                  Skyparz Innovations was founded in 2024 with a simple yet powerful vision—to build something
                  meaningful from the ground up. What started as the dream of a single individual quickly became a
                  mission driven by determination, creativity, and the courage to take risks. Without a large team or
                  extensive resources, the focus was on delivering quality, learning continuously, and proving that
                  passion and commitment could create real value. Every project, every challenge, and every small
                  milestone laid the foundation for what Skyparz Innovations would become.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-year">2025</div>
                <h3>Building Trust, Expanding Possibilities</h3>
                <p>
                  In 2025, Skyparz Innovations entered a new phase of growth. The vision became stronger, the standards
                  became higher, and the trust of clients became the company’s greatest achievement. Working across
                  branding, digital marketing, creative design, and business solutions, the company successfully
                  delivered projects while continuously implementing new skills, technologies, and innovative
                  strategies.
                  <br />
                  <br />
                  As CEO, the focus remained on learning, adapting, and creating measurable results for every client.
                  With each successful collaboration, Skyparz Innovations strengthened its reputation as a reliable
                  creative and digital partner, proving that long-term relationships are built through consistency,
                  transparency, and excellence.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-year">2026</div>
                <h3>Scaling Beyond Boundaries</h3>
                <p>
                  By 2026, Skyparz Innovations had evolved from an individual vision into a growing creative
                  organization. A passionate team of enthusiastic professionals came together with one shared purpose—to
                  build something extraordinary. United by innovation, dedication, and the hunger to create meaningful
                  impact, the team embraced every opportunity to push creative and strategic boundaries.
                  <br />
                  <br />
                  This year marked the beginning of a bold new chapter. With a stronger market presence, sharper
                  niche-focused strategies, and an expanding portfolio, Skyparz Innovations accelerated its journey
                  toward becoming a recognized name in digital transformation and brand growth. Every campaign, every
                  partnership, and every success reflected the company’s commitment to delivering innovative solutions
                  that help businesses grow with confidence.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-year">Road Ahead</div>
                <h3>Limitless Possibilities</h3>
                <p>
                  For Skyparz Innovations, this is only the beginning. We believe that innovation never stands still,
                  and neither do we. Our vision is to empower businesses across India and beyond with world-class
                  creative solutions, strategic marketing, technology, and digital experiences that create lasting
                  impact.
                  <br />
                  <br />
                  Every milestone achieved inspires us to aim even higher. As we continue to grow, our commitment
                  remains unchanged—to innovate with purpose, build relationships based on trust, embrace emerging
                  technologies, and transform ambitious ideas into successful realities.
                  <br />
                  <br />
                  <strong>From one vision. To one team. To limitless possibilities.</strong>
                  <br />
                  <br />
                  <em>This is Skyparz Innovations. And our best chapters are yet to be written.</em>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
