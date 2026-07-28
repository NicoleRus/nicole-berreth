import { FaGithub, FaLinkedinIn } from "react-icons/fa";

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

const projects = [
  {
    number: "01",
    title: "Visa Product Design System",
    url: "https://design.visa.com/",
    domain: "design.visa.com",
    role: "Senior design engineer · Web platforms",
    description:
      "A public, accessibility-first design system supporting teams across React, Angular, CSS, and Flutter.",
    tags: ["Design systems", "Accessibility", "Angular", "React"],
  },
  {
    number: "02",
    title: "AR Fitness & Nutrition",
    url: "https://www.arfitnessandnutrition.com/",
    domain: "arfitnessandnutrition.com",
    role: "Website design & development",
    description:
      "A local fitness and nutrition website that helps people explore coaching, memberships, events, and nutrition services.",
    tags: ["Small business", "Responsive web", "Content"],
  },
  {
    number: "03",
    title: "Santa of Texas",
    url: "https://santaoftexas.com/",
    domain: "santaoftexas.com",
    role: "Website design & development",
    description:
      "A welcoming small-business site designed to introduce services, share event photography, and make booking Santa simple.",
    tags: ["WordPress", "HTML / CSS", "JavaScript"],
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
        <nav className="primary-nav" aria-label="Primary navigation">
          <a className="nav-link" href="#projects">Work</a>
          <a className="nav-link" href="#about">About</a>
          <a className="nav-link nav-cta" href="mailto:NicoleBerreth@gmail.com">
            Let’s talk <Arrow />
          </a>
        </nav>
      </header>

      <main className="site-main" id="main">
        <section className="hero ruled" id="top">
          <div className="eyebrow">
            <span className="status-dot" aria-hidden="true" />
            Senior design engineer · Houston, TX
          </div>
          <h1 className="hero-title">
            I build the systems
            <br />
            <span className="hero-title-accent">behind great interfaces.</span>
          </h1>
          <div className="hero-footer">
            <p className="hero-summary">
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
            <h2 className="section-title">
              Making technology work
              <br />
              better for people.
            </h2>
          </div>
        </section>

        <section
          className="capabilities ruled-inset"
          aria-label="Areas of expertise"
        >
          {capabilities.map((capability) => (
            <article className="capability" key={capability.number}>
              <span className="capability-number">{capability.number}</span>
              <h3 className="capability-title">{capability.title}</h3>
              <p className="capability-description">{capability.description}</p>
              <ul className="capability-tags" aria-label={`${capability.title} topics`}>
                {capability.tags.map((tag) => (
                  <li className="capability-tag" key={tag}>{tag}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section className="feature ruled-inset" aria-labelledby="visa-heading">
          <div className="feature-content">
            <div className="feature-topline">
              <p className="kicker">VISA · 2019 — PRESENT</p>
              <span>HOUSTON / REMOTE</span>
            </div>
            <h2 className="section-title" id="visa-heading">
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
                <li className="outcome">
                  <span>01</span>
                  Apply technical and product judgment across the HTML/CSS,
                  React, and Angular platforms
                </li>
                <li className="outcome">
                  <span>02</span>
                  Build trusted relationships with cross-functional partners and
                  developer teams that surface needs and help work move forward
                </li>
                <li className="outcome">
                  <span>03</span>
                  Propose and contribute to platform and accessibility
                  improvements
                </li>
                <li className="outcome">
                  <span>04</span>
                  Add reusable skills, structured context, and integrations for
                  agentic workflows
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section
          className="projects ruled"
          id="projects"
          aria-labelledby="projects-heading"
        >
          <div className="projects-heading">
            <p className="kicker">SELECTED PROJECTS</p>
            <h2 className="section-title" id="projects-heading">Work in the world.</h2>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <a
                className="project-card"
                href={project.url}
                target="_blank"
                rel="noreferrer"
                key={project.title}
                aria-label={`Visit ${project.title}`}
              >
                <span className="project-number">{project.number}</span>
                <div className="project-name">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-domain">{project.domain}</p>
                </div>
                <div className="project-details">
                  <p className="project-role">{project.role}</p>
                  <p className="project-description">{project.description}</p>
                  <ul className="project-tags" aria-label={`${project.title} technologies and topics`}>
                    {project.tags.map((tag) => (
                      <li className="project-tag" key={tag}>{tag}</li>
                    ))}
                  </ul>
                </div>
                <span className="project-arrow" aria-hidden="true">
                  ↗
                </span>
              </a>
            ))}
          </div>
        </section>

        <section className="experience ruled" aria-labelledby="journey-heading">
          <div className="experience-content">
            <h2 className="section-title" id="journey-heading">A career in the space between.</h2>
            <div className="timeline">
              {timeline.map((item, index) => (
                <article
                  className={`timeline-item timeline-item-${index + 1}`}
                  key={item.role}
                >
                  <div className="timeline-bubble">
                    <p className="timeline-date">{item.dates}</p>
                    <h3 className="timeline-title">{item.role}</h3>
                    <p className="company">{item.company}</p>
                  </div>
                  <p className="timeline-detail">{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="about ruled-inset"
          id="about"
          aria-labelledby="about-heading"
        >
          <div className="portrait-frame">
            <img
              src={`${import.meta.env.BASE_URL}nicole-berreth.jpg`}
              alt="Nicole Berreth"
              className="portrait-image"
              width="901"
              height="1200"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="about-copy">
            <p className="kicker">DESIGN ENGINEER / LIFELONG LEARNER</p>
            <h2 className="section-title" id="about-heading">
              Technical depth,
              <br />
              human perspective.
            </h2>
            <p className="about-description">
              I care about making technology work for people. My computer
              science background gives me the technical depth to build durable
              systems; psychology and accessibility keep the human experience at
              the center. I’m happiest where design and development meet,
              turning complicated ideas into experiences that feel simple.
            </p>
            <div className="education">
              <p className="education-item">
                <strong className="education-degree">MBA</strong>
                University of Houston–Clear Lake · Expected 2028
              </p>
              <p className="education-item">
                <strong className="education-degree">BS, Computer Science</strong>
                University of North Texas · 2019
                <br />
                Psychology minor · Technical writing certificate
              </p>
            </div>
          </div>
        </section>

        <section className="contact-cta">
          <p className="kicker">LET’S CREATE BETTER EXPERIENCES.</p>
          <h2 className="contact-title">Start a conversation.</h2>
          <a className="contact-link" href="mailto:NicoleBerreth@gmail.com">
            Start a conversation <Arrow />
          </a>
        </section>
      </main>

      <footer className="site-footer">
        <p className="footer-copyright">© {new Date().getFullYear()} Nicole Berreth</p>
        <div className="footer-links">
          <a
            className="footer-link"
            href="https://www.linkedin.com/in/nicole-berreth/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn aria-hidden="true" />
            <span>LinkedIn</span>
          </a>
          <a
            className="footer-link"
            href="https://github.com/NicoleRus"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub aria-hidden="true" />
            <span>GitHub</span>
          </a>
        </div>
        <p className="footer-note">Designed &amp; built with care</p>
      </footer>
    </>
  );
}

export default App;
