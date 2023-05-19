import '../css/home.css';
import { useState } from 'react';


function Home() {



  return (
    <>
 <div className="about-us-container">
 <div className="about-us">
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
          <img src={require('../images/8.jpg')}/>
        </div>
      </div>
      
 
  
  

    </>
  );
}

export default Home;