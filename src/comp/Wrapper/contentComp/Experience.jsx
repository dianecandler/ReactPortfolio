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
                                company="Update"
                                about="Sales, creative design, business planning"
                                image="img/Newisys.png"
                                from="2009"
                                to="2008"
                            />
                        </div>
                        {/* new */}
                        <div>
                            {/* first */}
                            <Expleft 
                                title="Server and Storage Line Manager"
                                company="Newisys"
                                about="It was fun to launch a new product!"
                                image="img/Newisys.png"
                                from="2008"
                                to="2009"
                            />
                            {/* second */}
                            <Expright 
                                title="ABC"
                                company="UT Bootcamp"
                                about="It was fun to launch a new product!"
                                image="img/UT.png"
                                from="2019"
                                to="2020"
                            />
                            {/* third */}
                            <Expleft 
                                title="XYZ Designer"
                                company="UT Bootcamp"
                                about="It was fun to launch a new product!"
                                image="img/cssdesignawards.png"
                                from="2019"
                                to="2020"
                            />
                        </div>
                        {/* new */}
                        <div>
                            {/* first */}
                            <Expleft 
                                title="ABC"
                                company="UT Bootcamp"
                                about="It was fun to launch a new product!"
                                image="img/cssdesignawards.png"
                                from="2019"
                                to="2020"
                            />
                            {/* second */}
                            <Expright 
                                title="LMNOP"
                                company="UT Bootcamp"
                                about="It was fun to launch a new product!"
                                image="img/cssdesignawards.png"
                                from="2019"
                                to="2020"
                            />
                            {/* third */}
                            <Expleft 
                                title="XYZ"
                                company="UT Bootcamp"
                                about="It was fun to launch a new product!"
                                image="img/cssdesignawards.png"
                                from="2019"
                                to="2020"
                            />
                        </div>
                    </OwlCarousel>
                </div>
            </section>
        </section>
    )
}
