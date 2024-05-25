import React, { useState } from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import { motion } from "framer-motion";
import emailIcon from "../../images/email-icon.svg";
import phoneIcon from "../../images/phone-icon.svg";
import linkedin from "../../images/linkedin.svg";
import githubIcon from "../../images/github.svg";
import whatsapp from "../../images/whatsapp.svg";
import telegram from "../../images/telegram.svg";
import instagramIcon from "../../images/instagram.svg";
import "./styles.css";
import { Tilt } from 'react-tilt'; 
import Lottie from 'lottie-react';
import Coder from '../../LottieFiles/1.json'; 

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { name, email, description });
  };

  const text = "Say Hello";

  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="My Contact"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="contact__content">
        <Animate
          play={true}
          duration={1}
          delay={0}
          start={{ transform: "translateX(-200px)" }}
          end={{ transform: "translateX(0px)" }}
        >
          <div className="animated-text">
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 3, repeat: Infinity, delay: index * 0.1 }}
              >
                {letter}
              </motion.span>
            ))}
            😊
          </div>
        </Animate>

        <div className="contact__content__form">
          <form onSubmit={handleSubmit}>
            <div className="contact__content__form__controlswrapper">
              <div>
                <input
                  required={true}
                  name="name"
                  className="inputName"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="name" className="nameLabel">
                  Name
                </label>
              </div>
              <div>
                <input
                  required={true}
                  name="email"
                  className="inputEmail"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="email" className="emailLabel">
                  Email
                </label>
              </div>
              <div>
                <textarea
                  required={true}
                  name="description"
                  className="inputDescription"
                  type="text"
                  rows="5"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                <label htmlFor="description" className="descriptionLabel">
                  Description
                </label>
              </div>
            </div>
            <button className="form-button" type="submit">
              Submit
            </button>
          </form>
          <div className="A">
            <Lottie
              animationData={Coder}
              loop={true}
            />
          </div>
        </div>
        <div className="contacts">
          <div>
            <a href="mailto:kanyshay.serikzhan@narxoz.kz"><img src={emailIcon} alt="Email" /></a> 
            <a href="mailto:kanyshay.serikzhan@narxoz.kz">kanyshay.serikzhan@narxoz.kz</a>
          </div>
          <div>
            <a href="tel:+7 7778206242"><img src={phoneIcon} alt="Phone No" /></a>
            <a href="tel:+7 7778206242">tel:+7 7778206242</a>
          </div>
          <div className="social-media">
            <a href="https://www.linkedin.com/in/қанышай-серікжан" target="_blank" rel="noreferrer">
              <img src={linkedin} alt="Linkedin" />
            </a>
            <a href="https://github.com/KANishay04" target="_blank" rel="noreferrer">
              <img src={githubIcon} alt="GitHub" />
            </a>
            <a href="https://wa.me/77778206242" target="_blank" rel="noreferrer">
              <img src={whatsapp} alt="Whatsapp" />
            </a>
            <a href="https://t.me/Kanishay" target="_blank" rel="noreferrer">
              <img src={telegram} alt="Telegram" />
            </a>
            <a href="https://www.instagram.com/kanishay___/" target="_blank" rel="noreferrer">
              <img src={instagramIcon} alt="Instagram" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
