import React from "react"

import Landing from "../components/sections/landing"
import SEO from "../components/seo"

import '../styles/style.css'

class Index extends React.Component {

  componentDidMount() {
  window.scrollTo(0, 0);
}

  render() {

    return (

      <div className="landing center-container">

        <Landing />

        <SEO title="AWC3" />  

      </div>


    )




  }
}

export default Index

