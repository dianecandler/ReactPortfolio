import React from 'react'

export default function Newsright(props) {
    return (
        <div className="row mx-0 align-items-center mb-5 mb-lg-0" data-aos="fade-up">
            <div className="col-md-6 col-lg-4 mt-5 mt-md-0 order-2 order-md-1 pl-0 pr-md-30px">
                <h4 className="my-0 mb-2"><a href={props.link}>{props.linktitle}</a></h4>
                <p><a href={props.sublink} className="text-dark font-weight-bold">{props.subtitle}</a> / {props.date}</p>
            </div>
            <div className="col-md-6 offset-md-6 offset-lg-0 col-lg-4 order-3 order-lg-2  pl-0 pr-md-30px">
                <div className="mt-4 mt-lg-0">
                    <p className="mb-0">{props.about}... <a href={props.readmorelink}>read more</a></p>
                </div>
            </div>
            <div className="hover col-md-6 col-lg-4 order-1 order-md-2 order-lg-3  px-0" data-aos="blur">
                <a href={props.link}><figure className="hover"><img alt={props.linktitle} className="w-100" src={props.image} /></figure></a>
            </div>
        </div>
    )
}
