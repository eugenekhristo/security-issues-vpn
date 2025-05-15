import { useState } from 'react';
import BgBlur from '../ui/BgBlur';
import CountdownTimer from '../ui/CountdownTimer';
import { usePlans } from '../contexts/PlansContext';
import { useNavigate } from 'react-router';

function Step4() {
  const [activePlan, setActivePlan] = useState('week');
  const { plans, setActivePlan: setActivePlanContext } = usePlans();
  const navigate = useNavigate();

  const {
    weekPrice,
    weekDailyPrice,
    monthPrice,
    monthPriceOld,
    monthDailyPrice,
  } = plans.reduce(
    (acc, cur) => {
      if (cur.shortName === 'week') {
        return {
          ...acc,
          weekPrice: cur.price,
          weekDailyPrice: (cur.price / cur.days).toFixed(2),
        };
      }
      return {
        ...acc,
        monthPrice: cur.price,
        monthDailyPrice: (cur.price / cur.days).toFixed(2),
        monthPriceOld: Math.ceil(cur.price / (1 - cur.price / 100)).toFixed(0),
      };
    },
    {
      weekPrice: 0,
      weekDailyPrice: 0,
      monthPrice: 0,
      monthPriceOld: 0,
      monthDailyPrice: 0,
    }
  );

  function handleSelectPlan(e) {
    const { classList } = e.target.closest('.box');

    if (classList.contains('box--week')) {
      setActivePlan('week');
    } else {
      setActivePlan('month');
    }
  }

  function handleButtonClick() {
    setActivePlanContext(activePlan);
    navigate('/step-5');
  }

  return (
    <div className="container step-4">
      <BgBlur backgroundColor={'#007AFF'} />

      <h2>We recommend...</h2>

      <div className="logo">
        <picture>
          <source srcSet="./img/step-4/guru.webp" type="image/webp" />
          <source srcSet="./img/step-4/guru.png" type="image/png" />
          <img src="/img/step-4/guru.png" alt="logo" />
        </picture>
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
        <div
          className={`box box--week ${activePlan === 'week' && 'active'}`}
          onClick={handleSelectPlan}
        >
          <div className="content">
            <h4>Weekly ${weekPrice}</h4>
            <p>Just ${weekDailyPrice}/day — flexible short-term option</p>
          </div>

          <div className="checkbox" />
        </div>

        <div
          className={`box box--month ${activePlan === 'month' && 'active'}`}
          onClick={handleSelectPlan}
        >
          <img src="/img/step-4/profit.svg" alt="sale label" className="sale" />
          <div className="content">
            <h4>
              <span>Monthly</span>
              <span className="prev">${monthPriceOld}</span>
              <span>${monthPrice}</span>
            </h4>
            <p>Just ${monthDailyPrice}/day — save more long term</p>
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
          <picture>
            <source srcSet="./img/step-4/gift.webp" type="image/webp" />
            <source srcSet="./img/step-4/gift.png" type="image/png" />
            <img src="/img/step-4/gift.png" alt="gift" />
          </picture>

          <span className="cta">
            <span className="off">40% OFF</span> <span>expires in</span>
          </span>
          <div className="countdown">
            <div className="decor decor--left" />
            <div className="decor decor--right" />
            <span className="time">
              <CountdownTimer />
            </span>
          </div>
        </div>

        <div className="sub">
          <button className="btn" onClick={handleButtonClick}>
            Activate My Protection
          </button>
          <div className="info">
            <img src="/img/step-4/shield-icon.svg" alt="shield-icon" />
            <span>
              Your payment is securely processed via Stripe — no login or
              account required.
            </span>
          </div>
          <div className="links">
            <a href="https://guruvpn.com/policy" target="_blank">
              Privacy Policy
            </a>
            <div className="divider" />
            <a href="https://guruvpn.com/terms" target="_blank">
              Terms of Use
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Step4;
