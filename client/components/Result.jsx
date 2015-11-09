Result = React.createClass({
	propTypes: {
    // This component gets the task to display through a React prop.
    // We can use propTypes to indicate it is required
    result: React.PropTypes.object.isRequired
  },

  render() {
  	const rowClassName = this.props.result.responseCode==200 ? "success" : "danger";
    return (
    	<tr className={rowClassName}>
            <td>{this.props.result.service}</td>
            <td>{this.props.result.path}</td>
            <td>{this.props.result.createdAt.toString()}</td>
            <td>{this.props.result.responseCode}</td>
        </tr>
    );
  }
})