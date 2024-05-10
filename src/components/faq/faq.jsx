import React, { useState } from 'react';
import Button from "../button/button.jsx";
import './faq.css';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const togglePanel = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div id="faq">
      <div className="faq-header">
        <h1>Frequently Asked Questions</h1>
      </div>

      <div className="genFaq">
        <h2>General FAQ</h2>
        <div className="dropdown-join-container">
          <div className="dropdown">
            <button className={`accordion ${activeIndex === 0 ? 'active' : ''}`} onClick={() => togglePanel(0)}>This is a really long question to fill up space but TEDx this does this but what does TEDx how does that TEDx you know?</button>
            <div className="panel" style={{ display: activeIndex === 0 ? 'block' : 'none' }}>
              <p>this is a really long long answer something tedx does daily and then the design team yadada i really love teddy bears i think they're SAURR CUTE and i think next year we should have tedx teddy bear merch hehe</p>
            </div>

            <button className={`accordion ${activeIndex === 1 ? 'active' : ''}`} onClick={() => togglePanel(1)}>This is a really long question to fill up space but TEDx this does this but what does TEDx how does that TEDx you know?</button>
            <div className="panel" style={{ display: activeIndex === 1 ? 'block' : 'none' }}>
              <p>this is a really long long answer something tedx does daily and then the design team yadada i really love teddy bears i think they're SAURR CUTE and i think next year we should have tedx teddy bear merch hehe</p>
            </div>

            <button className={`accordion ${activeIndex === 2 ? 'active' : ''}`} onClick={() => togglePanel(2)}>This is a really long question to fill up space but TEDx this does this but what does TEDx how does that TEDx you know?</button>
            <div className="panel" style={{ display: activeIndex === 2 ? 'block' : 'none' }}>
              <p>this is a really long long answer something tedx does daily and then the design team yadada i really love teddy bears i think they're SAURR CUTE and i think next year we should have tedx teddy bear merch hehe</p>
            </div>

            <button className={`accordion ${activeIndex === 3 ? 'active' : ''}`} onClick={() => togglePanel(3)}>This is a really long question to fill up space but TEDx this does this but what does TEDx how does that TEDx you know?</button>
            <div className="panel" style={{ display: activeIndex === 3 ? 'block' : 'none' }}>
              <p>this is a really long long answer something tedx does daily and then the design team yadada i really love teddy bears i think they're SAURR CUTE and i think next year we should have tedx teddy bear merch hehe</p>
            </div>

            <button className={`accordion ${activeIndex === 4 ? 'active' : ''}`} onClick={() => togglePanel(4)}>This is a really long question to fill up space but TEDx this does this but what does TEDx how does that TEDx you know?</button>
            <div className="panel" style={{ display: activeIndex === 4 ? 'block' : 'none' }}>
              <p>this is a really long long answer something tedx does daily and then the design team yadada i really love teddy bears i think they're SAURR CUTE and i think next year we should have tedx teddy bear merch hehe</p>
            </div>

          </div>
          <div className="faq-join">
            <div className="faq-join-descr">
              <h3>Join our Team!</h3>
              <p>Are you passionate about TED talks and teddy bears? Are you ready to help make an impact in your community? Apply now to Join our team!</p>
            </div>
            <div className="faq-join-button">
              <Button title="JOIN NOW" />
            </div>
          </div>
        </div>
      </div>

      

      <div className="faq-speaker">
        <div className="faq-speaker-descr">
          <h3>Become a Speaker!</h3>
          <p>Are you passionate about TED talks and teddy bears? Are you ready to help make an impact in your community? Apply now to Join our team!</p>
        </div>
        <div className="faq-speaker-button">
          <div className="applyButton">
            <Button title="APPLY" />
          </div>
          <Button title="NOMINATE" />
        </div>
      </div>


    </div>
  );
};

export default Faq;
