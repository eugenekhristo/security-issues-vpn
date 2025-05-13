import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';

import ProgressCircle from '../ui/ProgressCircle';
import BgBlur from '../ui/BgBlur';

const steps = [
  'IP address traceability…',
  'Device privacy settings…',
  'VPN configuration check…',
  'Browser tracking protection…',
  'Data encryption level…',
  'Installed security software…',
];

function Step2() {
  const [progress, setProgress] = useState(0);
  const [started, setStarted] = useState(false);
  const navigate = useNavigate();
  const didRedirect = useRef(false);

  // 1) delay before we start the animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setStarted(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // 2) once we hit 100%, wait 1s then navigate
  useEffect(() => {
    if (progress === 100 && !didRedirect.current) {
      didRedirect.current = true;
      setTimeout(() => {
        navigate('/step-3');
      }, 2000);
    }
  }, [progress, navigate]);

  return (
    <div className="container step-2">
      <BgBlur backgroundColor={'#007AFF'} />

      <header>
        <h1>
          Scanning for critical
          <br />
          security issues...
        </h1>

        <h3>
          Analyzing network risks, privacy exposure, and encryption status…
        </h3>
      </header>

      <ProgressCircle onProgress={setProgress} start={started} />

      <ul className="steps">
        {steps.map((label, i) => {
          const threshold = ((i + 1) / steps.length) * 100;
          const active = progress >= threshold;
          return (
            <li key={i} className={`step ${active ? 'active' : ''}`}>
              <span className="image" />
              <span className="label">{label}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Step2;
