import React, { useState } from 'react'
import './navbar.css'
import Button from '../button/button'
// import logo from '../../assets/logo.png'
import exit from '../../assets/close.png'
import tedLogo from '../../assets/tedxuofw.svg'

const Navbar = () => {

  const [isClicked, setClick] = useState(true);

  let prevScroll = window.scrollY;
  window.onscroll = function () {
    let scroll = window.scrollY;
    if (document.getElementById("navbar") !== null) {
      if (prevScroll > scroll || scroll <= 0) {
        document.getElementById("navbar").style.top = "0px";
      } else {
        document.getElementById("navbar").style.top = "-150px";
      }
      prevScroll = scroll;
    }
  }

  let touchStartY = 0;

  window.addEventListener("touchstart", function (event) {
    touchStartY = event.touches[0].clientY;
  });


  window.addEventListener("touchmove", function (event) {
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

  const handleResize = () => {
    if (window.innerWidth > 1024) {
      setClick(true);
      // Instead, setClick should always be set to false, and setSideMenu should be true
    }
  };

  // The mobile side menu should only show if setSideMenu is true and setClick is true

  window.addEventListener('resize', handleResize);



  // Refactor this completely until it not only works as expected but it also is very easy to read. 
  return (
    <div id={isClicked ? "navbar" : "navbar-with-side-menu"}>
      {/* will need to add is-clicked nav-content so it goes back to row orientation */}
      <section id={isClicked ? "half-bg" : "half-bg-side"}></section>
      <section id={isClicked ? "half-bg" : "half-bg-other-side"}></section>

      <div id={isClicked ? "nav-content" : "nav-content-side"}>
        <div id='nav-left'>
          {/* add logo + link to home*/}
          <a href='./'><img src={tedLogo} alt='tedx-logo' /></a>
        </div>
        <svg id={isClicked ? "side-menu-icon" : "side-menu-icon-clicked"} onClick={() => { setClick(false) }} width="42" height="14" viewBox="0 0 42 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="Group 508">
            <path id="Vector 124" d="M41 0.75H1" stroke="white" stroke-width="1.3" stroke-linecap="square" stroke-linejoin="round" />
            <path id="Vector 125" d="M41 13.0625H1" stroke="white" stroke-width="1.3" stroke-linecap="square" stroke-linejoin="round" />
          </g>
        </svg>
        <div id={isClicked ? 'nav-right' : 'nav-right-side'}>
          <a href='./past-events'>PAST EVENTS</a>
          <a href='./about'>ABOUT</a>
          <a href='./faq'>FAQ</a>
          <a href='./contact'>CONTACT US</a>
          <section id='nav-button-row'>
            <Button
              title='BUY TICKETS'
              link=''
            />
            <img id={isClicked ? 'exit-button' : 'exit-btn'} src={exit} onClick={() => { setClick(true) }} alt="exit-button" />
          </section>

        </div>
      </div>
    </div>
  )
}

export default Navbar
