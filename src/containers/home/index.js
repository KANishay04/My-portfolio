
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import cartoon from '../../images/c.png';
import './styles.css';

export default function CombinedHomeComponents() {
  const navigate = useNavigate();
  const [showChatbot, setShowChatbot] = useState(false);
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      e.preventDefault();
      e.returnValue = '';
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  const handleNavigateToContactMePage = () => {
    navigate('/contact');
  };

  const handleChatbotOpen = () => {
    setShowChatbot(true);
    setTyping(true);
    setTimeout(() => {
      setMessages([
        ...messages,
        'Сәлем, мен сіздің портфолио нұсқаушыңызбын. Мен сізге қалай көмектесе аламын?',
        'Айтыңызшы сайттың қай бөлігіне барғыңыз келеді? (проекттерім,дағдыларым)',
      ]);
      setTyping(false);
    }, 1500);
  };

  const handleChatbotClose = () => {
    setShowChatbot(false);
    setMessages([]);
  };

  const handleUserInput = () => {
    setMessages([...messages, query]);
    setQuery('');
    setTyping(true);
    setTimeout(() => {
      handleChatbotResponse(query);
      setTyping(false);
    }, 1500);
  };

  const handleChatbotResponse = (query) => {
    const words = query.toLowerCase().split(' ');
    let response = '';

    if (words.includes('резюме')) {
      response = 'Әрине! Сізге өз резюмемді көрсетемін!.';
      setMessages([...messages, response]);
      setTimeout(() => {
        navigate('/resume');
      }, 2000);
    } else if (words.includes('портфолио') || words.includes('проект') || words.includes('проекттер')) {
      response = 'Жақсы! Сізді Қанышайдың жобаларына апарады.';
      setMessages([...messages, response]);
      setTimeout(() => {
        navigate('/portfolio');
      }, 2000);
    } else if (words.includes('басты бет')) {
      response = 'Түсіндім! Сізді басты бетке қайта бағыттауда.';
      setMessages([...messages, response]);
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } else if (words.includes('байланыс')) {
      response = 'Байланыс бетіне өтейік.';
      navigate('/contact');
    } else if (words.includes('дағдылар') || words.includes('skill')) {
      response = 'Тамаша! Дағдылар бөліміне өту.';
      setMessages([...messages, response]);
      setTimeout(() => {
        navigate('/skills');
      }, 2000);
    } else if (words.includes('Мен туралы') || words.includes('about')) {
      response = 'Әрине! Сізді мен туралы бетіне бағыттаймын.';
      setMessages([...messages, response]);
      setTimeout(() => {
        navigate('/about');
      }, 2000);
    } else if (words.includes('hello') || words.includes('hi') || words.includes('cәлем')) {
      response = 'Сәлеметсіз бе!Сізге қалай көмектесе аламын?';
      setMessages([...messages, response]);
    } else if (words.includes('көмек') || words.includes('who are you')) {
      response =
      'Мен Қанышайдың портфолиосын шарлауға көмектесу үшін жасалған чатботпын. Оның жобалары, дағдылары немесе түйіндемелері туралы кез келген нәрсені сұрай аласыз!';
      setMessages([...messages, response]);
    } else {
      response = 'Кешіріңіз, мен бұған қалай көмектесетінімді білмеймін.';
      setMessages([...messages, response]);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleUserInput();
    }
  };
 
  return (
    <div className="home" id="home">
      <div className="ball"></div>
      <div className="mask">
        <img className="bg" src={cartoon} alt="girl-with-laptop" />
        {/*  */}
        <div className="flowers-container">
          {/*  */}
          <div className="flower"></div>
          <div className="flower"></div>
          <div className="flower"></div>
          {/* */}
        </div>
      </div>
      <section className="home__text-wrapper">
        <h1>
          Hello, I'm Kanishay!
        </h1>
      </section>
      <div className="chatbot-button-container">
        <button className="chatbot-button" onClick={handleChatbotOpen}>
          Chat
        </button>
      </div>
      {showChatbot && (
        <div className="chatbot-container">
          <div className="chatbot">
            <button onClick={handleChatbotClose} className="close-btn">
              Close
            </button>
            <div className="messages">
              {messages.map((message, index) => (
                <div key={index} className="message">
                  {message}
                </div>
              ))}
              {typing && <div className="message">Typing...</div>}
            </div>
            <input
              className="text"
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your query..."
            />
            <button onClick={handleUserInput} className="send">
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

