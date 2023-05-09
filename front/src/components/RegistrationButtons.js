import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSuitcase, faMugHot } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';

function RegistrationButtons() {
  return (
    <div className="registration-buttons">
      <Link to="/therapist-registration">
        <button className="therapist-registration-button">
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <FontAwesomeIcon icon={faSuitcase} size="2x" />
            <span>I’m a freelancer, looking for work</span>
          </div>
        </button>
      </Link>
      <Link to="/user-registration">
        <button className="user-registration-button">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <FontAwesomeIcon icon={faMugHot} size="2x" />
            <span>I’m a user, searching for a therapist</span>
          </div>
        </button>
      </Link>
    </div>
  );
}

export default RegistrationButtons;
