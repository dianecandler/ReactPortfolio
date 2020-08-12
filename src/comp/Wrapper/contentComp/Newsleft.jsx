import React from 'react'

export default function Newsleft(props) {
    return (
        <div className="row mx-0 align-items-center mb-5 mb-lg-0" data-aos="fade-up">
            <div className="col-md-6 col-lg-4 px-0" data-aos="blur">
                <a href={props.link}><figure className="hover"><img alt={props.linktitle} className="w-100" src={props.image} /></figure></a>
            </div>
            <div className="col-md-6 col-lg-4 mt-5 mt-md-0 px-sm-0 pl-md-30px pr-lg-30px">
                <h4 className="my-0 mb-2"><a href={props.link}>{props.linktitle}</a></h4>
                <p><a href={props.sublink} className="text-dark font-weight-bold">{props.subtitle}</a></p>
                <p>{props.date}</p>                
            </div>
            <div className="col-md-6 col-lg-4 px-0 mt-4 mt-lg-0">
                <p className="mb-0">{props.about} <a href={props.readmorelink}></a></p>
            </div>
        </div>
    )
}
