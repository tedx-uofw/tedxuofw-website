import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';

import Landing from "./components/landing"
import About from "./components/about/about"
import Contact from "./components/contact/contact"
import PastEvents from "./components/past-events/PastEvents"
import FAQ from "./components/faq/faq"

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="App">
        <Router>
          <div>
            <Navbar />
            <Routes>
              <Route path="/" element ={ <Landing /> } />
              <Route path="/about" element = { <About /> } />
              <Route path="/contact" element = { <Contact /> } />
              <Route path="/past-events" element = { <PastEvents /> } />
              <Route path="/faq" element = { <FAQ /> } />
              <Route path="*" element={<div> 404 Not Found </div>}></Route>
            </Routes>
            <Footer />
          </div>
        </Router>
    </div>
  );
}

export default App;
