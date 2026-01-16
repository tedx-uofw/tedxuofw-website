import React, { useEffect, useState } from 'react'
import './PastEvents.css'
import { Helmet } from "react-helmet";

import Dropdown from './DropdownComp'
import CreateBox from './createBox'
import Event from '../event-component/event'
import resonanceBanner from '../../assets/resonance-banner.png'

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
    // Add RESONANCE 2025 option
    const resonance2025 = {
      id: "RESONANCE 2025",
      event: [{
        title: "2025 CONFERENCE",
        name: "RESONANCE",
        details: "April 12, 2025, 10:30AM - 4PM | Kane Hall",
        description: "The way a single action, idea, or event emerges and continues to echo over time, creating waves that extend far beyond the initial moment. Learn how the essence of a single moment can contribute to a larger, lasting legacy that connects people and ideas across time and space.",
        imgUrl: resonanceBanner,
        link: "https://resonance.tedxatuofw.com/"
      }],
      speakers: [
        {
          name: "Diana Vicezar",
          title: "Amplifying Potential Through Mentorship",
          description: "Explore the power of mentorship to ignite the potential of communities and generations with Diana Vicezar, who shares how the support of mentors has impacted her life and how she has experienced the value of mentoring others. Learn to see mentorship as a means to create change and ripples of positive transformation.",
          imgUrl: "https://resonance.tedxatuofw.com/speakers/diana.png",
          youtubeUrl: "",
          linkedinUrl: ""
        },
        {
          name: "Kris Engskov",
          title: "Dementia Needs a Lot More Thought",
          description: "Kris Engskov will reflect on his journey from leading Starbucks to founding Rippl, a company tackling the urgent challenges of dementia care. From personal experience with his parents' struggles in the long-term care system, Kris highlights the staggering prevalence and costs of dementia, affecting 1 in 3 of us over our lifetimes.",
          imgUrl: "https://resonance.tedxatuofw.com/speakers/kris.jpg",
          youtubeUrl: "",
          linkedinUrl: ""
        },
        {
          name: "Ana Maria Pinto da Silva",
          title: "Discovery, Exploration and Inquiry: A Love Story",
          description: "Community is the heartbeat of innovation. Ana Pinto da Silva will share her personal story of becoming at the intersection of culture, identity, and innovation, challenging and celebrating the power of community at this pivotal moment in our human story.",
          imgUrl: "https://resonance.tedxatuofw.com/speakers/ana.jpg",
          youtubeUrl: "",
          linkedinUrl: ""
        },
        {
          name: "Gresshaa Mehta",
          title: "Redesigning Time: Can it feel human?",
          description: "Time governs our lives. It is oppressive, inaccessible, unaccommodating, and makes you believe that the problem is YOU. What if we've been thinking about time in the world of product design wrong? What if the problem isn't the user, but the tools that visualize and represent time a certain way?",
          imgUrl: "https://resonance.tedxatuofw.com/speakers/gesshaa.jpg",
          youtubeUrl: "",
          linkedinUrl: ""
        },
        {
          name: "Doc Wilson",
          title: "The Transformative Power of Community Innovation",
          description: "Doc's mission is to stoke your inner super-hero to advance a cause that impacts us all – equity. It isn't just a moral north star, equity is the foundation of community driven innovation, uplifting neighborhoods, livelihoods, and economies. His challenge to you all is to: \"Do More Than Nothing.\"",
          imgUrl: "https://resonance.tedxatuofw.com/speakers/doc.jpg",
          youtubeUrl: "",
          linkedinUrl: ""
        },
        {
          name: "Michael Wang",
          title: "Crossing the Chasm of Life",
          description: "The only guarantee in life is change. From the deserts of Afghanistan as a Special Forces soldier to the bedside of a hospital as a nurse, to becoming a tech company Founder; Michael Wang will reflect on the pivotal moments in his life that sparked his evolution and growth as a person.",
          imgUrl: "https://resonance.tedxatuofw.com/speakers/mike.jpg",
          youtubeUrl: "",
          linkedinUrl: ""
        }
      ],
      performers: [
        {
          name: "Traditional Chinese Dance at UW",
          description: "Traditional Chinese Dance at UW was founded in 2021 with the mission to spread Chinese culture in the UW and Seattle communities through dance performances and events! Follow them on Instagram at @tcduw to follow their journey throughout the year as they hold quarterly free workshops and perform at other events until their very own end-of-year showcase in May!",
          imgUrl: "https://firebasestorage.googleapis.com/v0/b/tedxuofw-1de88.appspot.com/o/Speakers%2FCROSSROADS%202024%2Ftcd.png?alt=media&token=5c3812bb-9980-4be9-a498-afa2112a5498",
          youtubeUrl: "https://www.youtube.com/@tcduw",
          linkedinUrl: "https://www.linkedin.com/company/traditional-chinese-dance-at-uw/"
        },
        {
          name: "Developpe Dance Club",
          description: "", // To be added later
          imgUrl: "", // To be added later
          youtubeUrl: "",
          linkedinUrl: ""
        },
        {
          name: "Furmata Acapella",
          description: "", // To be added later
          imgUrl: "", // To be added later
          youtubeUrl: "",
          linkedinUrl: ""
        }
      ]
    }
    const allItems = [resonance2025, ...newData];
    setItems(allItems);
    setSelectedYear(allItems.length > 0 ? allItems[0] : {})
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
