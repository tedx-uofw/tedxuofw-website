import React, { useState, useEffect } from 'react';
import Button from "../button/button.jsx";
import './faq.css';
import downArrow from '../../assets/downArrow.svg';
import { Helmet } from "react-helmet";

const Faq = () => {
  const [isActive, setIsActive] = useState(Array(18).fill(false));
  

  const toggleAccordion = (index) => {
    const newisActive = [...isActive];
    newisActive[index] = !newisActive[index];
    setIsActive(newisActive);
  };


  useEffect(() => {
    const acc = document.getElementsByClassName("accordion");
    const toggleAccordion = function() {
      this.classList.toggle("active");
      const panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    };
    for (let i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", toggleAccordion);
    }

    return () => {
      for (let i = 0; i < acc.length; i++) {
        acc[i].removeEventListener("click", toggleAccordion);
      }
    };
  }, []);


  return (
    <div id="faq">
      <Helmet>
        <title>TEDxUofW Club Frequently Asked Questions</title>
        <meta name="description" content="Learn more about TEDxUofW through exploring frequently asked questions" />
        <meta name="keywords" content="TEDxUofW, tedxuofw, tedx, ted, Tedx, Ted, uw, University of Washington, ted talks, tedx talk, tedx conference, uw rso, join the team, nominate a speaker, ideas worth spreading, general frequently asked questions, speaker frequently asked questions, sponsor frequently asked questions, speaker applications, volunteer, questions, where, what"/>
      </Helmet>

      <div className="faq-header hide-faq-title">
        <h1>Frequently Asked Questions</h1>
      </div>


      {/* general FAQ section */}
      <div className="genFaq question-section" id="genFaq">
        <h2>General FAQ</h2>
        <div className="dropdown-join-container">
          <div className="dropdown-ctr">
            <button className="accordion" onClick={() => toggleAccordion(0)}>I’d like to know about upcoming TEDxUofW events?<div className="arrowContainer"><img src={downArrow} alt="down arrow img" className={`arrow ${isActive[0] ? 'rotate' : ''}`} /></div></button>
            <div class="panel">
              <div className="panel-text">
                <p>You can follow our <a href="https://www.instagram.com/tedxuofw/?hl=en">Instagram</a> for regular updates and check out our upcoming
                events on the <a href="/">home page</a>. Our annual conference is held in the spring (April-May) on
                the campus of the University of Washington.</p>
              </div>
            </div>

            <button className="accordion" onClick={() => toggleAccordion(1)}>How can I volunteer?<div className="arrowContainer"><img src={downArrow} alt="down arrow img" className={`arrow ${isActive[1] ? 'rotate' : ''}`} /></div></button>
            <div class="panel">
              <div className="panel-text">
                <p>Thank you for your interest in helping out! TEDxUofW wouldn’t exist without the
                contributions volunteers make at our events. Please <a href="/contact">contact us</a> a month prior to the
                event! We look forward to seeing you!</p>
              </div>
            </div>

            <button className="accordion" onClick={() => toggleAccordion(2)}>Are TEDxUofW events open to the public?<div className="arrowContainer"><img src={downArrow} alt="down arrow img" className={`arrow ${isActive[2] ? 'rotate' : ''}`} /></div></button>
            <div class="panel">
              <div className="panel-text">
                <p>Yes, our events are open to everyone! However, tickets must be purchased, which
                can be done on our website prior to the event or on the day of the event. If you're
                passionate about attending but can't afford the price, please <a href="/contact">contact us</a>!</p>
              </div>
            </div>

            <button className="accordion" onClick={() => toggleAccordion(3)}>Can I watch past TEDxUofW talks online?<div className="arrowContainer"><img src={downArrow} alt="down arrow img" className={`arrow ${isActive[3] ? 'rotate' : ''}`} /></div></button>
            <div class="panel">
              <div className="panel-text">
                <p>Yes! We upload videos of our talks to the official TEDx YouTube channel after each
                event. Be sure to subscribe to stay updated on the latest uploads and inspiring
                talks.</p>
              </div>
            </div>

            <button className="accordion" onClick={() => toggleAccordion(4)}>Still have questions?<div className="arrowContainer"><img src={downArrow} alt="down arrow img" className={`arrow ${isActive[4] ? 'rotate' : ''}`} /></div></button>
            <div class="panel">
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
              <Button title="JOIN NOW" link="https://forms.office.com/r/y0m8JQrVL9" />
            </div>
          </div>
        </div>
      </div>


      {/* speaker FAQ section */}
      <div className="speakerFaq question-section" id="speakerFaq">
        <h2>Speaker FAQ</h2>
        <div className="dropdown-join-container">
          <div className="dropdown-ctr">
            <button className="accordion" onClick={() => toggleAccordion(5)}>How do I become a speaker?<div className="arrowContainer"><img src={downArrow} alt="down arrow img" className={`arrow ${isActive[5] ? 'rotate' : ''}`} /></div></button>
            <div class="panel">
              <div className="panel-text">
                <p>Applications will open in November for the TEDxUofW conference in the following
                year. Requirements include submitting an outline of your talk and participating in an
                interview with the TEDxUofW Speaker Selection team, where you'll deliver your talk.</p>
              </div>
            </div>

            <button className="accordion" onClick={() => toggleAccordion(6)}>What does being a speaker entail?<div className="arrowContainer"><img src={downArrow} alt="down arrow img" className={`arrow ${isActive[6] ? 'rotate' : ''}`} /></div></button>
            <div class="panel">
              <div className="panel-text">
                <p>Being a speaker involves 6-10 talk development sessions over 3 months leading up
                to the conference with our speaker selection team and speaker coach. Additionally,
                you'll need to be present at a tech dress rehearsal and the entire day of the
                conference. It is a significant commitment.</p>
              </div>
            </div>

            <button className="accordion" onClick={() => toggleAccordion(7)}>What are talk development sessions?<div className="arrowContainer"><img src={downArrow} alt="down arrow img" className={`arrow ${isActive[7] ? 'rotate' : ''}`} /></div></button>
            <div class="panel">
              <div className="panel-text">
                <p>Talk development sessions are rehearsals where you'll receive feedback on your
                speech and public speaking skills. These sessions will be scheduled based on your
                availability.</p>
              </div>
            </div>

            <button className="accordion" onClick={() => toggleAccordion(8)}>How many speakers will be at the conference?<div className="arrowContainer"><img src={downArrow} alt="down arrow img" className={`arrow ${isActive[8] ? 'rotate' : ''}`} /></div></button>
            <div class="panel">
              <div className="panel-text">
                <p>There will be 5-8 speakers at the conference.</p>
              </div>
            </div>

            <button className="accordion" onClick={() => toggleAccordion(9)}>Does my talk need to be memorized?<div className="arrowContainer"><img src={downArrow} alt="down arrow img" className={`arrow ${isActive[9] ? 'rotate' : ''}`} /></div></button>
            <div class="panel">
              <div className="panel-text">
                <p>Yes! With no teleprompters available, it's crucial to have your talk memorized well in
                advance. Talk Development sessions and rehearsals will help you prepare.</p>
              </div>
            </div>

            <button className="accordion" onClick={() => toggleAccordion(10)}>What does the theme of the event have to do with me?<div className="arrowContainer"><img src={downArrow} alt="down arrow img" className={`arrow ${isActive[10] ? 'rotate' : ''}`} /></div></button>
            <div class="panel">
              <div className="panel-text">
                <p>While your talk doesn't need to directly align with the theme, we encourage
                speakers to consider how their message can relate to or enhance the event's theme
                for a cohesive experience.</p>
              </div>
            </div>

            <button className="accordion" onClick={() => toggleAccordion(11)}>How strict are speaker deadlines?<div className="arrowContainer"><img src={downArrow} alt="down arrow img" className={`arrow ${isActive[11] ? 'rotate' : ''}`} /></div></button>
            <div class="panel">
              <div className="panel-text">
                <p>We adhere strictly to our deadlines to ensure ample time for reviewing
                presentations and formatting. Failure to meet deadlines may result in termination of
                applications or speakership.</p>
              </div>
            </div>

            <button className="accordion" onClick={() => toggleAccordion(12)}>What if I need special accommodations?<div className="arrowContainer"><img src={downArrow} alt="down arrow img" className={`arrow ${isActive[12] ? 'rotate' : ''}`} /></div></button>
            <div class="panel">
              <div className="panel-text">
                <p>We accommodate special needs such as learning disabilities or food allergies.</p>
              </div>
            </div>

            <button className="accordion" onClick={() => toggleAccordion(13)}>Are travel costs and lodging covered by TEDxUofW?<div className="arrowContainer"><img src={downArrow} alt="down arrow img" className={`arrow ${isActive[13] ? 'rotate' : ''}`} /></div></button>
            <div class="panel">
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
                <Button title="APPLY" link="https://forms.office.com/r/DN6xmj6Lhh" />
              </div>
              <div className="nominateButton">
                <Button title="NOMINATE" link="" />
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* sponsor FAQ section */}
      <div className="sponsorFaq question-section" id="sponsorFaq">
        <h2>Sponsor FAQ</h2>
        <div className="dropdown-join-container">
          <div className="dropdown-ctr">
            <button className="accordion" onClick={() => toggleAccordion(14)}>I’d like to provide support or sponsor the event.<div className="arrowContainer"><img src={downArrow} alt="down arrow img" className={`arrow ${isActive[14] ? 'rotate' : ''}`} /></div></button>
            <div class="panel">
              <div className="panel-text">
                <p>Simply email <a href="mailto:tedxuofw@uw.edu">tedxuofw@uw.edu</a> and we’ll be sure to get you the information you
                need. Thank you for your interest in partnering with us.</p>
              </div>
            </div>

            <button className="accordion" onClick={() => toggleAccordion(15)}>My company wants to provide a food/item/service to the attendees of at a TEDxUofW conference.<div className="arrowContainer"><img src={downArrow} alt="down arrow img" className={`arrow ${isActive[51] ? 'rotate' : ''}`} /></div></button>
            <div class="panel">
              <div className="panel-text">
                <p>Thanks for your interest! Please contact <a href="mailto:tedxuofw@uw.edu">tedxuofw@uw.edu</a>, and we’ll be sure to get
                you the information you need. Thank you for your interest in partnering with us.</p>
              </div>
            </div>

            <button className="accordion" onClick={() => toggleAccordion(16)}>What are the sponsorship benefits and tiers?<div className="arrowContainer"><img src={downArrow} alt="down arrow img" className={`arrow ${isActive[16] ? 'rotate' : ''}`} /></div></button>
            <div class="panel">
              <div className="panel-text">
                <p>We offer four tiers: Friend, Thinker, Educator, and Innovator, determined by the
                amount contributed. The sponsorship benefits include recognition at various levels,
                such as featuring your organization’s name and logo on event slides, website
                profiles, and programs. Your contribution will also be acknowledged digitally, on-
                campus, and during the event itself.</p>
              </div>
            </div>

            <button className="accordion" onClick={() => toggleAccordion(17)}>What payment methods are accepted?<div className="arrowContainer"><img src={downArrow} alt="down arrow img" className={`arrow ${isActive[17] ? 'rotate' : ''}`} /></div></button>
            <div class="panel">
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