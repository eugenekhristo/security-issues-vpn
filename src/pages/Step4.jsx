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
          <img src="/img/step-4/profit.svg" alt="sale label" className="sale" />
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

      <div className="secure-checkout">
        <div className="headline">
          <span className="title">Guaranteed safe checkout</span>
          <span className="label">
            <img
              src="/img/step-4/shield-outline-icon.svg"
              alt="shield-outline-icon"
            />
            <span>Secure checkout</span>
          </span>
        </div>
        <div className="providers">
          <img src="/img/step-4/mastercard.svg" alt="mastercard" />
          <img src="/img/step-4/visa.svg" alt="visa" />
          <img src="/img/step-4/amex.svg" alt="amex" />
          <img src="/img/step-4/jcb.svg" alt="jcb" />
          <img src="/img/step-4/stripe.svg" alt="stripe" />
        </div>
      </div>

      <footer>
        <div className="timer">
          <img src="/img/step-4/gift.png" alt="gift" />
          <span className="cta">
            <span className="off">40% OFF</span> <span>expires in</span>
          </span>
          <div className="countdown">
            <div className="decor decor--left" />
            <div className="decor decor--right" />
            <span className="time">
              <p className="minutes">04</p>
              <p className="dots">:</p>
              <p className="seconds">59</p>
            </span>
          </div>
        </div>

        <div className="sub">
          <button className="btn">Activate My Protection</button>
          <div className="info">
            <img src="/img/step-4/shield-icon.svg" alt="shield-icon" />
            <span>
              Your payment is securely processed via Stripe — no login or
              account required.
            </span>
          </div>
          <div className="links">
            <a href="#">Privacy Policy</a>
            <div className="divider" />
            <a href="#">Terms of Use</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Step4;
