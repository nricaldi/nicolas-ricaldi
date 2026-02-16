import type { CSSProperties } from 'react';
import { Dither } from './Dither';
import './dither.css';

type PositionValue = 'relative' | 'absolute' | 'fixed' | 'sticky';

interface DitherPlanetProps {
  position?: PositionValue;
  top?: number | string;
  left?: number | string;
  size?: number | string;
  zIndex?: number;
  waveColor?: [number, number, number];
  disableAnimation?: boolean;
  enableMouseInteraction?: boolean;
  mouseRadius?: number;
  colorNum?: number;
  waveAmplitude?: number;
  waveFrequency?: number;
  waveSpeed?: number;
  pixelSize?: number;
}

export function DitherPlanet({
  position = 'relative',
  top,
  left,
  size = 200,
  zIndex,
  waveColor,
  disableAnimation,
  enableMouseInteraction,
  mouseRadius,
  colorNum,
  waveAmplitude,
  waveFrequency,
  waveSpeed,
  pixelSize
}: DitherPlanetProps) {
  const style: CSSProperties = {
    position,
    top,
    left,
    zIndex,
    width: typeof size === 'number' ? `${size}px` : size,
    height: typeof size === 'number' ? `${size}px` : size
  };

  return (
    <div className="dither-planet" style={style}>
      <Dither
        waveColor={waveColor}
        disableAnimation={disableAnimation}
        enableMouseInteraction={enableMouseInteraction}
        mouseRadius={mouseRadius}
        colorNum={colorNum}
        waveAmplitude={waveAmplitude}
        waveFrequency={waveFrequency}
        waveSpeed={waveSpeed}
        pixelSize={pixelSize}
      />
    </div>
  );
}
