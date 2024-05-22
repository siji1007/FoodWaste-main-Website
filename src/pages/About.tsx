import React, { useEffect, useRef, useState } from 'react';

const About: React.FC = () => {
  const secondSectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Set visibility to true when intersecting
        } else {
          setIsVisible(false); // Set visibility to false when not intersecting
        }
      });
    });
  
    if (secondSectionRef.current) {
      observer.observe(secondSectionRef.current);
    }
  
    return () => {
      if (secondSectionRef.current) {
        observer.unobserve(secondSectionRef.current);
      }
    };
  }, []);

  return (
    <body>
      <section className='firstSection'>
        <h1 className="Title">About Us</h1>
      </section>
      <section ref={secondSectionRef} className={`secondSection ${isVisible ? 'scrolled' : ''}`}>
        <h2>
          Developers Behind This Project
        </h2>
        <div className="developers">
          <div className="developer">
            <img src='./src/assets/pfp.jpg' alt='Si Ji'/>
            <p>Si Ji - Full Stack</p>
          </div>
          <div className="developer">
            <img src='./src/assets/pfp.jpg' alt='Gerry Vien Flores'/>
            <p>Gerry Vien Flores - Full Stack</p>
          </div>
          <div className="developer">
            <img src='./src/assets/pfp.jpg' alt='Kian Arven Valencia'/>
            <p>Kian Arven Valencia - Etits</p>
          </div>
          <div className="developer">
            <img src='./src/assets/pfp.jpg' alt='Paul Andrei Dasco'/>
            <p>Paul Andrei Dasco - Artificial Intelligence</p>
          </div>
          <div className="developer">
            <img src='./src/assets/pfp.jpg' alt='Isaac Obusan'/>
            <p>Isaac Obusan - Designer</p>
          </div>
        </div>
      </section>
    </body>
  );
}
export default About;
