import React from 'react'
import './footer.css'
import logo from './assets/Logo.png'
import email from "./assets/Email.svg";
import facebook from "./assets/Facebook.svg";
import instagram from "./assets/Instagram.svg";
import linkedin from "./assets/LinkedIn.svg";
import tiktok from "./assets/Tiktok.svg";

const footer = () => {
  return (
<div id="footer">
        <footer>
          {/* 1st half of footer */}
          <div id="top">
            {/* Logo */}
            <div class="section">
              <a href=""><img src={logo} alt="Logo of TEDxUofW" id="logo" hfref="/"></img></a>
            </div>

            {/* Sitemap */}
            <div id="pages">
              <div class="section">
                <a href="past-events">PAST EVENTS</a>
                <a href="/about">ABOUT</a>
                <a href="/faq">FAQ</a>
                <a href="/contact">CONTACT US</a>
              </div>
            </div>
          </div>

          {/* 2nd half of footer */}
          <div id="bottom">
            {/* Copyright */}
            <p id="copyright">©TEDxUofW 2024 | Crossroads <span id="bar">|</span> <span id="blurb">This independent TEDx event is operated under license from TED.</span></p>
            {/* Logos */}
              <div class="mobile-only"><p>CONNECT WITH US:</p></div>
            <div id="icons">
              {/* Mail */}
              <a href="mailto:tedxuofw@uw.edu"><img src={email}></img></a>
              {/* Facebook */}
              <a href="https://www.facebook.com/TEDxUofW"><img src={facebook}></img></a>
              {/* Instagram */}
              <a href="https://www.instagram.com/tedxuofw/"><img src={instagram}></img></a>
              {/* TikTok */}
              <a href="https://www.tiktok.com/@tedxuofw"><img src={tiktok}></img></a>
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/company/tedxuofw/mycompany/"><img src={linkedin}></img></a>
            </div>
          </div>
        </footer>
      </div>
  )
}

export default footer
