import React, { useState, useEffect } from 'react';
import ChatModal from './ChatModal';
import LOGIN from './LOGIN';
import MockAuthService from './MockAuthService';

const Home: React.FC = () => {
  const [isFloating, setIsFloating] = useState(false);
  const [isChatModalOpen, setIsChatModalOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);


  const handleLoginButtonClick = () => {
    setIsLoginOpen(!isLoginOpen); // Toggle the state to open/close LOGIN component
  };

  

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsFloating(scrollPosition > 50);
      // Close the login component if it's open and user scrolls up
      if (scrollPosition <= 50 && isLoginOpen) {
        setIsLoginOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isLoginOpen]);

  const handleImageClick = (altText: string) => {
    alert(altText);
  };




  

  const handleChatIconClick = () => {
    setIsChatModalOpen(!isChatModalOpen);
  };

  return (
    <header className={`home ${isFloating ? 'floating' : ''}`} id="home">
      <video autoPlay loop muted style={{ width: '100%', height: '320px', objectFit: 'fill', marginBottom:'-7px', opacity:'1'}}>
        <source src="src/assets/Advertisement.mp4" type="video/mp4" />
      </video>

      {/* This is the floating icon for chatbot */}
      <div id="book-me">
        <a onClick={handleChatIconClick} style={{ cursor: 'pointer' }}>
          {isChatModalOpen ? (
            <svg
              className="chatbot-message-icon"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
              role="img"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 18L18 6M6 6l12 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              className="chatbot-message-icon"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
              role="img"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 4H20V16H5.17L4 17.17V4ZM3 2C2.44772 2 2 2.44772 2 3V20.25L5.25 17H20C21.1046 17 22 16.1046 22 15V3C22 1.89543 21.1046 1 20 1H4C3.44772 1 3 1.44772 3 2Z"
                fill="currentColor"
              />
            </svg>
          )}
        </a>
      </div>

      <h1 className="Title-Vid">
        Camarines Norte <span>FoodWaste</span>
      </h1>
      <p className="Description-header">
        At ReduceWaste.com, we believe in the power of collective action to tackle one of the most pressing issues of our
        time: food waste. Every year, billions of tons of food are wasted globally, contributing to environmental
        degradation, economic losses, and exacerbating issues of hunger and food insecurity.
      </p>

      <div className={`content-backup ${isFloating ? 'floating' : ''}`}>
        <section>
          <img src="src/assets/lockIcon.png" alt="Lock" onClick={() => handleImageClick('Create Account')} />
          <h1>Create Account</h1>
          <p>First you have to create an account here</p>
        </section>

        <section>
          <img src="src/assets/MapIcon.png" alt="Lock" onClick={() => handleImageClick('Location Access')} />
          <h1>Location Access</h1>
          <p>Allow GPS for tracking</p>
        </section>

        <section>
          <img src="src/assets/OTP.png" alt="Lock" onClick={() => handleImageClick('OTP')} />
          <h1>OTP</h1>
          <p>For Legitimacy</p>
        </section>
      </div>

      <div className="Card-contents">
        <div
          className="float-Cards"
          style={{
            opacity: isFloating ? 1 : 0,
            transition: 'opacity 0.5s ease',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <div className="card">
            <img src="src/assets/cards-images/Customers.png" alt="Customer image" style={{ width: '100%', height: '60%' }} />
            <h3>CUSTOMER</h3>
            <p>This is the customer description</p>
            <a href="" className="btn">
              Read More
            </a>
          </div>

          <div className="card">
            <img src="src/assets/cards-images/Vendors.jpg" alt="Customer image" style={{ width: '100%', height: '60%' }} />
            <h3>VENDOR</h3>
            <p>This is the customer description</p>
            <a href="" className="btn">
              Read More
            </a>
          </div>

          <div className="card">
            <img src="src/assets/cards-images/organization.jpg" alt="Customer image" style={{ width: '100%', height: '60%' }} />
            <h3>ORGANIZATION</h3>
            <p>This is the customer description</p>
            <a href="#" className="btn" onClick={() => handleImageClick('Organization Details')}>
              Read More
            </a>
          </div>
        </div>
        <div></div>
        <div className="description-users">
          <p>
            The website continues to function and evolve because users have distinct roles, embodying characters that play
            integral roles in its operation and ongoing development.
          </p>
        </div>

        <h1 className="news-title">
          RELATED <span>ARTICLES</span>
        </h1>
        <section className="news">
          <div className="slider-container">
            <div className="slide">
              <video src="src/assets/Advertisement.mp4" autoPlay loop muted></video>
              <p>News 1</p>
            </div>
            <div className="slide">
              <video src="src/assets/Advertisement.mp4" autoPlay loop muted></video>
              <p>News 2</p>
            </div>
            <div className="slide">
              <video src="src/assets/Advertisement.mp4" autoPlay loop muted></video>
              <p>News 3</p>
            </div>
            <div className="slide">
              <video src="src/assets/Advertisement.mp4" autoPlay loop muted></video>
              <p>News 4</p>
            </div>
          </div>
        </section>
      </div>

      <div className="centered-login-button">
        <button className="btnLOGIN" onClick={handleLoginButtonClick}>
          {isLoginOpen ? 'Hide Login' : 'SHOW LOGIN FORM'}
        </button>
      </div>

      {isChatModalOpen && <ChatModal onClose={handleChatIconClick} />}
      {isLoginOpen && <LOGIN />}
    </header>
  );
};

export default Home;
