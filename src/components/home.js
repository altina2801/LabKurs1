import '../css/home.css';
import { useState } from 'react';
import img102 from '../images/102.png';
import img103 from '../images/103.png';
import img104 from '../images/104.png';
import img105 from '../images/105.png';
import img106 from '../images/106.png';
function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const teamMembers = [
    { name: 'Jane Smith', position: ' Mental Health Counselor', image: img102 },
    { name: 'Emma White', position: ' Licensed Psychologist', image: img103 },
    { name: 'Daniel Brown', position: 'Behavioral Therapist', image: img104 },
    { name: 'Sarah Davis', position: 'Psychiatrist', image: img105 },
    { name: 'Anna Brown', position: 'Psychiatrist', image: img106 }
  ];
  const images = [
    { id: 1, src: require('../images/102.png'), alt: 'Slider Image 1' },
    { id: 2, src: require('../images/103.png'), alt: 'Slider Image 2' },
    { id: 3, src: require('../images/104.png'), alt: 'Slider Image 3' },
    { id: 4, src: require('../images/102.png'), alt: 'Slider Image 4' }
  ];
  const nextSlide = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };
const prevSlide = () => {
  setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
};
  

  const TeamMember = ({ name, position, image }) => {
    return (
      <div className="team-member">
        <div className="image-container">
          <img src={image} alt={name} />
          
        </div>
        <h2>{name}</h2>
        <div className="member-description">
            <p>{position}</p>
          </div>
      </div>
    );
  };


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
      
  <div className="ceo-container">
  <div className="ceo-description">
    <h1>BEHIND <b> <i>OUR SUCCESS</i></b></h1>
    <p>Rachel Johnson is the founder of Tranquillo, a mental health app that aims to provide accessible and affordable therapy services to people all over the world. Rachel's own personal struggles with anxiety and depression inspired her to create the app, as she saw a need for a platform that could connect people with licensed therapists in a convenient and user-friendly way.</p>

    <p>When asked about her motivation for creating Tranquillo, Rachel said, <b><i>"I believe that mental health care is a basic human right, and I want to do everything I can to make it accessible to as many people as possible. Technology has the power to transform the way we approach mental health, and I'm excited to be a part of that change."</i></b></p>

    <p>Through her dedication and hard work, Rachel has built a thriving business that is helping people all over the world. Her commitment to mental health awareness and advocacy is truly admirable, and her efforts have had a positive impact on countless individuals who are struggling with mental health challenges.</p>
  </div>
  <div className="ceo-image">
    <img src={require('../images/110.png')} />

  </div>
</div>


      
      <h1>Meet Our Team.</h1>
      <div className="image">
        
        {teamMembers.map((member, index) => (
          <TeamMember key={index} name={member.name} position={member.position} image={member.image} />
        ))}
      </div>

{/*SLIDER */}


    <div className="slider">
      {images.map((image) => (
        <img
          key={image.id}
          src={image.src}
          alt={image.alt}
          className={image.id === currentSlide + 1 ? 'slide active' : 'slide'}
        />
      ))}
      <div className="slider-buttons">
        <button onClick={prevSlide}>Previous</button>
        <button onClick={nextSlide}>Next</button>
      </div>
    </div>
  

    </>
  );
}

export default Home;