import React, { useEffect, useState } from 'react';
import { getDocs, collection, addDoc, arrayUnion, updateDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase';
import Dropdown from '../past-events/DropdownComp';
import './Admin.css'


const Admin = () => {
  const [items, setItems] = useState([]);
  const [selected, setSelected] = useState('');
  const [newSpeaker, setNewSpeaker] = useState({ name: '', title: '', description: '', imgUrl: '', linkedinUrl: '', youtubeUrl: '' });
  const [newPerformer, setNewPerformer] = useState({ name: '', title: '', description: '', imgUrl: '', linkedinUrl: '', youtubeUrl: '' });
  const [newEvent, setNewEvent] = useState({ title: '', name: '', details: '', description: '', imgUrl: '', link: ''});

  const fetchItems = async () => {
    const data = await getDocs(collection(db, "past-events"));
    const newData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    setItems(newData);
    setSelected(newData.length > 0 ? newData[0].id : '');
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const onDropdownSelect = (e) => {
    const newSelect = items.find((item) => item.id === e);
    setSelected(newSelect.id);
  };

  const handleInputChange = (e, type) => {
    const { name, value } = e.target;
    if (type === 'speaker') {
      setNewSpeaker(prev => ({ ...prev, [name]: value }));
    } else if (type == 'performer'){
      setNewPerformer(prev => ({ ...prev, [name]: value }));
    } else {
      setNewEvent(prev => ({ ...prev, [name]: value }));
    }
  };

  const addSpeaker = async () => {
    const selectedDocRef = doc(db, 'past-events', selected);
    try {
      await updateDoc(selectedDocRef, {
        speakers: arrayUnion(newSpeaker)
      });
      alert('Speaker added successfully!');
      setNewSpeaker({ name: '', title: '', description: '', imgUrl: '', linkedinUrl: '', youtubeUrl: '' });
    } catch (error) {
      console.error("Error adding speaker: ", error);
    }
  };

  const addPerformer = async () => {
    const selectedDocRef = doc(db, 'past-events', selected);
    try {
      await updateDoc(selectedDocRef, {
        performers: arrayUnion(newPerformer)
      });
      alert('Performer added successfully!');
      setNewPerformer({ name: '', title: '', description: '', imgUrl: '', linkedinUrl: '', youtubeUrl: '' }); // Reset the performer form
    } catch (error) {
      console.error("Error adding performer: ", error);
    }
  };

  const addEvent = async () => {
    const selectedDocRef = doc(db, 'past-events', selected);
    try {
      await updateDoc(selectedDocRef, {
        event: arrayUnion(newEvent)
      });
      alert('Event added successfully!');
      setNewEvent({ title: '', name: '', details: '', description: '', imgUrl: '', link: ''}); // Reset the event form
    } catch (error) {
      console.error("Error adding event: ", error);
    }
  };


  return (
    <div className='admin-comp'>
      <div>
        {items.length > 0 && <Dropdown items={items} onSelect={onDropdownSelect} />}
        <div>
          <h2>Add New Speaker</h2>
          <input name="name" value={newSpeaker.name} onChange={(e) => handleInputChange(e, 'speaker')} placeholder="Name" />
          <input name="title" value={newSpeaker.title} onChange={(e) => handleInputChange(e, 'speaker')} placeholder="Title" />
          <input name="description" value={newSpeaker.description} onChange={(e) => handleInputChange(e, 'speaker')} placeholder="Description" />
          <input name="imgUrl" value={newSpeaker.imgUrl} onChange={(e) => handleInputChange(e, 'speaker')} placeholder="Image URL" />
          <input name="linkedinUrl" value={newSpeaker.linkedinUrl} onChange={(e) => handleInputChange(e, 'speaker')} placeholder="LinkedIn URL" />
          <input name="youtubeUrl" value={newSpeaker.youtubeUrl} onChange={(e) => handleInputChange(e, 'speaker')} placeholder="YouTube URL" />
          <button onClick={addSpeaker}>Add Speaker</button>
        </div>
        <div>
          <h2>Add New Performer</h2>
          <input name="name" value={newPerformer.name} onChange={(e) => handleInputChange(e, 'performer')} placeholder="Name" />
          <input name="title" value={newPerformer.title} onChange={(e) => handleInputChange(e, 'performer')} placeholder="Title" />
          <input name="description" value={newPerformer.description} onChange={(e) => handleInputChange(e, 'performer')} placeholder="Description" />
          <input name="imgUrl" value={newPerformer.imgUrl} onChange={(e) => handleInputChange(e, 'performer')} placeholder="Image URL" />
          <input name="linkedinUrl" value={newPerformer.linkedinUrl} onChange={(e) => handleInputChange(e, 'performer')} placeholder="LinkedIn URL" />
          <input name="youtubeUrl" value={newPerformer.youtubeUrl} onChange={(e) => handleInputChange(e, 'performer')} placeholder="YouTube URL" />
          <button onClick={addPerformer}>Add Performer</button>
        </div>

        <div>
          <h2>Add New Event</h2>
          <input name="title" value={newEvent.title} onChange={(e) => handleInputChange(e, 'event')} placeholder="Title" />
          <input name="name" value={newEvent.name} onChange={(e) => handleInputChange(e, 'event')} placeholder="Name" />
          <input name="details" value={newEvent.details} onChange={(e) => handleInputChange(e, 'event')} placeholder="Details" />
          <input name="description" value={newEvent.description} onChange={(e) => handleInputChange(e, 'event')} placeholder="Description" />
          <input name="imgUrl" value={newEvent.imgUrl} onChange={(e) => handleInputChange(e, 'event')} placeholder="Image URL" />
          <input name="link" value={newEvent.link} onChange={(e) => handleInputChange(e, 'event')} placeholder="Website URL" />
          <button onClick={addEvent}>Add Event</button>
        </div>
      </div>
    </div>
  );
};

export default Admin;
