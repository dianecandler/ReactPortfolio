import React from 'react';
import Navbarmobile from './Navbarmobile';
import $ from 'jquery';

function addtoggler() {
$('body').addClass('menu-is-open');
}

function scrollnav() {
    let target = $(this.hash);
    if (target.length) {
        $('html,body').animate({
            scrollTop: (target.offset().top)
        }, 1000);
        $('body').removeClass('menu-is-open');
        return false;
    }
};


export default function Navbar() {
    
    return (
        <>
        <nav id="scrollspy" className="navbar navbar-desctop">
        
        <div className="d-flex align-items-center position-relative w-100">
  
          {/* <!-- Brand--> */}
          <a className="navbar-brand" href="#">DIANE</a>
  
          <div className="container">
            <ul className="navbar-nav navbar-nav-desctop  d-none d-lg-block">
              <li><a className="nav-link" href="#home" onClick={scrollnav}>Home</a></li>
              <li><a className="nav-link" href="#about" onClick={scrollnav}>About</a></li>
              <li><a className="nav-link" href="#specialization" onClick={scrollnav}>Specialization</a></li>
              <li><a className="nav-link" href="#works" onClick={scrollnav}>Projects</a></li>
              <li><a className="nav-link" href="#experience" onClick={scrollnav}>Experience</a></li>
              <li><a className="nav-link" href="#contact" onClick={scrollnav}>Contact</a></li>
            </ul>
  
            {/* <!-- Social --> */}
            <ul className="social-icons d-none d-lg-block">
              <li><a href="https://dianecandler.github.io/ReactPortfolio/"><ion-icon name="logo-github"></ion-icon></a></li>
              <li><a href="https://www.linkedin.com/in/diane-candler-centraltexas/"><ion-icon name="logo-linkedin"></ion-icon></a></li>
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
