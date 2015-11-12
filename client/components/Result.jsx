//TODO fix issue with the first click not working
//represents an entry in the table, basically the details of one API call response

Result = React.createClass({
    propTypes: {
        // This component gets the result entry to display through a React prop.
        result: React.PropTypes.object.isRequired
    },

    handleClick: function (event) {
        event.preventDefault();
        React.render(<Modal content={this.props.result.content} contentType={this.props.result.contentType}/>, document.getElementById("modalReact"));
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