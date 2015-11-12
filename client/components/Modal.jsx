//A bootstrap modal component displayed when clicking a Status Code, contains a formatted json or a string

Modal = React.createClass({
    beautifyContent: function(){
        return this.props.contentType == "json" ? JSON.stringify(this.props.content, null, 2) : this.props.content;
    },
    render(){
        return (
            <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header my-modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span
                                aria-hidden="true">&times;</span></button>
                            <h4 className="modal-title" id="myModalLabel">Payload</h4>
                        </div>
                        <div className="modal-body">
                            <pre>{this.beautifyContent()}</pre>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});