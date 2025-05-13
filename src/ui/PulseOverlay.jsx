import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import './PulseOverlay.scss';

const steps = [
  'Evaluating app performance on similar threat profiles...',
  'Matching app capabilities to detected vulnerabilities...',
  'Verifying encryption standards and privacy policies...',
  'Scanning App Store ratings and security update history...',
  'Selecting top-tier VPN with highest protection score...',
];

function PulseOverlay({ onFinish }) {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const timerID = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev + 1 < steps.length) {
          return prev + 1;
        }

        clearInterval(timerID);
        setTimeout(() => onFinish(), 4000);

        return prev;
      });
    }, 2000);

    return () => clearInterval(timerID);
  }, [onFinish]);

  return createPortal(
    <div className="pulse-overlay">
      <div className="loading">
        <div className="pulse">
          <span style={{ '--i': 0 }} />
          <span style={{ '--i': 1 }} />
          <span style={{ '--i': 2 }} />
        </div>

        <span className="text">{steps[currentStep]}</span>
      </div>
    </div>,
    document.body
  );
}

export default PulseOverlay;
