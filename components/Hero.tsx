// components/Hero.tsx
export default function Hero() {
    return (
      <section id="hero" className="section hero">
        <div className="container hero__grid">
          <div>
            <p className="eyebrow">Web Design Agency • Sydney</p>
            <h1>
              Simple websitezzzzzz,
              <span className="gradient-text"> serious results.</span>
            </h1>
            <p className="lead">
              Target Bluprint builds clean, conversion-focused websites for small
              businesses — fast turnaround, no fluff, no headaches.
            </p>
            <div className="hero__actions">
              <a href="#contact" className="btn btn--primary">
                Get a free blueprint
              </a>
              <a href="#work" className="btn btn--ghost">
                View projects
              </a>
            </div>
            <p className="hero__note">
              Launch-ready in as little as <strong>7 days</strong>.
            </p>
          </div>
  
          <div className="hero__card">
            <h3>What you get</h3>
            <ul>
              <li>Modern, responsive design</li>
              <li>Built with React & Next.js</li>
              <li>Basic SEO & analytics setup</li>
              <li>Fast hosting & deployment help</li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
  