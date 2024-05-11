import React from 'react';
import "./button.css";

const Button = ({ title, link }) => {

  return (
    <div id="buttons">
        <a href={link}><button>{title}</button></a>
    </div>

    // code to call component
    // <Button title="BUY TICKETS" />
  );
};

export default Button;
