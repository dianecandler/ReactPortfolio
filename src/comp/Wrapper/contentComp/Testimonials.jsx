import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import Testimonialcall from './Testimonialcall';

export default function Testimonials() {
    return (
        <section id="testimonials" className="section pb-0">
            <div className="container">
                <div className="row align-items-center mx-0">
                    <div className="col-md-6 col-lg-4 col-xl-3 z-index-2 px-0 mb-5 mb-md-0">
                        <div className="px-0 offset-lg-5 offset-xl-0">
                            <h2 className="testimonials-title my-0 wide-lg" data-aos="fade-right">Testimonials <span className="text-primary">from<br /> my best</span>  Clients</h2>
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
                                person="Amanda"
                                company="Google Inc."
                                testimonial="She is awesome!"
                                image="img/testimonials/370x434-1.jpg"
                            />
                            <Testimonialcall
                                person="Cody"
                                company="Austin Inc."
                                testimonial="She is amazing!"
                                image="img/testimonials/370x434-2.jpg"
                            />
                            <Testimonialcall
                                person="Sai"
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
