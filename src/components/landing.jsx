import React from 'react';
import './landing.css';
import Event from './event-component/event.jsx';
import Button from './button/button';
import downArrow from '../assets/downArrow.svg';
import { Helmet } from "react-helmet";
// import team from '../assets/landing-team.png';
// import upcomingEvent1 from '../assets/upcomingEvent1.png';
// import logo from '../assets/tedx-logo.png'

// javascript function to find how much padding to incr on bg img
// get width of tedx-intro
// get width of window
// blank space = window - tedx-intro
// divide blank space by two
// incr right and left padding by the number found

const landing = () => {

  return (
    <div id='landing'>
      <Helmet>
        <title>TEDxUofW Club Repository Website</title>
        <meta name="description" content="View and learn about the TEDxUofW club" />
        <meta name="keywords" content="TEDxUofW, tedxuofw, uw, University of Washington, ted talks, tedx talk, tedx conference, highlighted talks, uw rso"/>
      </Helmet>

      <div id='tedx-intro'>
        <div id='intro-top'>
        <h1>WE ARE</h1>
          <div id='intro-bottom'>
            <img src='https://firebasestorage.googleapis.com/v0/b/tedxuofw-1de88.appspot.com/o/Repo%20Website%2FLanding%2Ftedx-logo.png?alt=media&token=bdf7235f-f733-4a29-997f-53c05df1e985' alt='tedx-logo'/>
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

        <div 
        id="down-arrow-container" 
        onClick={() => { // onClick event here scrolls after arrow container is clicked
        const scrollTo = document.getElementById('impact'); // replace w/ ID of where to scroll down to
        scrollTo.scrollIntoView({ behavior: 'smooth' });}}> 
          <img id='down-arrow' src={downArrow} alt='down-arrow'/>
        </div>
      </div> 

      <div id='landing-content'>

        <div id='impact'>
          <h1>OUR IMPACT</h1>
          <div id='impact-numbers'>
            <section className='impact-number-pair'>
              <h2>300</h2>
              <p>students</p>
            </section>
            <section className='impact-number-pair'>
              <h2>12</h2>
              <p>conferences</p>
            </section>
            <section className='impact-number-pair'>
              <h2>93</h2>
              <p>speakers</p>
            </section>
            <section className='impact-number-pair' id='lives-impacted'>
              <h2>1842</h2>
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
            image='https://firebasestorage.googleapis.com/v0/b/tedxuofw-1de88.appspot.com/o/Event%20Banners%2FupcomingEvent1.png?alt=media&token=3f07daee-32a7-44fd-a519-c30425e8ddb5'
            eventLink=''
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
            <iframe title='The Purpose of Daydreaming' src='https://www.youtube.com/embed/GuROppyLBKA?si=pmCGGaNNQ4IgTtLO'></iframe>
              <section>
                <p>EMILY LAGO ANDERSON</p>
                <p>The Purpose of Daydreaming</p>
              </section>
            </section>

            <section className='video-info-pair'>
            <iframe title='bobatalks' src='https://www.youtube.com/embed/xfubAfgkUzE?si=EHvCYpe3sAnyK0ha'></iframe>
              <section>
                <p>ZARYA RUBIN, MD</p>
                <p>The one step to alleviating burnout</p>
              </section>
            </section>
          </div>
        </div>

        <div id='join-our-team'>
          <h1>JOIN OUR TEAM</h1>
          <div id='team-card'>
            <img src="https://firebasestorage.googleapis.com/v0/b/tedxuofw-1de88.appspot.com/o/Repo%20Website%2FLanding%2Flanding-team.png?alt=media&token=87b666c2-1c79-4476-8db4-7d0a8e8e106f" alt='tedx-team-2024'/>
            <section id='team-card-right'>
              <p> Are you passionate about TED talks and looking for an opportunity to gain valuable
              experience? Whether you're interested in Design, Marketing, Web Development,
              Speaker Selection, or Logistics and Finance, there's a place for you on our team.
              While applications for UW students are currently closed, you can fill out this form to
              be notified when they reopen, typically in the first few weeks of fall quarter. </p>
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
