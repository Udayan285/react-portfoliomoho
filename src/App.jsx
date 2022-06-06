// import logo from './logo.svg';
import React from 'react'
import Header from './header/Header'
import Nav from './nav/Nav'
import About  from './about/About'
import Portfolio from './protfolio/Portfolio'
import Service from './service/Service'
import Testimonials from './testimonials/Testimonials'
import Contact from './contact/Contact'
import Footer from './footer/Footer'
import Experience from './experience/Experience'

function App () {
  return (
   <>
      <Header />
      <Nav/>
      <About/>
      <Experience/>
      <Service/>
      <Portfolio/>
      <Testimonials/>
      <Contact/>
      
      <Footer/>
  </>
    
  );
}

export default App;
