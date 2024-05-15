import React from 'react'
import './footer.css'
import logo from '../../assets/logo.png'
import email from "../../assets/social-media/email.svg";
import facebook from "../../assets/social-media/facebook.svg";
import instagram from "../../assets/social-media/instagram.svg";
import linkedin from "../../assets/social-media/linkedin.svg";
import tiktok from "../../assets/social-media/tiktok.svg";

const footer = () => {
  return (
<div id="footer">
        <footer class = "row">
          {/* Right half of footer */}
          <div id="left" class = "col">
            {/* Logo */}
            <div class="section">
              <a href=""><img src={logo} alt="Logo of TEDxUofW" id="logo" hfref="/"></img></a>
            </div>

             {/* Copyright */}
             <p id="copyright">©TEDxUofW 2024 | Crossroads <span id="bar">|</span> <span id="blurb">This independent TEDx event is operated under license from TED.</span></p>
             </div>

          {/* left half of footer */}
          <div id="right" class ="col">
              {/* Sitemap */}
              <div id="pages">
              <div class="section">
                <div className="row">
                  <div class="col">
                    <a href="past-events">ABOUT</a>
                    <a href="/about">PAST EVENTS</a>
                  </div>
                  <div class="col">
                    <a href="/faq">FAQ</a>
                    <a href="/contact">CONTACT US</a>
                  </div>
                </div>
              </div>
            </div>
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
