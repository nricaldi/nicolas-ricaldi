import styles from "./Hero.module.css";
import DitherPlanet from "./DitherPlanet";
import Button from "./Button";

type HeroProps = {
  site: {
    role: string;
    headline: string;
    value: string;
    valueSecondary?: string;
    resumeUrl: string;
  };
};

export default function Hero({ site }: HeroProps) {
  return (
    <section className={styles.hero}>
      <DitherPlanet
        position="absolute"
        top="5%"
        left="70%"
        size={500}
        waveColor={[0.5, 0.5, 0.5]}
        disableAnimation={false}
        enableMouseInteraction
        mouseRadius={0.5}
        colorNum={4}
        waveAmplitude={0.3}
        waveFrequency={3}
        waveSpeed={0.05}
      />

      <DitherPlanet
        position="absolute"
        top="50%"
        left="65%"
        size={200}
        waveColor={[0.8, 0.3, 0.3]}
        disableAnimation={false}
        enableMouseInteraction
        mouseRadius={0.5}
        colorNum={4}
        waveAmplitude={0.3}
        waveFrequency={3}
        waveSpeed={0.1}
      />

      <div className={styles.heroContainer}>
        <div className={styles.heroRole}>{site.role}</div>
        <h1 className={styles.heroTitle}>{site.headline}</h1>
        <p className={styles.heroValue}>{site.value}</p>
        {site.valueSecondary ? <p className={styles.heroValue}>{site.valueSecondary}</p> : null}

        <div className={styles.ctaRow}>
          <Button variant="primary" href={site.resumeUrl} download>
            Download Resume
          </Button>
          <Button variant="ghost" href="#contact">
            Contact
          </Button>
        </div>

        <h2 className={styles.heroFirstName} aria-hidden="true">
          Nico
        </h2>
        <h2 className={styles.heroLastName} aria-hidden="true">
          Ricaldi
        </h2>
      </div>
    </section>
  );
}
