import React, { useState } from 'react'
import './DropdownComp.css'
import Dropdown from 'react-bootstrap/Dropdown'
import downArrow from "../../assets/downArrow.svg"


const DropdownComp = ({ items, onSelect }) => {
  const [selected, setSelected] = useState(items.length > 0 ? items[0].id : [])

  const handleSelect = (event) => {
    setSelected(event);
    onSelect(event);
  }

  const sortedItems = items.sort((a, b) => {
    const aYear = parseInt(a.id.split(" ").pop());
    const bYear = parseInt(b.id.split(" ").pop());
    return bYear - aYear;
  });

  return (
    <Dropdown id="dropdown" onSelect={(e) => handleSelect(e)}>
      <Dropdown.Toggle id="dropdown-basic">
        {selected != null ? selected : "View More"}
        <img src={downArrow} className='dropdown-arrow'></img>
      </Dropdown.Toggle>

      <Dropdown.Menu id='dropdown-menu'>
        {sortedItems.map((item, idx) => (
          <Dropdown.Item id='dropdown-item' key={idx} eventKey={item.id}>{item.id}</Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default DropdownComp
