import React from 'react'
import './navbar.css'
import Button from '../button/button'
// import logo from '../../assets/logo.png'

const navbar = () => {

  let prevScroll = window.scrollY;
  window.onscroll = function() {
    let scroll = window.scrollY;
    if(document.getElementById("navbar") !== null) {
      if (prevScroll > scroll || scroll <= 0) {
        document.getElementById("navbar").style.top = "0px";
      } else {
        document.getElementById("navbar").style.top = "-150px";
      }
      prevScroll = scroll;
    }
  }

  let touchStartY = 0;

  window.addEventListener("touchstart", function(event) {
    touchStartY = event.touches[0].clientY;
  });

  window.addEventListener("touchmove", function(event) {
    let touchEndY = event.touches[0].clientY;
    let scroll = window.scrollY;
    if (touchEndY < touchStartY) {
      // Scrolling down
      document.getElementById("navbar").style.top = "-150px";
    } else {
      // Scrolling up
      if (scroll <= 0) {
        document.getElementById("navbar").style.top = "0px";
      } else {
        document.getElementById("navbar").style.top = "-150px";
      }
    }
  });

  return (
    <div id='navbar'>
      <div id='nav-content'>
      <div id='nav-left'>
        {/* add logo + link to home*/}
        <a href='./'><img src='https://firebasestorage.googleapis.com/v0/b/tedxuofw-1de88.appspot.com/o/Repo%20Website%2FLanding%2Ftedx-logo-with-text.png?alt=media&token=51302ded-3689-4147-af9e-5486655dcc0b' alt='tedx-logo'/></a>
      </div>
      <div id='nav-right'>
        <a href='./past-events'>PAST EVENTS</a>
        <a href='./about'>ABOUT</a>
        <a href='./faq'>FAQ</a>
        <a href='./contact'>CONTACT US</a>
        <Button
            title='BUY TICKETS'
            link=''
        />
      </div>
      </div>
    </div>
  )
}

export default navbar
