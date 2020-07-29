import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import Partnerlogo from './Partnerlogo';

export default function Partners() {
    return (
        <section id="partners" className="section pb-0">
            <div className="container">
                <div className="row align-items-center text-center justify-content-between">
                    <OwlCarousel
                        className="experience-carousel"
                        loop={false}
                        margin={30}
                        nav={false}
                        smartSpeed={1000}
                        dots
                        items={3}
                    >
                        <Partnerlogo 
                            image="img/partners/1.png"
                            alt="Google Inc."
                            delay="0"
                        />
                        <Partnerlogo 
                            image="img/partners/2.png"
                            alt="Google Inc."
                            delay="0"
                        />
                        <Partnerlogo 
                            image="img/partners/3.png"
                            alt="Google Inc."
                            delay="0"
                        />
                        <Partnerlogo 
                            image="img/partners/4.png"
                            alt="Google Inc."
                            delay="0"
                        />
                        <Partnerlogo 
                            image="img/partners/2.png"
                            alt="Google Inc."
                            delay="0"
                        />
                    </OwlCarousel>

                </div>

            </div>
        </section>
    )
}
