// import { useNavigate } from 'react-router';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import BgBlur from '../ui/BgBlur';
import PulseOverlay from '../ui/PulseOverlay';

function Step3() {
  const [pulseRunning, setPulseRunning] = useState(false);
  const navigate = useNavigate();

  function handleClick() {
    setPulseRunning(true);
  }

  return (
    <>
      {pulseRunning && <PulseOverlay onFinish={() => navigate('/step-4')} />}
      <div className="container step-3">
        <BgBlur backgroundColor={'#FF3B30'} />

        <header>
          <h3>Detected</h3>
          <h1>6 Security Threats</h1>
        </header>

        <main>
          <div className="issues-list">
            <div className="row">
              <div className="left">
                <img
                  src="/img/step-3/malicious-icon.svg"
                  alt="malicious-icon"
                />
                <span>Malicious IP</span>
              </div>
              <div className="right">
                <span>1 threat</span>
                <img src="/img/step-3/warning-icon.svg" alt="warning-icon" />
              </div>
            </div>

            <div className="row">
              <div className="left">
                <img
                  src="/img/step-3/connection-icon.svg"
                  alt="connection-icon"
                />
                <span>Connection status</span>
              </div>
              <div className="right">
                <span>2 issues</span>
                <img src="/img/step-3/alert-icon.svg" alt="alert-icon" />
              </div>
            </div>

            <div className="row">
              <div className="left">
                <img src="/img/step-3/system-icon.svg" alt="system-icon" />
                <span>System status</span>
              </div>
              <div className="right">
                <span>2 issues</span>
                <img src="/img/step-3/alert-icon.svg" alt="alert-icon" />
              </div>
            </div>

            <div className="row">
              <div className="left">
                <img src="/img/step-3/breach-icon.svg" alt="breach-icon" />
                <span>Data breach</span>
              </div>
              <div className="right">
                <span>1 incident</span>
                <img src="/img/step-3/warning-icon.svg" alt="warning-icon" />
              </div>
            </div>
          </div>

          <div className="security-score">
            <div className="headline">
              <h3>Network Security Score</h3>
              <p>
                Based on your device setup, scan results, and known threat
                reports.
              </p>
            </div>

            <div className="rating">
              <h4>
                <span className="circle" />
                <span className="text">Attention Required</span>
              </h4>

              <div className="scale">
                <div className="visuals">
                  <div className="one" />
                  <div className="two" />
                  <div className="three" />
                  <div className="four" />
                  <div className="five" />
                </div>
                <div className="sub">
                  <span>Unsecure</span>
                  <span>Secure</span>
                </div>
              </div>
            </div>
          </div>
        </main>

        <footer>
          <button className="btn" onClick={handleClick}>
            Find the Best Protection App
          </button>
        </footer>
      </div>
    </>
  );
}

export default Step3;
