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
					<Latestworkshowcase /* Bartlett Venue Website */
						link='https://bvenueapp.herokuapp.com/'
						image='img/portfolio/740x540-6.jpg'
						github='https://group-5-project-2.github.io/CodeCave/'
						title='Bartlett Venue'
						category='Full-Stack MERN App'
						descript='Venue business - book online'
					/>
					<Latestworkshowcase /* Foot Truck ATX */
						link='https://dc2projects.github.io/ATXFoodTruck/'
						image='img/portfolio/740x540-1.jpg'
						GitHub
						link='https://dc2projects.github.io/ATXFoodTruck/'
						title='Food Truck ATX'
						category='Front-end App'
					/>
					<Latestworkshowcase /* Google Books */
						link='https://dianecandler-googlebooks.herokuapp.com/'
						image='img/portfolio/740x540-7.jpg'
						github='https://dianecandler.github.io/googlebooks/'
						title='Google Books'
						category='Full-Stack MERN App'
					/>
					<Latestworkshowcase /* Employee Directory */
						link='https://hw19employee-directory.herokuapp.com/'
						github='https://dianecandler.github.io/hw19employee-directory'
						image='img/portfolio/740x540-9.jpg'
						title='Employee Directory'
						category='TDD - React - Json Data '
					/>
					<Latestworkshowcase /* Day Planner */
						link='https://dianecandler.github.io/DayPlanner/'
						image='img/portfolio/740x540-4.jpg'
						GitHub
						link='https://dianecandler.github.io/DayPlanner'
						title='Day Planner'
						category='Front-End App'
					/>
					<Latestworkshowcase /* Code Cave */
						link='https://codecave.herokuapp.com/'
						image='img/portfolio/740x540-5.jpg'
						GitHub='https://dianecandler.github.io'
						// GitHub link="https://group-5-project-2.github.io/CodeCave/"
						title='CodeCave'
						category='Full-Stack mySQL App'
					/>

					<Latestworkshowcase /* Note Taker */
						link='https://dianecandler-notetaker.herokuapp.com/'
						GitHub
						link='https://dianecandler.github.io/HW11noteTaker'
						image='img/portfolio/740x540-0.jpg'
						title='Note Taker'
						category='Express - Node.js'
					/>
					<Latestworkshowcase /* Workout Tracker */
						link='https://dianecandler.github.io/MongoWOtracker/.'
						// GitHub link="https://dianecandler.github.io/MongoWOtracker/."
						image='img/portfolio/740x540-8.jpg'
						title='Workout Tracker'
						category='Full-Stack MongoDB'
					/>
					<Latestworkshowcase /* Code Quiz */
						Coding
						Quiz
						link='https://dianecandler.github.io/codeQuiz/'
						github='https://github.com/dianecandler/codeQuiz'
						image='img/portfolio/740x540-3.jpg'
						title='Coding Quiz'
						category='Front-End App'
					/>
					<Latestworkshowcase /* Employee Tracker */
						link='https://pro.panopto.com/Panopto/Pages/Viewer.aspx?tid=024cd4d8-725f-4bed-b309-abfa0163074a'
						github='https://dianecandler.github.io/HW12employeeTracker'
						image='img/portfolio/employeeTracker.jpg'
						title='Employee Tracker'
						category='MySQL - Command Line Application'
					/>
				</OwlCarousel>
			</section>
		</section>
	);
}
