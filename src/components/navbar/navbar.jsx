import React, {useState} from 'react'
import './navbar.css'
import Button from '../button/button'
// import logo from '../../assets/logo.png'
import exit from '../../assets/close.png'

const Navbar = () => {

  const [isClicked, setClick] = useState(true);

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

  const handleResize = () => {
    if(window.innerWidth > 1024) {
      setClick(true);
    }
  };

  window.addEventListener('resize', handleResize);


  return (
    <div id={isClicked ? "navbar" : "navbar-with-side-menu"}>
    {/* will need to add is-clicked nav-content so it goes back to row orientation */}
    <section id={isClicked ? "half-bg" : "half-bg-side"}></section>
      <div id={isClicked ? "nav-content" : "nav-content-side"}>
        <div id='nav-left'>
          {/* add logo + link to home*/}
          <a href='./'><img src='https://firebasestorage.googleapis.com/v0/b/tedxuofw-1de88.appspot.com/o/Repo%20Website%2FLanding%2Ftedx-logo-with-text.png?alt=media&token=51302ded-3689-4147-af9e-5486655dcc0b' alt='tedx-logo'/></a>
        </div>
        <svg id={isClicked ? "side-menu-icon" : "side-menu-icon-clicked"} onClick={() => {setClick(false)}} width="42" height="14" viewBox="0 0 42 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Group 508">
            <path id="Vector 124" d="M41 0.75H1" stroke="white" stroke-width="1.3" stroke-linecap="square" stroke-linejoin="round"/>
            <path id="Vector 125" d="M41 13.0625H1" stroke="white" stroke-width="1.3" stroke-linecap="square" stroke-linejoin="round"/>
            </g>
          </svg>
        <div id={isClicked ? 'nav-right':'nav-right-side'}>
          <a href='./past-events'>PAST EVENTS</a>
          <a href='./about'>ABOUT</a>
          <a href='./faq'>FAQ</a>
          <a href='./contact'>CONTACT US</a>
          <section id='nav-button-row'>
            <Button
                title='BUY TICKETS'
                link=''
            />
            <img id={isClicked ? 'exit-button':'exit-btn'} src={exit} onClick={() => {setClick(true)}} alt="exit-button"/>
          </section>

        </div>
      </div>

      {/* <div id="small-screen">
      <div id='side-nav-content'>
        <a href='./'><img src='https://firebasestorage.googleapis.com/v0/b/tedxuofw-1de88.appspot.com/o/Repo%20Website%2FLanding%2Ftedx-logo-with-text.png?alt=media&token=51302ded-3689-4147-af9e-5486655dcc0b' alt='tedx-logo'/></a>
        <svg id={isClicked ? "side-menu-icon" : "side-menu-icon-clicked"} onClick={() => {setClick(false)}} xmlns="http://www.w3.org/2000/svg" width="5.5em" height="5.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1m0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1M3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1"/></svg>
      </div>
          <div className={isClicked ? "side-menu-content" : "side-menu-content-clicked"}>
            <div className="ticket-btn-row">
              <div className='ticket-btn'>
                <Button
                  title='BUY TICKETS'
                  link=''
                />
              </div>
            <img id="exit-button" src={exit} onClick={() => {setClick(true)}} alt="exit-button"/>
            </div>
            <a id="first-link" href="./">HOME</a>
            <a href='./past-events'>PAST EVENTS</a>
            <a href='./about'>ABOUT</a>
            <a href='./faq'>FAQ</a>
            <a href='./contact'>CONTACT US</a>
          </div>
        </div> */}

    </div>
  )
}

export default Navbar
