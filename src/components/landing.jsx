import React from 'react';
import './landing.css';
import upcomingEvent1 from '../assets/upcomingEvent1.png';
import Event from './event-component/event.jsx';

const landing = () => {

  return (
    <div id='landing'>
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
  )
}

export default landing


/* <div class='event-card'>
        <img src={upcomingEvent1} alt='event1'/>
        <section id='event-info'>
          <section id='event-header'>
            <img src={icon} alt='icon'/>
            <p>2025 CONFERENCE</p>
          </section>
          <h1 id='event-title'>DO YOU HAVE A MINUTE?</h1>
          <h2 id='event-details'>April 56, 1983 , 6AM-10PM | Kane Hall 301</h2>
          <hr id='event-hr' width="100%" size="4"></hr>
          <p id='event-description'>
            fun descriptor text about how amazing this conference is and oh
            my gosh it’s going to be so great guys im so tired i just finished work and honestly i
            just want to sleep but i have so much work to do rahhhhhhhh also the image will probably
            hold the conference promo or branding somewhere
          </p>
          <button id='event-website'>VIEW WEBSITE</button>
        </section>
      </div> */
