import React from "react";
import OwlCarousel from "react-owl-carousel";
import Partnerlogo from "./Partnerlogo";

export default function Partners() {
	return (
		<section id='partners' className='section pb-0'>
			<div className='container'>
				<div className='row align-items-center text-center justify-content-between'>
					<OwlCarousel
						className='experience-carousel'
						loop={false}
						margin={30}
						nav={false}
						smartSpeed={1000}
						dots
						items={3}
					>
						<Partnerlogo
							image='img/partners/1.png'
							alt='City of Bartlett'
							delay='0'
						/>
						<Partnerlogo
							image='img/partners/2.png'
							alt='Texas Parks & Wildlife '
							delay='0'
						/>
						<Partnerlogo
							image='img/partners/3.png'
							alt='Brushy Creek MUD'
							delay='0'
						/>
						<Partnerlogo
							image='img/partners/4.png'
							alt='Collaborative Care'
							delay='0'
						/>
						<Partnerlogo
							image='img/partners/5.png'
							alt='Diocese of Austin'
							delay='0'
						/>
					</OwlCarousel>
				</div>
			</div>
		</section>
	);
}
