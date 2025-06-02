import { useNavigate, useSearchParams } from 'react-router';
import BgBlur from '../ui/BgBlur';
import { useEffect } from 'react';

function Step1() {
  const navigate = useNavigate();
  const [serchParams] = useSearchParams();

  function handleClick() {
    navigate('/step-2');
  }

  // https://safeinternetassociation.com/step-1?subid={subid}&pid=trafficjunky

  useEffect(() => {
    const subid = serchParams.get('subid');
    const pid = serchParams.get('pid');

    localStorage.setItem('keitaro', JSON.stringify({ subid, pid }));
  }, [serchParams]);

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
        <picture>
          <source srcSet="./img/step-1/hero.avif" type="image/avif" />
          <source srcSet="./img/step-1/hero.webp" type="image/webp" />
          <source srcSet="./img/step-1/hero.png" type="image/png" />
          <img
            src="/img/step-1/hero.png"
            alt="man holding mobile phone with security issues elemnts floating around him"
            className="hero-img"
          />
        </picture>

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
