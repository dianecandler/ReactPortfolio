import React from 'react';

export default function Latestworkshowcase(props) {

    return (

        <div>
            <a href={props.link} target="_blank">
                <figure className="hover">
                    <img alt={props.title} className="img-responsive" src={props.image} />
                    <figcaption>
                        <mark className="h3 my-0 text-white">{props.title}</mark><br />
                        <mark className="mt-2 category">{props.category}</mark>
                    </figcaption>
                </figure>
            </a>
        </div>

    )
}
