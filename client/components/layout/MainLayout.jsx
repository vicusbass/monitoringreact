MainLayout = React.createClass({
	render(){
		return (
			<div>
				{this.props.nav}
			<div className="wrapper">
				{this.props.content}
			<div className="push"></div>
			</div>	
				{this.props.footer}
			</div>
			)
	}
})