import React from "react";
import Latestworkshowcase from "./Latestworkshowcase";
import OwlCarousel from "react-owl-carousel";

export default function Latestwork() {
	return (
		<section id='works' className='section pb-0'>
			<div className='container'>
				<h2 className='my-0' data-aos='fade-right'>
					Latest works
				</h2>
			</div>
			<section className='section-sm section-right pb-0' data-aos='blur'>
				<OwlCarousel
					className='works-carousel'
					loop
					margin={0}
					nav
					smartSpeed={600}
					dots={false}
					items={1}
					autoWidth
					navText={[
						'<div class="arrow"><div class="arrow-top"></div><div class="arrow-bottom"></div></div>',
						'<div class="arrow"><div class="arrow-top"></div><div class="arrow-bottom"></div></div>',
					]}
				>
					{/* images 740x540 */}
					<Latestworkshowcase
                        link='https://bvenueapp.herokuapp.com/'
                        image="img/portfolio/740x540-6.jpg"
                        // GitHub link="https://group-5-project-2.github.io/CodeCave/"
                        title="Bartlett Venue"
                        category="Full-Stack React App"
					/>
					<Latestworkshowcase
						link='https://dc2projects.github.io/ATXFoodTruck/'
						image='img/portfolio/740x540-1.jpg'
						// GitHub link="https://github.com/DestinATX/Project-1"
						title='Food Truck ATX'
						category='Front-end App'
					/>
					<Latestworkshowcase
						link='https://dianecandler-googlebooks.herokuapp.com/'
						image='img/portfolio/740x540-7.jpg'
						// GitHub link="https://dianecandler.github.io/googlebooks/"
						title='Google Books'
						category='Full-Stack MERN App'
					/>
					<Latestworkshowcase
						link='https://hw19employee-directory.herokuapp.com/'
						// GitHub link="https://github.com/dianecandler/hw19employee-directory"
						image='img/portfolio/740x540-9.jpg'
						title='Employee Directory'
						category='TDD - React - Json Data '
					/>
					<Latestworkshowcase
                        link="https://dianecandler.github.io/DayPlanner/"
                        image="img/portfolio/740x540-4.jpg"
                        // GitHub link="https://github.com/dianecandler/DayPlanner"
                        title="Day Planner"
                        category="Front-End App"
                    />
					<Latestworkshowcase
						link='https://codecave.herokuapp.com/'
						image='img/portfolio/740x540-5.jpg'
						// GitHub link="https://group-5-project-2.github.io/CodeCave/"
						title='CodeCave'
						category='Full-Stack App'
					/>
{/* !note taker needs to run on Heroku or deployed different on Git Hub */}
					{/* <Latestworkshowcase
						link='https://dianecandler.github.io/HW11noteTaker/'
						// GitHub link="https://github.com/dianecandler/HW11noteTaker"
						image='img/portfolio/740x540-0.jpg'
						title='Note Taker'
						category='Express - Node.js'
					/> */}
					<Latestworkshowcase
						link='https://dianecandler.github.io/MongoWOtracker/.'
						// GitHub link="https://dianecandler.github.io/MongoWOtracker/."
						image='img/portfolio/740x540-8.jpg'
						title='Workout Tracker'
						category='Full-Stack MongoDB'
					/>
					<Latestworkshowcase
						link='https://dianecandler.github.io/codeQuiz/'
						// GitHub link="https://github.com/dianecandler/codeQuiz"
						image='img/portfolio/740x540-3.jpg'
						title='Coding Quiz'
						category='JavaScript - JQuery '
					/>

				</OwlCarousel>
			</section>
		</section>
	);
}
