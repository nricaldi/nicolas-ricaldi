import styles from './LightModeToggle.module.css';
import { useState, useRef, useEffect, useCallback } from 'react';
import { IconSun, IconMoonStars } from '@tabler/icons-react';

export function LightModeToggle() {
  const isLightModeEnabled = () => {
    return document.body.classList.contains('light');
  };

  const [lightModeEnabled, setLightModeEnabled] = useState(() => isLightModeEnabled());
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);

  const trackRef = useRef<HTMLSpanElement>(null);
  const thumbRef = useRef<HTMLSpanElement>(null);
  const dragStartXRef = useRef(0);
  const dragStartOffsetRef = useRef(0);
  const dragOffsetRef = useRef(0);
  const maxOffsetRef = useRef(0);
  const isDraggingRef = useRef(false);
  const isThumbPointerDownRef = useRef(false);
  const preventTrackClickRef = useRef(false);
  const didDragRef = useRef(false);

  const iconSize = 16;
  const Hysteresis = 6;
  const CLICK_THRESHOLD = 4; // pixels

  // Compute max offset based on track and thumb dimensions
  const computeMaxOffset = useCallback(() => {
    if (!trackRef.current || !thumbRef.current) return 0;

    const trackRect = trackRef.current.getBoundingClientRect();
    const thumbRect = thumbRef.current.getBoundingClientRect();
    const trackPadding = 4; // matches --track-padding

    return Math.max(0, trackRect.width - thumbRect.width - trackPadding * 2);
  }, []);

  // Sync drag offset with current theme
  useEffect(() => {
    const maxOffset = computeMaxOffset();
    maxOffsetRef.current = maxOffset;
    const targetOffset = lightModeEnabled ? maxOffset : 0;
    setDragOffset(targetOffset);
    dragOffsetRef.current = targetOffset;
  }, [lightModeEnabled, computeMaxOffset]);

  // Handle pointer down on thumb - start dragging
  const handleThumbPointerDown = useCallback(
    (e: React.PointerEvent) => {
      e.preventDefault();
      e.stopPropagation();

      const maxOffset = computeMaxOffset();
      maxOffsetRef.current = maxOffset;

      const startOffset = lightModeEnabled ? maxOffset : 0;

      dragStartXRef.current = e.clientX;
      dragStartOffsetRef.current = startOffset;
      setDragOffset(startOffset);
      dragOffsetRef.current = startOffset;
      setIsDragging(true);
      isDraggingRef.current = true;
      isThumbPointerDownRef.current = true;

      // Capture pointer on thumb
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
    },
    [computeMaxOffset, lightModeEnabled]
  );

  // Handle pointer move - update position and theme (only when dragging)
  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDraggingRef.current) return;

      const maxOffset = maxOffsetRef.current;
      const delta = e.clientX - dragStartXRef.current;
      const newOffset = Math.max(0, Math.min(maxOffset, dragStartOffsetRef.current + delta));

      setDragOffset(newOffset);
      dragOffsetRef.current = newOffset;

      // Mark as dragged if movement exceeds threshold
      const movement = Math.abs(e.clientX - dragStartXRef.current);
      if (movement > CLICK_THRESHOLD) {
        didDragRef.current = true;
      }

      // Live theme update with hysteresis
      const midpoint = maxOffset / 2;
      if (newOffset > midpoint + Hysteresis && !lightModeEnabled) {
        document.body.classList.add('light');
        setLightModeEnabled(true);
      } else if (newOffset < midpoint - Hysteresis && lightModeEnabled) {
        document.body.classList.remove('light');
        setLightModeEnabled(false);
      }
    },
    [lightModeEnabled]
  );

  // Handle pointer up - snap to nearest or toggle if clicked
  const handlePointerUp = useCallback(
    (e: React.PointerEvent) => {
      if (!isDraggingRef.current) return;

      isDraggingRef.current = false;
      setIsDragging(false);

      const maxOffset = maxOffsetRef.current;
      const currentOffset = dragOffsetRef.current;
      const movement = Math.abs(e.clientX - dragStartXRef.current);

      // Check if this was a click on the thumb (minimal movement)
      if (isThumbPointerDownRef.current && movement < CLICK_THRESHOLD) {
        // Toggle to opposite side
        const targetOffset = lightModeEnabled ? 0 : maxOffset;
        setDragOffset(targetOffset);
        dragOffsetRef.current = targetOffset;

        if (lightModeEnabled) {
          document.body.classList.remove('light');
          setLightModeEnabled(false);
        } else {
          document.body.classList.add('light');
          setLightModeEnabled(true);
        }
      } else {
        // Snap to nearest end based on actual position
        const targetOffset = currentOffset >= maxOffset / 2 ? maxOffset : 0;
        setDragOffset(targetOffset);
        dragOffsetRef.current = targetOffset;

        // Ensure theme matches final position
        if (targetOffset > 0 && !lightModeEnabled) {
          document.body.classList.add('light');
          setLightModeEnabled(true);
        } else if (targetOffset === 0 && lightModeEnabled) {
          document.body.classList.remove('light');
          setLightModeEnabled(false);
        }
      }

      isThumbPointerDownRef.current = false;
      preventTrackClickRef.current = true;
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);

      // Reset flags after click event would fire
      setTimeout(() => {
        preventTrackClickRef.current = false;
        didDragRef.current = false;
      }, 0);
    },
    [lightModeEnabled]
  );

  // Handle track pointer down - always toggle to opposite side
  const handleTrackPointerDown = useCallback(
    (e: React.PointerEvent) => {
      // Ignore if target is the thumb (thumb handles its own pointer events)
      if ((e.target as HTMLElement).closest(`.${styles.thumb}`)) return;

      const maxOffset = maxOffsetRef.current;

      // Prevent any ghost click that might fire after pointerdown
      preventTrackClickRef.current = true;
      setTimeout(() => {
        preventTrackClickRef.current = false;
      }, 0);

      // Always toggle to opposite side
      if (lightModeEnabled) {
        // Currently light, toggle to dark (left)
        setDragOffset(0);
        dragOffsetRef.current = 0;
        document.body.classList.remove('light');
        setLightModeEnabled(false);
      } else {
        // Currently dark, toggle to light (right)
        setDragOffset(maxOffset);
        dragOffsetRef.current = maxOffset;
        document.body.classList.add('light');
        setLightModeEnabled(true);
      }
    },
    [lightModeEnabled]
  );

  // Handle resize to recalculate max offset
  useEffect(() => {
    const handleResize = () => {
      const newMaxOffset = computeMaxOffset();
      maxOffsetRef.current = newMaxOffset;
      const newOffset = lightModeEnabled ? newMaxOffset : 0;
      setDragOffset(newOffset);
      dragOffsetRef.current = newOffset;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [computeMaxOffset, lightModeEnabled]);

  const toggleButtonClasses = [styles.toggleButton];
  if (isDragging) toggleButtonClasses.push(styles.isDragging);

  return (
    <button type="button" className={toggleButtonClasses.join(' ')} aria-pressed={lightModeEnabled}>
      <span
        className={styles.track}
        aria-hidden="true"
        ref={trackRef}
        onPointerDown={handleTrackPointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        <span
          className={styles.thumb}
          aria-hidden="true"
          ref={thumbRef}
          onPointerDown={handleThumbPointerDown}
          style={{
            transform: `translateX(${dragOffset}px)`,
            transition: isDragging ? 'none' : undefined
          }}
        >
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
