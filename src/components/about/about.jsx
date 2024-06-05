import React from 'react'
import './about.css'
import Button from '../button/button'

import tedxuofw_logo from '../../assets/tedx-logo.png'
import tedx_logo from '../../assets/tedx.png'
import ted_logo from '../../assets/ted.png'
import tedxuofw from '../../assets/tedxuofw.png'
import ro from '../../assets/ro 1.svg'

const about = () => {
  return (
    <div id="about">
      {/* TOP */}
      <h1 id="header">ABOUT</h1>
      <div class="location">
        <p>Founded: <span class="white">2012</span></p>
        <p>Location: <span class="white">Seattle, WA</span></p>
      </div>

      <div className="tedxuofw hide-tablet">
        <div className="uofw-info">
          <img src={tedxuofw_logo} alt="Logo of TEDxUofW"/>
          <p>TEDxUofW was established to bring inspirational and informative TED 
            style talks to the University of Washington. Since 2012, our student-run organization 
            has sought to give amazing speakers a receptive audience to share their passions with.</p>
          <div class="uofw-buttons">
            <div className="uofw-join-button">
              <Button 
                title = 'JOIN THE TEAM' 
                link = 'https://forms.office.com/r/y0m8JQrVL9'/>
            </div>
            
            <Button 
              title = 'NOMINATE A SPEAKER' 
              link = 'https://forms.office.com/r/DN6xmj6Lhh'/>
          </div>
        </div>
        <div className="uofw-img">
          <img src = {tedxuofw}/>
          <p>Conference (2020)</p>
        </div>
      </div>


      {/* TEDXUOFW */}
      <div className="hide-desktop">
        <div id="tedxuofw" className="bar">
          <div className="about-col uofw-about">
            <img src={tedxuofw_logo} alt="Logo of TEDxUofW" className="about-logo"/>
                <p>TEDxUofW was established to bring inspirational and informative TED 
                  style talks to the University of Washington. Since 2012, our student-run organization 
                  has sought to give amazing speakers a receptive audience to share their passions with.</p>
              <div class="buttons">
                <Button 
                  title = 'JOIN THE TEAM' 
                  link = 'https://forms.office.com/r/y0m8JQrVL9'
                />
                <Button 
                  title = 'NOMINATE A SPEAKER' 
                  link = 'https://forms.office.com/r/DN6xmj6Lhh'
                />
              </div>
          </div>
          <div class="carousel about-col uofw-about-img">
            <img src = {tedxuofw}/>
            <p>Conference (2020)</p>
          </div>
        </div>
      </div>
      

      {/* TEDX, TED */}
      <div class="about-row">
        <div id="tedx" class="about-col">
            <div class="location">
              <p>Founded: <span class="white">2009</span></p>
              <p>Location: <span class="white">New York, NY</span></p>
            </div>          
          <div class="bar">
            <img src={tedx_logo} alt="Logo of TED" class="about-logo"></img>
                <p>In the spirit of ideas worth spreading, TEDx is a program of local, 
                  self-organized events that bring people together to share a TED-like experience.
                  At a TEDx event, TED Talks video and live speakers combine to spark deep discussion 
                  and connection. These local, self-organized events are branded TEDx, At a TEDx event, 
                  TED Talks video and live speakers combine to spark deep discussion and connection. 
                  These local, self-organized events are branded TEDx, where x = independently organized TED event.
                  The TED Conference provides general guidance for the TEDx program, but individual 
                  TEDx events are self-organized.</p>
                <Button 
                  title = 'TEDX WEBSITE' 
                  link = 'https://www.ted.com/about/programs-initiatives/tedx-program'
                />
          </div>

        </div>
        <div id="ted" class="about-col">
          <div class="location">
            <p>Founded: <span class="white">1984</span></p>
            <p>Location: <span class="white">New York, NY</span></p>
          </div>
          <div class="bar">
            <img src={ted_logo} alt="Logo of TED" class="about-logo"/>
                <p>TED is on a mission to discover and spread ideas that spark imagination, embrace possibility 
                  and catalyze impact. Our organization is devoted to curiosity, reason, wonder and the pursuit 
                  of knowledge — without an agenda. We welcome people from every discipline and culture who seek 
                  a deeper understanding of the world and connection with others, and we invite everyone to engage 
                  with ideas and activate them in your community. TED began in 1984 as a conference where Technology, 
                  Entertainment and Design converged, but today it spans a multitude of worldwide communities and 
                  initiatives exploring everything from science and business to education, arts and global issues. 
                  TED is owned by a nonprofit, nonpartisan foundation. Our aim is to help create a future worth pursuing for all.</p>
                <Button 
                  title = 'TED WEBSITE' 
                  link = 'https://www.ted.com/'
                />
          </div>

          </div>        
      </div>

      {/* RO */}
      <div id="ro" class="about-row">
        <div class="about-col">
            <h1>Ro Verdeja</h1>
            <div class="bar">
              <p>Special thanks to Ro who has been with us from the beginning. Speaker coach, presentation designer, curator and slide police and constant support. 
                Since 2018 Ro has donated his time and expertise to our conference, coaching more than 40 speakers and 6 teams - elevating the level of the conference 
                and the value for the audience by helping each of us on the stage today do our best work.</p>
              <Button 
                title = 'LINKEDIN' 
                link = 'https://www.linkedin.com/in/ro-verdeja/'
              />    
            </div>
        </div>

        <div id="ro-img" class="about-col">
          <img src = {ro}/>
        </div>
      </div>
    
    </div>
  )
}

export default about;
