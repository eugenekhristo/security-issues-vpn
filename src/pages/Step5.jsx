import BgBlur from '../ui/BgBlur';

function Step5() {
  return (
    <div className="container step-5">
      <BgBlur backgroundColor={'#007AFF'} />

      <div className="wrapper">
        <h2>Enter your email</h2>

        <div className="input-box">
          <div className="input">
            <label htmlFor="email">
              Email address <span>(required)</span>
            </label>
            <input
              type="email"
              required
              name="email"
              id="email"
              placeholder="Enter your email here"
            />
          </div>
          <div className="sub">
            <img src="/img/step-5/lock.svg" alt="lock-icon" />
            <p>
              We respect your privacy and we are committed to protecting your
              personal data. By continuing you indicate that you’ve read and
              agree to our{' '}
              <a href="https://guruvpn.com/terms" target="terms">
                Terms of Use
              </a>{' '}
              and{' '}
              <a href="https://guruvpn.com/policy" target="privacy">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>

        <button className="btn disabled">Continue</button>
      </div>
    </div>
  );
}

export default Step5;
