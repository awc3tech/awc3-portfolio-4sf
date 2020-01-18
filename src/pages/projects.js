import React from 'react'
import Center from '../components/center'
import Card from 'react-bootstrap/Card'
import Menu from "../components/menu"
import TransitionLink from "gatsby-plugin-transition-link"
import DownArrow from "../components/downarrow"

import wave from '../media/wave.jpg'
import gwsph from '../media/gwsph.jpg'
import biostats from '../media/biostats.jpg'
import kenthousing from '../media/kenthousing.jpg'
import isee2020 from '../media/isee2020.jpg'
import jiwh from '../media/jiwh.jpg'
import kentauth from '../media/kentauth.jpg'
import diversity from '../media/diversity.jpg'
import healthyyou from '../media/healthyyou.jpg'
import design from '../media/design.jpg'
import rani from '../media/rani.jpg'


import Fade from 'react-reveal/Fade';

class Projects extends React.Component {

	render() {

    return(
				<div>

				<Menu />
				
				<Center>

					<div className="projects">
					<div className="tint-coverlay"></div>
						<div className="title">
							<h1>Projects</h1>
							<div className="intro-blurb col-md-8"><p>From graphic design to Web Development, I work to bring creative ideas to life.</p></div>
              <DownArrow />

						</div>

						<div className="row">

            {/* Project 1 - GWSPH */}          

						<div className="col-md-6 card-container">
						<Fade>
            <Card style={{}}>
  							<Card.Img variant="top" src={gwsph} />
  							<Card.Body>
    							<Card.Title>George Washington Univertsity School of Public Health</Card.Title>
    							<Card.Text>
                  <p className="project-role">
                    UX UI • HTML CSS JS • Drupal CMS
                  </p>
                  </Card.Text>
                  <Card.Text>
          							Maintained and updated the GWU main public health website. Worked to bring fresh designs to large scale digital infrastructure.
    							</Card.Text>
    							<a href="https://publichealth.gwu.edu/">Website</a>
  							</Card.Body>
						</Card>
            
            </Fade>
						</div>
            
            {/* Project 2 - Biostats */}

						<div className="col-md-6 card-container">
						<Fade>
            <Card style={{}}>
  							<Card.Img variant="top" src={biostats} />
  							<Card.Body>
    							<Card.Title>The GWU Biostatistics Center</Card.Title>
    							<Card.Text>
                  <p className="project-role">
                    UI • HTML CSS JS • Drupal CMS
                  </p>
                  </Card.Text>
                  <Card.Text>
      							Designed and developed the front-end of the GWU Biostatistics Center website. Strong web design tactics flow through Drupal CMS to create robust experiences.
    							</Card.Text>
    							<a href="https://biostatcenter.gwu.edu/">Website</a>
  							</Card.Body>
						</Card>
                        
            </Fade>
						</div>

          {/* Project 3 - Kent Housing */}


						<div className="col-md-6 card-container">
						<Fade>
            <Card style={{}}>
  							<Card.Img variant="top" src={kenthousing} />
  							<Card.Body>
    							<Card.Title>Kent State Univertsity Housing</Card.Title>
    							<Card.Text>
                  <p className="project-role">
                    UX
                  </p>
                  </Card.Text>
                  <Card.Text>
      							Assisted and advised on developing better User Experiences through streamlined Information Architecture.
    							</Card.Text>
    							<a href="https://www.kent.edu/housing">Website</a>
  							</Card.Body>
						</Card>
                        
            </Fade>
						</div>

            {/* Field 9 - Description */}

            <div className="col-md-6 card-container">
            <Fade>
            <div className="">
            <p>&nbsp;</p>
            <p className="text-center">I thrive in versatility, being able to make an impact at nearly any role within the front-end spectrum:</p>
            <h5>Design</h5>
            <p>My Digital Science background has helped to foster a keen eye in both graphic and user-centered design. I love working through UX testing, UI development in low/high fidelity mockups, graphic design via Photoshop or inDesign, and even branding/identity development.</p>
            <h5>Development</h5>
            <p>Though I started off as a designer, I'm never afraid to get my hands dirty when it comes to writing front-end code. I'm a big fan of developing highly responsive, user centered, accessible websites that look good and work well. I'm versed in CSS grid based frameworks like Bootstrap and Foundation. I'm also constantly building upon my working knowledge of vanilla Javascript, event handling libraries like jQuery, and component based development such as React JS.</p>
            
            </div>
            </Fade>
            </div>

          {/* Project 3 - ISEE */}


						<div className="col-md-6 card-container">
						<Fade>
            <Card style={{}}>
  							<Card.Img variant="top" src={isee2020} />
  							<Card.Body>
    							<Card.Title>ISEE 2020 Conference</Card.Title>
    							<Card.Text>
                  <p className="project-role">
                    Branding/Graphics • UX • HTML CSS JS • Drupal CMS
                  </p>
                  </Card.Text>
                  <Card.Text>
      							Designed branding, graphics, and developed the front-end of the ISEE 2020 website. Light hints of experimental design compliments conventional information flow.
    							</Card.Text>
    							<a href="https://isee2020dc.org/">Website</a>
  							</Card.Body>
						</Card>
                        
            </Fade>
						</div>

          {/* Project 4 - JIWH */}


						<div className="col-md-6 card-container">
						<Fade>
            <Card style={{}}>
  							<Card.Img variant="top" src={jiwh} />
  							<Card.Body>
    							<Card.Title>Jacobs Institute of Women's Health</Card.Title>
    							<Card.Text>
                  <p className="project-role">
                    UX UI • HTML CSS JS • Drupal CMS
                  </p>
                  </Card.Text>
                  <Card.Text>
      							Designed and developed the front-end of the JIWH website. Simplicity of design with efficient user access management and adminstration.
    							</Card.Text>
    							<a href="http://jiwh.sphprddrp1.es.gwu.edu/">Website</a>
  							</Card.Body>
						</Card>
                        
            </Fade>
						</div>

          {/* Project 5 - Kent Auth */}


						<div className="col-md-6 card-container">
						<Fade>
            <Card style={{}}>
  							<Card.Img variant="top" src={kentauth} />
  							<Card.Body>
    							<Card.Title>Kent Housing Portal</Card.Title>
    							<Card.Text>
                  <p className="project-role">
                    UX UI • HTML CSS JS • React JS
                  </p>
                  </Card.Text>
                  <Card.Text>
      							Designed and developed the login page for KSU's internal housing applications. Fully prototyped from start in Balsamiq then Photoshop to end in HTML, CSS, and React JS
    							</Card.Text>
    							<a href="https://solutions.kent.edu/resserv/Authorization">Website</a>
  							</Card.Body>
						</Card>
                        
            </Fade>
						</div>

          {/* Project 6 - Diversity */}


						<div className="col-md-6 card-container">
						<Fade>
            <Card style={{}}>
  							<Card.Img variant="top" src={diversity} />
  							<Card.Body>
    							<Card.Title>GWSPH Diverity and Inclusion</Card.Title>
    							<Card.Text>
                  <p className="project-role">
                    UX UI • HTML CSS JS
                  </p>
                  </Card.Text>
                  <Card.Text>
      							Designed and developed the GWSPH Diversity and Inclusion landing page. Sleek, modern, minimalist web design takes a foothold in the GWSPH website.
    							</Card.Text>
    							<a href="https://publichealth.gwu.edu/diversity-and-inclusion">Website</a>
  							</Card.Body>
						</Card>
                        
            </Fade>
						</div>

          {/* Project 7 - Healthy You */}

						<div className="col-md-6 card-container">
						<Fade>
            <Card style={{}}>
  							<Card.Img variant="top" src={healthyyou} />
  							<Card.Body>
    							<Card.Title>GWU Healthy You Podcast</Card.Title>
    							<Card.Text>
                  <p className="project-role">
                    UX UI • HTML CSS JS
                  </p>
                  </Card.Text>
                  <Card.Text>
      							Designed and developed the GWSPH Healthy You Podcast website. Modern design in a highly reusable template format.
    							</Card.Text>
    							<a href="https://publichealth.gwu.edu/healthy-you">Website</a>
  							</Card.Body>
						</Card>
                        
            </Fade>
						</div>

          {/* Project 8 - RANI */}

						<div className="col-md-6 card-container">
						<Fade>
            <Card style={{}}>
  							<Card.Img variant="top" src={rani} />
  							<Card.Body>
    							<Card.Title>RANI International Research</Card.Title>
    							<Card.Text>
                  <p className="project-role">
                    UI UX • HTML CSS JS • Drupal CMS
                  </p>
                  </Card.Text>
                  <Card.Text>
      							Developed the front-end of the RANI reesearch website. Simplicity in effective design and development.
    							</Card.Text>
    							<a href="https://rani.gwu.edu/">Website</a>
  							</Card.Body>
						</Card>
            </Fade>
						</div>

          

						</div>
					</div>
				</Center>
				</div>


		)}
}

export default Projects