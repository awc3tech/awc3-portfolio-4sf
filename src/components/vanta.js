import React from 'react'
import TOPOLOGY from '../utils/vantasrc/vanta.topology'

class VantaBG extends React.Component  {
	constructor() {
		super()
		this.vantaFlow = React.createRef();	
	}


render() {
	
	return (<div ref={this.vantaFlow}></div>)
}

 componentDidMount() {
    const vantaFlow = this.vantaFlow.current;
    window.VANTA.TOPOLOGY({
      el: vantaFlow
    })
  }
}

export default VantaBG