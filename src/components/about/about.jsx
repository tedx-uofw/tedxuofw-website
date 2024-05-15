import React from 'react'
import './about.css'
import Button from '../button/button'

import logo from '../../assets/logo.png'
import tedxuofw from '../../assets/tedxuofw.png'
import ro from '../../assets/ro.png'

const about = () => {
  return (
    <div id="about">
      {/* TOP */}
      <h1 id="header">ABOUT</h1>
      <div class="location">
        <p>Founded: 2012</p>
        <p>Location: Seattle</p>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" width="1470" height="2" viewBox="0 0 1470 2" fill="none">
        <path d="M1470 1L-2.86102e-05 1" stroke="#A9A9A9"/>
      </svg>
      {/* TEDXUOFW */}
      <div id="tedxuofw" class="about-row">
        <div class="about-col">
          <a href=""><img src={logo} alt="Logo of TEDxUofW" id="logo" hfref="/"></img></a>
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
        <div class="about-col">
          <img src = {tedxuofw}/>
        </div>
      </div>

      {/* TEDX, TED */}
      <div class="about-row">
        <div id="tedx" class="about-col">
          <a href=""><img src={logo} alt="Logo of TED" id="logo" hfref="/"></img></a>
              <p>TEDxUofW Lorem ipsum dolor sit amet consectetur. Eget lorem pulvinar cras fermentum vulputate eget et. 
                Eget tortor dictum amet morbi arcu adipiscing varius. Lacinia dis purus quam congue lacus ornare adipiscing amet. 
                Pellentesque nunc etiam amet aliquet vulputate dui aliquet ullamcorper volutpat. Lorem ipsum dolor sit amet consectetur. 
                Eget lorem pulvinar cras fermentum vulputate eget et. Eget tortor dictum amet morbi arcu adipiscing varius.</p>
              <Button 
                title = 'TEDX WEBSITE' 
                link = ''
              />
        </div>
        <div id="ted" class="about-col">
          <a href=""><img src={logo} alt="Logo of TED" id="logo" hfref="/"></img></a>
              <p>TEDxUofW Lorem ipsum dolor sit amet consectetur. Eget lorem pulvinar cras fermentum vulputate eget et. 
                Eget tortor dictum amet morbi arcu adipiscing varius. Lacinia dis purus quam congue lacus ornare adipiscing amet. 
                Pellentesque nunc etiam amet aliquet vulputate dui aliquet ullamcorper volutpat. Lorem ipsum dolor sit amet consectetur. 
                Eget lorem pulvinar cras fermentum vulputate eget et. Eget tortor dictum amet morbi arcu adipiscing varius.</p>
              <Button 
                title = 'TED WEBSITE' 
                link = ''
              />
          </div>        
      </div>

      {/* RO */}
      <div id="tedxuofw" class="about-row">
        <div class="about-col">
            <h1>Ro Verdeja</h1>
              <p>Special thanks to Ro who has been with us from the beginning. Speaker coach, presentation designer, curator and slide police and constant support. 
                Since 2018 Ro has donated his time and expertise to our conference, coaching more than 40 speakers and 6 teams - elevating the level of the conference 
                and the value for the audience by helping each of us on the stage today do our best work.</p>
              <Button 
                title = 'LINKEDIN' 
                link = ''
              />
        </div>
        <div class="about-col">
          <img src = {ro}/>
        </div>
      </div>
    
    </div>
  )
}

export default about;
