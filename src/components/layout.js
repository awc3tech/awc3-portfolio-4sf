import React from "react"
import { helmet } from "react-helmet"

import * as THREE from 'three'
import WAVES from '../vantasrc/vanta.WAVES'



class Layout extends React.Component {

  componentDidMount() {
    this.vantaEffect = WAVES({
      el: "#vantaBG",
      THREE: THREE, // use a custom THREE when initializing
      color: 0x1d1d1d,
      shininess: 13.00,
      waveHeight: 40.00,
      waveSpeed: 0.55
    })
  }


  componentWillUnmount() {
    const effect = WAVES('#vantaBG');
    effect.destroy(); // e.g. call this in React's componentWillUnmount
  }


  render() {
    const { children } = this.props
    
    return (

      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`
        }}
      >
      <helmet>

        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />  

      </helmet>

        <main><div className="container"><div className="vignette"></div>{children}</div></main>
        <div id="vantaBG"></div>

      </div>
    )
  }
}

export default Layout
