// components/About.tsx
export default function About() {
    return (
      <section id="about" className="section">
        <div className="container section__header">
          <h2>About Target Bluprint</h2>
          <p>
            We specialise in clean, minimal websites for tradies, local services,
            and small brands who just need something that{" "}
            <strong>works and looks pro</strong>.
          </p>
        </div>
        <div className="container about__grid">
          <div className="card">
            <h3>Built for small business</h3>
            <p>
              No bloated features, no enterprise pricing. Just the pages you need:
              home, services, about, contact, and a clear call-to-action.
            </p>
          </div>
          <div className="card">
            <h3>Fast delivery</h3>
            <p>
              Most projects are designed, built, and deployed in under two weeks
              with a simple, guided process.
            </p>
          </div>
          <div className="card">
            <h3>Tech that scales</h3>
            <p>
              Using Next.js, React, and modern hosting, your site stays fast,
              secure, and ready to grow with your business.
            </p>
          </div>
        </div>
      </section>
    );
  }
  