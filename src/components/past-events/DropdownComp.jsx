import React from 'react'
import './DropdownComp.css'
import Dropdown from 'react-bootstrap/Dropdown'


const DropdownComp = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        View more???
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">CROSSROADS 2024</Dropdown.Item>
        <Dropdown.Item href="#/action-2">SEEING THE INVISIBLE 2023</Dropdown.Item>
        <Dropdown.Item href="#/action-3">DO YOU HAVE A MINUTE 2022</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default DropdownComp
