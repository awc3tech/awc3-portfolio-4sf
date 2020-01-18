import React from 'react'
import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"


const Landing = () => {
		return(

			<section className="center-container landing">
				<div>
					<h1>Alfred Cheadle III</h1>
					<h2>Front-End Web & Digital Product Designer</h2>
					<div className="link-strip">
					<AniLink className="highlight" fade duration={.6} direction="right" to="/projects">Projects</AniLink>
					<AniLink fade duration={.6} direction="right" to="/about">About</AniLink>
					</div>
				</div>
			</section>

			)
	}


export default Landing