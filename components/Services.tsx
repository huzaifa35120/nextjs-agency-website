// components/Services.tsx
const services = [
    {
      title: "Starter Website",
      desc: "A clean one-page site with all the essentials: hero, services, about, and contact.",
    },
    {
      title: "Multi-Page Website",
      desc: "Up to 5 pages for growing businesses needing more room for content and SEO.",
    },
    {
      title: "Landing Page",
      desc: "High-converting landing page for campaigns, ads, or product launches.",
    },
    {
      title: "Content & Copy",
      desc: "We help write simple, clear copy that actually explains what you do.",
    },
    {
      title: "Basic SEO Setup",
      desc: "Page titles, meta descriptions, and clean structure to help you get found.",
    },
    {
      title: "Ongoing tweaks",
      desc: "Need small updates after launch? We keep things simple and affordable.",
    },
  ];
  
  export default function Services() {
    return (
      <section id="services" className="section section--alt">
        <div className="container section__header">
          <h2>Services</h2>
          <p>Everything you need to look legit online — nothing you don’t.</p>
        </div>
        <div className="container grid-3">
          {services.map((s) => (
            <div key={s.title} className="card card--soft">
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  