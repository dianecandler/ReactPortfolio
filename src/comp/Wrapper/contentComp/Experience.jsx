import React from 'react';
import OwlCarousel from 'react-owl-carousel';
// experience separated into left and right
import Expleft from './Expleft';
import Expright from './Expright';

export default function Experience() {
    return (
        <section id="experience" className="section pb-0" data-aos="fade-up">
            <div className="container">
                <div className="row mx-0">
                    <div className="col-lg-4 offset-lg-4 px-0">
                        <h2 className="my-0">Experience</h2>
                    </div>
                </div>
            </div>
            <section className="section-sm pb-0">
                <div className="container">
                    <OwlCarousel
                        className="experience-carousel"
                        loop={false}
                        margin={30}
                        nav={false}
                        smartSpeed={1000}
                        dots
                        items={1}
                    >
                        {/* Only 3 sets per div */}
                        <div>
                            {/* first */}
                            <Expleft 
                                title="Full-Stack Designer"
                                company="University of Texas Bootcamp"
                                about="Working with JavaScript, HTML, CSS, JQuery, Heroku, Git, PHPm MySQL, MongoDB, Node.js, Express, MERN Stack"
                                image="img/UT.png"
                                from="2020"
                                to="Present"
                            />
                            {/* second */}
                            <Expright 
                                title="Server &amp; Systems Infrastructure"
                                company="Dell Technologies"
                                about="Worked for SVP with Product Mgmt team while renovating 100+ yr commercial &amp; residential properties!"
                                image="img/Dell.png"
                                from="2015"
                                to="2020"
                            />
                            {/* third */}
                            <Expleft 
                                title="Consultant"
                                company="Solving Problems"
                                about="Sales, creative design, business planning"
                                image="img/PM.png"
                                from="2007"
                                to="2015"
                            />
                        </div>
                        {/* new */}
                        <div>
                            {/* first */}
                            <Expleft 
                                title="Server and Storage Line Manager"
                                company="Newisys"
                                about="Led OEM/ODM products through Life Cycle Managment from propposal to final deliverables ensuring customer, vendor, and internal scope, schedule, cost goals were met."
                                image="img/NewisysSanmina.png"
                                from="2007"
                                to="2008"
                            />
                            {/* second */}
                            <Expright 
                                title="Product Marketing Manager"
                                company="Britestream Networks"
                                about="Security Hardware Start-Up where led implementation of Partnership Programs with Microsoft, IBM, CheckPoint, nCipher."
                                image="img/Britestream.png"
                                from="2004"
                                to="2006"
                            />
                            {/* third */}
                            <Expleft 
                                title="Director of Product Planning"
                                company="Hewlett-Packard (formerly RLX Technologies)"
                                about="Launched 1st industry standard Blade Server"
                                image="img/RLX.png"
                                from="1999"
                                to="2001"
                            />
                        </div>
                        {/* new */}
                        <div>
                            {/* first */}
                            <Expleft 
                                title="Manager of Server &amp; I/O Product Management"
                                company="Dell Technologies"
                                about="Defined and Launched industry's 1st 2U server, managed team of 20+"
                                image="img/Dell.png"
                                from="1999"
                                to="2001"
                            />
                            {/* second */}
                            <Expright 
                                title="Sr Group Product Manager"
                                company="Compaq"
                                about="Led develop of Storage Business Unit, Developed 1st 4 socket server"
                                image="img/Compaq.jpg"
                                from="2019"
                                to="2020"
                            />
                            {/* third */}
                            {/* <Expleft 
                                title="XYZ"
                                company="UT Bootcamp"
                                about="It was fun to launch a new product!"
                                image="img/cssdesignawards.png"
                                from="2019"
                                to="2020"
                            /> */}
                        </div>
                    </OwlCarousel>
                </div>
            </section>
        </section>
    )
}
