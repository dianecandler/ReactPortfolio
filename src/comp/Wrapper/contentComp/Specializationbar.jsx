import React from 'react';

export default function Specializationbar(props) {

    const length = props.length;

    const progress = {

        width : length+'%',
        ariaValuenow : length, 
        ariaValuemin : "0",
        ariaValuemax : length
    }

    return (
        <div className="col-md-12 col-lg-4 px-0 pr-lg-30px mb-5 mb-lg-0">
            <div className="d-flex justify-content-between">
                <h6 className="mt-0 d-flex">{props.type}</h6>
                <h6 className="mt-0 d-flex">{props.length}%</h6>
            </div>
            <div className="progress">
                <div className="progress-bar" role="progressbar" style={progress}>
                    <div className="progress-bar-line" data-aos-delay={props.delay} data-aos="width"></div>
                </div>
            </div>
        </div>
    )
}
