import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import Testimonialcall from './Testimonialcall';

export default function Testimonials() {
    return (
        <section id="testimonial" className="section pb-0">
            <div className="container">
                <div className="row align-items-center mx-0">
                    <div className="col-md-6 col-lg-4 col-xl-3 z-index-2 px-0 mb-5 mb-md-0">
                        <div className="px-0 offset-lg-5 offset-xl-0">
                            <h2 className="testimonials-title my-0 wide-lg" data-aos="fade-right">Testimonials <span className="text-primary">from<br /> my </span>  Employers</h2>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-8 col-xl-9 px-0">
                        <OwlCarousel
                            className="testimonials-carousel"
                            loop={false}
                            margin={30}
                            nav
                            navText={['<div class="arrow"><div class="arrow-top"></div><div class="arrow-bottom"></div></div>', '<div class="arrow"><div class="arrow-top"></div><div class="arrow-bottom"></div></div>']}
                            dots={false}
                            items={1}
                        >
                            <Testimonialcall
                                person="Ravi"
                                company="Sr Vice President, Dell Technologies"
                                testimonial="Always brings a wealth of creativity, driven team member, and passion for learning!"
                                image="img/testimonials/370x434-1.jpg"
                            />
                            <Testimonialcall
                                person="Fred"
                                company="Owner, ShockStrap"
                                testimonial="Talented, dedicated, and always brings vitality to the project.  Consistently appreciate her contributions!"
                                image="img/testimonials/370x434-2.jpg"
                            />
                            {/* <Testimonialcall
                                person="Sai"
                                company="DESAIGN STUDIO"
                                testimonial="She is fast learner!"
                                image="img/testimonials/370x434-3.jpg"
                            /> */}
                            <Testimonialcall
                                person="Dr and Mrs Streisand"
                                company="Clients"
                                testimonial="We met Diane through a friend and she is an amazing talent.  She is both creative and resourceful in putting together events.  For Bill’s  60th birthday party she help orchestrate a wonderful party and even decorated the wine glasses with bits of fun facts about Bill to add to the celebration."
                                image="img/testimonials/370x434-4.jpg"
                            />
                            <Testimonialcall
                                person="Bobby"
                                company="City Councilman"
                                testimonial=" Given her involvement in past projects she has exhibited an exceptional degree of leadership, she is focused on the task at hand and has the innate ability to not allow peripheral concerns of insignificance delay her mission.  She is a self starter, manages her time extraordinarily, and leads by example.  She is a team builder and brings extraordinary confidence to challenging projects. Can’t is not in her vocabulary."
                                image="img/testimonials/370x434-5.jpg"
                            />
                            {/* <Testimonialcall
                                person="Lauren"
                                company="DESAIGN STUDIO"
                                testimonial="She is fast learner!"
                                image="img/testimonials/370x434-3.jpg"
                            /> */}
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </section>
    )
}
