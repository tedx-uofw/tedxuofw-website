import React from 'react'
import './past_events.css'
import Dropdown from './dropdown'
import CreateBox from './createBox'

const past_events = () => {
  return (
    <div className='past-events-container'>
      <div className='past-events-title'>
        <h1 className='events-heading'>PAST EVENTS</h1>
        <Dropdown />
        <hr></hr>
      </div>
      <div className='events-container'>
        <h1 className='events-heading'>SPEAKERS</h1>
        <hr></hr>
        <CreateBox />
      </div>

      <div className='events-container'>
        <h1 className='events-heading'>PERFORMERS</h1>
        <hr></hr>
        <CreateBox />
      </div>
      
      
    </div>
  )
}

export default past_events
