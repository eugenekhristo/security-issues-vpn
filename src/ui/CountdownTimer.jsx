// CountdownTimer.jsx
import { useEffect, useRef, useState } from 'react';

export default function CountdownTimer({
  initialSeconds = 299,
  onFinished = () => {},
}) {
  const [secondsLeft, setSecondsLeft] = useState(initialSeconds);
  const intervalRef = useRef(null);

  useEffect(() => {
    // start the countdown
    intervalRef.current = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current);
          onFinished();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, [onFinished]);

  const minutes = String(Math.floor(secondsLeft / 60)).padStart(2, '0');
  const seconds = String(secondsLeft % 60).padStart(2, '0');

  return (
    <>
      <p className="minutes">{minutes}</p>
      <p className="dots">:</p>
      <p className="seconds">{seconds}</p>
    </>
  );
}
