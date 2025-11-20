// components/Work.tsx
import Image from "next/image";

const projects = [
  {
    name: "Target Security",
    tag: "Security company website",
    href: "https://targsecurity.com/",
    image: "/Target.png",
  },
  {
    name: "39 Steps — Home Construction",
    tag: "Custom home builder website",
    href: "https://39steps.homes/",
    image: "/39Step.png",
  },
];

export default function Work() {
  return (
    <section id="work" className="section section--alt">
      <div className="container section__header">
        <h2>Recent style of work</h2>
        <p>
          Clean layouts, strong typography, and clear calls-to-action built for
          small businesses.
        </p>
      </div>

      <div className="container grid-3">
        {projects.map((p) => (
          <div key={p.name} className="card work__item">
            <a
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="work__image-link"
            >
              <div className="work__thumb">
                <Image
                  src={p.image}
                  alt={p.name}
                  width={800}
                  height={450}
                  className="work__thumb-img"
                />
              </div>
            </a>

            <div className="work__content">
              <a
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="work__title"
              >
                {p.name}
              </a>
              <p className="work__tag">{p.tag}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
