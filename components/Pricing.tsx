// components/Pricing.tsx
const plans = [
    {
      name: "Starter",
      price: "$499",
      highlight: "Best for new businesses",
      features: [
        "One-page website",
        "Mobile friendly design",
        "Contact form & basic SEO",
        "Launch within ~7 days",
      ],
    },
    {
      name: "Standard",
      price: "$899",
      highlight: "Most popular",
      features: [
        "Up to 5 pages",
        "Custom layout & sections",
        "Basic analytics setup",
        "Content guidance",
      ],
    },
    {
      name: "Launch Plus",
      price: "Custom",
      highlight: "For bigger ideas",
      features: [
        "Custom features or integrations",
        "Extra pages & content",
        "Priority support",
        "Ongoing improvements",
      ],
    },
  ];
  
  export default function Pricing() {
    return (
      <section id="pricing" className="section">
        <div className="container section__header">
          <h2>Simple pricing</h2>
          <p>Transparent packages with no surprise fees.</p>
        </div>
        <div className="container pricing__grid">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`card pricing__card ${
                plan.name === "Standard" ? "pricing__card--highlight" : ""
              }`}
            >
              <h3>{plan.name}</h3>
              <p className="pricing__price">{plan.price}</p>
              <p className="pricing__highlight">{plan.highlight}</p>
              <ul>
                {plan.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <a href="#contact" className="btn btn--primary btn--full">
                Start this package
              </a>
            </div>
          ))}
        </div>
      </section>
    );
  }
  