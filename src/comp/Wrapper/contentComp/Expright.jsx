import React from 'react';
import Lines from './Lines';

export default function Expright(props) {
    return (
        <div className="section-sm" data-aos="fade-in">
            <div className="position-relative section-sm bg-gray">
                {/* <!-- Lines --> */}
                <Lines />
                <section className="row mx-0">
                    <div className="col-lg-4 order-2 pl-0 mb-4 mb-lg-0">
                        <div className="media align-items-center">
                            <img alt={props.title} className="mr-4" src={props.image} />
                            <div className="media-body">
                                <h5 className="my-0">{props.title},<br /> <span className="text-body font-weight-normal">{props.company}</span></h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 order-3 pl-0">
                        <p className="mb-0">{props.about}</p>
                    </div>
                    <div className="col-lg-4 order-1 order-lg-3 text-dark text-right mb-2 mb-lg-0 px-0">
                        {props.from}-{props.to}
                    </div>
                </section>
            </div>
        </div>
    )
}
