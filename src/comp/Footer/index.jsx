import React from 'react';

export default function index() {
    return (
        <footer className="section bg-gray">
        <div className="container">
  
          {/* <!-- Lines --> */}
          <div className="lines">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-lg-4"></div>
                <div className="col-md-6 hidden-sm col-lg-4"></div>
                <div className="col-md-6 col-lg-4 hidden-md"></div>
              </div>
            </div>
          </div>
  
          <div className="row mx-0">
            <div className="col-md-6 col-lg-4  pl-0 pr-md-30px">
              <a className="brand" href="#">Diane</a>
              <p className="size-sm">Personal</p>
              <p className="mt-4">
                <strong className="text-uppercase text-dark">Address:</strong><br />
                P.O. Box 9, Bartlett, TX, USA
              </p>
              <p className="mt-4">
                <strong className="text-uppercase text-dark">Email:</strong><br />
                dianedcandler@gmail.com
              </p>
            </div>
            <div className="col-md-6 col-lg-4  order-md-3  order-lg-2 pl-0 pr-md-30px mt-5 mt-md-0">
              <strong className="text-uppercase text-dark">Menu:</strong><br />
              <ul className="navbar-nav mt-4 menu">
                <li><a className="nav-link" href="#home">Home</a></li>
                <li><a className="nav-link" href="#about">About</a></li>
                <li><a className="nav-link" href="#specialization">Specialization</a></li>
                <li><a className="nav-link" href="#works">Projects</a></li>
                <li><a className="nav-link" href="#experience">Experience</a></li>
                <li><a className="nav-link" href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-4 order-md-2  order-lg-3  mt-5 mt-lg-0 px-0">
              <strong className="text-uppercase text-dark">Subscribe:</strong><br />
              <p className="mt-4">
                Subscribe to my newsletter so you are informed about my newset projects and promotions
             </p>
             <div className="mt-4">
               <form className="js-subscribe-form">
                  <div className="input-group">
                    <input id="mc-email" type="email" className="form-control" placeholder="Email" />
                    <div className="input-group-append">
                      <button className="btn" type="submit">Go</button>
                    </div>
                  </div>
                  <label className="mc-label" for="mc-email" id="mc-notification"></label>
                </form>
              </div>
            </div>
          </div>
  
          <section className="section-sm pb-0">
            <div className="row mx-0">
              <div className="col-md-6 col-lg-4 pl-0 pr-md-30px">
                <p className="mb-0">© Diane Candler. 2020<br /> All Rights Resevered</p>
              </div>
              <div className="col-md-6 col-lg-4 pl-0 pr-md-30px mt-5 mt-md-0">
                  {/* <!-- Social --> */}
                  <ul className="social-icons d-none d-sm-block">
                    <li><a href="#"><ion-icon name="logo-facebook"></ion-icon></a></li>
                    <li><a href="#"><ion-icon name="logo-twitter"></ion-icon></a></li>
                    <li><a href="#"><ion-icon name="logo-linkedin"></ion-icon></a></li>
                  </ul>
              </div>
              <div className="col-md-6 col-lg-4 pl-0 mt-5 mt-lg-0">  
                {/* <!-- Language --> */}
                {/* <ul className="language">
                   <li className="active"><a href="#">Eng</a></li>
                   <li><a href="#">Fra</a></li>
                   <li><a href="#">Ger</a></li>
                </ul> */}
              </div>
            </div>
          </section>
        </div>
      </footer>
    )
}
