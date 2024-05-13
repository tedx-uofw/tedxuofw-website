import React from 'react'
import './dropdown.css'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'


const dropdown = () => {
  return (
    <DropdownButton id="dropdown-basic-button" title="CROSSROADS 2024">
      <Dropdown.Item href="#/action-1">CROSSROADS 2024</Dropdown.Item>
      <Dropdown.Item href="#/action-2">SEEING THE INVISIBLE 2023</Dropdown.Item>
    </DropdownButton>
  )
}

export default dropdown
