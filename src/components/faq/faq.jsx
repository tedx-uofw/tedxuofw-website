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
      <div className="genFaq question-section" id="genFaq">
        <h2>General FAQ</h2>
        <div className="dropdown-join-container">
          <div className="dropdown-ctr">
            <button className={`accordion ${activeIndex === 0 ? 'active' : ''}`} onClick={() => togglePanel(0)}>I’d like to know about upcoming TEDxUofW events?<img src={downArrow} alt="down arrow img" className={`arrow ${activeIndex === 0 ? 'rotate' : ''}`} /></button>
            <div className="panel" style={{ display: activeIndex === 0 ? 'block' : 'none' }}>
              <div className="panel-text">
                <p>You can follow our <a href="https://www.instagram.com/tedxuofw/?hl=en">Instagram</a> for regular updates and check out our upcoming
                events on the <a href="/">home page</a>. Our annual conference is held in the spring (April-May) on
                the campus of the University of Washington.</p>
              </div>
            </div>

            <button className={`accordion ${activeIndex === 1 ? 'active' : ''}`} onClick={() => togglePanel(1)}>How can I volunteer?<img src={downArrow} alt="down arrow img" className={`arrow ${activeIndex === 1 ? 'rotate' : ''}`} /></button>
            <div className="panel" style={{ display: activeIndex === 1 ? 'block' : 'none' }}>
              <div className="panel-text">
                <p>Thank you for your interest in helping out! TEDxUofW wouldn’t exist without the
                contributions volunteers make at our events. Please <a href="/contact">contact us</a> a month prior to the
                event! We look forward to seeing you!</p>
              </div>
            </div>

            <button className={`accordion ${activeIndex === 2 ? 'active' : ''}`} onClick={() => togglePanel(2)}>Are TEDxUofW events open to the public?<img src={downArrow} alt="down arrow img" className={`arrow ${activeIndex === 2 ? 'rotate' : ''}`} /></button>
            <div className="panel" style={{ display: activeIndex === 2 ? 'block' : 'none' }}>
              <div className="panel-text">
                <p>Yes, our events are open to everyone! However, tickets must be purchased, which
                can be done on our website prior to the event or on the day of the event. If you're
                passionate about attending but can't afford the price, please <a href="/contact">contact us</a>!</p>
              </div>
            </div>

            <button className={`accordion ${activeIndex === 3 ? 'active' : ''}`} onClick={() => togglePanel(3)}>Can I watch past TEDxUofW talks online?<img src={downArrow} alt="down arrow img" className={`arrow ${activeIndex === 3 ? 'rotate' : ''}`} /></button>
            <div className="panel" style={{ display: activeIndex === 3 ? 'block' : 'none' }}>
              <div className="panel-text">
                <p>Yes! We upload videos of our talks to the official TEDx YouTube channel after each
                event. Be sure to subscribe to stay updated on the latest uploads and inspiring
                talks.</p>
              </div>
            </div>

            <button className={`accordion ${activeIndex === 4 ? 'active' : ''}`} onClick={() => togglePanel(4)}>Still have questions?<img src={downArrow} alt="down arrow img" className={`arrow ${activeIndex === 4 ? 'rotate' : ''}`} /></button>
            <div className="panel" style={{ display: activeIndex === 4 ? 'block' : 'none' }}>
              <div className="panel-text">
                <p>Please check out our <a href="#speakerFaq">Speaker FAQ</a> and <a href="#sponsorFaq">Sponsor FAQ</a> for more information about
                those areas. If you can’t find your answer on those pages, please don’t hesitate to <a href="/contact">contact us</a>!</p>
              </div>
            </div>
          </div>

          {/* join our team section */}
          <div className="faq-join">
            <div className="faq-join-descr">
              <h3>Join our Team!</h3>
              <p>Are you passionate about TED talks and looking for an opportunity to gain valuable
              experience? Whether you're interested in Design, Marketing, Web Development,
              Speaker Selection, or Logistics and Finance, there's a place for you on our team.
              While applications for UW students are currently closed, you can fill out this form to
              be notified when they reopen, typically in the first few weeks of fall quarter.</p>
            </div>
            <div className="faq-join-button">
              <Button title="JOIN NOW" link="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" />
            </div>
          </div>
        </div>
      </div>


      {/* speaker FAQ section */}
      <div className="speakerFaq question-section" id="speakerFaq">
        <h2>Speaker FAQ</h2>
        <div className="dropdown-join-container">
          <div className="dropdown-ctr">
            <button className={`accordion ${activeIndex === 5 ? 'active' : ''}`} onClick={() => togglePanel(5)}>How do I become a speaker?<img src={downArrow} alt="down arrow img" className={`arrow ${activeIndex === 5 ? 'rotate' : ''}`} /></button>
            <div className="panel" style={{ display: activeIndex === 5 ? 'block' : 'none' }}>
              <div className="panel-text">
                <p>Applications will open in November for the TEDxUofW conference in the following
                year. Requirements include submitting an outline of your talk and participating in an
                interview with the TEDxUofW Speaker Selection team, where you'll deliver your talk.</p>
              </div>
            </div>

            <button className={`accordion ${activeIndex === 6 ? 'active' : ''}`} onClick={() => togglePanel(6)}>What does being a speaker entail?<img src={downArrow} alt="down arrow img" className={`arrow ${activeIndex === 6 ? 'rotate' : ''}`} /></button>
            <div className="panel" style={{ display: activeIndex === 6 ? 'block' : 'none' }}>
              <div className="panel-text">
                <p>Being a speaker involves 6-10 talk development sessions over 3 months leading up
                to the conference with our speaker selection team and speaker coach. Additionally,
                you'll need to be present at a tech dress rehearsal and the entire day of the
                conference. It is a significant commitment.</p>
              </div>
            </div>

            <button className={`accordion ${activeIndex === 7 ? 'active' : ''}`} onClick={() => togglePanel(7)}>What are talk development sessions?<img src={downArrow} alt="down arrow img" className={`arrow ${activeIndex === 7 ? 'rotate' : ''}`} /></button>
            <div className="panel" style={{ display: activeIndex === 7 ? 'block' : 'none' }}>
              <div className="panel-text">
                <p>Talk development sessions are rehearsals where you'll receive feedback on your
                speech and public speaking skills. These sessions will be scheduled based on your
                availability.</p>
              </div>
            </div>

            <button className={`accordion ${activeIndex === 8 ? 'active' : ''}`} onClick={() => togglePanel(8)}>How many speakers will be at the conference?<img src={downArrow} alt="down arrow img" className={`arrow ${activeIndex === 8 ? 'rotate' : ''}`} /></button>
            <div className="panel" style={{ display: activeIndex === 8 ? 'block' : 'none' }}>
              <div className="panel-text">
                <p>There will be 5-8 speakers at the conference.</p>
              </div>
            </div>

            <button className={`accordion ${activeIndex === 9 ? 'active' : ''}`} onClick={() => togglePanel(9)}>Does my talk need to be memorized?<img src={downArrow} alt="down arrow img" className={`arrow ${activeIndex === 9 ? 'rotate' : ''}`} /></button>
            <div className="panel" style={{ display: activeIndex === 9 ? 'block' : 'none' }}>
              <div className="panel-text">
                <p>Yes! With no teleprompters available, it's crucial to have your talk memorized well in
                advance. Talk Development sessions and rehearsals will help you prepare.</p>
              </div>
            </div>

            <button className={`accordion ${activeIndex === 10 ? 'active' : ''}`} onClick={() => togglePanel(10)}>What does the theme of the event have to do with me?<img src={downArrow} alt="down arrow img" className={`arrow ${activeIndex === 10 ? 'rotate' : ''}`} /></button>
            <div className="panel" style={{ display: activeIndex === 10 ? 'block' : 'none' }}>
              <div className="panel-text">
                <p>While your talk doesn't need to directly align with the theme, we encourage
                speakers to consider how their message can relate to or enhance the event's theme
                for a cohesive experience.</p>
              </div>
            </div>

            <button className={`accordion ${activeIndex === 11 ? 'active' : ''}`} onClick={() => togglePanel(11)}>How strict are speaker deadlines?<img src={downArrow} alt="down arrow img" className={`arrow ${activeIndex === 11 ? 'rotate' : ''}`} /></button>
            <div className="panel" style={{ display: activeIndex === 11 ? 'block' : 'none' }}>
              <div className="panel-text">
                <p>We adhere strictly to our deadlines to ensure ample time for reviewing
                presentations and formatting. Failure to meet deadlines may result in termination of
                applications or speakership.</p>
              </div>
            </div>

            <button className={`accordion ${activeIndex === 12 ? 'active' : ''}`} onClick={() => togglePanel(12)}>What if I need special accommodations?<img src={downArrow} alt="down arrow img" className={`arrow ${activeIndex === 12 ? 'rotate' : ''}`} /></button>
            <div className="panel" style={{ display: activeIndex === 12 ? 'block' : 'none' }}>
              <div className="panel-text">
                <p>We accommodate special needs such as learning disabilities or food allergies.</p>
              </div>
            </div>

            <button className={`accordion ${activeIndex === 13 ? 'active' : ''}`} onClick={() => togglePanel(13)}>Are travel costs and lodging covered by TEDxUofW?<img src={downArrow} alt="down arrow img" className={`arrow ${activeIndex === 13 ? 'rotate' : ''}`} /></button>
            <div className="panel" style={{ display: activeIndex === 13 ? 'block' : 'none' }}>
              <div className="panel-text">
                <p>No, TEDxUofW does not cover travel costs or lodging for speakers.</p>
              </div>
            </div>
          </div>

          {/* become a speaker section */}
          <div className="faq-speaker">
            <div className="faq-speaker-descr">
              <h3>Become a Speaker!</h3>
              <p>Interested in becoming a Speaker at an upcoming TEDxUofW conference?
              Applications are currently closed, but you can fill out this form to receive notification
              when they reopen. Typically, applications open in November or December. This is
              not open to undergraduate students.</p>
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
      <div className="sponsorFaq question-section" id="sponsorFaq">
        <h2>Sponsor FAQ</h2>
        <div className="dropdown-join-container">
          <div className="dropdown-ctr">
            <button className={`accordion ${activeIndex === 14 ? 'active' : ''}`} onClick={() => togglePanel(14)}>I’d like to provide support or sponsor the event.<img src={downArrow} alt="down arrow img" className={`arrow ${activeIndex === 14 ? 'rotate' : ''}`} /></button>
            <div className="panel" style={{ display: activeIndex === 14 ? 'block' : 'none' }}>
              <div className="panel-text">
                <p>Simply email <a href="mailto:tedxuofw@uw.edu">tedxuofw@uw.edu</a> and we’ll be sure to get you the information you
                need. Thank you for your interest in partnering with us.</p>
              </div>
            </div>

            <button className={`accordion ${activeIndex === 15 ? 'active' : ''}`} onClick={() => togglePanel(15)}>My company wants to provide a food/item/service to the attendees of at a TEDxUofW conference.<img src={downArrow} alt="down arrow img" className={`arrow ${activeIndex === 15 ? 'rotate' : ''}`} /></button>
            <div className="panel" style={{ display: activeIndex === 15 ? 'block' : 'none' }}>
              <div className="panel-text">
                <p>Thanks for your interest! Please contact <a href="mailto:tedxuofw@uw.edu">tedxuofw@uw.edu</a>, and we’ll be sure to get
                you the information you need. Thank you for your interest in partnering with us.</p>
              </div>
            </div>

            <button className={`accordion ${activeIndex === 16 ? 'active' : ''}`} onClick={() => togglePanel(16)}>What are the sponsorship benefits and tiers?<img src={downArrow} alt="down arrow img" className={`arrow ${activeIndex === 16 ? 'rotate' : ''}`} /></button>
            <div className="panel" style={{ display: activeIndex === 16 ? 'block' : 'none' }}>
              <div className="panel-text">
                <p>We offer four tiers: Friend, Thinker, Educator, and Innovator, determined by the
                amount contributed. The sponsorship benefits include recognition at various levels,
                such as featuring your organization’s name and logo on event slides, website
                profiles, and programs. Your contribution will also be acknowledged digitally, on-
                campus, and during the event itself.</p>
              </div>
            </div>

            <button className={`accordion ${activeIndex === 17 ? 'active' : ''}`} onClick={() => togglePanel(17)}>What payment methods are accepted?<img src={downArrow} alt="down arrow img" className={`arrow ${activeIndex === 17 ? 'rotate' : ''}`} /></button>
            <div className="panel" style={{ display: activeIndex === 17 ? 'block' : 'none' }}>
              <div className="panel-text">
                <p>For TEDxUofW, the preferred form of payment is by check made out to “TEDxUofW”.
                If this is not possible, please contact us at <a href="mailto:tedxuofw@uw.edu">tedxuofw@uw.edu</a>, and we will
                accommodate your preferred payment method. We will provide an invoice
                documenting your contribution.</p>
              </div>
            </div>
          </div>
        </div>
      </div>






    </div>
  );
};

export default Faq;
