// components/Contact.tsx

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xpwbjrbl"; // 🔴 REPLACE with your endpoint

export default function Contact() {
  return (
    <section id="contact" className="section section--alt">
      <div className="container section__header">
        <h2>Let’s plan your website</h2>
        <p>
          Tell us a bit about your business and we’ll send you a simple,
          no-obligation blueprint.
        </p>
      </div>

      <div className="container contact__grid">
        {/* FORM goes to Formspree */}
        <form
          className="card contact__form"
          action={FORMSPREE_ENDPOINT}
          method="POST"
        >
          {/* optional: subject + redirect */}
          <input
            type="hidden"
            name="_subject"
            value="New Target Bluprint website enquiry"
          />
          {/* if you make a /thank-you page, change this */}
          <input type="hidden" name="_next" value="https://targetbluprint.com" />

          <div className="field">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" placeholder="Your name" />
          </div>

          <div className="field">
            <label htmlFor="email">Email *</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="field">
            <label htmlFor="business">Business / Industry</label>
            <input
              id="business"
              name="business"
              placeholder="e.g. Builder, consultant, gym"
            />
          </div>

          <div className="field">
            <label htmlFor="budget">Approx. budget</label>
            <select id="budget" name="budget">
              <option value="">Select an option</option>
              <option>Under $500</option>
              <option>$500 – $1,000</option>
              <option>$1,000 +</option>
            </select>
          </div>

          <div className="field">
            <label htmlFor="message">What do you need? *</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              placeholder="Tell us about your project, timeline, and goals."
            />
          </div>

          <button className="btn btn--primary btn--full" type="submit">
            Send enquiry
          </button>

          <p className="form-note">
            This form is powered by Formspree and sends enquiries directly to{" "}
            <strong>targetbluprint@gmail.com</strong>.
          </p>
        </form>

        {/* INFO CARD */}
        <div className="card contact__info">
          <h3>Prefer to message directly?</h3>
          <p>
            We’re flexible — email, WhatsApp, or a quick call. Whatever is
            easiest for you.
          </p>
          <ul className="contact__list">
            <li>
              <strong>Email:</strong> targetbluprint@gmail.com
            </li>
            <li>
              <strong>Location:</strong> Sydney, Australia
            </li>
            <li>
              <strong>Available:</strong> Evenings & weekends
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
