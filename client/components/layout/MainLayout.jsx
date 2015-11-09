MainLayout = React.createClass({
	render(){
		return (
			<div>
				{this.props.nav}

				{this.props.content}

				{this.props.footer}
			</div>
			)
	}
})