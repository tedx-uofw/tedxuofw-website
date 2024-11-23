import React, {useState} from 'react'
import './navbar.css'
import Button from '../button/button'
// import logo from '../../assets/logo.png'
import exit from '../../assets/close.png'
import tedLogo from '../../assets/tedxuofw.svg'

const Navbar = () => {

  const [normalNav, setNormalNav] = useState(true);

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
      setNormalNav(true);
    }
  };

  window.addEventListener('resize', handleResize);


  return (
    <div id={normalNav ? "navbar" : "navbar-with-side-menu"}>
    {/* will need to add is-clicked nav-content so it goes back to row orientation */}
    
    {/* blurs out background if the side nav appears */}
    <section id={normalNav ? "half-bg-off" : "blacked-out-bg"}></section>

      <div id={normalNav ? "nav-content" : "nav-content-side"}>
        <div id='nav-left'>
          {/* add logo + link to home*/}
          <a href='./'><img src={tedLogo} alt='tedx-logo'/></a>
        </div>
       
       {/* Applies a gradient to hold side nav content if not using normal nav */}
        <section id={normalNav ? "half-bg-off" : "half-bg-side"}> {/* half gradient only shows up if side */}
          {/* icon to open side nav -> only appears if side nav is not open */}
          <svg id={normalNav ? "side-menu-icon" : "side-menu-icon-clicked"} onClick={() => {setNormalNav(false)}} width="42" height="14" viewBox="0 0 42 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="Group 508">
              <path id="Vector 124" d="M41 0.75H1" stroke="white" stroke-width="1.3" stroke-linecap="square" stroke-linejoin="round"/>
              <path id="Vector 125" d="M41 13.0625H1" stroke="white" stroke-width="1.3" stroke-linecap="square" stroke-linejoin="round"/>
              </g>
          </svg>
          {/* either the contents of the nav, or contents of the nav on the side */}
          <div id={normalNav ? 'nav-right':'nav-right-side'}> 
            <a href='./past-events'>PAST EVENTS</a>
            <a href='./about'>ABOUT</a>
            <a href='./faq'>FAQ</a>
            <a href='./contact'>CONTACT US</a>
            <section id='nav-button-row'>
              <Button
                  title='BUY TICKETS'
                  link=''
              />
              <img id={normalNav ? 'exit-button':'exit-btn'} src={exit} onClick={() => {setNormalNav(true)}} alt="exit-button"/>
            </section>

          </div>`
        </section>
      </div>
    </div>
  )
}

export default Navbar
