import React from 'react'

export default function Partnerlogo(props) {
    return (
        <div className="col-sm-auto my-4 my-lg-0" data-aos="fade-up"  data-aos-delay={props.delay}>
            <img alt={props.alt} src={props.image} />
        </div>
    )
}
