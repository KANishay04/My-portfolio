import React, { useState } from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import "./styles.css"; 
import { Tilt } from 'react-tilt'; 
import myPhoto from '../../images/MyPhoto.png';

const About = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <section id="about" className="about">
      <PageHeaderContent headerText="About Me" icon={<BsInfoCircleFill size={40} />} />
      <div className='AboutPage'>
        
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Get to <b>know</b> me!</h1>
          <p>
            Hi, my name is <b>Serikzhan Kanishay</b> and I am from Almaty, Kazakhstan.
            I'm a <b>3rd year student</b> of IT, Digital Managment. <br /><br />
            I have done an internship as a <b>3D modeller</b> at company Dansai Studios.
            I love to create original projects with beautiful designs, you can check out some of my work in the projects section.<br /><br />
            I am <b>open</b> to new collaborations or work where I can contribute and grow. Feel free to connect with me, links are in the contact page.<br />
            </p>
            <button onClick={toggleModal}>Open Modal</button>
        </div>
        <div className='TiltWrapper'>
          <Tilt>
            <div className="AvatarWrapper">
              <img 
                src={myPhoto} 
                alt="My Photo" 
                className="Avatar"
              />
            </div>
          </Tilt>
        </div>
      </div>
      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleModal}>&times;</span>
            <h2>...</h2>
            <p>Opportunities don't come by themselves - you create them.</p>
          </div>
          
        </div>
        
      )}
    </section>
  );
};

export default About;
