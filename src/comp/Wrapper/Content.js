import React from 'react';
import AOS from 'aos';
import Lines from './mainComp/Lines';
import About from './contentComp/About';
import Specialization from './contentComp/Specialization';
import Latestwork from './contentComp/Latestwork';
import Experience from './contentComp/Experience';
import Testimonials from './contentComp/Testimonials';
import Partners from './contentComp/Partners';
import News from './contentComp/News'; 
import Contact from './contentComp/Contact'; 

export default function Content() {

    AOS.init();

    return (
        <div className="content">

            {/* Lines */}
            <Lines />

            {/* About */}
            <About />

            {/* Specialization */}
            <Specialization />

            {/* Latest Works */}
            <Latestwork />

            {/* Experience */}
            <Experience />

            {/* Testimonials */}
            <Testimonials />

            {/* Partners */}
            <Partners />

            {/* News */}
            <News />

            {/* Contact */}
            <Contact />


        </div>
    )
}
