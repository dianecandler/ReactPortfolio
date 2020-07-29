import React from 'react';

export default function Aboutexperience(props) {
    return (
        <li  data-aos="fade-up" data-aos-delay={props.delay}>
            <a href={props.link} className="text-body" /* target="_blank" */>
                <span className="media">
                    <span className="pr-4 text-secondary">{props.number}</span>
                    <span className="media-body">{props.subject}</span>
                </span>
            </a>
        </li>
    )
}
