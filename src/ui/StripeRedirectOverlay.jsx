import './StripeRedirectOverlay.scss';

function StripeRedirectOverlay() {
  return (
    <div className="payment_spinner">
      <div className="wrapper">
        <div className="vertical-centered-box">
          <img src="./img/step-5/pay_stripe_black.svg" alt="pay_stripe" />
          <div className="content">
            <div className="loader-circle"></div>
            <div className="loader-line-mask">
              <div className="loader-line"></div>
            </div>
          </div>
        </div>
        <p>Initializing Stripe checkout redirect...</p>
      </div>
    </div>
  );
}

export default StripeRedirectOverlay;
