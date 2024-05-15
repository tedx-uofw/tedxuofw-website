import React, { useEffect, useState } from 'react'
import './PastEvents.css'
import Dropdown from './DropdownComp'
import CreateBox from './createBox'
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
    console.log(newData)
    setSelectedYear(newData.length > 0 ? newData[0] : {})
    console.log(selectedYear)
  }

  useEffect(() => {
    fetchItems()
  }, [])

  const onDropdownSelect = (e) => {
    setSelectedYear((items.find((item) => item.id == e)))
  }

  return (
    <div className='past-events-container'>
      <div className='past-events-title'>
        <h1 className='events-heading'>PAST EVENTS</h1>
        {items.length > 0 && (<Dropdown items={items} onSelect={onDropdownSelect} /> )}
      </div>

      <hr></hr>

      <div className='events-container'>
        <h1 className='events-heading'>SPEAKERS</h1>
        <hr></hr>
        {selectedYear?.speakers?.map((speaker) => (
          <CreateBox name={speaker.name} title={speaker.title} description={speaker.description} img={speaker.imgUrl} youtubeLink={speaker.youtubeUrl} linkedinLink={speaker.linkedinUrl}/>
        ))}
      </div>

      <div className='events-container'>
        <h1 className='events-heading'>PERFORMERS</h1>
        <hr></hr>
        {selectedYear?.performers?.map((performer) => (
          <CreateBox name={performer.name} title={performer.title} description={performer.description} img={performer.imgUrl} youtubeLink={performer.youtubeUrl} linkedinLink={performer.linkedinUrl}/>
        ))}
      </div>


    </div>
  )
}

export default PastEvents
