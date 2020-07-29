import React from 'react';
import Aboutexperience from './Aboutexperience';

export default function About() {
    return (
        <section id="about" className="section pb-0">
            <section className="container">
                <div className="row mx-0 align-items-center">
                    <div className="ocol-md-6 col-lg-4 px-0 mt-5 mt-lg-0 px-0" data-aos="fade-right">
                        <div className="experience-number font-weight-bold text-dark d-inline-block d-lg-block align-middle">
                            <span>20</span><span className="plus">+</span>
                        </div>
                        <h5 className="text-uppercase my-0 d-inline-block d-lg-block align-middle">Years<br /> Experience<br /> Working</h5>
                    </div>
                    <div className="col-md-6 col-lg-4 px-0">
                        <h2 className="mt-0 wide-lg mb-5 mb-md-0" data-aos="fade-up">My <span className="text-primary">mission</span>  is develope the best websites<br /> <span className="text-primary">around</span></h2>
                    </div>
                    <div className="col-md-6 col-lg-4 px-0">
                        <img alt="" className="w-100" src="img/370x434-1.jpg" />
                    </div>
                </div>
                <div className="row mx-0">
                    <div className="col-lg-4 px-0 mt-5 mt-md-0 mb-5 mb-lg-0">
                        <ul className="my-0">
                            <Aboutexperience link="#" number="01" subject="Full-Stack Design" delay="0" />
                            <Aboutexperience link="#" number="02" subject="Website Design" delay="200" />
                            <Aboutexperience link="#" number="03" subject="Product Management" delay="400" />
                            <Aboutexperience link="#" number="04" subject="Strategic Planning" delay="600" />
                            <Aboutexperience link="#" number="05" subject="Product Marketing" delay="800" />
                            <Aboutexperience link="https://facebook.com" number="06" subject="Social Media" delay="1000" />
                        </ul>
                    </div>
                </div>
            </section>
        </section>
    )
}
