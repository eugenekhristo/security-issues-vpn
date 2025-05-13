import { useCallback, useEffect, useRef, useState } from 'react';
import styles from './ProgressCircle.module.scss';

function ProgressCircle({
  size = 230,
  strokeWidth = 28.75,
  duration = 12000,
  start = true,
  onProgress,
  onComplete,
}) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const reqRef = useRef();
  const startRef = useRef();

  const center = size / 2;
  const radius = center - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;
  const easeOutCubic = useCallback((t) => 1 - Math.pow(1 - t, 2), []);

  const animate = useCallback(
    (ts) => {
      if (!startRef.current) startRef.current = ts;
      const elapsed = ts - startRef.current;
      const t = Math.min(elapsed / duration, 1);
      const v = easeOutCubic(t);
      const pct = Math.floor(v * 100);
      setProgress(pct);
      onProgress?.(pct);
      if (elapsed < duration) {
        reqRef.current = requestAnimationFrame(animate);
      } else {
        setDone(true);
        onComplete?.();
      }
    },
    [duration, onComplete, onProgress, easeOutCubic]
  );

  useEffect(() => {
    if (!start) return;

    reqRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(reqRef.current);
  }, [duration, onProgress, onComplete, start, animate]);

  const dashOffset = circumference * (1 - progress / 100);

  return (
    <div className={styles.container}>
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className={styles.svg}
        style={{ overflow: 'visible' }}
      >
        <defs>
          <filter
            id="glowBlur"
            filterUnits="userSpaceOnUse"
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
          >
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="16"
              result="blurred"
            />
            <feMerge>
              <feMergeNode in="blurred" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* background rim */}
        <circle
          className={styles.bg}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
          fill="none"
        />

        {/* progress arc */}
        <circle
          className={styles.progress}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          strokeLinecap="round"
        />

        {/* glow arc */}
        <circle
          className={`${styles.glow} ${done ? styles.stopped : ''}`}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          strokeLinecap="round"
          filter="url(#glowBlur)"
        />
      </svg>

      <div className={styles.text}>{progress}%</div>
    </div>
  );
}

export default ProgressCircle;
