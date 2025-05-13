import BgBlur from '../ui/BgBlur';

function Step4() {
  return (
    <div className="container step-4">
      <BgBlur backgroundColor={'#007AFF'} />
      <h2>We recommend...</h2>

      <div className="logo">
        <img src="/img/step-4/guru.png" alt="logo" />
        <h4>VPN Guru</h4>
      </div>

      <ul>
        <li>
          <img src="/img/step-4/check-green-icon.svg" alt="check-green-icon" />
          <span>Military-Grade Privacy</span>
        </li>
        <li>
          <img src="/img/step-4/check-green-icon.svg" alt="check-green-icon" />
          <span>Lightning-Fast Speeds</span>
        </li>
        <li>
          <img src="/img/step-4/check-green-icon.svg" alt="check-green-icon" />
          <span>One-Tap Simplicity</span>
        </li>
        <li>
          <img src="/img/step-4/check-green-icon.svg" alt="check-green-icon" />
          <span>Zero-Logs Guaranteed</span>
        </li>
      </ul>

      <div className="plans">
        <div className="box box--week active">
          <div className="content">
            <h4>Weekly $7.99</h4>
            <p>Just $1.14/day — flexible short-term option</p>
          </div>

          <div className="checkbox" />
        </div>

        <div className="box box--month">
          <div className="content">
            <h4>
              <span>Monthly</span>
              <span className="prev">$56</span>
              <span>$35.99</span>
            </h4>
            <p>Just $1.20/day — save more long term</p>
          </div>

          <div className="checkbox" />
        </div>
      </div>
    </div>
  );
}

export default Step4;
