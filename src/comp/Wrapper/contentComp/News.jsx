import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import Newsleft from './Newsleft';
import Newsright from './Newsright';

export default function News() {
    return (
        <section id="skills" className="section pb-0">
            <div className="container">
                <div className="row mx-0">
                    <div className="col-lg-4 px-0" data-aos="fade-right">
                        <h2 className="my-0">Skills &amp; Education</h2>
                    </div>
                </div>
                <section className="section-sm pb-0">
                    <div className="">
                        <OwlCarousel
                            className="news-carousel"
                            loop={false}
                            margin={30}
                            nav
                            navText={['<div class="arrow"><div class="arrow-top"></div><div class="arrow-bottom"></div></div>', '<div class="arrow"><div class="arrow-top"></div><div class="arrow-bottom"></div></div>']}
                            dots={false}
                            items={1}
                        >
                            <div>
                                <Newsleft
                                    // link="#"
                                    linktitle="Volunteering"
                                    // sublink="#"
                                    subtitle="Believe in giving back!"
                                    date="1997-Present"
                                    about="Hold civic positions, served on the board of directors for non-profits, help teach educators for Texas Parks and Wildlife, regularly support Central Texas Food Bank, 20+ years of teaching children Cathechism, run local parade, and more. Average well over 100 hours annually."
                                    // readmorelink="#"
                                    image="img/news/370x434-Parade.png"
                                />
                                <Newsright
                                    // link="#"
                                    linktitle="Education"
                                    // sublink="#"
                                subtitle="Bachelors, Business Administration and Full-Stack Coding"
                                    date="Leadership and learning are indispensable to each other. – John F. Kennedy"
                                    about="Bootcamp Program:  Computer Science applied to JavaScript, Browser-Based Technologies (HTML, CSS, JavaScript, jQuery), Deployment (Heroku, Git), PHP (Laravel), Databases (MySQL, MongoDB), Server-Side Development (Node.js, Express, MERN Stack)"
                                    about2="Employer courses: Program Management, Product Positioning, Pricing, Understanding the Phase Review Process, Leadership, Power and Influence, Managing High Potential Employees, Organization, Personnel Management, Managing Up, Web Optimization, Sales Skills, Budgeting and Finance, Art of Negotiation, Business Development."
                                    // readmorelink="#"
                                    image="img/news/UT_logo.jpg"
                                />
                            </div>
                            <div>
                                <Newsleft
                                    // link="#"
                                    linktitle="Design"
                                    // sublink="#"
                                    subtitle="Historic Restoration"
                                    date="2006-Present"
                                    about="Restore 100 year old homes like this one as well as historic commercial retail buildings. Renovate and remodel homes of all types and offices.this 1920 Dutch Colonial. This passion started shortly after graduating from college and continues today. Also enjoy retail display window decorating which is something I have been doing since high school."
                                    // readmorelink="#"
                                    image="img/news/370x434-BHouseSQUARE.png"
                                />
                                <Newsright
                                    // link="#"
                                    linktitle="Event Planning"
                                    // sublink="#"
                                    subtitle="Branding"
                                    date="2006-Present"
                                    about="Experienced party planner and event organizer which includes team building trips, tradeshow events plus retirement, wedding, and birthday celebrations, reunions, wedding & baby showers, wine tasting events, and more. Great events begin with organized planning and an abundance of creativity, tailored specifically for the client."
                                    // readmorelink="#"
                                    image="img/news/370x434-2_Events.jpg"
                                />
                            </div>
                        </OwlCarousel>
                    </div>
                </section>
            </div>
        </section>
    )
}
