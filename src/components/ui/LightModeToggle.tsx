import styles from './LightModeToggle.module.css';
import { IconSun, IconMoonStars } from '@tabler/icons-react';
import { useState } from 'react';

export function LightModeToggle() {

  const isLightModeEnabled = () => {
    return document.body.classList.contains('light');
  };

  const [lightModeEnabled, setLightModeEnabled] = useState(isLightModeEnabled)
  const iconSize = 20;

  const toggleMode = () => {
    const body = document.body;
    body.classList.toggle('light');

    setLightModeEnabled(isLightModeEnabled)
  }

  return (
    <div className={styles.toggleButton} onClick={toggleMode}>
      { lightModeEnabled
          ? <IconSun size={iconSize} color="var(--text)" stroke="2" />
          : <IconMoonStars size={iconSize} color="var(--text)" stroke="2" />
      }
    </div>
  )
}

