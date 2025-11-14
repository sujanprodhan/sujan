import React from 'react';
import './App.css'; // Import the CSS file

function Navbar() {
  const [open, setOpen] = React.useState(false);
  const menuItems = ['Home', 'About Me', 'Career', 'Portfolio', 'Contact Me'];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">Sujan</div>

        <div className="menu desktop-menu">
          {menuItems.map(item => (
            <a key={item} href={`#${item.replace(/\s+/g, '').toLowerCase()}`}>
              {item}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="mobile-menu-btn">
          <button onClick={() => setOpen(!open)}>
            {open ? '✖' : '☰'}
          </button>
        </div>
      </div>

      {open && (
        <div className="mobile-menu">
          {menuItems.map(item => (
            <a
              key={item}
              href={`#${item.replace(/\s+/g, '').toLowerCase()}`}
              onClick={() => setOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

function Section({ id, title, children }) {
  return (
    <section id={id} className="section">
      <h2>{title}</h2>
      <div className="section-content">{children}</div>
    </section>
  );
}

export default function App() {
  return (
    <main>
      <Navbar />

      <Section id="home" title="Welcome to My Portfolio">
         <div class="section-content">
        <p>Hi, I'm Sujan 👋<br/>Lead Software Engineer • 13+ Years Experience • Bangladesh</p>
        <p>I build scalable web applications using React, Next.js, Node.js, and modern technologies.</p>
        </div>
      </Section>

      <Section id="aboutme" title="About Me">
        <ul>
          <li>💼 Currently Lead Software Engineer at Arogga Ltd, Bangladesh</li>
          <li>🌍 Experience with teams in Japan, USA, Vietnam, and Bangladesh</li>
          <li>🧠 Expert in frontend architecture, backend APIs, and scalable system design</li>
          <li>🛠 Passionate about solving real-world problems with technology</li>
        </ul>
      </Section>

      <Section id="career" title="Career History">
        <ul>
          <li>2023 – Present: Lead Software Engineer at Arogga Ltd</li>
          <li>2020 – 2023: Principal Software Engineer / Lead at BJIT Limited</li>
          <li>2016 – 2020: Senior Software Engineer at Previous Company</li>
          <li>2013 – 2016: Software Engineer at Earlier Company</li>
        </ul>
      </Section>

      <Section id="portfolio" title="Portfolio">
        <div className="portfolio-grid">
          <div className="portfolio-item">
            <h3>E-commerce Platform</h3>
            <p>A scalable online medicine delivery platform serving millions of users.</p>
            <a href="#">View Project →</a>
          </div>
          <div className="portfolio-item">
            <h3>Admin Dashboard</h3>
            <p>Modern dashboard built with React & CoreUI with charts and analytics.</p>
            <a href="#">View Project →</a>
          </div>
        </div>
      </Section>

      <Section id="contactme" title="Contact Me">
        <p>📧 Email: sujanitbd@gmail.com</p>
        <p>💼 LinkedIn: <a href="https://www.linkedin.com/in/muhammad-sujan/">linkedin.com/in/muhammad-sujan</a></p>
        <p>🌐 Portfolio: <a href="https://github.com/sujanprodhan">github.com/sujanprodhan</a></p>
      </Section>
    </main>
  );
}
