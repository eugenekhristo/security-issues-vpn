import { useCallback, useEffect, useRef, useState } from 'react';
import styles from './ProgressCircle.module.scss';

const ProgressCircle = () => {
  const [progress, setProgress] = useState(0);
  const [completed, setCompleted] = useState(false);
  const requestRef = useRef();
  const startRef = useRef();

  const duration = 12000;
  const strokeWidth = 28.75;
  const size = 230;
  const center = size / 2;
  const radius = center - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

  const animate = useCallback((ts) => {
    if (!startRef.current) startRef.current = ts;
    const elapsed = ts - startRef.current;
    const t = Math.min(elapsed / duration, 1);
    const v = easeOutCubic(t);
    setProgress(Math.floor(v * 100));
    if (elapsed < duration) {
      requestRef.current = requestAnimationFrame(animate);
    } else {
      setCompleted(true);
    }
  }, []);

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [animate]);

  const offset = circumference * (1 - progress / 100);

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
            <feGaussianBlur stdDeviation="16" result="blurred" />
            <feMerge>
              <feMergeNode in="blurred" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* background */}
        <circle
          className={styles.bg}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
          fill="none"
        />

        {/* main progress */}
        <circle
          className={styles.progress}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />

        {/* glow – now using SVG filter */}
        <circle
          className={`${styles.glow} ${completed ? styles.stopped : ''}`}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          filter="url(#glowBlur)"
        />
      </svg>

      <div className={styles.text}>{progress}%</div>
    </div>
  );
};

export default ProgressCircle;
