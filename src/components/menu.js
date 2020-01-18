import React from 'react'
import { Link } from "gatsby"
import '../styles/menu.css'
import { FaHeart } from 'react-icons/fa'
import AniLink from "gatsby-plugin-transition-link/AniLink"

class Menu extends React.Component {
	render() {
		return(

<nav role="navigation">
  <div id="menuToggle">

    <input type="checkbox" />

    <div>
    	<span></span>
    	<span></span>
    	<span></span>
    </div>

    <ul id="menu">
    
    <AniLink fade duration={.7} direction="right" to="/">Home</AniLink>
    <AniLink fade duration={.7} direction="right" to="/projects">Projects</AniLink>
    <AniLink fade duration={.7} direction="right" to="/about">About</AniLink>
		<div className="menu-footer">Designed and Developed with <FaHeart /> by Alfred Cheadle III - 2020</div>
    </ul>
  </div>

  
</nav>


		)
	}
}

export default Menu