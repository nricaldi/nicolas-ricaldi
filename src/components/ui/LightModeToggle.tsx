import styles from './LightModeToggle.module.css';
import { useState } from 'react';

export function LightModeToggle() {
  const isLightModeEnabled = () => {
    return document.body.classList.contains('light');
  };

  const [lightModeEnabled, setLightModeEnabled] = useState(() => isLightModeEnabled());

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
      <span className={styles.track} aria-hidden="true" />
      <span className={styles.thumb} aria-hidden="true" />
    </button>
  );
}
