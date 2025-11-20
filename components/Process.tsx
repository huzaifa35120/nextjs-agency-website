// components/Process.tsx
const steps = [
    {
      title: "1. Quick call or form",
      text: "We learn what your business does, who you serve, and what you need the site to do.",
    },
    {
      title: "2. Blueprint & design",
      text: "You get a simple layout blueprint and design direction to approve before we build.",
    },
    {
      title: "3. Build & launch",
      text: "We build, test, connect your domain, and launch — then show you how to edit basics.",
    },
  ];
  
  export default function Process() {
    return (
      <section id="process" className="section">
        <div className="container section__header">
          <h2>How it works</h2>
          <p>A clear, no-stress process from idea to live website.</p>
        </div>
        <div className="container process__grid">
          {steps.map((step) => (
            <div key={step.title} className="card process__step">
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  