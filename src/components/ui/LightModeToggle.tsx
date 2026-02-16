import styles from './LightModeToggle.module.css';
import { useState, useRef, useEffect, useCallback } from 'react';
import { IconSun, IconMoonStars } from '@tabler/icons-react';

export function LightModeToggle() {
  const [lightModeEnabled, setLightModeEnabled] = useState(() =>
    document.body.classList.contains('light')
  );
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(() =>
    document.body.classList.contains('light') ? getMaxOffset() : 0
  );

  const trackRef = useRef<HTMLSpanElement>(null);
  const thumbRef = useRef<HTMLSpanElement>(null);
  const dragStartXRef = useRef(0);
  const dragStartOffsetRef = useRef(0);
  const dragOffsetRef = useRef(dragOffset);
  const maxOffsetRef = useRef(getMaxOffset());
  const isDraggingRef = useRef(false);

  const iconSize = 16;
  const Hysteresis = 6;
  const CLICK_THRESHOLD = 4;

  function getMaxOffset(): number {
    if (!trackRef.current || !thumbRef.current) return 0;
    const trackRect = trackRef.current.getBoundingClientRect();
    const thumbRect = thumbRef.current.getBoundingClientRect();
    return Math.max(0, trackRect.width - thumbRect.width - 8); // 8 = trackPadding * 2
  }

  // Sync offset with theme only when NOT dragging
  useEffect(() => {
    if (isDraggingRef.current) return;

    const maxOffset = getMaxOffset();
    maxOffsetRef.current = maxOffset;
    const targetOffset = lightModeEnabled ? maxOffset : 0;
    setDragOffset(targetOffset);
    dragOffsetRef.current = targetOffset;
  }, [lightModeEnabled]);

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      if (isDraggingRef.current) return;
      const newMaxOffset = getMaxOffset();
      maxOffsetRef.current = newMaxOffset;
      const newOffset = document.body.classList.contains('light') ? newMaxOffset : 0;
      setDragOffset(newOffset);
      dragOffsetRef.current = newOffset;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const updateTheme = useCallback((enabled: boolean) => {
    if (enabled) {
      document.body.classList.add('light');
    } else {
      document.body.classList.remove('light');
    }
    setLightModeEnabled(enabled);
  }, []);

  // Handle pointer down on thumb - start dragging
  const handleThumbPointerDown = useCallback((e: React.PointerEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const maxOffset = getMaxOffset();
    maxOffsetRef.current = maxOffset;

    const currentOffset = dragOffsetRef.current;
    dragStartXRef.current = e.clientX;
    dragStartOffsetRef.current = currentOffset;

    setIsDragging(true);
    isDraggingRef.current = true;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  }, []);

  // Handle pointer move - update position and theme
  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDraggingRef.current) return;

      const maxOffset = maxOffsetRef.current;
      const delta = e.clientX - dragStartXRef.current;
      const newOffset = Math.max(0, Math.min(maxOffset, dragStartOffsetRef.current + delta));

      setDragOffset(newOffset);
      dragOffsetRef.current = newOffset;

      // Live theme update with hysteresis
      const midpoint = maxOffset / 2;
      const currentTheme = document.body.classList.contains('light');

      if (newOffset > midpoint + Hysteresis && !currentTheme) {
        updateTheme(true);
      } else if (newOffset < midpoint - Hysteresis && currentTheme) {
        updateTheme(false);
      }
    },
    [updateTheme]
  );

  // Handle pointer up - snap to nearest
  const handlePointerUp = useCallback(
    (e: React.PointerEvent) => {
      if (!isDraggingRef.current) return;

      isDraggingRef.current = false;
      setIsDragging(false);

      const maxOffset = maxOffsetRef.current;
      const currentOffset = dragOffsetRef.current;
      const movement = Math.abs(e.clientX - dragStartXRef.current);

      // Check if this was a click (minimal movement)
      if (movement < CLICK_THRESHOLD) {
        // Toggle to opposite side
        const targetOffset = currentOffset > maxOffset / 2 ? 0 : maxOffset;
        setDragOffset(targetOffset);
        dragOffsetRef.current = targetOffset;
        updateTheme(targetOffset > 0);
      } else {
        // Snap to nearest end
        const targetOffset = currentOffset >= maxOffset / 2 ? maxOffset : 0;
        setDragOffset(targetOffset);
        dragOffsetRef.current = targetOffset;
        updateTheme(targetOffset > 0);
      }

      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    },
    [updateTheme]
  );

  // Handle track click - toggle to opposite side
  const handleTrackClick = useCallback(() => {
    if (isDraggingRef.current) return;

    const maxOffset = getMaxOffset();
    maxOffsetRef.current = maxOffset;

    const currentTheme = document.body.classList.contains('light');
    const targetOffset = currentTheme ? 0 : maxOffset;

    setDragOffset(targetOffset);
    dragOffsetRef.current = targetOffset;
    updateTheme(!currentTheme);
  }, [updateTheme]);

  const toggleButtonClasses = [styles.toggleButton];
  if (isDragging) toggleButtonClasses.push(styles.isDragging);

  return (
    <button type="button" className={toggleButtonClasses.join(' ')} aria-pressed={lightModeEnabled}>
      <span className={styles.track} aria-hidden="true" ref={trackRef} onClick={handleTrackClick}>
        <span
          className={styles.thumb}
          aria-hidden="true"
          ref={thumbRef}
          onPointerDown={handleThumbPointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          style={{
            transform: `translateX(${dragOffset}px)`,
            transition: isDragging ? 'none' : undefined
          }}
        >
          <span className={styles.iconWrap}>
            <IconSun
              size={iconSize}
              color="var(--text-muted)"
              stroke={2}
              className={styles.iconSun}
            />
            <IconMoonStars
              size={iconSize}
              color="var(--text)"
              stroke={2}
              className={styles.iconMoon}
            />
          </span>
        </span>
        <span className={styles.spacer} aria-hidden="true" />
      </span>
    </button>
  );
}
