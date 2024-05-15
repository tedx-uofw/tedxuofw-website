import React, { useState } from 'react'
import './DropdownComp.css'
import Dropdown from 'react-bootstrap/Dropdown'


const DropdownComp = ({ items, onSelect }) => {
  const [selected, setSelected] = useState(items.length > 0 ? items[0].id : [])

  const handleSelect = (event) => {
    setSelected(event);
    onSelect(event);
  }

  return (
    <Dropdown onSelect={(e) => handleSelect(e)}>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {selected != null ? selected : "View More"}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {items.map((item, idx) => (
          <Dropdown.Item key={idx} eventKey={item.id}>{item.id}</Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default DropdownComp
