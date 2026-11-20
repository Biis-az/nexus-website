
import './App.css'

const services = [
  {
    number: '01',
    title: 'CCTV & Surveillance',
    description:
      'Professional IP camera installation, NVR configuration, remote monitoring and surveillance maintenance.',
    icon: '📹',
  },
  {
    number: '02',
    title: 'Access Control',
    description:
      'Smart access control systems, biometric devices, RFID readers and secure door management.',
    icon: '🔐',
  },
  {
    number: '03',
    title: 'Networking & Infrastructure',
    description:
      'Network design, structured cabling, switches, routers, Wi-Fi and reliable IT infrastructure.',
    icon: '🌐',
  },
  {
    number: '04',
    title: 'IT Support',
    description:
      'Computer maintenance, Windows Server administration, troubleshooting and technical support.',
    icon: '💻',
  },
]

function App() {
  return (
    <>
      <header className="navbar">
        <div className="logo">
          NEXUS<span>TECHNOLOGIES</span>
        </div>

        <nav>
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About Us</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

       <a href="#contact" className="quote-button">
  Request a Quote
</a>
      </header>

      <main>
        <section id="home" className="hero-section">
          <p className="hero-label">
            SECURITY & IT SOLUTIONS IN QATAR
          </p>

          <h1>
            Smart Security.
            <br />
            <span>Reliable Technology.</span>
          </h1>

          <p className="hero-description">
            Professional CCTV, networking, access control
            and IT infrastructure solutions for modern businesses.
          </p>

          <div className="hero-actions">
           <a href="#services">Explore Our Services</a>
           <a href="#contact" className="secondary-button">Contact Us</a>
          </div>  
        </section>

        <section id="services" className="services-section">
          <p>WHAT WE DO</p>
          <h2>Our Core Services</h2>

          <div className="services-grid">
            {services.map((service) => (
              <div className="service-card" key={service.number}>
                <span className="service-icon">{service.icon}</span>
                <span className="service-number">{service.number}</span>

                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <a href="#contact">Learn More →</a>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="about-section">
          <div className="about-content">
            <p className="about-label">WHO WE ARE</p>

            <h2>
              Technology That Protects.
              <span> Solutions That Connect.</span>
            </h2>

            <p className="about-description">
              NEXUS TECHNOLOGIES is a Qatar-based IT and security
              solutions company focused on delivering reliable
              technology services for businesses and organizations.
            </p>

            <p className="about-description">
              Our services cover CCTV surveillance, access control,
              network infrastructure and professional IT support.
              We believe in secure systems, dependable service
              and long-term partnerships.
            </p>
          </div>

          <div className="about-highlight">
            <span>OUR COMMITMENT</span>
            <h3>Smart Solutions.<br />Stronger Connections.</h3>
            <p>
              Building reliable technology foundations for
              modern businesses.
            </p>
          </div>
        </section>

        <section id="projects" className="projects-section">
          <div className="projects-heading">
            <p>OUR PORTFOLIO</p>
            <h2>Featured Projects</h2>
            <span>
              Explore sample solutions demonstrating our technical capabilities.
            </span>
          </div>

          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image cctv-image">
                CCTV SYSTEM
              </div>
              <div className="project-info">
                <span>SECURITY SYSTEMS</span>
                <h3>IP Surveillance Solution</h3>
                <p>
                  A sample IP camera and NVR surveillance solution
                  for a commercial facility.
                </p>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image network-image">
                NETWORK INFRASTRUCTURE
              </div>
              <div className="project-info">
                <span>NETWORKING</span>
                <h3>Enterprise Network Setup</h3>
                <p>
                  A sample structured network design with managed
                  switches and secure connectivity.
                </p>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image access-image">
                ACCESS CONTROL
              </div>
              <div className="project-info">
                <span>ACCESS CONTROL</span>
                <h3>Smart Access Solution</h3>
                <p>
                  A sample biometric and RFID access control
                  system for secure entry management.
                </p>
              </div>
            </div>
          </div>

          <p className="project-disclaimer">
            Demonstration portfolio – sample concepts, not completed client projects.
          </p>
        </section>


        <section id="contact" className="contact-section">
          <div className="contact-heading">
            <p>GET IN TOUCH</p>
            <h2>Let's Build Something Reliable.</h2>
            <span>
              Tell us about your project and our team will be ready to help.
            </span>
          </div>

          <div className="contact-container">
            <div className="contact-info">
              <h3>Contact Information</h3>
              <p>
                Have a question or need a technical solution?
                Send us your inquiry.
              </p>

              <div className="contact-item">
                <span>📍</span>
                <div>
                  <h4>Location</h4>
                  <p>Doha, Qatar</p>
                </div>
              </div>

              <div className="contact-item">
                <span>✉️</span>
                <div>
                  <h4>Email</h4>
                  <p>Demo contact – to be configured</p>
                </div>
              </div>

              <div className="contact-item">
                <span>☎️</span>
                <div>
                  <h4>Phone</h4>
                  <p>Demo contact – to be configured</p>
                </div>
              </div>
            </div>

            <form
              className="quote-form"
              onSubmit={(event) => event.preventDefault()}
            >
              <h3>Request a Quote</h3>

              <label htmlFor="fullName">Full Name</label>
              <input
                id="fullName"
                type="text"
                placeholder="Enter your name"
              />

              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
              />

              <label htmlFor="service">Service Required</label>
              <select id="service" defaultValue="">
                <option value="" disabled>Select a service</option>
                <option>CCTV & Surveillance</option>
                <option>Access Control</option>
                <option>Networking & Infrastructure</option>
                <option>IT Support</option>
              </select>

              <label htmlFor="message">Project Details</label>
              <textarea
                id="message"
                rows="5"
                placeholder="Tell us about your project..."
              />

              <button type="submit">Send Request</button>
              <p className="form-note">
                Demonstration form – submission will be connected to a backend later.
              </p>
            </form>
          </div>
        </section>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-brand">
            <h3>NEXUS<span>TECHNOLOGIES</span></h3>
            <p>
              Smart Security. Reliable Technology.
              <br />
              Professional IT and security solutions in Qatar.
            </p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#about">About Us</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-services">
            <h4>Our Services</h4>
            <p>CCTV & Surveillance</p>
            <p>Access Control</p>
            <p>Networking</p>
            <p>IT Support</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 NEXUS TECHNOLOGIES. All rights reserved.</p>
          <p>Demo Portfolio Website</p>
        </div>
      </footer>




      </main>
    </>
  )
}

export default App
