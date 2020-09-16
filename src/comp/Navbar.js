import React from 'react';
import Navbarmobile from './Navbarmobile';
import $ from 'jquery';
import Resume from './Footer/Resume.pdf';


function addtoggler() {
$('body').addClass('menu-is-open');
}


export default function Navbar() {
    
    return (
        <>
        <nav id="scrollspy" className="navbar navbar-desctop" style={{position:"fixed", top:"0", left:"0", backgroundColor:"#ffffffee"}}>
        
        <div className="d-flex align-items-center position-relative w-100">
  
          {/* <!-- Brand--> */}
          <a className="navbar-brand" href="#">DIANE</a>
  
          <div className="container">
            <ul className="navbar-nav navbar-nav-desctop  d-none d-lg-block">
              <li><a className="nav-link" href="#home">Home</a></li>
              <li><a className="nav-link" href="#about">About</a></li>
              <li><a className="nav-link" href="#specialization">Specialization</a></li>
              <li><a className="nav-link" href="#works">Projects</a></li>
              <li><a className="nav-link" href="#experience">Experience</a></li>
              <li><a className="nav-link" href="#testimonial">Testimonials</a></li>
              <li><a className="nav-link" href="#skills">Skills-Education</a></li>
              <li><a className="nav-link" href="#contact">Contact</a></li>
            </ul>
  
            {/* <!-- Social --> */}
            <ul className="social-icons d-none d-lg-block">
              <li><a href="https://dianecandler.github.io/ReactPortfolio/"><ion-icon name="logo-github"></ion-icon></a></li>
              <li><a href="https://www.linkedin.com/in/diane-candler-centraltexas/"><ion-icon name="logo-linkedin"></ion-icon></a></li>
              <li><a href= {Resume} target="_blank"><ion-icon name="document"></ion-icon></a></li>
            </ul>
          </div>
            
          {/* <!-- Toggler --> */}
          <button className="toggler d-block d-lg-none" onClick={addtoggler}>
            <span className="toggler-icon"></span>
            <span className="toggler-icon"></span>
            <span className="toggler-icon"></span>
          </button>
        </div>
      </nav>
    <Navbarmobile />
      </>
    )
}
