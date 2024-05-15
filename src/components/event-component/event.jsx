import React from 'react';
import "./event.css";
import icon from '../../assets/upcomingIcon.svg';
import Button from '../button/button'

/**
   * Creates event component which includes a picture of the event, event details, title, and a description
   * @param {String} title title of event ie 2025 conference
   * @param {String} name specific name of event ie do you have a minute
   * @param {String} details event specific details ie date, time, location
   * @param {String} description description of event
   * @param {String} image path to event related image
   * @param {String} eventLink link for button
   */
const Event = ({title, name, details, description, image, eventLink}) => {

  return (
    <div id="event-card">
      <img src={image} alt='event1'/>
        <section id='event-info'>
          <section id='event-header'>
            <img src={icon} alt='icon'/>
            <p>{title}</p>
          </section>
          <h1 id='event-name'>{name}</h1>
          <h2 id='event-details'>{details}</h2>
          <hr id='event-hr' width="100%" size="4"></hr>
          <p id='event-description'>{description}</p>
          <Button
            title='VIEW WEBSITE'
            link={eventLink}
          />
        </section>
    </div>
  );
};

export default Event;