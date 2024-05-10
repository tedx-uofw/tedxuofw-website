import React from 'react';
import "./button.css";

const Button = ({ title }) => {

  return (
    <div id="buttons">
        <button>{title}</button>
    </div>

    // code to call component
    // <Button title="BUY TICKETS" />
  );
};

export default Button;
