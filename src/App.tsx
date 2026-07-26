const capabilities = [
  {
    number: "01",
    title: "Design systems",
    description:
      "Reusable foundations and component APIs that translate design intent into dependable product infrastructure.",
    tags: ["Architecture", "Component libraries", "Governance"],
  },
  {
    number: "02",
    title: "Accessible UI",
    description:
      "WCAG-conscious interaction patterns that make inclusion a property of the system, not a final review step.",
    tags: ["WCAG / ARIA", "Interaction", "API design"],
  },
  {
    number: "03",
    title: "Agentic systems",
    description:
      "Reusable AI skills, structured design-system context, and agent-ready patterns that help people and agents work with the system more effectively.",
    tags: ["AI skills", "Agent-ready docs", "AI integrations"],
  },
];

const timeline = [
  {
    dates: "DEC 2023 — NOW",
    role: "Senior Design Engineer",
    company: "Visa",
    detail:
      "A trusted technical partner across Visa’s web design-system platforms—making informed decisions, proposing needed work, and building agentic capabilities.",
  },
  {
    dates: "JUL 2021 — MAR 2024",
    role: "Design Engineer",
    company: "Visa",
    detail:
      "Maintained accessible React and Angular libraries while creating learning content and supporting product teams across Visa.",
  },
  {
    dates: "OCT 2019 — JUN 2021",
    role: "Associate Design Engineer",
    company: "Visa",
    detail:
      "Built React and Angular components in close partnership with design, usability research, and accessibility specialists.",
  },
  {
    dates: "JUN — AUG 2019",
    role: "UI Engineer Intern",
    company: "Visa",
    detail:
      "Designed accessible web components, improved screen-reader and browser support, and incorporated findings from usability testing.",
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function App() {
  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Nicole Berreth, home">
          NB.
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="mailto:NicoleBerreth@gmail.com">
            Let’s talk <Arrow />
          </a>
        </nav>
      </header>

      <main id="main">
        <section className="hero ruled" id="top">
          <div className="eyebrow">
            <span className="status-dot" aria-hidden="true" />
            Senior design engineer · Houston, TX
          </div>
          <h1>
            I build the systems
            <br />
            <span>behind great interfaces.</span>
          </h1>
          <div className="hero-footer">
            <p>
              I work between design and engineering to turn standards into
              accessible components, scalable UI architecture, and better
              developer experiences.
            </p>
            <a
              className="circle-link"
              href="#work"
              aria-label="Explore my work"
            >
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </section>

        <section className="intro ruled" id="work">
          <div className="section-lead">
            <p className="kicker">DESIGN × ENGINEERING</p>
            <h2>
              Making technology work
              <br />
              better for people.
            </h2>
          </div>
        </section>

        <section className="capabilities" aria-label="Areas of expertise">
          {capabilities.map((capability) => (
            <article className="capability" key={capability.number}>
              <span className="capability-number">{capability.number}</span>
              <h3>{capability.title}</h3>
              <p>{capability.description}</p>
              <ul aria-label={`${capability.title} topics`}>
                {capability.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section className="feature ruled" aria-labelledby="visa-heading">
          <div className="feature-content">
            <div className="feature-topline">
              <p className="kicker">VISA · 2019 — PRESENT</p>
              <span>HOUSTON / REMOTE</span>
            </div>
            <h2 id="visa-heading">
              Building a shared language
              <br />
              for enterprise products.
            </h2>
            <div className="feature-grid">
              <p className="feature-summary">
                I’m a senior individual contributor trusted with decisions and
                relationships across Visa’s web design-system platforms. I
                connect needs across teams, propose work that will improve the
                system, and help move it forward—while building new agentic and
                human-focused capabilities.
              </p>
              <ul className="outcomes">
                <li>
                  <span>01</span>
                  Apply technical and product judgment across the HTML/CSS,
                  React, and Angular platforms
                </li>
                <li>
                  <span>02</span>
                  Build trusted relationships with cross-functional partners and
                  developer teams that surface needs and help work move forward
                </li>
                <li>
                  <span>03</span>
                  Propose and contribute to platform and accessibility
                  improvements
                </li>
                <li>
                  <span>04</span>
                  Add reusable skills, structured context, and integrations for
                  agentic workflows
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="experience ruled" aria-labelledby="journey-heading">
          <div className="experience-content">
            <h2 id="journey-heading">A career in the space between.</h2>
            <div className="timeline">
              {timeline.map((item, index) => (
                <article
                  className={`timeline-item timeline-item-${index + 1}`}
                  key={item.role}
                >
                  <div className="timeline-bubble">
                    <p className="timeline-date">{item.dates}</p>
                    <h3>{item.role}</h3>
                    <p className="company">{item.company}</p>
                  </div>
                  <p className="timeline-detail">{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="about ruled"
          id="about"
          aria-labelledby="about-heading"
        >
          <div className="portrait-frame">
            <img
              src={`${import.meta.env.BASE_URL}nicole-berreth.jpg`}
              alt="Nicole Berreth"
            />
          </div>
          <div className="about-copy">
            <p className="kicker">DESIGN ENGINEER / LIFELONG LEARNER</p>
            <h2 id="about-heading">
              Technical depth,
              <br />
              human perspective.
            </h2>
            <p>
              I care about making technology work for people. My computer
              science background gives me the technical depth to build durable
              systems; psychology and accessibility keep the human experience at
              the center. I’m happiest where design and development meet,
              turning complicated ideas into experiences that feel simple.
            </p>
            <div className="education">
              <p>
                <strong>MBA</strong>
                University of Houston–Clear Lake · Expected 2028
              </p>
              <p>
                <strong>BS, Computer Science</strong>
                University of North Texas · 2019
                <br />
                Psychology minor · Technical writing certificate
              </p>
            </div>
          </div>
        </section>

        <section className="contact-cta">
          <p className="kicker">LET’S CREATE BETTER EXPERIENCES.</p>
          <h2>Start a conversation.</h2>
          <a href="mailto:NicoleBerreth@gmail.com">
            Start a conversation <Arrow />
          </a>
        </section>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} Nicole Berreth</p>
        <div>
          <a
            href="https://www.linkedin.com/in/nicole-berreth/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn <Arrow />
          </a>
          <a
            href="https://github.com/NicoleRus"
            target="_blank"
            rel="noreferrer"
          >
            GitHub <Arrow />
          </a>
        </div>
        <p>Designed &amp; built with care</p>
      </footer>
    </>
  );
}

export default App;
