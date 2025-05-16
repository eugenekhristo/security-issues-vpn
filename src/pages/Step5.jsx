import { useEffect, useState } from 'react';
import BgBlur from '../ui/BgBlur';
import { usePlans } from '../contexts/PlansContext';
import { postPlan } from '../services/postPlan';
import StripeRedirectOverlay from '../ui/StripeRedirectOverlay';

const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function Step5() {
  const [emailInput, setEmailInput] = useState('');
  const isValidEmail = regex.test(emailInput);

  const { plans, activePlanName, isLoading, error, dispatch } = usePlans();
  const planId = plans.reduce((acc, cur) => {
    if (cur.shortName === activePlanName) {
      return cur.id;
    }
    return acc;
  }, '');

  function handleButtonClick() {
    localStorage.setItem(
      'userSelection',
      JSON.stringify({
        email: emailInput,
        activePlanName,
      })
    );

    postPlan(emailInput, planId, dispatch);
  }

  useEffect(() => {
    const userSelection = localStorage.getItem('userSelection');

    if (userSelection) {
      const { email } = JSON.parse(userSelection);
      setEmailInput(email);
    }
  }, []);

  return (
    <>
      {isLoading && !error && <StripeRedirectOverlay />}
      <div className="container step-5">
        <BgBlur backgroundColor={'#007AFF'} />

        <div className="wrapper">
          <h2>Where should we send your app link?</h2>

          <div className="input-box">
            <div className="input">
              <label htmlFor="email">Your email address</label>
              <input
                type="email"
                required
                name="email"
                id="email"
                placeholder="you@example.com"
                onChange={(e) => setEmailInput(e.target.value)}
                value={emailInput}
              />
            </div>
            <div className="sub">
              <img src="/img/step-5/lock.svg" alt="lock-icon" />
              <p>
                We respect your privacy and we are committed to protecting your
                personal data. By continuing, you agree to our{' '}
                <a href="https://guruvpn.com/terms" target="_blank">
                  Terms of Use
                </a>{' '}
                and{' '}
                <a href="https://guruvpn.com/policy" target="_blank">
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>

          <button
            className={`btn ${!isValidEmail && 'disabled'}`}
            onClick={handleButtonClick}
          >
            Continue
          </button>
        </div>
      </div>
    </>
  );
}

export default Step5;
