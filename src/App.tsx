import styles from "./App.module.css";
import { site, toolbox, workItems, statusLines, socials } from "./content";

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M12 2C6.48 2 2 6.58 2 12.26c0 4.54 2.86 8.4 6.84 9.76.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.72-2.78.63-3.37-1.37-3.37-1.37-.46-1.2-1.12-1.52-1.12-1.52-.9-.64.07-.63.07-.63 1 .07 1.52 1.05 1.52 1.05.9 1.56 2.36 1.11 2.94.85.09-.67.35-1.11.64-1.37-2.22-.26-4.56-1.14-4.56-5.1 0-1.13.39-2.05 1.03-2.77-.1-.26-.45-1.31.1-2.74 0 0 .84-.28 2.75 1.05a9.2 9.2 0 0 1 5 0c1.9-1.33 2.74-1.05 2.74-1.05.55 1.43.2 2.48.1 2.74.64.72 1.02 1.64 1.02 2.77 0 3.97-2.34 4.83-4.58 5.08.36.32.68.95.68 1.92 0 1.38-.01 2.5-.01 2.84 0 .27.18.6.69.49A10.1 10.1 0 0 0 22 12.26C22 6.58 17.52 2 12 2z"
      fill="currentColor"
    />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M6.94 9.5H3.6V20h3.34V9.5zM5.27 4a1.94 1.94 0 1 0 0 3.88A1.94 1.94 0 0 0 5.27 4zm14.73 9.79c0-3.16-1.69-4.63-3.94-4.63-1.82 0-2.64 1-3.1 1.7v-1.46H9.74c.04.97 0 10.6 0 10.6h3.22v-5.92c0-.32.02-.64.12-.86.26-.64.85-1.3 1.84-1.3 1.3 0 1.82.99 1.82 2.45V20H20v-6.21z"
      fill="currentColor"
    />
  </svg>
);

const MailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M4 6.6h16c.77 0 1.4.63 1.4 1.4v8c0 .77-.63 1.4-1.4 1.4H4c-.77 0-1.4-.63-1.4-1.4V8c0-.77.63-1.4 1.4-1.4zm0 1.8v.2l8 5 8-5v-.2H4zm0 1.9V16h16V10.3l-8 5-8-5z"
      fill="currentColor"
    />
  </svg>
);

export default function App() {
  return (
    <div className={styles.app}>
      <div className={styles.cursorField} aria-hidden="true" />
      <div className={styles.container}>
        <header className={styles.topBar}>
          <div className={styles.brand}>
            <span className={styles.brandDot} />
            NR // PORTFOLIO
          </div>
        </header>
      </div>

      <section className={styles.heroSection}>
        <div className={styles.heroInner}>
          <div className={styles.heroStack}>
            <div className={styles.heroRole}>{site.role}</div>
            <h1 className={`${styles.heroTitle} ${styles.glitch}`}>{site.headline}</h1>
          </div>
          <p className={styles.heroValue}>{site.value}</p>
          <p className={styles.heroValue}>{site.valueSecondary}</p>
          <div className={styles.ctaRow}>
            <a className={styles.buttonPrimary} href={site.resumeUrl} download>
              Download Resume
            </a>
            <a className={styles.buttonGhost} href="#contact">
              Contact
            </a>
          </div>
        </div>
      </section>

      <div className={`${styles.container} ${styles.sectionContainer}`}>
        <main className={styles.grid}>
          <section className={`${styles.card} ${styles.about}`}>
            <div className={styles.monoLabel}>About / Toolbox</div>
            <div className={styles.sectionTitle}>Builds clean, high-performing products.</div>
            <p className={styles.subtle}>
              Full-stack engineer with a UI-first mindset. I bridge product, data, and engineering to
              ship fast, reliable experiences.
            </p>
            <div className={styles.toolList}>
              {toolbox.map((tool) => (
                <span key={tool} className={styles.toolItem}>
                  {tool}
                </span>
              ))}
            </div>
          </section>

          <section className={`${styles.card} ${styles.status}`}>
            <div className={styles.monoLabel}>Status</div>
            <div className={styles.sectionTitle}>Status console</div>
            <div className={styles.statusBox}>
              {statusLines.map((line) => (
                <div key={line} className={styles.statusLine}>
                  {line}
                </div>
              ))}
              <div className={styles.statusLine}>
                available: freelance inquiries
                <span className={styles.statusAccent}> ({site.availability})</span>
              </div>
              <div className={styles.statusLine}>location: {site.location}</div>
            </div>
          </section>

          <section className={`${styles.card} ${styles.work}`}>
            <div className={styles.monoLabel}>Work / Case Studies</div>
            <div className={styles.sectionTitle}>Case studies coming soon</div>
            <div className={styles.workGrid}>
              {workItems.map((item) => (
                <div key={item.title} className={styles.workItem}>
                  <div className={styles.workThumb}>Screenshot placeholder</div>
                  <div>
                    <strong>{item.title}</strong>
                    <div className={styles.subtle}>{item.description}</div>
                  </div>
                  <div className={styles.tagRow}>
                    {item.stack.map((tag) => (
                      <span key={tag} className={styles.tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="contact" className={`${styles.card} ${styles.contact}`}>
            <div className={styles.monoLabel}>Contact</div>
            <div className={styles.sectionTitle}>Let’s build something sharp.</div>
            <div className={styles.contactGrid}>
              <div className={styles.contactRow}>
                <a className={styles.iconButton} href={`mailto:${site.email}`} aria-label="Email">
                  <MailIcon />
                </a>
                <div>
                  <div className={styles.subtle}>Email</div>
                  <div>{site.email}</div>
                </div>
              </div>

              <div className={styles.contactRow}>
                {socials.map((social) => (
                  <a
                    key={social.label}
                    className={styles.iconButton}
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {social.label === "GitHub" ? <GithubIcon /> : <LinkedinIcon />}
                  </a>
                ))}
                <div className={styles.subtle}>TODO: replace with real links</div>
              </div>

              <div className={styles.divider} />

              <form className={styles.form} onSubmit={(event) => event.preventDefault()}>
                <label className={styles.subtle} htmlFor="name">
                  Name
                </label>
                <input
                  className={styles.input}
                  id="name"
                  name="name"
                  placeholder="Your name"
                  type="text"
                  autoComplete="name"
                />
                <label className={styles.subtle} htmlFor="email">
                  Email
                </label>
                <input
                  className={styles.input}
                  id="email"
                  name="email"
                  placeholder="you@email.com"
                  type="email"
                  autoComplete="email"
                />
                <label className={styles.subtle} htmlFor="message">
                  Message
                </label>
                <textarea className={styles.textarea} id="message" name="message" placeholder="Project scope, timeline, budget" />
                <button type="button" className={styles.buttonGhost}>
                  Send message (TODO: wire Formspree)
                </button>
              </form>
            </div>
          </section>

          <section className={`${styles.card} ${styles.footerTile}`}>
            <div className={styles.monoLabel}>Terminal</div>
            <div className={styles.sectionTitle}>System log</div>
            <div className={styles.terminalLog}>
              <div className={styles.terminalLine}>
                <span className={styles.terminalPrompt}>&gt;</span>
                build status
                <span className={styles.terminalAccent}>OK</span>
              </div>
              <div className={styles.terminalLine}>
                <span className={styles.terminalPrompt}>&gt;</span>
                response time 120ms
              </div>
              <div className={styles.terminalLine}>
                <span className={styles.terminalPrompt}>&gt;</span>
                inbox: open for freelance
              </div>
              <div className={styles.terminalLine}>
                <span className={styles.terminalPrompt}>&gt;</span>
                terminal: ready<span className={styles.cursor} />
              </div>
              <div className={styles.footer}>© {new Date().getFullYear()} Nicolas Ricaldi.</div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
