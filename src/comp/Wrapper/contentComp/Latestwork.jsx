import React from 'react';
import Latestworkshowcase from './Latestworkshowcase';
import OwlCarousel from 'react-owl-carousel';

export default function Latestwork() {

    return (
        <section id="works" className="section pb-0">
            <div className="container">
                <h2 className="my-0" data-aos="fade-right">Latest works</h2>
            </div>
            <section className="section-sm section-right pb-0" data-aos="blur">
                <OwlCarousel
                    className="works-carousel"
                    loop
                    margin={0}
                    nav
                    smartSpeed={600}
                    dots={false}
                    items={1}
                    autoWidth
                    navText={
                        ['<div class="arrow"><div class="arrow-top"></div><div class="arrow-bottom"></div></div>', '<div class="arrow"><div class="arrow-top"></div><div class="arrow-bottom"></div></div>']
                    }
                >
                    <Latestworkshowcase
                        link="https://destinatx.github.io/Project-1/"
                        image="img/portfolio/740x540-1.jpg"
                        title="FoodTruckATX"
                        category="Front-end App"
                    />
                    <Latestworkshowcase
                        link="#"
                        image="img/portfolio/740x540-2.jpg"
                        title="Project Two"
                        category="Front-end App"
                    />
                    <Latestworkshowcase
                        link="#"
                        image="img/portfolio/740x540-3.jpg"
                        title="Project Three"
                        category="Full-stack"
                    />
                    <Latestworkshowcase
                        link="#"
                        image="img/portfolio/740x540-3.jpg"
                        title="Project Four"
                        category="Project Development"
                    />
                </OwlCarousel>
            </section>
        </section>
    )
}
