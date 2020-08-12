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
                        // link="#"
                        linktitle="Design"
                        // sublink="#"
                        subtitle="Historic Restoration"
                        date="2006-Present"
                        about="Restore 100 year old homes like this one as well as historic commercial retail buildings. Renovate and remodel homes of all types and offices.this 1920 Dutch Colonial. This passion started shortly after graduating from college and continues today. Also enjoy retail display window decorating which is something I have been doing since high school."
                        // readmorelink="#"
                        image="img/news/370x434-BHouseSQUARE.jpg"
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
                </section>
            </div>
        </section>
    )
}
