import { useSearchParams } from 'react-router';
import BgBlur from '../ui/BgBlur';

function Success() {
  const [serchParams] = useSearchParams();

  return (
    <div className="container success">
      <BgBlur backgroundColor={'#007AFF'} />
      <div className="wrapper">
        <div className="email">
          <img src="/img/success/check.svg" alt="icon" />
          <div className="copy_wrapper">
            <h2>Purchase Confirmed!</h2>
            <div className="copy">
              <span className="plain">We've emailed you the download link</span>
              <div className="user_email">
                <span className="emoji">📩</span>
                <span className="text">{serchParams.get('email')}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="appstore">
          <div className="copy">
            <span className="text">Or simply download it below</span>
            <span className="emoji">👇</span>
          </div>
          <a href="#">
            <img src="/img/success/appstore.png" alt="download on appstore" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Success;
