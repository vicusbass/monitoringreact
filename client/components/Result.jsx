Result = React.createClass({
    propTypes: {
        // This component gets the task to display through a React prop.
        // We can use propTypes to indicate it is required
        result: React.PropTypes.object.isRequired
    },

    handleClick: function (event) {
        event.preventDefault();
        React.render(<Modal error={this.props.result.errorMessage}/>, document.getElementById("modalReact"));
    },

    render() {
        const rowClassName = this.props.result.responseCode == 200 ? "success" : "danger";
        const btnClassName = this.props.result.responseCode == 200 ? "btn btn-success btn-result" : "btn btn-danger btn-result";
        return (
            <tr className={rowClassName}>
                <td>{this.props.result.service}</td>
                <td>{this.props.result.path}</td>
                <td>{this.props.result.createdAt.toString()}</td>
                <td>
                    <button type="button" href="#" className={btnClassName} onClick={this.handleClick}
                            data-toggle="modal"
                            data-target="#myModal">{this.props.result.responseCode}
                    </button>
                </td>
            </tr>
        );
    }
})