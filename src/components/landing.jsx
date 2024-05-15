import React from 'react';
import './landing.css';
import upcomingEvent1 from '../assets/upcomingEvent1.png';
import logo from '../assets/tedx-logo.png'
import Event from './event-component/event.jsx';
import Button from './button/button';
import downArrow from '../assets/downArrow.svg';
import team from '../assets/landing-team.png';

// javascript function to find how much padding to incr on bg img
// get width of tedx-intro
// get width of window
// blank space = window - tedx-intro
// divide blank space by two
// incr right and left padding by the number found

const landing = () => {

  return (
    <div id='landing'>

      <div id='tedx-intro'>
        <div>
        <h1>WE ARE</h1>
          <div id='intro-bottom'>
            <img src={logo} alt='tedx-logo'/>
            <section id='landing-about'>
              <p>TEDxUofW was established to bring inspirational and informative TED style talks to the University of Washington.</p>
              <p>Since 2012, our student-run organization has sought to give amazing speakers a receptive audience to share their passions with.</p>
              <Button
                title='ABOUT US'
                link='./about/about.jsx'
              />
            </section>
          </div>
        </div>
        <img id='down-arrow' src={downArrow} alt='down-arrow' />
      </div>

      <div id='landing-content'>

        <div id='impact'>
          <h1>OUR IMPACT</h1>
          <div id='impact-numbers'>
            <section className='impact-number-pair'>
              <h2>60</h2>
              <p>students</p>
            </section>
            <section className='impact-number-pair'>
              <h2>12</h2>
              <p>conferences</p>
            </section>
            <section className='impact-number-pair'>
              <h2>36</h2>
              <p>speakers</p>
            </section>
            <section className='impact-number-pair' id='lives-impacted'>
              <h2>2451</h2>
              <p>lives impacted</p>
            </section>
          </div>
        </div>

        <div id='upcoming-events'>
          <h1>UPCOMING EVENTS</h1>
          <Event
            title='2025 CONFERENCE'
            name='DO YOU HAVE A MINUTE?'
            details='April 56, 1983 , 6AM-10PM | Kane Hall 301'
            description='fun descriptor text about how amazing this conference is and oh
              my gosh it’s going to be so great guys im so tired i just finished work and honestly i
              just want to sleep but i have so much work to do rahhhhhhhh also the image will probably
              hold the conference promo or branding somewhere'
            image={upcomingEvent1}
          />
        </div>

        <div id='highlighted-talks'>
          <h1>HIGHLIGHTED TALKS</h1>
          <div id='talk-videos'>
            <section className='video-info-pair'>
              <iframe title='bobatalks' src='https://www.youtube.com/embed/xDMO1d6gaWU?si=Tgeo992W_MKo-Tdu'></iframe>
              <section>
                <p>JEFF NQUYEN</p>
                <p>Why your career needs a North Star</p>
              </section>
            </section>

            <section className='video-info-pair'>
            <iframe title='bobatalks' src='https://www.youtube.com/embed/xDMO1d6gaWU?si=Tgeo992W_MKo-Tdu'></iframe>
              <section>
                <p>JEFF NQUYEN</p>
                <p>Why your career needs a North Star</p>
              </section>
            </section>

            <section className='video-info-pair'>
            <iframe title='bobatalks' src='https://www.youtube.com/embed/xDMO1d6gaWU?si=Tgeo992W_MKo-Tdu'></iframe>
              <section>
                <p>JEFF NQUYEN</p>
                <p>Why your career needs a North Star</p>
              </section>
            </section>
          </div>
        </div>

        <div id='join-our-team'>
          <h1>JOIN OUR TEAM</h1>
          <div id='team-card'>
            <img src={team} alt='tedx-team-2024'/>
            <section id='team-card-right'>
              <p>Be a part of the team that makes it happen.</p>
              <Button
                title='JOIN THE TEAM'
                link=''
              />
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default landing
