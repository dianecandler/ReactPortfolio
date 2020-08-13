import React from 'react';
import $ from 'jquery';

function removetoggler () {
	$('body').toggleClass('menu-is-open');
}

export default function Navbarmobile () {
	return (
		<nav className='navbar navbar-mobile d-lg-none'>
			<ion-icon className='close' name='close-outline' onClick={removetoggler} />

			<ul className='navbar-nav navbar-nav-mobile'>
				<li>
					<a className='nav-link' href='#home' onClick={removetoggler} >
						Home
					</a>
				</li>
				<li>
					<a className='nav-link' href='#about' onClick={removetoggler}>
						About
					</a>
				</li>
				<li>
					<a className='nav-link' href='#specialization' onClick={removetoggler}>
						Specialization
					</a>
				</li>
				<li>
					<a className='nav-link' href='#works' onClick={removetoggler}>
						Projects
					</a>
				</li>
				<li>
					<a className='nav-link' href='#experience' onClick={removetoggler}>
						Experience
					</a>
				</li>
				<li>
					<a className='nav-link' href='#testimonial' onClick={removetoggler}>
						Testimonials
					</a>
				</li>
				<li>
					<a className='nav-link' href='#skills' onClick={removetoggler}>
						Accomplishments
					</a>
				</li>
				<li>
					<a className='nav-link' href='#contact' onClick={removetoggler}>
						Contact
					</a>
				</li>
			</ul>
			<div className='navbar-mobile-footer'>
				<p>© 2020 Diane Candler. All Rights Reserved.</p>
			</div>
		</nav>
	);
}
