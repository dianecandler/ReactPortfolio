import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import Testimonialcall from './Testimonialcall';

export default function Testimonials() {
    return (
        <section id="" className="section pb-0">
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
                            <Testimonialcall
                                person="Sai"
                                company="DESAIGN STUDIO"
                                testimonial="She is fast learner!"
                                image="img/testimonials/370x434-3.jpg"
                            />
                            <Testimonialcall
                                person="Dr and Mrs Streisand"
                                company="DESAIGN STUDIO"
                                testimonial="She is fast learner!"
                                image="img/testimonials/370x434-3.jpg"
                            />
                            <Testimonialcall
                                person="Bobby"
                                company="DESAIGN STUDIO"
                                testimonial="She is fast learner!"
                                image="img/testimonials/370x434-3.jpg"
                            />
                            <Testimonialcall
                                person="Lauren"
                                company="DESAIGN STUDIO"
                                testimonial="She is fast learner!"
                                image="img/testimonials/370x434-3.jpg"
                            />
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </section>
    )
}
