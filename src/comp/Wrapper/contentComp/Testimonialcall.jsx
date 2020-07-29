import React from 'react'

export default function Testimonialcall(props) {
    return (
        <div>
            <div className="row align-items-center mx-0">
                <div className="col-lg-6 col-xl-auto px-0 mr-xl-4" data-aos="blur">
                    <img alt={props.person} className="w-100" src={props.image} />
                </div>
                <div className="col-lg-6 col-xl-5 offset-xl-1 px-0 pl-lg-30px pl-xl-0 mt-5 mt-lg-0">
                    <div className="quote mb-5"><img alt="" src="img/quote.png" /></div>
                    <p className="mb-0">{props.testimonial}</p>
                    <h5 className="mt-4 mb-0">{props.person}<br /> <span className="text-body font-weight-normal">{props.company}</span></h5>
                </div>
            </div>
        </div>
    )
}
