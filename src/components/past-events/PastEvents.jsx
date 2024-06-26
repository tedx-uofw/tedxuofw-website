import React, { useEffect, useState } from 'react'
import './PastEvents.css'
import { Helmet } from "react-helmet";

import Dropdown from './DropdownComp'
import CreateBox from './createBox'
import Event from '../event-component/event'

import { getDocs, collection } from 'firebase/firestore'
import { db } from '../../firebase'

const PastEvents = () => {

  const [items, setItems] = useState([]);
  const [selectedYear, setSelectedYear] = useState({})

  const fetchItems = async () => {
    const data = await getDocs(collection(db, "past-events"))
    const newData = await data.docs.map((doc) => ({
          ...doc.data(), id: doc.id
    }))
    setItems(newData);
    setSelectedYear(newData.length > 0 ? newData[0] : {})
  }

  useEffect(() => {
    fetchItems()
  }, [])

  const onDropdownSelect = (e) => {
    setSelectedYear((items.find((item) => item.id == e)))
  }

  return (
    <div className='past-events-container'>
      <Helmet>
        <title>TEDxUofW Past Events</title>
        <meta name="description" content="View and learn about all the past conferences hosted by the TEDxUofW club, including each speaker and performer" />
        <meta name="keywords" content="TEDxUofW, tedxuofw, uw, University of Washington, ted talks, tedx talk, tedx conference, speakers, performers, watch ted talk"/>
      </Helmet>
      <div className='events-ctr'>
        <div className='past-events-title'>
          <h1 className='events-heading'>PAST EVENTS</h1>
          <div className='desktop-dropdown'>
            {items.length > 0 && (<Dropdown items={items} onSelect={onDropdownSelect} /> )}
          </div>
        </div>
        <hr className='past-events-hr'></hr>
        <div className='mobile-dropdown'>
        {items.length > 0 && (<Dropdown items={items} onSelect={onDropdownSelect} /> )}
        </div>
          {selectedYear?.event?.map((event) => (
            <Event title={event.title} name={event.name} details={event.details} description={event.description} image={event.imgUrl} eventLink={event.link} />
          ))}
      </div>
      {selectedYear?.speakers && selectedYear.speakers.length > 0 && (
        <div className='events-container'>
          <h1 className='events-heading'>SPEAKERS</h1>
          <hr className='past-events-hr'></hr>
          <div className='boxes-ctr'>
            {selectedYear?.speakers?.map((speaker) => (
              <CreateBox name={speaker.name} title={speaker.title} description={speaker.description} img={speaker.imgUrl} youtubeLink={speaker.youtubeUrl} linkedinLink={speaker.linkedinUrl}/>
            ))}
          </div>
        </div>
      )}

    {selectedYear?.performers && selectedYear.performers.length > 0 && (
        <div className='events-container'>
          <h1 className='events-heading'>PERFORMERS</h1>
          <hr className='past-events-hr'></hr>
          <div className='boxes-ctr'>
            {selectedYear.performers.map((performer) => (
              <CreateBox name={performer.name} title={performer.title} description={performer.description} img={performer.imgUrl} youtubeLink={performer.youtubeUrl} linkedinLink={performer.linkedinUrl}/>
            ))}
          </div>
        </div>
      )}


    </div>
  )
}

export default PastEvents
