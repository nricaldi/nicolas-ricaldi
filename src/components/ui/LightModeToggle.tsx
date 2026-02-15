import styles from './LightModeToggle.module.css';
import { useState } from 'react';
import { IconSun, IconMoonStars } from '@tabler/icons-react';

export function LightModeToggle() {
  const isLightModeEnabled = () => {
    return document.body.classList.contains('light');
  };

  const [lightModeEnabled, setLightModeEnabled] = useState(() => isLightModeEnabled());
  const iconSize = 16;

  const toggleMode = () => {
    const body = document.body;
    body.classList.toggle('light');

    setLightModeEnabled(isLightModeEnabled());
  };

  return (
    <button
      type="button"
      className={styles.toggleButton}
      onClick={toggleMode}
      aria-pressed={lightModeEnabled}
    >
      <span className={styles.track} aria-hidden="true">
        <span className={styles.thumb} aria-hidden="true">
          {lightModeEnabled ? (
            <IconSun size={iconSize} color="var(--text-muted)" stroke={2} />
          ) : (
            <IconMoonStars size={iconSize} color="var(--text)" stroke={2} />
          )}
        </span>
        <span className={styles.spacer} aria-hidden="true">
          <IconSun size={iconSize} color="transparent" stroke={2} />
        </span>
      </span>
    </button>
  );
}
