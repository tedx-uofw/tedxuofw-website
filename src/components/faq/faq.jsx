import React, { useState } from 'react';
import Button from "../button/button.jsx";
import './faq.css';
import downArrow from '../../assets/downArrow.svg'

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


      {/* general FAQ section */}
      <div className="genFaq question-section">
        <h2>General FAQ</h2>
        <div className="dropdown-join-container">
          <div className="dropdown">
            <button className={`accordion ${activeIndex === 0 ? 'active' : ''}`} onClick={() => togglePanel(0)}>This is a really long question to fill up space but TEDx this does this but what does TEDx how does that TEDx you know?<img src={downArrow} alt="down arrow img" className={`arrow ${activeIndex === 0 ? 'rotate' : ''}`} /></button>
            <div className="panel" style={{ display: activeIndex === 0 ? 'block' : 'none' }}>
              <div className="panel-text">
                <p>this is a really long long answer something tedx does daily and then the design team yadada i really love teddy bears i think they're SAURR CUTE and i think next year we should have tedx teddy bear merch hehe</p>
              </div>
            </div>

            <button className={`accordion ${activeIndex === 1 ? 'active' : ''}`} onClick={() => togglePanel(1)}>This is a really long question to fill up space but TEDx this does this but what does TEDx how does that TEDx you know?<img src={downArrow} alt="down arrow img" className={`arrow ${activeIndex === 1 ? 'rotate' : ''}`} /></button>
            <div className="panel" style={{ display: activeIndex === 1 ? 'block' : 'none' }}>
              <div className="panel-text">
                <p>this is a really long long answer something tedx does daily and then the design team yadada i really love teddy bears i think they're SAURR CUTE and i think next year we should have tedx teddy bear merch hehe</p>
              </div>            
            </div>

            <button className={`accordion ${activeIndex === 2 ? 'active' : ''}`} onClick={() => togglePanel(2)}>This is a really long question to fill up space but TEDx this does this but what does TEDx how does that TEDx you know?<img src={downArrow} alt="down arrow img" className={`arrow ${activeIndex === 2 ? 'rotate' : ''}`} /></button>
            <div className="panel" style={{ display: activeIndex === 2 ? 'block' : 'none' }}>
              <div className="panel-text">
                <p>this is a really long long answer something tedx does daily and then the design team yadada i really love teddy bears i think they're SAURR CUTE and i think next year we should have tedx teddy bear merch hehe</p>
              </div>            
            </div>

            <button className={`accordion ${activeIndex === 3 ? 'active' : ''}`} onClick={() => togglePanel(3)}>This is a really long question to fill up space but TEDx this does this but what does TEDx how does that TEDx you know?<img src={downArrow} alt="down arrow img" className={`arrow ${activeIndex === 3 ? 'rotate' : ''}`} /></button>
            <div className="panel" style={{ display: activeIndex === 3 ? 'block' : 'none' }}>
              <div className="panel-text">
                <p>this is a really long long answer something tedx does daily and then the design team yadada i really love teddy bears i think they're SAURR CUTE and i think next year we should have tedx teddy bear merch hehe</p>
              </div>            
            </div>

            <button className={`accordion ${activeIndex === 4 ? 'active' : ''}`} onClick={() => togglePanel(4)}>This is a really long question to fill up space but TEDx this does this but what does TEDx how does that TEDx you know?<img src={downArrow} alt="down arrow img" className={`arrow ${activeIndex === 4 ? 'rotate' : ''}`} /></button>
            <div className="panel" style={{ display: activeIndex === 4 ? 'block' : 'none' }}>
              <div className="panel-text">
                <p>this is a really long long answer something tedx does daily and then the design team yadada i really love teddy bears i think they're SAURR CUTE and i think next year we should have tedx teddy bear merch hehe</p>
              </div>            
            </div>
          </div>

          {/* join our team section */}
          <div className="faq-join">
            <div className="faq-join-descr">
              <h3>Join our Team!</h3>
              <p>Are you passionate about TED talks and teddy bears? Are you ready to help make an impact in your community? Apply now to Join our team!</p>
            </div>
            <div className="faq-join-button">
              <Button title="JOIN NOW" link="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" />
            </div>
          </div>
        </div>
      </div>


      {/* speaker FAQ section */}
      <div className="speakerFaq question-section">
        <h2>Speaker FAQ</h2>
        <div className="dropdown-join-container">
          <div className="dropdown">
            <button className={`accordion ${activeIndex === 5 ? 'active' : ''}`} onClick={() => togglePanel(5)}>This is a really long question to fill up space but TEDx this does this but what does TEDx how does that TEDx you know?<img src={downArrow} alt="down arrow img" className={`arrow ${activeIndex === 5 ? 'rotate' : ''}`} /></button>
            <div className="panel" style={{ display: activeIndex === 5 ? 'block' : 'none' }}>
              <div className="panel-text">
                <p>this is a really long long answer something tedx does daily and then the design team yadada i really love teddy bears i think they're SAURR CUTE and i think next year we should have tedx teddy bear merch hehe</p>
              </div>
            </div>

            <button className={`accordion ${activeIndex === 6 ? 'active' : ''}`} onClick={() => togglePanel(6)}>This is a really long question to fill up space but TEDx this does this but what does TEDx how does that TEDx you know?<img src={downArrow} alt="down arrow img" className={`arrow ${activeIndex === 6 ? 'rotate' : ''}`} /></button>
            <div className="panel" style={{ display: activeIndex === 6 ? 'block' : 'none' }}>
              <div className="panel-text">
                <p>this is a really long long answer something tedx does daily and then the design team yadada i really love teddy bears i think they're SAURR CUTE and i think next year we should have tedx teddy bear merch hehe</p>
              </div>            
            </div>

            <button className={`accordion ${activeIndex === 7 ? 'active' : ''}`} onClick={() => togglePanel(7)}>This is a really long question to fill up space but TEDx this does this but what does TEDx how does that TEDx you know?<img src={downArrow} alt="down arrow img" className={`arrow ${activeIndex === 7 ? 'rotate' : ''}`} /></button>
            <div className="panel" style={{ display: activeIndex === 7 ? 'block' : 'none' }}>
              <div className="panel-text">
                <p>this is a really long long answer something tedx does daily and then the design team yadada i really love teddy bears i think they're SAURR CUTE and i think next year we should have tedx teddy bear merch hehe</p>
              </div>            
            </div>

            <button className={`accordion ${activeIndex === 8 ? 'active' : ''}`} onClick={() => togglePanel(8)}>This is a really long question to fill up space but TEDx this does this but what does TEDx how does that TEDx you know?<img src={downArrow} alt="down arrow img" className={`arrow ${activeIndex === 8 ? 'rotate' : ''}`} /></button>
            <div className="panel" style={{ display: activeIndex === 8 ? 'block' : 'none' }}>
              <div className="panel-text">
                <p>this is a really long long answer something tedx does daily and then the design team yadada i really love teddy bears i think they're SAURR CUTE and i think next year we should have tedx teddy bear merch hehe</p>
              </div>            
            </div>

            <button className={`accordion ${activeIndex === 9 ? 'active' : ''}`} onClick={() => togglePanel(9)}>This is a really long question to fill up space but TEDx this does this but what does TEDx how does that TEDx you know?<img src={downArrow} alt="down arrow img" className={`arrow ${activeIndex === 9 ? 'rotate' : ''}`} /></button>
            <div className="panel" style={{ display: activeIndex === 9 ? 'block' : 'none' }}>
              <div className="panel-text">
                <p>this is a really long long answer something tedx does daily and then the design team yadada i really love teddy bears i think they're SAURR CUTE and i think next year we should have tedx teddy bear merch hehe</p>
              </div>            
            </div>
          </div>

          {/* become a speaker section */}
          <div className="faq-speaker">
            <div className="faq-speaker-descr">
              <h3>Become a Speaker!</h3>
              <p>Are you passionate about TED talks and teddy bears? Are you ready to help make an impact in your community? Apply now to Join our team!</p>
            </div>
            <div className="faq-speaker-button">
              <div className="applyButton">
                <Button title="APPLY" link="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" />
              </div>
              <Button title="NOMINATE" link="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" />
            </div>
          </div>
        </div>
      </div>


      {/* sponsor FAQ section */}
      <div className="sponsorFaq question-section">
        <h2>Sponsor FAQ</h2>
        <div className="dropdown-join-container">
          <div className="dropdown">
            <button className={`accordion ${activeIndex === 10 ? 'active' : ''}`} onClick={() => togglePanel(10)}>This is a really long question to fill up space but TEDx this does this but what does TEDx how does that TEDx you know?<img src={downArrow} alt="down arrow img" className={`arrow ${activeIndex === 10 ? 'rotate' : ''}`} /></button>
            <div className="panel" style={{ display: activeIndex === 10 ? 'block' : 'none' }}>
              <div className="panel-text">
                <p>this is a really long long answer something tedx does daily and then the design team yadada i really love teddy bears i think they're SAURR CUTE and i think next year we should have tedx teddy bear merch hehe</p>
              </div>
            </div>

            <button className={`accordion ${activeIndex === 11 ? 'active' : ''}`} onClick={() => togglePanel(11)}>This is a really long question to fill up space but TEDx this does this but what does TEDx how does that TEDx you know?<img src={downArrow} alt="down arrow img" className={`arrow ${activeIndex === 11 ? 'rotate' : ''}`} /></button>
            <div className="panel" style={{ display: activeIndex === 11 ? 'block' : 'none' }}>
              <div className="panel-text">
                <p>this is a really long long answer something tedx does daily and then the design team yadada i really love teddy bears i think they're SAURR CUTE and i think next year we should have tedx teddy bear merch hehe</p>
              </div>            
            </div>

            <button className={`accordion ${activeIndex === 12 ? 'active' : ''}`} onClick={() => togglePanel(12)}>This is a really long question to fill up space but TEDx this does this but what does TEDx how does that TEDx you know?<img src={downArrow} alt="down arrow img" className={`arrow ${activeIndex === 12 ? 'rotate' : ''}`} /></button>
            <div className="panel" style={{ display: activeIndex === 12 ? 'block' : 'none' }}>
              <div className="panel-text">
                <p>this is a really long long answer something tedx does daily and then the design team yadada i really love teddy bears i think they're SAURR CUTE and i think next year we should have tedx teddy bear merch hehe</p>
              </div>            
            </div>

            <button className={`accordion ${activeIndex === 13 ? 'active' : ''}`} onClick={() => togglePanel(13)}>This is a really long question to fill up space but TEDx this does this but what does TEDx how does that TEDx you know?<img src={downArrow} alt="down arrow img" className={`arrow ${activeIndex === 13 ? 'rotate' : ''}`} /></button>
            <div className="panel" style={{ display: activeIndex === 13 ? 'block' : 'none' }}>
              <div className="panel-text">
                <p>this is a really long long answer something tedx does daily and then the design team yadada i really love teddy bears i think they're SAURR CUTE and i think next year we should have tedx teddy bear merch hehe</p>
              </div>           
            </div>

            <button className={`accordion ${activeIndex === 14 ? 'active' : ''}`} onClick={() => togglePanel(14)}>This is a really long question to fill up space but TEDx this does this but what does TEDx how does that TEDx you know?<img src={downArrow} alt="down arrow img" className={`arrow ${activeIndex === 14 ? 'rotate' : ''}`} /></button>
            <div className="panel" style={{ display: activeIndex === 14 ? 'block' : 'none' }}>
              <div className="panel-text">
                <p>this is a really long long answer something tedx does daily and then the design team yadada i really love teddy bears i think they're SAURR CUTE and i think next year we should have tedx teddy bear merch hehe</p>
              </div>            
            </div>
          </div>
        </div>
      </div>

      

      


    </div>
  );
};

export default Faq;
