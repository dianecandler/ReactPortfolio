import React from 'react'
import Newsleft from './Newsleft';
import Newsright from './Newsright';

export default function News() {
    return (
        <section id="news" className="section pb-0">
            <div className="container">
                <div className="row mx-0">
                    <div className="col-lg-4 px-0" data-aos="fade-right">
                        <h2 className="my-0">Journal</h2>
                    </div>
                </div>
                <section className="section-sm pb-0">
                    <Newsleft 
                        link="#"
                        linktitle="Top 20 Illustrations Winners: Academy"
                        sublink="#"
                        subtitle="Illustration"
                        date="August 30, 2020"
                        about="We have experience in implementing projects for many large domestic and foreign corporations, enterprises in many elds such as nance, banking, F&B, education."
                        readmorelink="#"
                        image="img/news/370x434-1.jpg"
                    />
                    <Newsright 
                        link="#"
                        linktitle="Mapp MTL"
                        sublink="#"
                        subtitle="Branding"
                        date="July 30, 2020"
                        about="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
                        readmorelink="#"
                        image="img/news/370x434-2.jpg"
                    />
                </section>
            </div>
        </section>
    )
}
