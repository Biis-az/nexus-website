
import './App.css'

const services = [
  {
    number: '01',
    icon: '◉',
    category: 'SECURITY SYSTEMS',
    title: 'CCTV & Security Systems',
    description:
      'Complete surveillance solutions, from system design and camera installation to NVR/DVR configuration, remote monitoring and maintenance.',
    tags: ['IP Cameras', 'NVR / DVR', 'Access Control'],
  },
  {
    number: '02',
    icon: '⌘',
    category: 'NETWORKING & CONNECTIVITY',
    title: 'Networking & Internet Solutions',
    description:
      'Reliable business connectivity through network planning, structured cabling, router and switch configuration, and Wi-Fi solutions.',
    tags: ['LAN / WAN', 'Wi-Fi', 'Routers & Switches'],
  },
  {
    number: '03',
    icon: '▣',
    category: 'TECHNICAL SERVICES',
    title: 'IT Support & Maintenance',
    description:
      'Practical IT support covering computer maintenance, operating system installation, software configuration and technical troubleshooting.',
    tags: ['PC Maintenance', 'Windows', 'Technical Support'],
  },
  {
    number: '04',
    icon: '◇',
    category: 'DIGITAL SOLUTIONS',
    title: 'Web & Digital Solutions',
    description:
      'Modern websites and digital business tools designed to improve online presence, organize information and support business workflows.',
    tags: ['Web Development', 'Business Tools', 'Web Maintenance'],
  },
]

const projects = [
  {
    className: 'project-security',
    number: '01',
    category: 'SECURITY SYSTEMS',
    title: 'IP Surveillance Concept',
    description:
      'A demonstration concept for an IP camera network with centralized recording, monitoring and secure remote access.',
  },
  {
    className: 'project-network',
    number: '02',
    category: 'NETWORKING',
    title: 'Business Network Concept',
    description:
      'A sample structured network design showing managed switching, wireless connectivity and organized infrastructure.',
  },
  {
    className: 'project-digital',
    number: '03',
    category: 'WEB & DIGITAL',
    title: 'Business Website Concept',
    description:
      'A modern responsive website concept designed to present services clearly and create a professional digital presence.',
  },
]

function App() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#home">
          <span className="brand-mark">N</span>
          <span className="brand-name">
            NEXUS
            <small>TECHNOLOGIES</small>
          </span>
        </a>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#services">Solutions</a>
          <a href="#about">About</a>
          <a href="#projects">Portfolio</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="nav-cta">
          Let's Talk <span>↗</span>
        </a>
      </header>

      <main>
        {/* HERO */}
        <section id="home" className="hero-section">
          <div className="hero-glow" />

          <div className="hero-container">
            <div className="hero-content">
              <p className="eyebrow hero-eyebrow">
                <span className="status-dot" />
                SECURITY & TECHNOLOGY SOLUTIONS
              </p>

              <h1>
                Technology that
                <br />
                moves your business
                <br />
                <span className="gradient-text">forward.</span>
              </h1>

              <p className="hero-description">
                Smart security, reliable connectivity and practical digital
                solutions designed to help modern businesses work with
                confidence.
              </p>

              <div className="hero-actions">
                <a href="#services" className="button button-primary">
                  Explore Solutions <span>↗</span>
                </a>

                <a href="#contact" className="button button-outline">
                  Get in Touch
                </a>
              </div>

              <div className="hero-trust">
                <span>SECURITY</span>
                <i />
                <span>NETWORKING</span>
                <i />
                <span>IT & DIGITAL</span>
              </div>
            </div>

            <div className="hero-visual">
              <div className="visual-orbit orbit-one" />
              <div className="visual-orbit orbit-two" />
              <div className="visual-orbit orbit-three" />

              <div className="visual-center">
                <span className="visual-center-icon">N</span>
                <small>NEXUS</small>
              </div>

              <div className="visual-node node-security">
                <span className="node-icon">◉</span>
                <small>SECURITY</small>
              </div>

              <div className="visual-node node-network">
                <span className="node-icon">⌘</span>
                <small>NETWORK</small>
              </div>

              <div className="visual-node node-it">
                <span className="node-icon">▣</span>
                <small>IT SUPPORT</small>
              </div>

              <div className="visual-node node-digital">
                <span className="node-icon">◇</span>
                <small>DIGITAL</small>
              </div>

              <p className="visual-caption">
                CONNECTED SYSTEMS. SMARTER BUSINESS.
              </p>
            </div>
          </div>

          <div className="hero-bottom">
            <span>INTEGRATED TECHNOLOGY</span>
            <span>01 / 04</span>
          </div>
        </section>

        {/* INTRO STRIP */}
        <div className="intro-strip">
          <span>Security Systems</span>
          <i />
          <span>Networking</span>
          <i />
          <span>IT Support</span>
          <i />
          <span>Digital Solutions</span>
        </div>

        {/* SERVICES */}
        <section id="services" className="services-section section-light">
          <div className="section-heading">
            <p className="eyebrow">WHAT WE DO</p>

            <h2>
              Technology solutions.
              <br />
              <span>Built around your business.</span>
            </h2>

            <p className="section-intro">
              From protecting your premises to connecting your people and
              systems, explore our core technology services.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <div className="service-card-top">
                  <span className="service-icon">{service.icon}</span>
                  <span className="service-number">{service.number}</span>
                </div>

                <p className="service-category">{service.category}</p>

                <h3>{service.title}</h3>

                <p className="service-description">
                  {service.description}
                </p>

                <div className="service-tags">
                  {service.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <a className="service-link" href="#contact">
                  Discuss this service <span>↗</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="about-section">
          <div className="about-visual">
            <div className="about-visual-grid">
              <div className="about-main-card">
                <span className="about-card-label">NEXUS / SYSTEMS</span>

                <div className="about-symbol">
                  N<span>.</span>
                </div>

                <p>Technology with purpose.</p>
              </div>

              <div className="about-floating-card">
                <span className="floating-icon">✳</span>

                <div>
                  <strong>Connected</strong>
                  <small>Made to work together</small>
                </div>
              </div>
            </div>
          </div>

          <div className="about-content">
            <p className="eyebrow">WHO WE ARE</p>

            <h2>
              We connect the pieces that
              <span> move business forward.</span>
            </h2>

            <p className="about-description">
              NEXUS TECHNOLOGIES is a technology solutions brand focused on
              helping businesses make better use of security, networking,
              technical support and digital tools.
            </p>

            <p className="about-description">
              Our approach is straightforward: understand the requirement,
              design a practical solution and keep the technology reliable.
              We believe good technology should make everyday work simpler,
              safer and more connected.
            </p>

            <div className="about-points">
              <div>
                <span>01</span>
                <p>Practical, business-focused solutions</p>
              </div>

              <div>
                <span>02</span>
                <p>Clear planning and organized delivery</p>
              </div>

              <div>
                <span>03</span>
                <p>Reliable support and improvement</p>
              </div>
            </div>

            <a href="#contact" className="text-link">
              Let's discuss your requirements <span>↗</span>
            </a>
          </div>
        </section>

        {/* PORTFOLIO */}
        <section id="projects" className="projects-section section-light">
          <div className="section-heading">
            <p className="eyebrow">SELECTED CONCEPTS</p>

            <h2>
              Ideas brought <span>into focus.</span>
            </h2>

            <p className="section-intro">
              A preview of the type of solutions and digital experiences
              represented by the NEXUS TECHNOLOGIES portfolio.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className={`project-art ${project.className}`}>
                  <div className="project-art-grid" />

                  <span className="project-art-icon">
                    {project.number === '01'
                      ? '◉'
                      : project.number === '02'
                        ? '⌘'
                        : '◇'}
                  </span>

                  <span className="project-art-number">
                    {project.number}
                  </span>

                  <span className="project-art-label">
                    NEXUS / CONCEPT
                  </span>
                </div>

                <div className="project-info">
                  <p className="project-type">{project.category}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </article>
            ))}
          </div>

          <p className="project-disclaimer">
            Portfolio preview: these are demonstration concepts, not claims
            of completed client projects.
          </p>
        </section>

        {/* PROCESS */}
        <section className="process-section">
          <div className="section-heading process-heading">
            <p className="eyebrow">HOW WE WORK</p>

            <h2>
              A clear path from <span>need to solution.</span>
            </h2>
          </div>

          <div className="process-grid">
            <article className="process-step">
              <span>01</span>
              <h3>Discover</h3>
              <p>
                Understand your goals, environment and technical requirements.
              </p>
            </article>

            <article className="process-step">
              <span>02</span>
              <h3>Design</h3>
              <p>
                Plan a solution that is practical, scalable and fit for purpose.
              </p>
            </article>

            <article className="process-step">
              <span>03</span>
              <h3>Connect</h3>
              <p>
                Bring the right systems, devices and digital tools together.
              </p>
            </article>

            <article className="process-step">
              <span>04</span>
              <h3>Improve</h3>
              <p>
                Review, maintain and improve the solution as needs evolve.
              </p>
            </article>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="contact-section">
          <div className="contact-heading">
            <p className="eyebrow">START A CONVERSATION</p>

            <h2>
              Let's build something <span>that works.</span>
            </h2>

            <p>
              Tell us what you need. We'll help you explore the right direction.
            </p>
          </div>

          <div className="contact-container">
            <div className="contact-info">
              <p className="contact-kicker">NEXUS TECHNOLOGIES</p>

              <h3>Have a project in mind?</h3>

              <p className="contact-info-copy">
                Share a few details about your requirements and the service
                you are looking for.
              </p>

              <div className="contact-detail">
                <span>⌖</span>
                <div>
                  <small>LOCATION</small>
                  <p>Doha, Qatar</p>
                </div>
              </div>

              <div className="contact-detail">
                <span>✉</span>
                <div>
                  <small>EMAIL</small>
                  <p>Contact details to be configured</p>
                </div>
              </div>

              <div className="contact-detail">
                <span>↗</span>
                <div>
                  <small>PHONE</small>
                  <p>Contact details to be configured</p>
                </div>
              </div>

              <div className="contact-decoration">N.</div>
            </div>

            <form
              className="quote-form"
              onSubmit={(event) => event.preventDefault()}
            >
              <p className="form-heading">REQUEST A CONSULTATION</p>

              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="fullName">Full Name</label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="Your name"
                    autoComplete="name"
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                  />
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="service">Service Required</label>

                <select id="service" name="service" defaultValue="">
                  <option value="" disabled>Select a service</option>
                  <option>CCTV & Security Systems</option>
                  <option>Networking & Internet Solutions</option>
                  <option>IT Support & Maintenance</option>
                  <option>Web & Digital Solutions</option>
                  <option>Integrated Technology Solutions</option>
                  <option>Other / Not Sure Yet</option>
                </select>
              </div>

              <div className="form-field">
                <label htmlFor="message">Project Details</label>

                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell us a little about what you need..."
                />
              </div>

              <button className="form-submit" type="submit">
                Send Inquiry <span>↗</span>
              </button>

              <p className="form-note">
                Demo form — submission will be connected to a backend later.
              </p>
            </form>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-brand">
            <a className="brand" href="#home">
              <span className="brand-mark">N</span>
              <span className="brand-name">
                NEXUS
                <small>TECHNOLOGIES</small>
              </span>
            </a>

            <p>
              Smart security. Reliable connectivity.
              <br />
              Technology that moves business forward.
            </p>
          </div>

          <div className="footer-column">
            <h4>EXPLORE</h4>
            <a href="#home">Home</a>
            <a href="#services">Solutions</a>
            <a href="#about">About</a>
            <a href="#projects">Portfolio</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-column">
            <h4>SOLUTIONS</h4>
            <a href="#services">CCTV & Security</a>
            <a href="#services">Networking</a>
            <a href="#services">IT Support</a>
            <a href="#services">Web & Digital</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 NEXUS TECHNOLOGIES. All rights reserved.</p>
          <p>Portfolio demonstration website</p>
        </div>
      </footer>
    </>
  )
}

export default App
