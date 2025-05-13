import { useNavigate } from 'react-router';
import BgBlur from '../ui/BgBlur';

function Step1() {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/step-2');
  }

  return (
    <div className="container step-1">
      <BgBlur backgroundColor={'#FF3B30'} />

      <header>
        <div className="top">
          <img src="/img/step-1/logo.png" alt="logo" />
          <span>Detected by AI Safe Internet Association</span>
        </div>
        <h1>
          Your connection
          <br />
          is not secure!
        </h1>
      </header>

      <main>
        <img
          src="/img/step-1/hero.png"
          alt="man holding mobile phone with security issues elemnts floating around him"
          className="hero-img"
        />

        <ul>
          <li>
            <span>🕵️</span>
            <span>Hackers can see your IP</span>
          </li>
          <li>
            <span>🔓</span>
            <span>Your data isn’t protected</span>
          </li>
          <li>
            <span>🚫</span>
            <span>No encryption — high risk</span>
          </li>
          <li>
            <span>👁</span>
            <span>You're being tracked online</span>
          </li>
        </ul>
      </main>

      <footer>
        <div className="top">
          <img src="/img/step-1/shield.svg" alt="icon" />
          <span>Start a free device security check</span>
        </div>
        <button className="btn" onClick={handleClick}>
          Scan your iPhone
        </button>
      </footer>
    </div>
  );
}

export default Step1;
