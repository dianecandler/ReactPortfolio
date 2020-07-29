import React from 'react';

export default function ExpLeft(props) {
    return (
        <div className="row mx-0" data-aos="fade-in">
            <div className="col-lg-4 px-0 text-dark text-right text-lg-left mb-2 mb-lg-0">{props.from}-{props.to}</div>
            <div className="col-lg-4 pl-0 mb-4 mb-lg-0">
                <div className="media align-items-center">
                    <img alt={props.title} className="mr-4" src={props.image} />
                    <div className="media-body">
                        <h5 className="my-0">{props.title},<br /> <span className="text-body font-weight-normal">{props.company}.</span></h5>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 px-0">
                <p className="mb-0">{props.about}</p>
            </div>
        </div>
    )
}
