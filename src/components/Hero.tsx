import styles from './Hero.module.css';
import { DitherPlanet } from './ui/DitherPlanet';
import { Button } from './ui/Button';
import { ShinyText } from './ui/ShinyText';

type HeroProps = {
  site: {
    role: string;
    headline: string;
    value: string;
    valueSecondary?: string;
    resumeUrl: string;
  };
};

export function Hero({ site }: HeroProps) {
  return (
    <section className={styles.hero}>
      <DitherPlanet
        position="absolute"
        top="5%"
        left="70%"
        zIndex={3}
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
        zIndex={4}
        size={200}
        waveColor={[0.8, 0.3, 0.3]}
        disableAnimation={false}
        enableMouseInteraction
        mouseRadius={0.5}
        colorNum={4}
        waveAmplitude={0.3}
        waveFrequency={3}
        waveSpeed={0.15}
      />

      <div className={styles.heroContainer}>
        <ShinyText
          className={styles.heroFirstName}
          text="Nico"
          speed={3}
          delay={4}
          color="var(--hero-name-color)"
          shineColor="var(--hero-name-color-highlight)"
          spread={120}
          direction="left"
          yoyo={false}
          pauseOnHover={false}
          disabled={false}
        />

        <div className={styles.heroRole}>{site.role}</div>
        <h1 className={styles.heroTitle}>{site.headline}</h1>
        <p className={styles.heroValue}>{site.value}</p>

        <div className={styles.ctaRow}>
          <Button variant="primary" href={site.resumeUrl} download>
            Download Resume
          </Button>
          <Button variant="ghost" href="#contact">
            Contact
          </Button>
        </div>

        <div className={styles.heroLastNameContainer}>
          <ShinyText
            className={styles.heroLastName}
            text="Ricaldi"
            speed={3}
            delay={6}
            color="var(--hero-name-color)"
            shineColor="var(--hero-name-color-highlight)"
            spread={120}
            direction="left"
            yoyo={false}
            pauseOnHover={false}
            disabled={false}
          />
        </div>
      </div>
    </section>
  );
}
