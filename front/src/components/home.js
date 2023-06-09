import '../css/home.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function Home() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const usernameFromLocation = location.state?.name || '';

  useEffect(() => {
    axios
      .get('http://localhost:5000')
      .then((res) => {
        if (res.data.valid) {
          setUsername(res.data.name);
        } else {
          navigate('./login');
        }
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="about-us-container">
        <div className="about-us">
          <div>
            <h1>Welcome {usernameFromLocation || username}</h1>
          </div>
          <h1 className="title">About Tranquillo</h1>
          <p>
            Welcome to Tranquillo, a mindfulness and meditation application designed
            to help you find inner peace and balance in your daily life. Our mission
            is to provide a simple, accessible, and effective tool for managing
            stress and anxiety, improving focus and concentration, and enhancing
            overall well-being.
          </p>
          <div className="learn-more">
            <button>Learn More</button>
          </div>
        </div>
        <div className="foto1">
          <img src={require('../images/8.jpg')} alt="Tranquillo" />
        </div>
      </div>

      <div className="second-container">
        <h2 className="our-services-header">Our Services</h2>
        <div className="service-icons-row">
          <div className="service-icon">
            <i className="fa fa-user plain-white-icon"></i>
            <p className="service-description">Online Therapist</p>
          </div>
          <div className="service-icon">
            <i className="fa fa-edit plain-white-icon"></i>
            <p className="service-description">Therapy Scheduling</p>
          </div>
          <div className="service-icon">
            <i className="fa fa-comments plain-white-icon"></i>
            <p className="service-description">Real Time Communication</p>
          </div>
          <div className="service-icon">
            <i className="fa fa-envelope plain-white-icon"></i>
            <p className="service-description">Instant Messaging</p>
          </div>
          <div className="service-icon">
            <i className="fa fa-cloud plain-white-icon"></i>
            <p className="service-description">Journaling</p>
          </div>
          <div className="service-icon">
            <i className="fa fa-calendar plain-white-icon"></i>
            <p className="service-description">Activity Plan</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;