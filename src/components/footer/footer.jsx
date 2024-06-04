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
        <footer>
          {/* Top half of footer */}
          <div id="top">
            {/* Logo */}
            <a href=""><img src={logo} alt="Logo of TEDxUofW" id="footer-logo" href=""></img></a>

             {/* Sitemap */}
             <div id="pages">
              <div class="section">
                <div class="footer-row">
                  <div class="footer-col">
                    <a href="/past-events">PAST EVENTS</a>
                    <a href="/about">ABOUT</a>
                  </div>
                  <div class="footer-col">
                    <a href="/faq">FAQ</a>
                    <a href="/contact">CONTACT US</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Second half of footer */}
          <div id="bottom" class ="">
            {/* Copyright */}
            <p id="copyright">©TEDxUofW 2024 | This independent TEDx event is operated under license from TED.</p>
            
            <div class="mobile-only"><p>CONNECT WITH US:</p></div>

            {/* Logos */}
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
