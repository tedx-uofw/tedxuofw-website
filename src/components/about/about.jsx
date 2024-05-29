import React from 'react'
import './about.css'
import Button from '../button/button'

import tedxuofw_logo from '../../assets/tedx-logo.png'
import tedx_logo from '../../assets/tedx.png'
import ted_logo from '../../assets/ted.png'
import tedxuofw from '../../assets/tedxuofw.png'
import ro from '../../assets/ro.png'

const about = () => {
  return (
    <div id="about">
      {/* TOP */}
      <h1 id="header">ABOUT</h1>
      <div class="location">
        <p>Founded: <span class="white">2012</span></p>
        <p>Location: <span class="white">Seattle, WA</span></p>
      </div>


      {/* TEDXUOFW */}
      <div id="tedxuofw" class="bar">
        <div class="about-col">
          <img src={tedxuofw_logo} alt="Logo of TEDxUofW" id="logo"/>
              <p>TEDxUofW Lorem ipsum dolor sit amet consectetur. Eget lorem pulvinar cras fermentum vulputate eget et. 
                Eget tortor dictum amet morbi arcu adipiscing varius. Lacinia dis purus quam congue lacus ornare adipiscing amet. 
                Pellentesque nunc etiam amet aliquet vulputate dui aliquet ullamcorper volutpat. Lorem ipsum dolor sit amet consectetur. 
                Eget lorem pulvinar cras fermentum vulputate eget et. Eget tortor dictum amet morbi arcu adipiscing varius.</p>
            <div class="buttons">
              <Button 
                title = 'JOIN THE TEAM' 
                link = ''
              />
              <Button 
                title = 'NOMINATE A SPEAKER' 
                link = ''
              />
            </div>
        </div>
        <div class="carousel about-col">
          <img src = {tedxuofw}/>
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
            <img src={tedx_logo} alt="Logo of TED" id="logo"></img>
                <p>TEDxUofW Lorem ipsum dolor sit amet consectetur. Eget lorem pulvinar cras fermentum vulputate eget et. 
                  Eget tortor dictum amet morbi arcu adipiscing varius. Lacinia dis purus quam congue lacus ornare adipiscing amet. 
                  Pellentesque nunc etiam amet aliquet vulputate dui aliquet ullamcorper volutpat. Lorem ipsum dolor sit amet consectetur. 
                  Eget lorem pulvinar cras fermentum vulputate eget et. Eget tortor dictum amet morbi arcu adipiscing varius.</p>
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
            <img src={ted_logo} alt="Logo of TED" id="logo"/>
                <p>TEDxUofW Lorem ipsum dolor sit amet consectetur. Eget lorem pulvinar cras fermentum vulputate eget et. 
                  Eget tortor dictum amet morbi arcu adipiscing varius. Lacinia dis purus quam congue lacus ornare adipiscing amet. 
                  Pellentesque nunc etiam amet aliquet vulputate dui aliquet ullamcorper volutpat. Lorem ipsum dolor sit amet consectetur. 
                  Eget lorem pulvinar cras fermentum vulputate eget et. Eget tortor dictum amet morbi arcu adipiscing varius.</p>
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
                link = ''
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
