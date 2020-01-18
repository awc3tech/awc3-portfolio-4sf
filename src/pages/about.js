import React from 'react'
import Center from '../components/Center'
import Menu from '../components/menu'
import DownArrow from "../components/downarrow"

import { FaGlobeAmericas } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa'
import { FaEnvelope } from 'react-icons/fa'
import { FaEllipsisH } from 'react-icons/fa'

import { FaImage } from 'react-icons/fa'
import { FaLaptopCode } from 'react-icons/fa'
import { FaUsers } from 'react-icons/fa'

import Fade from 'react-reveal/Fade';

import awc3 from '../media/awc3.jpg'

class About extends React.Component {

	render() {return(

		<div>

		<Menu />

			<Center>

				<div className="tint-coverlay"></div>

				<div className="about">

					<div className="title">
						<h1>About</h1>
						<div className="col-md-8 intro-blurb"><p>A creative designer with a passion for learning and a love for the arts.</p></div>
					</div>

					<DownArrow />

					<div className="content">

						<div className="row">

						<Fade>

							<div className="col-md-3 col-sm-12">

								<img src={awc3} />

							</div>

							</Fade>

							<Fade>

							<div className="col-md-8 col-sm-12">

								<h2>Alfred Cheadle III</h2>

								<p className="about-tagline">Versatile Web Designer & Digital Content Specialist with exceptional skills in Front-end web development.</p>

								<div className="about-links">
								<p className="globe"><FaGlobeAmericas/> Falls Church, VA, USA</p>
								<p><a href="https://www.linkedin.com/in/alfred-cheadle/" target="_blank"><FaLinkedin/> alfred-cheadle</a></p>
								<p><a href="mailto:awc3tech@gmail.com"><FaEnvelope/> awc3tech@gmail.com</a></p>
								</div>
							</div>
							</Fade>
						</div>

						

						<Fade>

						<div className="row about-info">

							<div className="col-md-4 about-icons">

								<p><FaImage /></p>

								<p>Photoshop, InDesign</p>

								<p>Graphic Design</p>

								<p>Branding Management</p>

							</div>

							<div className="col-md-4 about-icons">

								<p><FaLaptopCode /></p>

								<p>HTML,CSS</p>

								<p>Javascript, React JS</p>

								<p>Drupal, Wordpress CMS</p>

							</div>

							<div className="col-md-4 about-icons">

								<p><FaUsers /></p>

								<p>UX Design</p>

								<p>UI Design</p>

								<p>Prototype testing</p>

							</div>

						</div>

						</Fade>

						<Fade>

						<div className="row">

							<div className="col-md-12 row about-me">

								<div className="col-md-6 col-sm-12">I was born in DC and raised in Baltimore County until I graduated High School. I then pursued my B.S. in <b>Digital Science</b> at Kent State University in northeastern Ohio. As a Digital Science major concentrated in Digital Systems Interactions, I learned about the core concepts of <b>UI</b> and <b>UX design</b>, gaining a keen interest in efficient usability through affordance. During my Senior year, I worked for Kent State University’s Residential Web Team as a <b>multimedia designer</b> amongst a group of awesome web/app developers. There, I learned a lot about <b>Web Design</b> and applying <b>User Centered Design</b> to <b>Front-End Web Development</b>.</div>

								<div className="col-md-6 col-sm-12">I am currently a <b>Senior Web Editor/Web Designer</b> for the George Washington University School of Public Health. I commonly work to bring my design-based web skill set into University, Department, and Research team websites. Outside of work, you can find me exploring arts around the city or deeply immersed into an FPS gaming session.</div>

							</div>

						</div>

						</Fade>

						<Fade>


						<div className="row">

							<div className="contact col-md-12 text-center">

								<p>Let's chat!</p>

								<h3><a href="mailto:awc3tech@gmail.com">awc3tech@gmail.com</a></h3>

							</div>

						</div>
						
						</Fade>

						

					</div>

				</div>

			</Center>

		</div>

		)}

}

export default About