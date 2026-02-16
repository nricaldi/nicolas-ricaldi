import styles from './App.module.css';
import { Button } from './components/ui/Button';
import { Hero } from './components/Hero';
import { LightModeToggle } from './components/ui/LightModeToggle';
import { ShinyText } from './components/ui/ShinyText';
import { site, toolbox, workItems, statusLines, socials } from './content';
import { IconMail, IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';

export default function App() {
  return (
    <div className={styles.app}>
      <div className={styles.cursorField} aria-hidden="true" />
      <div className={styles.container}>
        <header className={styles.topBar}>
          <div className={styles.brand}>
            <span className={styles.brandDot} />
            <ShinyText
              text="Nico Ricaldi"
              speed={4}
              color="var(--text-muted)"
              delay={2}
              />
          </div>
          <LightModeToggle />
        </header>
      </div>

      <Hero site={site} />

      <div className={`${styles.container} ${styles.sectionContainer}`}>
        <main className={styles.grid}>
          <section className={`${styles.card} ${styles.about}`}>
            <div className={styles.monoLabel}>About / Toolbox</div>
            <div className={styles.sectionTitle}>Builds clean, high-performing products.</div>
            <p className={styles.subtle}>
              Full-stack engineer with a UI-first mindset. I bridge product, data, and engineering
              to ship fast, reliable experiences.
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
                   <IconMail size={20} color="var(--text)" stroke="2" />
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
                    {social.label === 'GitHub'
                      ? <IconBrandGithub size={20} color="var(--text)" stroke="2" />
                      : <IconBrandLinkedin size={20} color="var(--text)" stroke="2" />
                    }
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
                <textarea
                  className={styles.textarea}
                  id="message"
                  name="message"
                  placeholder="Project scope, timeline, budget"
                />
                <Button type="button" variant="ghost">
                  Send message (TODO: wire Formspree)
                </Button>
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
                terminal: ready
                <span className={styles.cursor} />
              </div>
              <div className={styles.footer}>© {new Date().getFullYear()} Nicolas Ricaldi.</div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
