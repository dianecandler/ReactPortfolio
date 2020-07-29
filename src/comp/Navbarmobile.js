import React from 'react';
import $ from 'jquery';

function removetoggler(){
    $('body').removeClass('menu-is-open');
};

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

export default function Navbarmobile() {
    return (
        <nav className="navbar navbar-mobile d-lg-none">
        <ion-icon className="close" name="close-outline" onClick={removetoggler}></ion-icon>

      <ul className="navbar-nav navbar-nav-mobile">
      <li><a className="nav-link" href="#home" onClick={scrollnav}>Home</a></li>
              <li><a className="nav-link" href="#about" onClick={scrollnav}>About</a></li>
              <li><a className="nav-link" href="#specialization" onClick={scrollnav}>Specialization</a></li>
              <li><a className="nav-link" href="#works" onClick={scrollnav}>Projects</a></li>
              <li><a className="nav-link" href="#experience" onClick={scrollnav}>Experience</a></li>
              <li><a className="nav-link" href="#contact" onClick={scrollnav}>Contact</a></li>
      </ul>
     <div className="navbar-mobile-footer">
      <p>© 2020 Diane Candler. All Rights Reserved.</p>
     </div>
    </nav>
    )
}
