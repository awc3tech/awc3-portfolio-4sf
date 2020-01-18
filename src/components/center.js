import React from 'react'

class Center extends React.Component {

	render() {
		const { children } = this.props
		return(
			<div className="row">
				<div class="col-md-1"></div>
				<div className="col-md-10 col-sm-12">
					{children}
				</div>
				<div class="col-md-1"></div>
				</div>
			)
	}
}

export default Center