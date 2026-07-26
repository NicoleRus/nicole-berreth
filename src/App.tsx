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
    title: "Developer experience",
    description:
      "Documentation, education, tooling, and thoughtful defaults that help product teams ship with confidence.",
    tags: ["Documentation", "Tooling", "Enablement"],
  },
];

const timeline = [
  {
    dates: "2021 — NOW",
    role: "Design Engineer",
    company: "Visa",
    detail:
      "Leading development and maintenance of Nova, Visa’s Angular component library, while shaping shared patterns across Angular and React.",
  },
  {
    dates: "2019 — 2021",
    role: "Associate Design Engineer",
    company: "Visa",
    detail:
      "Built accessible, reusable components and supported teams adopting Visa’s frontend libraries.",
  },
  {
    dates: "SUMMER 2019",
    role: "UI Engineer Intern",
    company: "Visa",
    detail:
      "Started the journey from frontend implementation into enterprise-scale design systems.",
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
          NB<span className="wordmark-dot">.</span>
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
            Design engineer · Houston, TX
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
            <a className="circle-link" href="#work" aria-label="Explore my work">
              <span aria-hidden="true">↓</span>
            </a>
          </div>
          <div className="measure measure-a" aria-hidden="true">08 PX</div>
          <div className="measure measure-b" aria-hidden="true">12 COL</div>
        </section>

        <section className="intro ruled" id="work">
          <div className="section-label">What I do</div>
          <div className="section-lead">
            <p className="kicker">DESIGN × ENGINEERING</p>
            <h2>
              Systems that help teams
              <br />
              do their best work.
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
          <div className="section-label">Selected experience</div>
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
                I lead work on Nova, Visa’s Angular component library, and
                partner across disciplines to make design standards usable,
                accessible, and scalable.
              </p>
              <ul className="outcomes">
                <li>
                  <span>01</span>
                  Cross-framework alignment across Angular and React
                </li>
                <li>
                  <span>02</span>
                  WCAG-compliant interaction patterns and component APIs
                </li>
                <li>
                  <span>03</span>
                  AI-ready component architectures and llms.txt standards
                </li>
                <li>
                  <span>04</span>
                  Education, support, and tooling for internal product teams
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="experience ruled" aria-labelledby="journey-heading">
          <div className="section-label">Experience</div>
          <div className="experience-content">
            <h2 id="journey-heading">A career in the space between.</h2>
            <div className="timeline">
              {timeline.map((item) => (
                <article className="timeline-item" key={item.role}>
                  <p className="timeline-date">{item.dates}</p>
                  <div>
                    <h3>{item.role}</h3>
                    <p className="company">{item.company}</p>
                  </div>
                  <p className="timeline-detail">{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about ruled" id="about" aria-labelledby="about-heading">
          <div className="section-label">About</div>
          <div className="portrait-frame">
            <img
              src={`${import.meta.env.BASE_URL}nicole-berreth.jpg`}
              alt="Nicole Berreth"
            />
            <span className="portrait-label">FIG. 01 · NICOLE</span>
          </div>
          <div className="about-copy">
            <p className="kicker">DESIGN ENGINEER / LIFELONG LEARNER</p>
            <h2 id="about-heading">
              Technical depth,
              <br />
              human perspective.
            </h2>
            <p>
              I’m a design engineer who cares as much about how a system is
              understood as how it is built. My computer science foundation,
              accessibility practice, and ongoing MBA help me connect technical
              decisions to people and organizations.
            </p>
            <div className="education">
              <p>
                <strong>MBA</strong>
                University of Houston–Clear Lake · Expected 2028
              </p>
              <p>
                <strong>BS, Computer Science</strong>
                University of North Texas · 2019
              </p>
            </div>
          </div>
        </section>

        <section className="contact-cta">
          <p className="kicker">HAVE A GOOD PROBLEM?</p>
          <h2>Let’s make it useful.</h2>
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
